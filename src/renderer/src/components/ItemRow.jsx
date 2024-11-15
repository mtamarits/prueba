import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'

// función para resaltar el texto que coincide con el filtro
function formatFilteredName(name, filter) {
  if (!filter) {
    return name
  }
  // se utiliza html-react-parser para convertir el string en un elemento React
  return parse(name.replace(new RegExp(`(${filter})`, 'gi'), '<em>$1</em>'))
}

export default function ItemRow({ item, filter, deleteCallback, checkCallback }) {
  const navigate = useNavigate()

  function handleChecked(event, item) {
    const updatedItem = { ...item }
    updatedItem.checked = !item.checked
    event.target.checked = updatedItem.checked
    checkCallback(item)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
      {/* checkbox */}
      <input
        id={`item-status-${item.id}`}
        type="checkbox"
        name="completed"
        className="form-check-input"
        defaultChecked={item.checked}
        onClick={() => handleChecked(event, item)}
      />
      {/* nombre */}
      <label htmlFor={`item-status-${item.id}`}>{formatFilteredName(item.name, filter)}</label>
      {/* cantidad */}
      <em className="small border rounded px-1">x{item.quantity}</em>
      {/* espaciador */}
      <div className="flex-grow-1"></div>
      {/* botón editar */}
      <button
        className="btn btn-link edit py-1 px-2"
        title="editar"
        // onClick={() => editCallback(item)}
        onClick={() => navigate(`./${item.id}`)}
      >
        <i className="bi bi-pencil"></i>
      </button>
      {/* botón eliminar */}
      <button
        className="btn btn-link delete py-1 px-2"
        title="eliminar"
        onClick={() => deleteCallback(item)}
      >
        <i className="bi bi-x-circle"></i>
      </button>
    </li>
  )
}
