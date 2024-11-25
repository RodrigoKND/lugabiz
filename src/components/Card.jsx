import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heart from "../components/Heart.jsx";
import ImarkerLocation from "../Icons/ImarkerLocation";

function Card({ title, body, href }) {
    const [likes, setLikes] = useState(0);

    return (
        <article className="card  rounded-4 shadow-sm border border-0" style={{ width: "18rem" }}>
            <Link to="/place/1">
                <img
                    src={href}
                    className="card-img-top cursor-pointer object-fit-cover"
                    style={{ height: "10rem", width: "100%" }}
                    alt={title}
                />
            </Link>
            <div className="card-body">
                <h6 className="card-title text-muted">
                    <ImarkerLocation />
                    <span> {title} </span>
                </h6>
                <p className="card-text text-purple ms-1">{body}</p>
            </div>
            <div className="d-flex px-3 pb-3 justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <strong className="text-muted">Bs. 100</strong>
                    <span className="text-muted">Abierto</span>
                </div>
                <div>
                    <span>{likes} </span>
                    <Heart countLikes={likes} setCountLikes={setLikes} />
                </div>
            </div>
        </article>
    );
}

export default Card;