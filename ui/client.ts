import { model } from "../model"

const url = new URL(window.location.origin)
if (url.port)
	url.port = "8787"
export const client = model.Client.create(url.origin, "")
