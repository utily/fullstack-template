import { Router } from "cloudly-router"
import type { Context } from "./Context"

export const router = new Router<Context>({ catch: true })
