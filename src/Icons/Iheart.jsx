function Iheart(isFill = false) {
    return (
        <svg
            className="icon icon-tabler icon-tabler-heart heart pe-auto"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fd0061"
            fill={isFill ? "#fd0061" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            ></path>
        </svg>
    );
}

export default Iheart