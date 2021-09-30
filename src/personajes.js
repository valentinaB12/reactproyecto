import Listarpersonajes from "./listapersonajes";


const students = [
    {    
        "id": 1,
        "name": " Nombre: Anabel",

        "genero": " Genero: terror",
        "Tipo": " Pelicula: El Conjuro",
        "Describe": "Basada en hechos reales. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70.",
        "img": "https://e.rpp-noticias.io/normal/2017/08/24/345534_469137.jpg"
    },
    {
        "name": " Nombre: Valak",
        "img": "https://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=http://www.elespectadorimaginario.com/wp-content/uploads/La-monja-poster.jpg&nocache=1",

        "genero": " Genero: Terror",
        "Tipo": " Pelicula: La Monja",
        "Describe": "Una monja se suicida en una abadía rumana y el Vaticano envía a un sacerdote y una novicia a investigar lo sucedido. Lo que ambos encuentran allí es un secreto perverso que los enfrentará cara a cara con el mal en su esencia más pura."


    },
    {
        "name": " Nombre: Leatherface",
        "img": "https://m.media-amazon.com/images/I/8118+umd+eL._SY445_.jpg",

        "genero": " Genero: Terror",
        "Tipo": " Pelicula: Masacre en Texas",
        "Describe": "Un grupo de jóvenes se pierde en medio de las desérticas carreteras de Texas, y termina encontrándose con una familia de matarifes que los persigue con una sierra mecánica, descuartizándolos uno por uno."

    },
    {
        "name": " Nombre: Pennywise",
        "img": "https://es.web.img3.acsta.net/pictures/17/04/07/12/58/197841.jpg",

        "genero": " Genero: Terror",
        "Tipo": " Pelicula: IT",
        "Describe": "Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil."

    },
    
]

const Personajes = () => (
    <>
        <nav>
                    <ul class="menu">
                        <li><a href="/"><h3 style={{fontFamily:'fantasy', color:'black'}}>Inicio</h3></a></li>
                        <li><a href="/Personajes"><h3 style={{fontFamily:'fantasy', color:'black'}}>Contenido</h3></a></li>
                        <li><a href="/Formulario"><h3 style={{fontFamily:'fantasy', color:'black'}}>Contacto</h3></a></li>
                    </ul>
                </nav>
        {
            students.map(c => <Listarpersonajes name={c.name} tipo={c.Tipo} describe={c.Describe} img={c.img} />)
        }
        
    </>
)

export default Personajes;