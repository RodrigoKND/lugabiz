import Navigation from "../components/Navigation"
import Card from "../components/Card"
import HomeModule from "../components/Home/Home.module"


import "../styles/Home/Hero.css"
function Home() {
    return (
        <>
            <HomeModule />

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