import { model } from "../model"

export const client = model.Client.create(
	window.location.origin.includes("localhost") ? "http://localhost:8787" : window.location.origin,
	""
)
