import React, { useState } from "react"
import Icalendar from "../Icons/Icalendar"
import Card from "../components/Card"


function ProfileUser() {
    const [active, setActive] = useState('posts');

    const tabs = [
        { id: 'posts', label: 'Publicaciones' },
        { id: 'visits', label: 'Mis visitas' },
        { id: 'achievements', label: 'Logros' },
    ];

    return (
        <section className="w-100 shadow-sm">
            <header>
                <div className="h-50 bg-header-profile position-relative"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-sm-start position-relative pb-3"
                    >
                        <div className="col-auto" style={{ marginTop: "-80px" }}>
                            <div className="position-relative">
                                <img
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150"
                                    alt="Miguel Durán"
                                    className="rounded-3 shadow-sm border border-4 border-white"
                                    style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
                                />
                                <div className="position-absolute bottom-0 end-0">
                                    <button className="border border-0 p-2 cursor-pointer bg-primary rounded-pill"
                                        style={{ background: "none" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-camera-up">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
                                            <path d="M12 16a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                                            <path d="M19 22v-6" />
                                            <path d="M22 19l-3 -3l-3 3" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="col mt-3 mt-sm-0 d-flex flex-column flex-sm-row align-items-center align-items-sm-end gap-3 w-100">
                            <div className="text-center text-sm-start">
                                <h1 className="fs-3 fw-bold text-dark">Miguel Smith</h1>
                                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start mt-2 text-secondary gap-2">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-star-fill me-1"></i>
                                        <span className="fw-medium">4.9 me gusta</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-calendar-fill me-1"></i>
                                        <span>Se unió en 2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-sm-auto d-flex gap-2">
                                <button className="btn text-white px-4 py-2" title="Sigue a Miguel Durán"
                                    style={{ background: "linear-gradient(to right, #f43f5e, #ec4899)" }}>
                                    Seguir
                                </button>
                                <button className="border px-4 py-2" title="Me gusta 🙌">
                                    Me gusta
                                </button>
                                <button className="border" style={{ background: "none" }} title="Programa tu dia especial">
                                    <Icalendar />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{ background: "#FFF6F6" }}>
                <div className="d-flex flex-wrap gap-4 justify-content-center p-5">
                    <div className="card w-25 shadow-sm border border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title">42</h5>
                            <p className="card-text">
                                Publicaciones
                            </p>
                        </div>
                    </div>
                    <div className="card w-25 shadow-sm border border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title">1205</h5>
                            <p className="card-text">
                                Seguidores
                            </p>
                        </div>
                    </div>
                    <div className="card w-25 shadow-sm border border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title">891</h5>
                            <p className="card-text">
                                Siguiendo
                            </p>
                        </div>
                    </div>
                </div>


                <div className="border-buttom px-4">
                    <div className="d-flex gap-1 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActive(tab.id)}
                                className={`py-3 px-4 position-relative border border-0 bg-transparent
                                     ${active === tab.id
                                        ? 'font-medium'
                                        : 'text-muted'
                                    }`}
                                style={active === tab.id ? styles.text_rose: {}}
                            >
                                {tab.label}
                                {active === tab.id && (
                                    <div className="position-absolute bottom-0 end-0 start-0"
                                        style={styles.com} />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-4 p-5">
                    <Card title="Avenida América Esquina Libertador" body="Hermoso lugar con suculenta comida" href="https://www.infodiez.com/wp-content/uploads/2019/09/Platostipicosdecochabamba_infodiez-1000x600.jpg" />
                    <Card title="Avenida América Oeste Esquina Portales" body="Fundación Patiño para visitar y pasar el rato" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs7mGaUKlPV0Lx8fWo6cpBQJT2NhJCHQF2w&s" />
                    <Card title="Avenida América Esquina Libertador" body="Hermoso lugar con suculenta comida" href="https://www.infodiez.com/wp-content/uploads/2019/09/Platostipicosdecochabamba_infodiez-1000x600.jpg" />
                    <Card title="Avenida América Oeste Esquina Portales" body="Fundación Patiño para visitar y pasar el rato" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs7mGaUKlPV0Lx8fWo6cpBQJT2NhJCHQF2w&s" />
                </div>

                
            </div>
        </section>

    );
}

const styles = {
    com: {
        background: "linear-gradient(to right, #f43f5e, #ec4899)",
        height: "0.5rem",
    },

    text_rose: {
        color: "#F0517F"
    }
}

export default ProfileUser;