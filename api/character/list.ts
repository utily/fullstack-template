// import { gracely } from "gracely"
// import { http } from "cloudly-http"
// import { Context } from "../Context"
// import { router } from "../router"

// export async function list(request: http.Request, _: Context): Promise<http.Response.Like | any> {
// 	let result: ReadableStream<Uint8Array> | gracely.Error
// 	const authorization = request.header.authorization
// 	if (!authorization)
// 		result = gracely.client.unauthorized()
// 	else {
// 		result = getCharacters()
// 	}
// 	return { body: result, header: { contentType: "text/plain" } }
// }
// router.add("GET", "/api/character", list, http.Middleware.create("identity"))

// const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// function getCharacters(): ReadableStream<Uint8Array> {
// 	return new ReadableStream({
// 		async start(controller) {
// 			for (const character of characters) {
// 				console.log(character)
// 				controller.enqueue(character)
// 				await Context.sleep(1500)
// 			}
// 		},
// 	}).pipeThrough(new TextEncoderStream())
// }
