import React from "react";

<h1>Lista de Peliculas de Terror</h1>
const Listarpersonajes = ({name, tipo,describe,img}) => (
    
    
    <>
    
    <center>

    
    <h2 style={{fontFamily:'fantasy', color:'black'}}>Personajes de peliculas de Terror </h2>
    <div className="col-md-8" >
        
        <div className="card"  class="text-light bg-dark" style={{width: '80rem'}}>
        <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-text" style={{fontFamily:'fantasy', color:'white'}}>{name ? name : "name not found"}</h2>
                <h4 className="card-text" style={{fontFamily:'fantasy', color:'white'}}>{tipo}</h4>
                <h5 className="card-text" style={{fontFamily:'fantasy', color:'white'}}>{describe}</h5>               
            </div>
        </div>
    </div>
    </center>
    </>
);

export default Listarpersonajes;
