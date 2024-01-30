interface Table<R> {
	definition: Record<string, { recordIndex: keyof R }>
	records: Array<R>
}

export default Table
