declare global {
	type ToArray<T> = T extends unknown ? T[] : never
}
