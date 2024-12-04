import { useEffect, useMemo, useState } from "react";
import Card from "../../Card";

const sections = [
  // {
  //     section: "Eventos y actividades próximas",
  //     places: [
  //         {
  //             title: "Cocha Fest 2024",
  //             image: "https://tse4.mm.bing.net/th?id=OIP.slKRbTL_Bn8titagHWjNBgHaEK&pid=Api",
  //             location: "Recinto Ferial Alalay, Cochabamba",
  //             description: "Festival cultural que combina música, gastronomía y arte"
  //         },
  //         {
  //             title: "Día de la Chicha y el Chicharrón",
  //             image: "https://tse1.mm.bing.net/th?id=OIP.P9KOJRdQ0snEGUy6VSamvAHaFd&pid=Api",
  //             location: "Parque Excombatientes, Cochabamba",
  //             description: "Celebración anual que destaca la gastronomía tradicional cochabambina"
  //         },
  //         {
  //             title: "Feria del Tambaquí y Jugos Tropicales",
  //             image: "https://tse3.mm.bing.net/th?id=OIP.MEdjkIoop3WJaL1Q3nJkKgHaFV&pid=Api",
  //             location: "Plaza principal El Colonizador, Villa Tunari",
  //             description: "Evento que promueve la producción local de pescado y jugos"
  //         },
  //         {
  //             title: "Feria Piscícola y Productiva",
  //             image: "https://tse3.mm.bing.net/th?id=OIP.iJB9oYEhcEONzAjylAgbJQHaE7&pid=Api",
  //             location: "Plaza principal, Chimoré",
  //             description: "Feria que destaca la producción piscícola de la región"
  //         }
  //     ],
  //     link: "/events"
  // },
  {
    section: "Nuevos Lugares",
    places: [
      {
        title: "Centro Empresarial y Comercial en Cochabamba",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.VvgMZJsSOX_NzDqlX2jVlgHaEK&pid=Api",
        location: "Avenida América, Cochabamba",
        description:
          "Nuevo centro empresarial que ofrece espacios modernos para negocios y comercio.",
      },
      {
        title: "Restaurante 'Sabores de Cochabamba'",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.AGrEJIpOhIvOYZMN41E2MgHaEK&pid=Api",
        location: "Calle España #123, Cochabamba",
        description:
          "Nuevo restaurante que ofrece una fusión de cocina tradicional y contemporánea.",
      },
      {
        title: "Parque Ecológico 'La Llajta'",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.gWnqZ2VLgR5I_h4vysHZrAHaE8&pid=Api",
        location: "Zona norte, Cochabamba",
        description:
          "Reciente inauguración de un espacio verde dedicado a la conservación y recreación.",
      },
      {
        title: "Galería de Arte 'ArteCocha'",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.QwybOgIzI8vmxLIXhr4XUwHaE7&pid=Api",
        location: "Avenida Pando #456, Cochabamba",
        description:
          "Nueva galería que exhibe obras de artistas locales emergentes.",
      },
    ],
    link: "/new-places",
  },
  {
    section: "Ofertas y Promociones",
    places: [
      {
        title: "Descuentos en Hotel Aranjuez",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.RjR4UBVXAkcVQtZ4FP8SVgHaEK&pid=Api",
        location: "Calle Buenos Aires #543, Cochabamba",
        description:
          "Promoción del 20% de descuento en estadías durante noviembre.",
      },
      {
        title: "2x1 en entradas al Teleférico",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.xmfM3bDWBbn3syldOkrBJwHaEK&pid=Api",
        location: "Cerro San Pedro, Cochabamba",
        description:
          "Oferta especial de dos entradas al precio de una durante los fines de semana de noviembre.",
      },
      {
        title: "Promoción en Restaurante 'La Estancia'",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.aH0DhJYZDthcDBw9NcB6OAHaE7&pid=Api",
        location: "Avenida América #789, Cochabamba",
        description:
          "Menú ejecutivo con un 15% de descuento de lunes a viernes.",
      },
      {
        title: "Ofertas en Tienda de Artesanías 'Manos de Bolivia'",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.Ka_wlRAU1IcNL0G6HgF6egHaHa&pid=Api",
        location: "Calle España #321, Cochabamba",
        description:
          "Descuentos del 10% en productos seleccionados durante noviembre.",
      },
    ],
    link: "/promotions",
  },
  // {
  //     section: "Explora por ubicación",
  //     places: [
  //         {
  //             title: "Cristo de la Concordia",
  //             image: "https://tse2.mm.bing.net/th?id=OIP.J7PO9XybP9TI-JY9jSLEiwHaE8&pid=Api",
  //             location: "Cerro San Pedro, Cochabamba",
  //             description: "Estatua icónica que ofrece vistas panorámicas de la ciudad."
  //         },
  //         {
  //             title: "Palacio Portales",
  //             image: "https://tse3.mm.bing.net/th?id=OIP.sI6T5oH4Eyy3jAhs-XLE4QHaE7&pid=Api",
  //             location: "Avenida Potosí #1450, Cochabamba",
  //             description: "Histórico edificio con jardines espectaculares y arquitectura colonial."
  //         },
  //         {
  //             title: "Laguna Alalay",
  //             image: "https://tse1.mm.bing.net/th?id=OIP.8pIn4q4gD5u8AjeCJdIBJwHaEK&pid=Api",
  //             location: "Zona sur, Cochabamba",
  //             description: "Hermoso lugar para disfrutar de la naturaleza y observar aves locales."
  //         },
  //         {
  //             title: "Casona Santiváñez",
  //             image: "https://tse4.mm.bing.net/th?id=OIP._eGtiDmyX9bgEDil-RWuxQHaEo&pid=Api",
  //             location: "Calle Santiváñez #021, Cochabamba",
  //             description: "Edificio colonial que alberga exposiciones culturales y eventos históricos."
  //         }
  //     ],
  //     link: "/explore"
  // },
  // {
  //     section: "Apto para Fines de Semana",
  //     places: [
  //         {
  //             title: "Parque Nacional Tunari",
  //             image: "https://tse2.mm.bing.net/th?id=OIP.jvNBP3WyZZtM_Gic7CWnMAHaE7&pid=Api",
  //             location: "Cercanías de Cochabamba",
  //             description: "Destino perfecto para caminatas y explorar la naturaleza los fines de semana."
  //         },
  //         {
  //             title: "Laguna Corani",
  //             image: "https://tse1.mm.bing.net/th?id=OIP.yjKDKsIpxzix0VPkxok5NgHaEo&pid=Api",
  //             location: "Villa Tunari, Cochabamba",
  //             description: "Hermoso lugar para disfrutar actividades acuáticas y picnic."
  //         },
  //         {
  //             title: "Eco parque Pairumani",
  //             image: "https://tse3.mm.bing.net/th?id=OIP.g0O_lspDmn__jMg2u4cByAHaEK&pid=Api",
  //             location: "Vinto, Cochabamba",
  //             description: "Un parque ecológico con senderos naturales para relajarse el fin de semana."
  //         },
  //         {
  //             title: "La Angostura",
  //             image: "https://tse1.mm.bing.net/th?id=OIP.4CQUn5ufvKNR9l7XKgsvAAHaEo&pid=Api",
  //             location: "Zona sur, Cochabamba",
  //             description: "Laguna ideal para paseos en bote y probar gastronomía local."
  //         }
  //     ],
  //     link: "/week-appointments"
  // },
  {
    section: "Lugares Elegantes",
    places: [
      {
        title: "Hotel Cochabamba",
        image:
          "https://www.tripadvisor.com/Hotel_Review-g297315-d1006026-Reviews-Hotel_Cochabamba-Cochabamba_Cochabamba_Department.html",
        location: "Avenida Ballivián #123, Cochabamba",
        description:
          "Un hotel de lujo con instalaciones de primera y un restaurante exclusivo.",
      },
      {
        title: "Restaurante Gourmet 'El Portal'",
        image:
          "https://www.tripadvisor.com/Restaurant_Review-g297315-d2336725-Reviews-El_Portal-Cochabamba_Cochabamba_Department.html",
        location: "Avenida América Oeste #456, Cochabamba",
        description:
          "Restaurante de alta cocina conocido por su exquisita carta y ambiente elegante.",
      },
      {
        title: "Casa de Campo",
        image:
          "https://www.tripadvisor.com/Restaurant_Review-g297315-d3400973-Reviews-Casa_de_Campo-Cochabamba_Cochabamba_Department.html",
        location: "Zona Norte, Cochabamba",
        description:
          "Un lugar exclusivo para eventos sociales con arquitectura colonial.",
      },
      {
        title: "Café París",
        image:
          "https://www.tripadvisor.com/Restaurant_Review-g297315-d10090758-Reviews-Cafe_Paris-Cochabamba_Cochabamba_Department.html",
        location: "Plaza 14 de Septiembre, Cochabamba",
        description:
          "Cafetería con un diseño clásico francés, ideal para reuniones elegantes.",
      },
    ],
    link: "/elegant-places",
  },
  {
    section: "Lugares para negocios",
    places: [
      {
        title: "Centro Empresarial Calacoto",
        image: "https://example.com/image1.jpg",
        location: "Zona Centro, Cochabamba",
        description:
          "Moderno centro empresarial con espacios de coworking y oficinas privadas.",
      },
      {
        title: "Café Work",
        image: "https://example.com/image2.jpg",
        location: "Avenida América #234, Cochabamba",
        description:
          "Un café con espacios dedicados para reuniones de negocios y trabajo remoto.",
      },
      {
        title: "Business Lounge Boliviana",
        image: "https://example.com/image3.jpg",
        location: "Aeropuerto Jorge Wilstermann, Cochabamba",
        description: "Un lounge exclusivo para profesionales en tránsito.",
      },
      {
        title: "Hotel y Centro de Convenciones Regina",
        image: "https://example.com/image4.jpg",
        location: "Sacaba, Cochabamba",
        description:
          "Centro con instalaciones para eventos corporativos y conferencias.",
      },
    ],
    link: "/business-places",
  },
  {
    section: "Lugares para cumpleaños",
    places: [
      {
        title: "Happy Jump Cochabamba",
        image: "https://example.com/image5.jpg",
        location: "Zona Sur, Cochabamba",
        description:
          "Centro de trampolines ideal para fiestas de cumpleaños infantiles.",
      },
      {
        title: "Restaurante 'El Molino'",
        image: "https://example.com/image6.jpg",
        location: "Avenida Pando, Cochabamba",
        description:
          "Restaurante con espacios privados para celebrar eventos especiales.",
      },
      {
        title: "Salón de Eventos 'Infinity'",
        image: "https://example.com/image7.jpg",
        location: "Zona Norte, Cochabamba",
        description:
          "Un lugar elegante para fiestas de cumpleaños y eventos familiares.",
      },
      {
        title: "Parque de Diversiones Aventura",
        image: "https://example.com/image8.jpg",
        location: "Cercado, Cochabamba",
        description:
          "Parque temático con juegos y espacios para celebrar cumpleaños.",
      },
    ],
    link: "/birthday-places",
  },
  {
    section: "Experiencias únicas",
    places: [
      {
        title: "Paseo en Globo Aerostático",
        image: "https://example.com/image9.jpg",
        location: "Quillacollo, Cochabamba",
        description:
          "Una experiencia inolvidable con vistas espectaculares desde el cielo.",
      },
      {
        title: "Tour a la Gruta de las Galaxias",
        image: "https://example.com/image10.jpg",
        location: "Villa Tunari, Cochabamba",
        description: "Exploración de una gruta natural con formaciones únicas.",
      },
      {
        title: "Casa de las Mariposas",
        image: "https://example.com/image11.jpg",
        location: "Chapare, Cochabamba",
        description:
          "Santuario para mariposas y aves exóticas, perfecto para los amantes de la naturaleza.",
      },
      {
        title: "Camping en el Parque Tunari",
        image: "https://example.com/image12.jpg",
        location: "Cercanías de Cochabamba",
        description:
          "Disfruta de una noche bajo las estrellas en este parque natural.",
      },
    ],
    link: "/unique-places",
  },
  // {
  //     section: "Mi lista",
  //     places: [
  //         {
  //             title: "Lugares guardados por ti",
  //             image: "",
  //             location: "Personalizado",
  //             description: "Accede a todos los lugares que guardaste en tu lista."
  //         }
  //     ],
  //     link: "/my-list"
  // }
];

function Sections() {
  const [placeUser, setPlaceUser] = useState([]);
  useEffect(() => {
    const getPlacesUser = async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/getPlaces/places"
      );
      const data = await response.json();
      setPlaceUser(data.data.reverse());
    };
    getPlacesUser();
  }, []);
  const groupedPlaces = placeUser?.reduce((acc, place) => {
    if (!acc[place.category]) {
      acc[place.category] = [];
    }
    acc[place.category].push(place);
    return acc;
  }, {});
  return (
    <>
      {Object.keys(groupedPlaces).map((category) => (
        <section key={category} className="mb-5">
          <h4 className="text-purple mt-4 mb-3 fw-bolder mx-5">{category}</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {groupedPlaces[category].map((place) => (
              <Card
                key={place.id}
                title={place.location}
                body={place.name}
                href={place.url}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default Sections;
