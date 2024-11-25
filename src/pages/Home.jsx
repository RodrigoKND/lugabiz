import { useState } from "react"
import Navigation from "../components/Navigation"
import Card from "../components/Card"
import HomeModule from "../components/Home/Home.module"
import Sections from "../components/Home/Sections/Sections"

import Modal from "../components/ui/Modal"
import "../styles/Home/Hero.css"

function Home() {
    const [quantityCategories, setQuantityCategories] = useState(4);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const handleModal = () => {
        setIsVisibleModal(true);
    }
    const [changePrice, setChangePrice] = useState(10);
    const handlePriceChange = (e) => {
        setChangePrice(e.target.value);
    }

    const categories = ["Restaurantes", "Bares", "Parques", "Cafeterias", "Balnearios", "Cines", "Teatros", "Centros Comerciales", "Museos", "Miradores", "Áreas Verdes", "Estudios de Arte", "Karaoke", "Centro de Videojuegos"]
    const categoriesSplice = categories.splice(0, quantityCategories)
    return (
        <>
            <HomeModule />

            {/* Explora las experiencias */}
            <section>
                <div className="d-flex justify-content-between mt-4 mb-3 mx-5">
                    <h4 className="text-purple fw-bolder">
                        Explora las experiencias
                    </h4>
                    <button className="w-auto border border_purple p-2 bg-white h-5 cursor-pointer" onClick={handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler me-1 icons-tabler-outline icon-tabler-filter">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
                        </svg>
                        <label>
                            Filtros
                        </label>
                    </button>
                </div>
                {isVisibleModal && (
                    <Modal isVisibleModal={isVisibleModal}
                        styleModal={"bg-white h-100 overflow-y-auto border_purple shadow-lg"}
                        onShowModal={() => setIsVisibleModal(false)}>
                        <header>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn-close"
                                    aria-label="Close" onClick={() => setIsVisibleModal(false)}></button>
                            </div>
                            <h4 className="mt-3 mb-4 text-center">Filtros</h4>
                        </header>
                        <section className="my-4 px-4">
                            <h6>Categoria</h6>
                            <Navigation
                                items={[
                                    "Momentos con Amigos",
                                    "Lo Más Popular",
                                    "Planes en Familia",
                                    "En Pareja",
                                    "Aventuras con tu Mascota",
                                    "Tiempo para Mí",
                                ]}
                                classStyleContainer="gap-2 mt-4 flex-wrap justify-content-center"
                                classStyle="text-dark border border-dark rounded"
                                classItem="rounded border text-dark"
                            />
                        </section>
                        <section className="px-4">
                            <h6>Rango de precios</h6>
                            <input type="range" min="10" max="150"
                                value={changePrice} onChange={handlePriceChange} className="w-100" />
                            <div className="d-flex justify-content-between">
                                <div className="p-3">
                                    <div className="text-center text-muted">Minimo</div>
                                    <output className="border p-3 rounded-pill">{changePrice} Bs.</output>
                                </div>
                                <div className="p-3">
                                    <div className="text-muted text-center">Máximo</div>
                                    <p className="border p-3 rounded-pill">200 Bs +</p>
                                </div>
                            </div>
                        </section>
                        <section className="px-4">
                            <h6>Tipo de Lugar</h6>

                            <Navigation
                                items={categoriesSplice}
                                classStyleContainer="flex-wrap justify-content-center align-items-center gap-2"
                                classStyle="text-dark my-2 border border-dark rounded"
                                classItem="rounded border text-dark"
                            />
                            <button type="button" role="button" className="border border-0 text-purple p-2 bg-white"
                                onClick={() => setQuantityCategories(categories.length)}>
                                {
                                    quantityCategories <= 5
                                        ?
                                        (

                                            <span className="text-decoration-underline fw-semibold">
                                                Ver Todos
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="purple"
                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            </span>
                                        )
                                        :
                                        <span className="text-decoration-underline fw-semibold">
                                            Ver Menos
                                        </span>
                                }
                            </button>
                        </section>
                        <footer className="my-4">
                            <button className="bg-purple fw-bold w-100 text-white border border-0 p-2">
                                Aplicar Filtros
                            </button>
                        </footer>
                    </Modal>
                )}

                <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
                    <Card title="Avenida América Esquina Libertador" body="Hermoso lugar con suculenta comida" href="https://www.infodiez.com/wp-content/uploads/2019/09/Platostipicosdecochabamba_infodiez-1000x600.jpg" />
                    <Card title="Avenida América Oeste Esquina Portales" body="Fundación Patiño para visitar y pasar el rato" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs7mGaUKlPV0Lx8fWo6cpBQJT2NhJCHQF2w&s" />
                    <Card title="Avenida América Esquina Libertador" body="Hermoso lugar con suculenta comida" href="https://www.infodiez.com/wp-content/uploads/2019/09/Platostipicosdecochabamba_infodiez-1000x600.jpg" />
                    <Card title="Avenida América Oeste Esquina Portales" body="Fundación Patiño para visitar y pasar el rato" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs7mGaUKlPV0Lx8fWo6cpBQJT2NhJCHQF2w&s" />
                </div>
            </section >

            {/* Secciones */}

            < Sections />
        </>
    )
}

export default Home