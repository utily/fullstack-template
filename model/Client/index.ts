import { gracely } from "gracely"
import { http } from "cloudly-http"
import { Version } from "./Version"

export class Client {
	readonly version: Version
	private constructor(private readonly client: http.Client) {
		this.version = new Version(this.client)
	}
	async characters() {
		return this.client.get("/api/character")
	}

	static create(server: string, key: string): Client {
		const client = new http.Client<gracely.Error>(server, key)
		client.authorization = { bearer: "a" }
		return new Client(client)
	}
}
