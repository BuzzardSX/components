type DefinitionValue<R> = {
	recordIndex: keyof R
	title?: string
}

type Definition<R> = {
	[key: string]: DefinitionValue<R>
}

type Record = {
	[key: string]: string
}

interface Table<R extends Record> {
	definition: Definition<R>
	records: R[]
}

export type { Table, Record }
