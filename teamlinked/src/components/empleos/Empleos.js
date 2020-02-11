import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import EmpleoDetallado from './EmpleoDetallado';

class Empleos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
      empleosPorCategoria: []
    }
  }

  

  pedirEmpleosPorCategoria(){
    const url = "http://34.94.208.170:3051/graphql";
    const query = `
      query{
        getEmpleosByCategoria(nombre_categoria:"`+ this.props.categoria + `"){
          id
          titulo
          descripcion
          fechaPublicacion
          fechaVencimiento
          id_ofertante
          categoria
        }
      }
    `;
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ query })
    };

    fetch(url, opts)
      .then(res => res.json())
      .then(e => {
        //console.log('RTA',e.data);
        this.setState({ empleosPorCategoria: e.data.getEmpleosByCategoria })
        //console.log('RTA2',this.state.empleosPorCategoria);
        this.forceUpdate();
      })
      .catch(console.error);

  }

  componentDidMount(){
    this.pedirEmpleosPorCategoria();
  }


  render() {
    if (this.state.empleosPorCategoria.length !== 0){
    return (

      <div>
        <h3 style={{ "padding": "0 60px", "maxWidth": 1200, "margin": "15px auto" }}>{this.props.categoria.toUpperCase()}</h3>
        <div style={{ "padding": "0 60px", "maxWidth": 1200, "margin": "10px auto" }}>
          <ItemsCarousel
            infiniteLoop={false}
            gutter={12}
            activePosition={'center'}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={4}
            slidesToScroll={1}
            outsideChevron={true}
            showSlither={false}
            firstAndLastGutter={false}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={value => this.setState({ activeItemIndex: value })}
            
            rightChevron={<button>{'>'}</button>}
            leftChevron={<button>{'<'}</button>}
          >
            {Array.from(this.state.empleosPorCategoria).map((_, i) =>
              <div
                key={i}
              >
                
                 <EmpleoDetallado empleo={this.state.empleosPorCategoria[i]} />
              </div>
            )}
          </ItemsCarousel>
        </div>
      </div>
    );
  }
  return(
    <div></div>
  );
  }
}

export default Empleos;