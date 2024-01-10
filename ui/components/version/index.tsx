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
	@State() values: any[] = []

	async connectedCallback() {
		const response = await client.version.fetch()
		this.version = response.version
	}
	async componentWillLoad() {
		http.fetch({ url: "http://localhost:8787/api/character", header: { authorization: "a" } }).then(async r => {
			console.log("body: ", r.body)
		})
		// fetch(new Request("http://localhost:8787/api/character", { method: "GET", headers: { authorization: "a" } })).then(
		// 	async r => {
		// 		const reader = r.body?.getReader()
		// 		if (!reader)
		// 			console.log("problem!!")
		// 		else {
		// 			let read: ReadableStreamReadResult<Uint8Array>
		// 			while (!(read = await reader.read()).done) {
		// 				console.log("read: ", read.value)
		// 				this.values = this.values.concat(read.value)
		// 			}
		// 		}
		// 	}
		// )
	}
	render() {
		return (
			<Host>
				<div>
					{this.version ? `api version: ${this.version}` : "loading..."}
					{this.values.toString()}
				</div>
			</Host>
		)
	}
}
