const Map =
	({
		children: renderItem,
		items,
		fallback: Fallback
	}) =>
		<tr>
			{items
				?
					items.map(
						(item) => renderItem(item)
					)
				: <Fallback />}
		</tr>

export default Map
