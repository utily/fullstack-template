import { Component, h, Host, State } from "@stencil/core"

@Component({
	tag: "template-version",
	styleUrl: "style.css",
	scoped: true,
})
export class ApiVersion {
	@State() version?: string

	async connectedCallback() {
		const url = new URL(window.location.origin)
		url.port = "8787"
		const response = await fetch(url + "api/version")
		const body = await response.json()
		this.version = body.version
	}
	render() {
		return <Host>{this.version ? `api version: ${this.version}` : "loading..."}</Host>
	}
}
