import type Table from './table'

interface Props<R> extends Table<R> {}

function Component<R>(props: Props<R>) {
	return (
		<table>
			<thead>
			</thead>
			<tbody>
			</tbody>
		</table>
	)
}

export default Component
