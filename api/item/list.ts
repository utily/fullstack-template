// import { gracely } from "gracely"
// import { http } from "cloudly-http"
// import { model } from "../../model"
// import { Context } from "../Context"
// import { router } from "../router"

// export async function list(request: http.Request, _: Context): Promise<http.Response.Like | any> {
// 	let result: ReadableStream<Uint8Array> | gracely.Error
// 	const authorization = request.header.authorization
// 	if (!authorization)
// 		result = gracely.client.unauthorized()
// 	else
// 		result = getItems()
// 	return { body: result, header: { contentType: "application/json" } }
// }
// router.add("GET", "/api/item", list, http.Middleware.create("identity"))

// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// function getItems(): ReadableStream<Uint8Array> {
// 	const stream = new ReadableStream<model.Item>({
// 		async start(controller) {
// 			for (const item of items.map((id, number) => ({ id, number }))) {
// 				controller.enqueue(item)
// 				await Context.sleep(1500)
// 			}
// 		},
// 	})
// 	return stream.pipeThrough(
// 		new TransformStream<model.Item, Uint8Array>({
// 			transform(chunk, controller) {
// 				const encoder = new TextEncoder()
// 				controller.enqueue(encoder.encode(JSON.stringify(chunk)))
// 			},
// 		})
// 	)
// }
