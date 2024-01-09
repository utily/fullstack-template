export interface Environment
	extends Record<string, undefined | string | KVNamespace | DurableObjectNamespace | Fetcher> {
	adminSecret?: string
	hashSecret?: string
	privateSecret?: string
	userNamespace?: DurableObjectNamespace
	ASSETS?: Fetcher
	ui?: string
}
