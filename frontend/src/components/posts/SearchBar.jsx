import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { filterPostAction, initPosts } from '../../reducers/postReducer';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const onFilter = (textToSearch)=>{
    setSearchText(textToSearch);
    dispatch(filterPostAction(textToSearch))
  }
  return (
    <div className="col-8 text-center">
      <div className="input-group mb-3 col-sm-6">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Filtro de nombre"
        aria-describedby="button-addon2"
        value={searchText}
        onChange={(e)=> onFilter(e.target.value)}/>
      <button className="btn btn-outline-secondary" disabled type="button" id="button-addon2">Buscar</button>
    </div>
    </div>
  )
}
