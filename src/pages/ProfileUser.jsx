import React, { useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Iheart from "../Icons/Iheart";
import Ilocation from "../Icons/Ilocation";
import Icalendar from "../Icons/Icalendar";
import '../styles/UserStyles.css';

function ProfileUser() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [placeName, setPlaceName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [cards, setCards] = useState([]); // Estado para las tarjetas

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
        <section>
            <header className="text-center">
                <h4>Midudev</h4>
                <div className="d-flex justify-content-evenly gap-3">
                    <span className="px-3 py-2">
                        <Iheart />
                        4.9 me gusta
                    </span>
                    <span className="px-3 py-2">
                        <Ilocation />
                        Madrid, España
                    </span>
                    <span className="px-3 py-2">
                        <Icalendar />
                        Se unió en 2024
                    </span>
                </div>
                <p>
                    ¡Hola! Soy Midu, un viajero apasionado y buscador de
                    experiencias. Me encanta explorar nuevas culturas, probar
                    cocinas exóticas y superar mis límites con aventuras
                    emocionantes.
                </p>
            </header>

            <div className="bg-body-secondary">
                <Navigation
                    classStyleContainer={"justify-content-center p-3"}
                    classStyle={"bg-tomato text-white rounded-pill"}
                    items={["Publicaciones", "Lugares favoritos", "Logros", "Reseñas"]}
                />
            </div>

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

            {/* Formulario de Publicación */}
            {isFormVisible && (
                <div className="modal">
                    <form onSubmit={handleSubmit} className="form">
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
                            <label htmlFor="image">Cargar Imagen:</label>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={() => setFormVisible(false)}>Cancelar</button>
                    </form>
                </div>
            )}
        </section>
    );
}

export default ProfileUser;