import React, { Component } from 'react';

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" className="guitarras contenedor"> 
      <h2>Nuestra guitarras</h2>
      {
        this.props.guitarras.map((guitarra, index) => {
          return (
            <article className="guitarra" key={index}> 
            <img className="guitarra-image" src={guitarra.imagen}  alt={guitarra.alt} width="350"/>
            <div className="contenedor-guitarra-a">
              <h3 className="guitarra-name">{guitarra.name}</h3>
              <ol>
                
                  {guitarra.features.map((feature , index ) => {
                    return (
                      <li key={index}>{feature}</li>
                    )
                  })}
              </ol>
            </div>
          </article>
          )
        })
      }
    </section>
    )
  }
}
export default Guitarras;