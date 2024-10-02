import { useState } from "react";

function Navigation({ items, classStyleContainer = '', classStyle = '' }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMenu = (index) => setActiveIndex(index);
    return (
        <ul className={`nav ${classStyleContainer} m-4`}>
            {
                items.map((content, index) => (
                    <li className="nav-item rounded-pill px-1" key={index}>
                        <a className={`nav-link ${activeIndex === index ? classStyle : "border-purple"}`}
                            onClick={() => handleMenu(index)}>
                            {content}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default Navigation