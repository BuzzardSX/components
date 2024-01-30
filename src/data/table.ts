interface Table<R> {
	definition: { recordIndex: keyof R }
	records: Array<R>
}

export type {
	Table
}
