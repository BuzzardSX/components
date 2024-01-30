type DefinitionValue<R> = {
	recordIndex: keyof R
}

interface Table<R extends Record<string, string>> {
	definition: Record<string, DefinitionValue<R>>
	records: Array<R>
}

export default Table
