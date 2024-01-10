import { Context } from "./Context"
import { Environment } from "./Context/Environment"

import "./character"
import "./version"
import "./item"

export default {
	async fetch(request: Request, environment: Environment) {
		return Context.handle(request, environment)
	},
}
