import React from 'react'

export const PostForm = ({post, setPost, onSubmit}) => {
  return (
    <form className="row g-3" onSubmit={(e)=>onSubmit(e)}>
  <div className="col-auto">
    <input type="text" className="form-control"  placeholder="Nombre" value={post.name} onChange={(e)=>setPost({...post,name:e.target.value})}/>
  </div>
  <div className="col-auto">
    <input type="text" className="form-control"  placeholder="Descripcion" value={post.description} onChange={(e)=>setPost({...post,description:e.target.value})}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Crear</button>
  </div>
</form>
  )
}
