import { Link, useParams } from "react-router-dom"
import Navigation from "./Navigation"
import Card from "./Card"
import { useState } from "react"
import MapOl from "./Map"
const details = [
    { title: "Avenida América Oeste", icon: "avenida" },
    { title: "Juegos para niños", icon: "juegos" },
    { title: "Parqueo para clientes", icon: "parqueo" },
    { title: "Apto para familias y amigos", icon: "apto" },
    { title: "Wifi", icon: "wifi" },
    { title: "Accesible para reservas", icon: "accesible" },
]

const comments = [{
    id: 1,
    name: "Miguel Durán",
    body: "Este lugar es genial, me encanta visitarlo cada vez, su precio es muy accesible y tiene una rica comida",
    date: "2024-11-24"
}, {
    id: 2,
    name: "Miguel Durán",
    body: "Este lugar es genial, me encanta visitarlo cada vez, su precio es muy accesible y tiene una rica comida",
    date: "2024-11-24"
}, {
    id: 3,
    name: "Miguel Durán",
    body: "Este lugar es genial, me encanta visitarlo cada vez, su precio es muy accesible y tiene una rica comida",
    date: "2024-11-24"
}
]

function PlaceDetail() {
    const { id } = useParams()

    const [contentNav, setContentNav] = useState('detalles');
    return (
        <section className="p-5">
            <div className="d-flex justify-content-end">
                <a href="https://api.whatsapp.com/send?text=¡Mira este post! https://tusitio.com/post/123"
                    className="nav-link p-2"
                    target="_blank"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-share">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M8.7 10.7l6.6 -3.4" />
                        <path d="M8.7 13.3l6.6 3.4" />
                    </svg>
                    <span className="ms-2">Compartir</span>
                </a>
            </div>
            <div className="row gx-4 gy-3">
                <div className="col-md-7">
                    <img
                        src="https://www.mundofranquicia.com/wp-content/uploads/2016/11/PR-Sports-Bar-001-04232013-web.jpg"
                        className="object-fit-cover rounded w-100 h-100"
                        alt="..."
                    />
                </div>
                <div className="col-md-5">
                    <h3>Café la esquina</h3>
                    <div className="pt-2 pb-3 w-max">
                        <Link to='/profile' target="_blank" className="mb-3 text-dark text-decoration-none cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150"
                                alt="usuario"
                                width="50"
                                height="50"
                                role="button"
                                className="rounded-pill object-fit-cover me-3 "
                            />
                            <span>Publicado por Miguel Smith</span>
                        </Link>
                    </div>
                    {/*Componente de caracteristicas*/}
                    <div className="d-flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center">
                            {/*TODO: FALTA ICONOS*/}
                            <span className="ms-1 fw-semibold">4.5</span>
                            <span className="text-sm text-muted ms-1">visitas</span>
                        </div>
                        <div className="d-flex align-items-center">
                            {/*TODO: FALTA ICONOS*/}
                            <span className="me-2"><strong>Rango de precios:</strong></span>
                            <span className="ml-1 text-sm">100 - 230 Bs</span>
                        </div>
                        <div className="d-flex align-items-center">
                            {/*TODO: FALTA ICONOS*/}
                            <span className="rounded-circle me-2"
                                style={{ minHeight: "1rem", minWidth: "1rem", backgroundColor: "#4AC35D" }}></span>
                            <span className="ml-1 text-sm">Abierto ahora</span>
                        </div>
                    </div>
                    <div className="p-3 border">
                        <h5 className="">Horario</h5>
                        <ul className="list-group text-sm mb-2">
                            <li className="list-group-item border border-0">Lunes - Viernes: 7:00 - 22:00</li>
                            <li className="list-group-item border border-0">Sábado - Domingo: 8:00 - 20:00</li>
                        </ul>
                        <button
                            className="cursor-pointer border border-0 p-2 rounded bg-tomato text-white w-100">
                            Voy a visitarlo <span className="ms-1">😃</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h5>Acerca de este lugar</h5>
                <p className="text-wrap text-muted  mb-3" style={{ lineHeight: "2" }}>
                    Café La Esquina es un lugar acogedor donde puedes disfrutar de deliciosos cafés, pasteles caseros y por cierto más
                    a la hora de disfrutar de la comida, puedes disfrutar de una comida de alta calidad y de buena calidad en un ambiente acogedor.

                </p>
            </div>
            <div className="d-flex my-3">
                <Navigation
                    styleItem={{ "backgroundColor": "#7E71EB" }}
                    classStyleContainer="bg-gray-light p-2"
                    classStyle="text-dark border text-white rounded"
                    classItem="rounded text-dark"
                    setContentNav={setContentNav}
                    items={["Detalles", "Comentarios"]}
                />
            </div>

            {
                contentNav === "detalles" ?
                    <>
                        <div className="shadow-lg p-4 rounded-4 ">
                            <div className="row gx-4 gy-3">
                                {
                                    details.map((detail, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="bg-white shadow-lg p-3 rounded-3">
                                                {detail.title}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>


                    :
                    contentNav === "comentarios" &&
                    <>
                        <h5>Comenta lo que piensas sobre Café la esquina</h5>
                        <div className="shadow-lg p-4 rounded-4 overflow-y-auto d-flex flex-column gap-3 position-relative" style={{ height: "25em" }}>
                            {
                                comments.map((comment, index) => (
                                    <div className="bg-white shadow-lg p-2 rounded-2" key={index}>
                                        <div className="d-flex justify-content-between align-items-center p-3">
                                            <strong style={{ color: '#229289' }}>{comment.name}</strong>
                                            <span className="text-muted">
                                                {comment.date}
                                            </span>
                                        </div>
                                        <p className="px-3">{comment.body}</p>
                                    </div>
                                ))
                            }

                            <div className="position-sticky bg-white p-3 shadow-lg bottom-0 end-0 start-0">
                                <textarea className="form-control border border-success" placeholder="Escribe tu comentario" rows="3"
                                    style={{ resize: "none" }} maxLength={200}></textarea>
                                <button className="btn text-white mt-3 rounded-pill"
                                    style={{ background: '#229289' }}>Enviar Comentario</button>
                            </div>
                        </div>
                    </>
            }
            <div className="mt-5">
                <h5>Ubicación</h5>

                <MapOl />
            </div>
            <h3 className="bold text-sencondary mt-5 mb-3">Explora más lugares</h3>
            <div className="d-flex flex-wrap gap-4">
                <Card title="Avenida América Esquina Libertador" body="Hermoso lugar con suculenta comida" href="https://www.infodiez.com/wp-content/uploads/2019/09/Platostipicosdecochabamba_infodiez-1000x600.jpg" />
                <Card title="Avenida América Oeste Esquina Portales" body="Fundación Patiño para visitar y pasar el rato" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs7mGaUKlPV0Lx8fWo6cpBQJT2NhJCHQF2w&s" />
                <Card title="Avenida América Esquina Libertador" body="Hermoso lugar con suculenta comida" href="https://www.infodiez.com/wp-content/uploads/2019/09/Platostipicosdecochabamba_infodiez-1000x600.jpg" />
                <Card title="Avenida América Oeste Esquina Portales" body="Fundación Patiño para visitar y pasar el rato" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs7mGaUKlPV0Lx8fWo6cpBQJT2NhJCHQF2w&s" />
            </div>
        </section>
    )
}

export default PlaceDetail