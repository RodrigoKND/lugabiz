import Navigation from "../components/Navigation"
import Card from "../components/Card"
function Home() {
    return (
        <>
            <div className="m-4">
                <h2 className="text-purple mt-4 mb-3 fw-bolder">Vive la experiencia</h2>
                <div className="card position-relative">
                    <img
                        src="https://www.mundofranquicia.com/wp-content/uploads/2016/11/PR-Sports-Bar-001-04232013-web.jpg"
                        className="card-img object-fit-cover w-auto card_img-experience img-fluid"
                        alt="..."
                    />
                    <div className="card_content position-absolute bottom-0">
                        <div className="p-3 text-white">
                              <p className="bg-purple py-1 px-3 rounded-pill" style={{ width: "max-content" }}>
                                Tendencia
                            </p>
                            <h3 className="card-title">Enchanted Night Market Adventure</h3>
                            <p className="card-text">
                                Explore the vibrant colors, aromas, and flavors of our
                                city's hidden night market.
                            </p>
                            <button className="bg-white btn text-purple"> Visitar </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <h2 className="text-purple mt-4 mb-3 fw-bolder">
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
                    classStyleContainer={"justify-content-center"}
                    classStyle={"text-white bg-purple border-purple"}
                />
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    <Card title="ko" body=",,," href="..." />
                    <Card title="ko" body=",,," href="..." />
                    <Card title="ko" body=",,," href="..." />
                    <Card title="ko" body=",,," href="..." />
                </div>
            </div>
        </>
    )
}

export default Home