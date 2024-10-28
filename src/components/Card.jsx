import React, { useEffect, useState } from "react";
import Heart from "../components/Heart.jsx"; 

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
        <article className="card mb-5" style={{ width: "18rem" }}>
            {href && (
                <a className="nav-link" href="#">
                    <img
                        src="https://media.timeout.com/images/105851792/750/422/image.jpg"
                        className="card-img-top cursor-pointer object-fit-cover"
                        alt={title}
                    />
                </a>
            )}
            <div className="card-body">
                <h6 className="card-title text-muted">Av América</h6>
                <p className="card-text text-purple">Restaurante de la ciudad</p>
            </div>
            <div className="p-2 d-flex justify-content-end align-items-center">
                <span className="me-2">{likes} </span>
                <Heart/>
            </div>
        </article>
    );
}

export default Card;