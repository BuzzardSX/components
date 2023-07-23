const List =
	({
		children: renderItem,
		items,
		fallback: Fallback,
		htmlTag: HtmlTag
	}) =>
		<HtmlTag>
			{items
				?
					items.map(
						(item) => renderItem(item)
					)
				: <Fallback />}
		</HtmlTag>

export default List
