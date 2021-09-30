import { Component } from "react";


class Footer extends Component {
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
                <footer style={{background: "wheat",}} >
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <h1 style={{fontFamily:'fantasy', color:'black'}}> Footer</h1>
                            <h1 style={{fontFamily:'fantasy', color:'black'}}> Valentina Bernal</h1>
                            <a href="https://www.facebook.com/profile.php?id=100008279027454">Facebook<i class="fab fa-facebook"></i> </a><br></br>
                           
                            
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <cite title="Source Title">Adsi:2184573</cite>
                        </figcaption>
                    </figure>
                </footer>
            </>
        )
    }

}
export default Footer;