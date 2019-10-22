import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
//import { withRouter } from 'react-router'

class BarraNavegacion extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg" style={{background:'#037ad1'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end">
                <a className="navbar-brand text-white mr-auto" href="./">TeamLinked</a>
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link text-white mt-1" href="./">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white mt-1" href="">Mi Red</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white mt-1" href="/create">Foros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white mt-1" href="#">Empleos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white mt-1" href="#">Usuario</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        )
    }
}

//export default withRouter(Header)
export default BarraNavegacion