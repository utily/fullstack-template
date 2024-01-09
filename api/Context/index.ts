import { gracely } from "gracely"
import { http } from "cloudly-http"
import { router } from "../router"
import { Environment } from "./Environment"

export class Context {
	constructor(public readonly environment: Environment, private readonly request: http.Request) {}
	async authenticate(request: http.Request): Promise<"admin" | undefined> {
		return this.environment.adminSecret && request.header.authorization == `Basic ${this.environment.adminSecret}`
			? "admin"
			: undefined
	}

	static async handle(request: Request, environment: Environment): Promise<Response> {
		let result: Response
		const context = new Context(environment, await http.Request.from(request))
		if (context.request.url.pathname.startsWith("/api"))
			result = await router.handle(request, context)
		else if (environment.ASSETS)
			result = await environment.ASSETS.fetch(request)
		else if (environment.ui) {
			context.request.url.host = environment.ui
			result = await http.Response.to(await http.fetch(context.request))
		} else
			result = await http.Response.to(
				http.Response.create(
					gracely.server.misconfigured("ASSETS | ui", "Deploy properly with pages or supply ui url.")
				)
			)
		return result
	}
}
export namespace Context {
	export async function sleep(duration?: number): Promise<void> {
		await new Promise(resolve => setTimeout(resolve, duration ?? 1000))
	}
}
