declare global {
	type ToArray<T> = T extends any ? T[] : never
}
