import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Heart from "../components/Heart.jsx"; // Asegúrate de que la ruta sea correcta

function Card({ title, body, href }) {
    const [likes, setLikes] = useState();

    useEffect(() => {
        async function fetchLikes() {
            const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new");
            const text = await response.text();
            setLikes(text);
        }

        fetchLikes();
    }, []);

    return (
        <article className="card" style={{ width: "18rem" }}>
            {href && (
                <a className="nav-link" href="#">
                    <img
                        src={href}
                        className="card-img-top cursor-pointer object-fit-cover"
                        alt={title}
                    />
                </a>
            )}
            <div className="card-body text-purple">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
            <div className="p-2">
                <Heart/>
                <span>{parseInt(likes) > 1 ? `Les gusta a ${likes} personas` : `Le gusta a ${likes} persona`}</span>
            </div>
        </article>
    );
}

export default Card;