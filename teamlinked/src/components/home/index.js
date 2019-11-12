import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Feed from "./Feed";
import PaginaPrincipal from './PaginaPrincipal';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            iamge : 'no info'
        }
    }

    // componentDidMount()  {
    //     axios.get(`http://34.94.59.230:3050/graphql`,
    //         { 
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         }}
    //     )    
    //       .then(res => {
    //         const foros = res.data;
    //         // console.log(res.data);
    //         this.setState({ foros });
    //     })
    // }

    render() {

        if (this.props.loginAccountInfo){
            return(
                <div>
                    {/* { this.state.foros.map(foro => <Foro key={foro.id} foro={foro} />)} */}
                    <Feed/>
                </div> 
            )
        }
        return (
            <div>
                <PaginaPrincipal/>
            </div>
        )
    }
}


// Para conectar react con redux
const mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo};
};
  
export default connect(mapStateToProps)(Home);
