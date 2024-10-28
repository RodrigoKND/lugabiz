import React, { useState } from "react"
import Ilocation from "../Icons/Ilocation"
import Icalendar from "../Icons/Icalendar"
import Iheart from "../Icons/Iheart"


import Card from "../components/Card"
import Navigation from "../components/Navigation"
import Modal from "../components/ui/Modal"
import FormPostPlace from "../components/FormPostPlace"

import "../styles/UserStyles.css"

function ProfileUser() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [placeName, setPlaceName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setlocation] = useState("");
    const [type, setType] = useState("");
    const [openingHours, setOpeningHours] = useState("");
    const [closingHours, setClosingHours] = useState("");
    const [image, setImage] = useState(null);
    const [cards, setCards] = useState([]); // Estado para las tarjetas
    const [selectedGroups, setSelectedGroups] = useState([]);
    const handleGroupSelection = (value) => {//seleccion de grupos sociales
        if (selectedGroups.includes(value)) {
            setSelectedGroups(selectedGroups.filter((group) => group !== value));
        } else {
            setSelectedGroups([...selectedGroups, value]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un nuevo objeto de tarjeta
        const newCard = {
            title: placeName,
            body: description,
            image: image ? URL.createObjectURL(image) : null // Crear URL temporal para la imagen
        };

        // Agregar la nueva tarjeta al estado
        setCards([...cards, newCard]);

        // Reiniciar el formulario
        setPlaceName("");
        setDescription("");
        setImage(null);
        setFormVisible(false);
    };

    return (
        <section
            className="container d-flex justify-content-center  h-auto w-auto"
        >
            <div className="d-flex justify-content-center flex-column">
                <header className="text-center mt-5 d-flex justify-content-center">
                    <div className="d-flex align-items-center mx-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/1561955?v=4"
                            alt="usuario"
                            width="100"
                            height="100"
                            className="rounded-pill object-fit-cover imageUser z-2"
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <h4 className="mt-3 text-start mx-2 text-capitalize">
                            Miguel Durán
                        </h4>
                        <div className="d-flex justify-content-evenly gap-3 my-2">
                            <span className="d-flex flex-column align-items-center px-3 py-2">
                                <Iheart />
                                <small>4.9 me gusta</small>
                            </span>
                            <span className="d-flex flex-column align-items-center px-3 py-2">
                                <Ilocation />
                                <small>Madrid, España</small>
                            </span>
                            <span className="d-flex flex-column align-items-center px-3 py-2">
                                <Icalendar />
                                <small>Se unió en 2024</small>
                            </span>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-center gap-3">
                                <button className="py-2 px-4 rounded-3 border border-0 bg-tomato text-white">Seguir</button>
                                <button className="py-2 px-4 rounded-3 border ">Me gusta</button>
                            </div>

                        </div>
                    </div>
                </header>
                <hr />
                <Navigation
                    classStyleContainer={"justify-content-center custom-background"}
                    classStyle={"bg-tomato text-white rounded-pill"}
                    items={["Publicaciones", "Lugares favoritos", "Logros", "Reseñas"]}
                />
                {/* Mostrar las tarjetas creadas */}
                <div className="d-flex flex-wrap justify-content-center gap-4 py-4">
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} body={card.body} href={card.image} />
                    ))}
                </div>

                {/* Botón Circular */}
                <div className="button-container">
                    <button className="circular-button" onClick={() => setFormVisible(true)}>
                        +
                    </button>
                </div>

                {isFormVisible && (
                    <Modal onSubmit={handleSubmit} isVisibleModal={isFormVisible}
                        onShowModal={() => setFormVisible(false)}>
                        <FormPostPlace onSubmit={handleSubmit}>
                            <header className="d-flex justify-content-end">
                                <button type="button" className="btn-close"
                                    aria-label="Close" onClick={() => setFormVisible(false)}></button>
                            </header>
                            <h4 className="mt-3 mb-4 text-center">Comparte tu sitio favorito</h4>
                        </FormPostPlace>
                    </Modal>
                )}

            </div>
        </section>
    );
}

export default ProfileUser;