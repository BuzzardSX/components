type DefinitionValue<R> = {
	recordIndex: keyof R
}

interface Table<R> {
	definition: Record<string, DefinitionValue<R>>
	records: Array<R>
}

export default Table
