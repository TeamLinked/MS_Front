// Dependencias
import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';

// Estilos
import '../../styles/Sesion.css';


class ISesion extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    checkMail(){
        var i = 0;
        while (i < this.data.length) {
            if(this.data[i].email === this.state.email){
                if(this.data[i].password === this.state.password){
                    return i;
                }else{
                    return -1;
                }
            }
            i++; 
        }
        return -1;
    }
  
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    
    handleSubmit(event) {
        console.log(JSON.stringify(this.state));
        console.log(this.data);
        console.log(this.checkMail());
        event.preventDefault();
    }
    
    
    componentDidMount(){
        const query = `
            query{
              getUsuarios{
                id
                email
                password
              }
            }
        `;
        const url = "https://cors-anywhere.herokuapp.com/http://35.198.21.214:3050/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
            body: JSON.stringify({ query })
        };
        fetch(url, opts)
            .catch(console.error);
    }
    
    render(){
        return(
            <div>
                <div className = "Registro Registro-header mt-4">Iniciar Sesión </div>
                <form onSubmit={this.handleSubmit}>
                    <div className = "row align-items-center mt-4">
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
                            <input className="form-control mr-sm-2" type="password" name = "password" placeholder="Search" onChange={this.handleChange}/>
                        </div>
                        <div className = "col-3"></div>
                    </div>
                    <div className = "row align-items-center mt-4">
                        <div className = "col-5"></div>
                        <div className = "col-2">
                            <input type="submit" value="Submit" />
                            <LinkContainer to="/registro">
                                <button type="button">Registrarse</button>
                            </LinkContainer>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ISesion;