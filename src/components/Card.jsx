import { useEffect, useState }  from "react"
import Iheart from "../Icons/Iheart"

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
        <article className="card" style={{width:"18rem"}}>
            <a className="nav-link" href="#">
                <img
                    src="https://cotidiano.mx/wp-content/uploads/2022/10/PORTADA-LA-PERLA.jpg"
                    className="card-img-top cursor-pointer object-fit-cover"
                    alt="..."
                />
            </a>
            <div className="card-body text-purple">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </p>
            </div>
            <div className="p-2">
                <Iheart/>
                <span>{parseInt(text) > 1 ? `Les gusta a ${text} personas` : `Le gusta a ${text} persona`}</span>
            </div>
        </article>


    );
}

export default Card;