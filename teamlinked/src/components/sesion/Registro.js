import React, { Component } from 'react';

import '../../styles/Sesion.css';

class Registro extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            confirm_password: '',
            nacionalidad: '',
            trabajo: '',
            lugar_trabajo: '',
            fecha_nacimiento: ''
            
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    
    handleSubmit(event) {
        console.log(JSON.stringify(this.state));
        console.log(`
            mutation{
              putUsuario( body: {
                nombre: `+ this.state.nombre +`
                apellido: `+ this.state.apellido +`
                email: `+ this.state.email +`
                password: `+ this.state.password +`
                identificacion: 
                nacionalidad: ` + this.state.nacionalidad + `
                fecha_nac: ` + this.state.fecha_nacimiento +`
                perf_personal: `+ this.state.trabajo + `
                perf_profesional: `+this.state.lugar_trabajo+`
              }){
                nombre
                apellido
                email
              }
            }`
        );
        this.query();
        event.preventDefault();
    }
    
    query(){
        const query = `
            mutation{
              putUsuario( body: {
                nombre: `+ this.state.nombre +`
                apellido: `+ this.state.apellido +`
                email: `+ this.state.email +`
                password: `+ this.state.password +`
                identificacion: 
                nacionalidad: ` + this.state.nacionalidad + `
                fecha_nac: ` + this.state.fecha_nacimiento +`
                perf_personal: `+ this.state.trabajo + `
                perf_profesional: `+this.state.lugar_trabajo+`
              }){
                nombre
                apellido
                email
              }
            }`;
        const url = "https://cors-anywhere.herokuapp.com/http://35.198.21.214:3050/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
            body: JSON.stringify({ query })
        };
        fetch(url, opts)
            .then(res => res.json())
            .then(e => this.data = e.data.putUsuario)
            .catch(console.error);
    }
    
    render(){
        return(
            <div>
                <div className = "Registro Registro-header mt-4">Regístrate </div>
                <form onSubmit={this.handleSubmit}>
                    <div className = "row align-items-center mt-4">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Nombre</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" name = "nombre" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3 Registro-text ">
                            <div className = "Registro-text">Apellido</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" name = "apellido" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">E-mail</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" name = "email" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Contraseña</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="password" placeholder="Search" name = "password" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Confirmar contraseña</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="password" placeholder="Search" name = "confirm_password" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Nacionalidad</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" name = "nacionalidad" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Trabajo que ejerce</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" name = "trabajo" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Lugar de trabajo</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" name = "lugar_trabajo" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center">
                        <div className = "col-3"></div>
                        <div className = "col-3">
                            <div className = "Registro-text">Fecha de nacimiento</div>
                        </div>
                        <div className = "col-3">
                            <input className="form-control mr-sm-2" type="date" placeholder="Search" name = "fecha_nacimiento" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center mt-4">
                        <div className = "col-5"></div>
                        <div className = "col-2">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registro;