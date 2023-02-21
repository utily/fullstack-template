import { Component, h, Host, State } from "@stencil/core"
import * as model from "../../../model"
@Component({
	tag: "template-version",
	styleUrl: "style.css",
	scoped: true,
})
export class ApiVersion {
	@State() version?: string
	@State() error?: string

	async connectedCallback() {
		console.log(model.Item.is(123))
		try {
			const response = await window.fetch(`http://localhost:8787/api/version`)
			response.ok
				? (this.version = ((await response.json()) as { version: string }).version)
				: (this.error = `${response.status} ${response.statusText}`)
			console.log(this.version)
		} catch (error: any) {
			this.error = error.message ?? error
		}
	}
	render() {
		return <Host>{this.version ? `api version: ${this.version}` : this.error}</Host>
	}
}
