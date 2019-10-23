import React, { Component } from 'react'

class CreateForo extends Component {
  state = {
    titulo: '',
    contenido: '',
    categoria: '',
    imagen:'',
  }

render() {
  const { titulo, contenido, categoria, imagen } = this.state
  return (
    <div className="container card mt-2" style={{width: '72rem'}}>
      <form>
        <div className="form-group mt-1">
          <label>Titulo</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Titulo de la publicacion"
            value={titulo}
            onChange={e => this.setState({ titulo: e.target.value })}/>
        </div>
        <div className="form-group">
          <label>Contenido</label>
          <textarea 
            className="form-control" 
            rows="10"
            value={contenido}
            onChange={e => this.setState({ contenido: e.target.value })}>
          </textarea>
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <select 
            className="form-control"  
            // value={categoria}
            // onChange={e => this.setState({ categoria: e.target.value })}
          >
            <option value={categoria} onChange={e => this.setState({ categoria: e.target.value } )}>Tecnologia</option>
            <option value={categoria}>Finanzas</option>
            <option value={categoria}>Leyes</option>
            <option value={categoria}>Viajes</option>
            <option value={categoria}>Ventas</option> 
          </select>
        </div>
        
      </form>
    </div>
    )
  }
}

export default CreateForo
