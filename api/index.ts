import { router } from "router"
import { Context } from "./Context"

import "./version"
import "./item"

export default {
	async fetch(request: Request, environment: Environment) {
		return router.handle(request, new Context(environment))
	},
}
