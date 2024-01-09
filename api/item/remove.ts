import { gracely } from "gracely"
import { http } from "cloudly-http"
import { model } from "../../model"
import { Context } from "../Context"
import { router } from "../router"

export async function remove(request: http.Request, _: Context): Promise<http.Response.Like | any> {
	let result: model.Item | gracely.Error
	const id = request.parameter.id
	if (!request.header.authorization)
		result = gracely.client.unauthorized()
	else if (!id || id.length != 1 || id < "a" || id > "f")
		result = gracely.client.invalidPathArgument("item/:id", "id", "string", "A valid identifier is required.")
	else
		result = { id, number: id.charCodeAt(0) - "a".charCodeAt(65) }
	return result
}
router.add("DELETE", "/api/item/:id", remove)
