declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CEL1?: string;
			CEL2?: string;
			ZAPI_INSTANCE?: string;
			ZAPI_TOKEN?: string;
		}
	}
}

export {};
