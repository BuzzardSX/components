type Definition<R> = {
	recordIndex: keyof R
}

interface Table<R> {
	definition: Definition<R>
	records: Array<R>
}

export default Table
