import { useParams } from "react-router-dom"
import Navigation from "./Navigation"
import Card from "./Card"

const characteristics = [
    {
        title: "Wifi - gratis",
        icon: "wifi"
    },
    {
        title: "Terraza Panorámica",
        icon: "terraza"
    },
    {
        title: "Avenida America",
        icon: "avenida"
    },
    {
        title: "Parque infantil",
        icon: "parque"
    }
]

function CharacteristicsPlace() {
    return (
        <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(50%, 1fr))" }}>
            {
                characteristics.map(({ title, icon }, index) => (
                    <>
                        <div key={index}
                            class="mx-3 my-2 p-3 bg-white rounded shadow-sm">
                            {title}
                        </div>
                    </>
                ))
            }
        </div>
    );
}

function PlaceDetail() {
    const { id } = useParams()
    return (
        <>
            <section className="p-5">
                <header className="d-flex gap-5">
                    <img
                        src="https://www.mundofranquicia.com/wp-content/uploads/2016/11/PR-Sports-Bar-001-04232013-web.jpg"
                        className="object-fit-cover w-50 h-25 rounded"
                        alt="..."
                    />
                    <div className="d-flex flex-column w-100">
                        <h1>Café la esquina</h1>
                        <p className="mb-3 fw-light text-pretty">
                            Un acogedor café en el corazón de la ciudad
                        </p>
                        {/*Componente de caracteristicas*/}
                        <div className="d-flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center">
                                {/*TODO: FALTA ICONOS*/}
                                <span className="ms-1 fw-semibold">4.5</span>
                                <span className="text-sm text-muted ms-1">visitas</span>
                            </div>
                            <div className="d-flex aling-items-center">
                                {/*TODO: FALTA ICONOS*/}
                                <span className="ms-1 text-sm">Centro Histórico</span>
                            </div>
                            <div className="d-flex align-items-center">
                                {/*TODO: FALTA ICONOS*/}
                                <span className="ml-1 text-sm">Abierto ahora</span>
                            </div>
                        </div>
                        <div className="border p-3">
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
                </header>
                <div className="d-flex my-3">
                    <Navigation
                        styleItem={{ "backgroundColor": "#7E71EB" }}
                        classStyleContainer="bg-gray-light p-2"
                        classStyle="text-dark border text-white rounded"
                        classItem="rounded text-dark"
                        items={["Detalles", "Comentarios", "Me encanta"]}
                    />
                </div>
                <p className="text-wrap text-muted">
                    Café La Esquina es un lugar acogedor donde puedes disfrutar de deliciosos cafés, pasteles caseros y un ambiente relajado.
                    Perfecto para trabajar, reunirse con amigos o simplemente disfrutar de un momento tranquilo. Nuestro café es de origen
                    local y tostado artesanalmente, garantizando una experiencia única en cada taza.
                </p>
                <h3 className="bold text-sencondary my-5">Explora más lugares</h3>
                <div className="d-flex flex-wrap gap-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    )
}

export default PlaceDetail