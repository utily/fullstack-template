import { Component, h, Host, State } from "@stencil/core"
import { http } from "cloudly-http"
import { client } from "../../client"

@Component({
	tag: "template-version",
	styleUrl: "style.css",
	scoped: true,
})
export class ApiVersion {
	@State() version?: string
	b: http.Request

	async connectedCallback() {
		const response = await client.version.fetch()
		this.version = response.version
	}
	async componentWillLoad() {
		//const a = await client.characters()
		const a = await http.fetch({ url: "http://localhost:8787/api/character", header: { authorization: "a" } })
		http.Middleware
		// fetch(new Request("http://localhost:8787/api/character", { method: "GET", headers: { authorization: "a" } })).then(
		// 	r =>
		// 		r.body?.pipeThrough(
		// 			new TransformStream({
		// 				transform(chunk: any, _: TransformStreamDefaultController) {
		// 					console.log("chunk: ", chunk)
		// 				},
		// 			})
		// 		)
		// )
		console.log("a: ", await a.body)
	}
	render() {
		return <Host>{this.version ? `api version: ${this.version}` : "loading..."}</Host>
	}
}
