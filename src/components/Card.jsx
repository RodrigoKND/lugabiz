import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heart from "../components/Heart.jsx";
import ImarkerLocation from "../Icons/ImarkerLocation.jsx";

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
        <article className="card mb-5 rounded-4 shadow-sm border border-0" style={{ width: "18rem" }}>
            <Link className="nav-link" to="/place/1">
                <img
                    src={href}
                    className="card-img-top cursor-pointer object-fit-cover"
                    alt={title}
                />
            </Link>
            <div className="card-body">
                <h6 className="card-title text-muted">
                    <span className="me-2"><ImarkerLocation /></span>
                    {title}
                </h6>
                <p className="card-text text-purple ms-1 mt-3">{body}</p>
            </div>
            <div className="p-2 d-flex justify-content-end align-items-center">
                <span className="me-2">{likes} </span>
                <Heart />
            </div>
        </article>
    );
}

export default Card;