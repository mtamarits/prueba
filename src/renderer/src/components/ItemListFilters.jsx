export default function ItemListFilters({ filterCallback }) {
  function handleFilters() {
    const name = document.getElementById('filter-name').value
    const checked = document.getElementById('filter-hide-completed').checked
    filterCallback(name, checked)
  }

  function handleClearFilters() {
    document.getElementById('filter-name').value = ''
    document.getElementById('filter-hide-completed').checked = false
    handleFilters()
  }

  return (
    <div
      id="app-filters"
      className="container px-3 d-flex flex-row gap-3 align-items-center justify-content-end"
    >
      <span className="text-primary">
        <i className="bi bi-funnel-fill"></i>
      </span>
      <div className="filter-completed border rounded p-1">
        <input
          type="checkbox"
          className="form-check-input"
          name="checked"
          id="filter-hide-completed"
          onChange={handleFilters}
        />
        <label htmlFor="filter-hide-completed" className="form-check-label">
          <i className="icon-visible bi-eye-fill"></i>
          <i className="icon-hidden bi-eye-slash"></i>
          <i className="bi bi-check"></i>
        </label>
      </div>
      <div className="filter-search input-group input-group-sm">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          id="filter-name"
          name="name"
          type="text"
          className="form-control"
          placeholder="buscar..."
          onChange={handleFilters}
        />
      </div>
      <button
        id="filter-clear"
        title="Limpiar filtros"
        className="btn btn-sm btn-outline-secondary"
        onClick={handleClearFilters}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </div>
  )
}
