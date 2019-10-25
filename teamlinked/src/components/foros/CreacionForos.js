import React, { Component } from 'react'
import axios from 'axios';

import '../../styles/Foros.css';


class CreateForo extends Component {
  state = {
    titulo: '',
    contenido: '',
    categoria: '',
    imagen: null
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // };

  // handleImageChange = (e) => {
  //   this.setState({
  //     imagen: e.target.files[0]
  //   })
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   let form_data = new FormData();
  //   form_data.append('titulo', this.state.titulo);
  //   form_data.append('contenido', this.state.contenido);
  //   form_data.append('categoria', this.state.categoria);
  //   form_data.append('imagen', this.state.imagen);
  //   let url = 'http://35.198.21.214:3050/graphql';

  //   axios.post(url, form_data, {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(err => console.log(err))
  // };


  render() {
    return (
      <div className="container-fluid flex pt-3">
        <div className="container card pb-2" style={{width: '72rem'}}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input className="no-border form-control-lg mt-2" type="text" placeholder='Titulo' id='titulo' value={this.state.titulo} onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <textarea 
                className="form-control" 
                id='contenido'
                rows="10"
                value={this.state.contenido} onChange={this.handleChange} required>
              </textarea>
            </div>          
            <div className="form-group">
              <input className="no-border" type="text" placeholder='Categoria' id='categoria' value={this.state.categoria} onChange={this.handleChange} required/>
            </div>
            <p>
              <input 
                type="file"
                id="imagen"
                accept="image/png, image/jpeg" alt="" onChange={this.handleImageChange} required/>
            </p>
            <button type="submit" class="btn btn-outline-info">Publicar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateForo
