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
        <header className="text-center mt-4">
        <img
                src="https://avatars.githubusercontent.com/u/1561955?v=4"
                alt="usuario"
                width="100"
                height="100"
                className="rounded-pill object-fit-cover imageUser z-2"
            />
            <div className="text-center">
            <h4 className="mt-3">Midudev</h4>
                <div className="d-flex justify-content-evenly gap-3">
                <span className="d-flex flex-column align-items-center px-3 py-2">
                 <Iheart />
                 <small>4.9 me gusta</small>
                  </span>
                 <span className="d-flex flex-column align-items-center px-3 py-2">
                  <Ilocation />
                 <small>Madrid, España</small>
                   </span>
                   <span className="d-flex flex-column align-items-center px-3 py-2">
                  <Icalendar />
                  <small>Se unió en 2024</small>
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