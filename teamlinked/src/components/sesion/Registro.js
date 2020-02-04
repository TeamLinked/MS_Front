import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Alert} from 'reactstrap';

import '../../styles/Sesion.css';

//Components
import { CountryDropdown} from 'react-country-region-selector';

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
            fecha_nacimiento: '',
            //Alert
            alertVisible: false,
            
            redirect:false
            
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
        if(this.state.password === this.state.confirm_password){
            this.query();
        }else{
            this.setState({
                alertVisible: true
            });
        }
        event.preventDefault();
    }
    
    selectCountry (val) {
        this.setState({ nacionalidad: val });
    }
    
    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to='/sesion' />;
        }
    }
    
    query(){

        let query = `
            mutation{
              putUsuario( body: {
                nombre: "`+ this.state.nombre +`"
                apellido: "`+ this.state.apellido +`"
                email: "`+ this.state.email +`"
                password: "XXXXXXXX"
                identificacion: "1018456"
                nacionalidad: "` + this.state.nacionalidad + `"
                fecha_nac: "` + this.state.fecha_nacimiento +`"
                perf_personal: "`+ this.state.trabajo + `"
                perf_profesional: "`+this.state.lugar_trabajo+`"
              }){
                nombre
                apellido
                email
              }
            }
            `;
        let queryLDAP = `
            mutation{
                Register(body: {
                  cn: "`+ this.state.email +`" 
                  sn: "`+ this.state.apellido +`" 
                  givenName: "`+ this.state.nombre +`"
                  objectclass: "inetOrgPerson" 
                  userPassword: "`+ this.state.password +`"
                }) {
                  answer
                }
              }
                `;


        //https://cors-anywhere.herokuapp.com/
        const url = "http://34.94.208.170:3051/graphql";
 
        let opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
            body: JSON.stringify({ query })
        };
        
        
        fetch(url, opts)
            .then(res => res.json())
            .then(e => {
                query = queryLDAP;
                if(e.errors !== undefined){
                    this.setState({
                        alertVisible: true
                    });
                };
                let opts = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
                    body: JSON.stringify({ query })
                };

                fetch(url, opts)
                    .then(res => res.json())
                    .then(e => {
                        if(e.errors !== undefined){
                            this.setState({
                                alertVisible: true
                            });
                        }else{
                            this.setState({
                                redirect: true
                            })
                        }
                    })
                    .catch(e => {
                        console.log(e);
                        this.setState({
                            alertVisible: true
                        });
                    });
            }).then()
            .catch(e => {
                console.log(e);
                this.setState({
                    alertVisible: true
                });
            });
        
    }
    
    toggle(){
        this.setState({
            alertVisible: !this.state.alertVisible
        });
    }
    
    render(){
        return(
            
            <div>
            
                <div className = "Registro Registro-header mt-4">Regístrate </div>
                <Alert color="danger" isOpen={this.state.alertVisible} toggle={this.toggle.bind(this)}>Ha habido un problema ingresando los datos, porfavor intenta de nuevo</Alert>
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
                            <CountryDropdown className="form-control mr-sm-2" value={this.state.nacionalidad} onChange={(val) => this.selectCountry(val)} />
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
                            <input type="submit" value="Submit"/>
                        </div>
                        {this.renderRedirect()};
                    </div>
                </form>
            </div>
        );
    }
}

//Redux

const mapStateToProps = (state) => {
  
  return {loginAccountInfo: state.loginAccountInfo};
};


export default connect(mapStateToProps, null)(Registro);