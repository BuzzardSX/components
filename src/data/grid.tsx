interface Props<R> {
	definition?: { recordIndex: keyof R }
	records: Array<R>
}

function Component<R>(props: Props<R>) {
}

export default Component
