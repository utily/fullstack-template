import { gracely } from "gracely"
import { http } from "cloudly-http"
import { Version } from "./Version"

export class Client {
	readonly version: Version
	private constructor(private readonly client: http.Client) {
		this.version = new Version(this.client)
	}

	static create(server: string, key: string): Client {
		return new Client(new http.Client<gracely.Error>(server, key))
	}
}
