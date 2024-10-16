import React, { useState } from "react"
import Card from "../components/Card"
import Navigation from "../components/Navigation"
import Ilocation from "../Icons/Ilocation"
import Icalendar from "../Icons/Icalendar"
import Iheart from "../Icons/Iheart"
import IcloseX from "../Icons/IcloseX"

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
        setFormVisible(false); // Ocultar el formulario después de enviar
    };

    return (
        <section
            className="container d-flex justify-content-center  h-auto"
        >
            <div className="d-flex justify-content-center flex-column" style={{ width: "80%" }}>
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
                <div className="d-flex flex-wrap justify-content-center gap-4 py-4">
                    {/* Mostrar las tarjetas creadas */}
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
                    <section className="modal">
                        <form onSubmit={handleSubmit} className="form p-2">
                            <header className="d-flex justify-content-end">
                                <IcloseX onClick={() => setFormVisible(false)} />
                            </header>
                            <h2>Crear Publicación</h2>
                            <div>
                                <label htmlFor="placeName">Nombre del Lugar:</label>
                                <input
                                    type="text"
                                    id="placeName"
                                    value={placeName}
                                    onChange={(e) => setPlaceName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Descripción:</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="location">Direccion:</label>
                                <textarea
                                    id="text"
                                    value={location}
                                    onChange={(e) => setlocation(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="type">Tipo de Lugar:</label>
                                <select
                                    id="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                >
                                    <option value="">Seleccionar tipo</option>
                                    <option value="restaurante">Restaurante</option>
                                    <option value="bar">Bar</option>
                                    <option value="tienda">Tienda</option>
                                    <option value="parque">Parque</option>
                                    <option value="cafeteria">Cafeteria</option>

                                </select>
                            </div>
                            <div className="social-group">
                                <div>
                                    <label>Grupos Sociales:</label>
                                    <div>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="familia"
                                                checked={selectedGroups.includes("familia")}
                                                onChange={(e) => handleGroupSelection(e.target.value)}
                                            />
                                            Planes en familia
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="pareja"
                                                checked={selectedGroups.includes("pareja")}
                                                onChange={(e) => handleGroupSelection(e.target.value)}
                                            />
                                            En pareja
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="amigos"
                                                checked={selectedGroups.includes("amigos")}
                                                onChange={(e) => handleGroupSelection(e.target.value)}
                                            />
                                            Amigos
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="petfrendly"
                                                checked={selectedGroups.includes("petfrendly")}
                                                onChange={(e) => handleGroupSelection(e.target.value)}
                                            />
                                            Con mascota
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="time-container">
                                <div>
                                    <label htmlFor="openingHours">Horario de Apertura:</label>
                                    <input
                                        type="time"
                                        id="openingHours"
                                        value={openingHours}
                                        onChange={(e) => setOpeningHours(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="closingHours">Horario de Cierre:</label>
                                    <input
                                        type="time"
                                        id="closingHours"
                                        value={closingHours}
                                        onChange={(e) => setClosingHours(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="image">Cargar Imagen:</label>
                                <input
                                    type="file"
                                    id="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit"
                                    className="bg-tomato text-white px-5 py-2 border border-0 rounded-3">Enviar</button>
                            </div>
                        </form>
                    </section>
                )}

            </div>
        </section>
    );
}

export default ProfileUser;