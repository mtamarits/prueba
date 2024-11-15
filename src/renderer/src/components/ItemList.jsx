import Item from './ItemRow'

export default function ItemList({
  itemList,
  filters,
  deleteCallback,
  editCallback,
  checkCallback
}) {
  return (
    <div id="app-list" className="container">
      <ul className="list-group">
        {itemList.map((item) => (
          <Item
            item={item}
            key={item.id}
            filter={filters.name}
            deleteCallback={deleteCallback}
            editCallback={editCallback}
            checkCallback={checkCallback}
          />
        ))}
      </ul>
    </div>
  )
}
