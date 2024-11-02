import { Link } from "react-router-dom";
import ImarkerLocation from "../../Icons/ImarkerLocation";
import Heart from "../Heart";

function HighlightPlace() {
    return (
        <section className="mx-5 my-5">
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
                                        <span className="me-2"><ImarkerLocation /></span>
                                        Ciudad Ejemplo, País
                                    </p>
                                    <p className="card-text text-wrap ">
                                        Un hermoso parque en el corazón de la ciudad, perfecto para relajarse y disfrutar de la naturaleza.
                                    </p>
                                </header>
                                <footer className="card-text d-flex justify-content-between mt-5 align-items-end">
                                    <Link to={"/place/1"}
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
    )
}

export default HighlightPlace