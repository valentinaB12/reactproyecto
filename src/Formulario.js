import { Component } from "react";
import './css/formulario.css'




class Formulario extends Component {

  render() {
    return (
      <>
        
        <nav>
          <ul class="menu">
            <li><a href="/"><h3 style={{fontFamily:'fantasy', color:'black'}}>Inicio</h3></a></li>
            <li><a href="/Personajes"><h3 style={{fontFamily:'fantasy', color:'black'}}>Contenido</h3></a></li>
            <li><a href="/Formulario"><h3 style={{fontFamily:'fantasy', color:'black'}}>Contacto</h3></a></li>
          </ul>
        </nav>

        <div className="formulario">
          <div class="login-page">
            <div class="form">
              <form class="register-form">
                <input type="text" placeholder="nombre" />
                <input type="gmail" placeholder="correo" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
              </form>

              <form class="login-form">
                <h2 style={{fontFamily:'fantasy', color:'black'}}>formulario</h2>
                <input type="text" placeholder="primer nombre" />
                <input type="text" placeholder="segundo name " />
                <input type="Gmail" placeholder="Email " />
                <button>Contactar</button>
                <p class="message"> Leer terminos y condiciones  <a href="#">Leer</a></p>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }

}
export default Formulario;