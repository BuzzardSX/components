import { useState } from 'react'

type Color = 'red' | 'blue'

const useColor = () => {
	const [color, setColor] = useState<Color>('red')

	const toggle = () => setColor(color == 'red' ? 'blue' : 'red')

	return {
		color,
		toggle
	}
}

const Page = () => {
	const { color, toggle } = useColor()

	return (
		<div>
			<button onClick={toggle}>Change color</button>
			<div style={{ backgroundColor: color, 'height': '400px', 'width': '400px' }}></div>
		</div>
	)
}

export default Page
