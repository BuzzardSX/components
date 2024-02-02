type DefinitionValue<R> = {
	recordIndex: keyof R
	title?: string
}

type Record = {
	[key: string]: string
}

type Definition<R> = {
	[key: string]: DefinitionValue<R>
}

interface Table<R extends Record> {
	definition: Definition<R>
	records: R[]
}

export type {
	Table,
	Record
}
