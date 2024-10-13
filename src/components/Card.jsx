import { useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import Heart from "./Heart"

function Card({title, body, href}) {
    const [text, setText] = useState()
    useEffect(()=>{
        async function numberRandom(){
            const num = await fetch("https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new")
            const text = await num.text()
            setText(text)
        }

        numberRandom()
    }, [])
    return (
        <article className="card rounded shadow-sm">
            <Link className="nav-link" to={`place/${text}`}>
                <img
                    src="https://cotidiano.mx/wp-content/uploads/2022/10/PORTADA-LA-PERLA.jpg"
                    className="card-img-top cursor-pointer object-fit-cover w-auto"
                    style={{ "height": "12rem" }}
                    alt="..."
                />
            </Link>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Ubicacion del lugar
                </p>
                <Heart/>
                <span className="ms-1">{text}</span>
            </div>
        </article>


    );
}

export default Card;