import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Iheart from "../Icons/Iheart";
import Ilocation from "../Icons/Ilocation";
import Icalendar from "../Icons/Icalendar";

function ProfileUser() {
    return (
        <section
        // style="margin:auto; display:grid; place-content: center; max-width: 70%; width: 100%;"
    >
        <header className="text-center">
            <div className="text-center">
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
                    La valoración es:
                </p>
            </div>
        </header>
        <div className="bg-body-secondary">
            <Navigation
                classStyleContainer={"justify-content-center p-3"}
                classStyle={"bg-tomato text-white rounded-pill"}
                items={["Publicaciones", "Lugares favoritos", "Logros", "Reseñas"]}
            />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-4 py-4">
            <Card title="ko" body=",,," href="..."/>
            <Card title="ko" body=",,," href="..." />
            <Card title="ko" body=",,," href="..." />
            <Card title="ko" body=",,," href="..." />
            <Card title="ko" body=",,," href="..." />
            <Card title="ko" body=",,," href="..." />
        </div>
    </section>
    );
}

export default ProfileUser