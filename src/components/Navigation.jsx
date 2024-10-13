import { useState } from "react";

function Navigation(props) {
    const {
        items,
        classStyleContainer = '',
        classStyle = '',
        styleItem = {},
        classItem = 'border-purple'
    } = props
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMenu = (index) => setActiveIndex(index);
    return (
        <ul className={`nav ${classStyleContainer} m-4`}>
            {
                items.map((content, index) => (
                    <li className="nav-item rounded-pill px-1 cursor-pointer" key={index}>
                        <a className={`nav-link ${activeIndex === index ? classStyle : classItem}`}
                            style={activeIndex === index ? styleItem : null}
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