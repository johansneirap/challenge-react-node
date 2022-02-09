import React from 'react'

export const SearchBar = () => {
  return (
    <div className="col-8 text-center">
      <div className="input-group mb-3 col-sm-6">
      <input type="text" className="form-control" placeholder="Filtro de nombre" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
    </div>
    </div>
  )
}
