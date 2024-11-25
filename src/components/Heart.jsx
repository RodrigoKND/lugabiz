import { useState } from "react"
import "../styles/AnimationHeart.css"

function Heart({ countLikes, setCountLikes }) {
    const [fill, setFill] = useState("none")

    const color = "#fd0061"

    const reaction = (evt) => {
        const isFill = evt.currentTarget.getAttribute("fill") === color
        setCountLikes(isFill ? countLikes - 1 : countLikes + 1)
        return isFill ? setFill("none") : setFill(color)

    }

    return (
        <svg
            className="icon icon-tabler icon-tabler-heart heart cursor-pointer"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fd0061"
            fill={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={reaction}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            ></path>
        </svg>
    );
}


export default Heart