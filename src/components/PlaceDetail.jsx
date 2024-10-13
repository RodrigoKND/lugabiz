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
        <div className="mx-5 my-5">
            <div className="card position-relative" style={{ "background": "#F0EDED" }}>
                <img
                    src="https://www.mundofranquicia.com/wp-content/uploads/2016/11/PR-Sports-Bar-001-04232013-web.jpg"
                    className="card-img object-fit-cover w-auto img-fluid rounded-top-4"
                    style={{ "height": "400px" }}
                    alt="..."
                />
            </div>
            <p className="mt-4 mb-3 fw-light text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Non aliquid voluptatem inventore, nostrum ipsum ex! Minima
                ipsa ipsam eum quasi rerum magni aperiam id molestiae? Velit
                debitis obcaecati in adipisci!
            </p>
            <div className="d-flex justify-content-center">
                <Navigation
                    styleItem={{"background-color": "#29B8A7"}}
                    classStyle="text-dark border text-white rounded-pill"
                    classItem="border bg-gray-light rounded-pill text-dark"
                    items={["Detalles", "Comentarios", "Me encanta"]}
                />
            </div>
            <div className="p-2 rounded-3 shadow-lg" style={{ "background": "#F9FAFB" }}>
                <CharacteristicsPlace />
            </div>

            <h2 className="bold text-sencondary my-5">Otros lugares que te pueden interesar</h2>
            <div className="d-flex flex-wrap gap-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default PlaceDetail