import Navigation from "../components/Navigation"
import Card from "../components/Card"
import "../styles/Home/Hero.css"
import Heart from "../components/Heart"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            {/* Hero */}
            <section
                className="bg_gradient">
                <div className="container mx-auto text-center">
                    <h2 className="mb-4 fs-1">Descubre lugares cotidianos</h2>
                    <p className="text-muted mb-5 fs-5">Explora y comparte tus lugares favoritos de tu ciudad</p>
                    <Link to="/"
                        className="bg-purple text-decoration-none fs-5 fw-medium text-white px-5 py-2 rounded-3">
                        Empezar a explorar
                    </Link>
                </div>
            </section>

            {/* Lugar destacado */}
            <section className="mx-5 my-5">
                {/* Lugar destacado */}
                <h2 className="fw-bold mb-4 text-purple">Lugar Destacado</h2>
                <div className="d-flex flex-row justify-content-center gap-4">
                    <aside className="card mb-3 w-100 shadow-lg">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgmrI88sdawvp6yrajuzYLOQFVaUGvBqCwg&s"
                                    alt="Lugar destacado"
                                    className="object-fit-cover w-100 h-100 object-top"
                                />
                            </div>
                            <article className="col-md-8 p-4">
                                <div className="card-body">
                                    <header>
                                        <h3 className="card-title text-purple text-capitalize">Parque Central</h3>
                                        <p className="my-4">
                                            {/*Icono de ubicacion*/}
                                            Ciudad Ejemplo, País
                                        </p>
                                        <p className="card-text text-wrap ">
                                            Un hermoso parque en el corazón de la ciudad, perfecto para relajarse y disfrutar de la naturaleza.
                                        </p>
                                    </header>
                                    <footer className="card-text d-flex justify-content-between mt-5 align-items-end">
                                        <Link to={"/"}
                                            className="text-decoration-none p-2 rounded border_purple text-purple">Ver Detalles</Link>
                                        <div>
                                            <Heart />
                                            <span className="text-muted mx-2">4 likes</span>
                                        </div>
                                    </footer>
                                </div>
                            </article>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Explora las experiencias */}
            <section>
                <h2 className="text-purple mt-4 mb-3 fw-bolder mx-5">
                    Explora las experiencias
                </h2>
                <Navigation
                    items={[
                        "Explorar todos",
                        "Lo Más Popular",
                        "Planes en Familia",
                        "En Pareja",
                        "Momentos con Amigos",
                        "Aventuras con tu Mascota",
                        "Tiempo para Mí",
                    ]}
                    classStyleContainer={"justify-content-center my-4"}
                    classStyle={"text-white bg-purple border-purple"}
                />
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    <Card title="ko" body=",,," href="..." />
                    <Card title="ko" body=",,," href="..." />
                    <Card title="ko" body=",,," href="..." />
                    <Card title="ko" body=",,," href="..." />
                </div>
            </section>
        </>
    )
}

export default Home