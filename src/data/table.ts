type DefinitionValue<R> = {
	recordIndex: keyof R
	title?: string
}

type Definition<R> = {
	[key: string]: DefinitionValue<R>
}

export type Record = {
	[key: string]: string
}

export interface Table<R extends Record> {
	definition: Definition<R>
	records: R[]
}
