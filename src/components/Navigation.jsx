import { Component, useState } from "react";

function Navigation(props) {
    const {
        items,
        classStyleContainer = '',
        classStyle = '',
        styleItem = {},
        setContentNav,
        classItem = 'border-purple'
    } = props
    const [activeIndex, setActiveIndex] = useState(0);
    //Esta es navegación condicional
    const handleNavigation = (evt) => {
        const name = evt.target.getAttribute('data-name');
        const nameNormalized = name.toLowerCase().replace(' ', '_');
        setContentNav(nameNormalized);
    }

    return (
        <nav>
            <ul className={`nav ${classStyleContainer}`}>
                {
                    items.map((content, index) => (
                        <li className="nav-item rounded-pill mx-1 cursor-pointer" key={index} onClick={() => setActiveIndex(index)}>
                            <button onClick={handleNavigation} className={`nav-link ${activeIndex === index ? classStyle : classItem}`}
                                style={activeIndex === index ? styleItem : null} data-name={content}>
                                {content}
                            </button>
                        </li>
                    ))
                }
            </ul>
            {/* <div>
                {
                    items.map((content, index) => (

                        content.toLowerCase().replace(' ', '_') === contentNav && renderComponent

                    ))
                }
            </div> */}
        </nav>
    );
}

export default Navigation