import React, { useEffect, useState } from "react";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoStorefront,
  IoArrowForward,
  IoArrowBack,
} from "react-icons/io5";
import FormInput from "../components/ui/FormInput";
import SocialGroupSelect from "../components/ui/SocialGroupSelect";
import ImageUpload from "../components/ui/ImageUpload";
import Header from "../components/ui/Header";
import FormSection from "../components/ui/FormSection";
import StepIndicator from "../components/ui/StepIndicator";
import { Formik } from "formik";
import { set } from "ol/transform";

const STEPS = [
  { id: 1, title: "Información básica" },
  { id: 2, title: "Ubicación" },
  { id: 3, title: "Horario" },
  { id: 4, title: "Detalles" },
  { id: 5, title: "Social" },
  { id: 6, title: "Fotos" },
];
function FormPostPlace() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    socialGroups: [],
    openTime: "",
    dayOpen: " ",
    dayClose: " ",
    category: " ",
    priceFrom: "",
    priceTo: "",
    closeTime: "",
    image: [],
  });

  const socialOptions = [
    { id: "family", label: "Planes en Familia", img: "/public/family.svg" },
    { id: "couple", label: "En Pareja", img: "/public/pairs.svg" },
    { id: "friends", label: "Con Amigos", img: "/public/friends.svg" },
    { id: "pet", label: "Con mi mascota", img: "/public/pet.svg" },
    { id: "alone", label: "Tiempo para mí", img: "/public/timeforme.svg" },
  ];

  const handleSocialGroupChange = (group) => {
    setFormData((prev) => ({
      ...prev,
      socialGroups: prev.socialGroups.includes(group)
        ? prev.socialGroups.filter((g) => g !== group)
        : [...prev.socialGroups, group],
    }));
  };

  const [formData3, setFormData3] = useState({
    option: "",
  });

  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setFormData3({ ...formData3, [e.target.name]: e.target.value });
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    if (formData3.option.trim() !== "") {
      setOptions([...options, formData3.option.trim()]);
      setFormData3({ option: "" });
    }
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const [size, setSize] = useState(0);
  const [message, setMessage] = useState("");

  const handleUploadImage = (evt) => {
    setMessage("");
    const images = evt.target.files;
    const mymeTypes = ["image/png", "image/jpg", "image/jpeg"];
    Object.values(images).forEach((image) => {
      const isType = mymeTypes.includes(image.type);
      if (!isType) {
        setMessage(
          "El tipo de imagen no es válido, solo se aceptan (jpg, jpeg y png)"
        );
        return;
      }

      const BYTES = 2 * 1024 * 1024;
      setSize(size + image.size);
      if (size > BYTES) {
        setMessage("Limite de imágenes excedido");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onloadend = () => {
        const nameImage = image.name;
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: [
            ...prevFormData.image,
            { name: nameImage, url: reader.result, type: image.type },
          ],
        }));
      };
    });
  };

  const categories = [
    {
      title: "Evento",
    },
    {
      title: "Ofertas y Promociones",
    },
    {
      title: "Apto para fines de semana",
    },
    {
      title: "Lugares elegantes",
    },
    {
      title: "Lugares para negocios",
    },
    {
      title: "Lugares para cumpleaños",
    },
    {
      title: "Pasar el tiempo",
    },
    {
      title: "Restaurantes",
    },
    {
      title: "Puesto de comida",
    },
    {
      title: "Entretenimiento",
    },
    {
      title: "Restaurante con temática",
    },
    {
      title: "Plaza",
    },
    {
      title:'Para cumpleaños'
    }
  ];

  const daysWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const handlePriceChange = (e, field) => {
    const value = e.target.value;

    if (!isNaN(value) && value.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      setMessage("");
    } else if (value.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        [field]: "",
      }));
      setMessage("");
    } else {
      setMessage("Formato no válido para el rango de precios");
    }
  };

  const stepsConfig = {
    0: {
      title: "Información básica",
      subtitle: (formData) =>
        `Comienza con los detalles principales para: ${formData.name}`,
      content: (formData, setFormData) => (
        <div className="mb-4">
          <div className="row align-items-center">
            <FormInput
              className={"col-md-6"}
              label="Nombre del lugar"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Ej: Espresso"
              maxLength={25}
              icon={<IoStorefront />}
            />
            <div className="col-md-6 mb-3">
              <label className="form-label">Categoría</label>
              <select
                className="form-select"
                aria-label="Default select category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option disabled value=" ">
                  Seleccione una categoría
                </option>
                {categories
                  .sort((a, b) => new Intl.Collator().compare(a.title, b.title))
                  .map((category, index) => (
                    <option key={index} value={category.title}>
                      {category.title}
                    </option>
                  ))}
              </select>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <FormInput
                className={"col-md-3"}
                label={"Rango de Precios (opcional)"}
                maxLength={5}
                placeholder={"De:"}
                value={formData.priceFrom}
                onChange={(e) => handlePriceChange(e, "priceFrom")}
              />
              <span className="mt-3">-</span>
              <FormInput
                className={"col-md-3 text-end"}
                label="😊"
                maxLength={5}
                placeholder={"Hasta:"}
                value={formData.priceTo}
                onChange={(e) => handlePriceChange(e, "priceTo")}
              />
            </div>
          </div>
          <FormInput
            label="Descripción"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="¿Qué hace especial a este lugar?"
            isTextArea
          />
        </div>
      ),
    },
    1: {
      title: "Ubicación",
      subtitle: "Ayuda a otros a encontrar este lugar fácilmente",
      content: (formData, setFormData) => (
        <FormInput
          label="Dirección"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          icon={<IoLocationOutline />}
        />
      ),
    },
    2: {
      title: "Horario del lugar",
      subtitle: "Información adicional para los visitantes",
      content: (formData, setFormData) => (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Horario de Apertura</label>
            <div className="input-group">
              <input
                type="time"
                value={formData.openTime}
                onChange={(e) =>
                  setFormData({ ...formData, openTime: e.target.value })
                }
                className="form-control"
              />
              <span className="input-group-text">
                <IoTimeOutline />
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Horario de Cierre</label>
            <div className="input-group">
              <input
                type="time"
                value={formData.closeTime}
                onChange={(e) =>
                  setFormData({ ...formData, closeTime: e.target.value })
                }
                className="form-control"
              />
              <span className="input-group-text">
                <IoTimeOutline />
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Dia de Apertura</label>
            <select
              className="form-select"
              aria-label="Default select open day"
              value={formData.dayOpen}
              onChange={(e) =>
                setFormData({ ...formData, dayOpen: e.target.value })
              }
            >
              <option disabled value=" ">
                Seleccione el dia de apertura
              </option>
              {daysWeek.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Dia de Cierre</label>
            <select
              className="form-select"
              aria-label="Default select close day"
              onChange={(e) =>
                setFormData({ ...formData, dayClose: e.target.value })
              }
              value={formData.dayClose}
            >
              <option disabled value=" ">
                Seleccione el dia de cierre
              </option>
              {daysWeek.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      ),
    },
    3: {
      title: "Detalles del lugar",
      subtitle: "Añade las características que ofrece el lugar",
      content: (formData3) => (
        <>
          <div className="row">
            <div className="col-md-8">
              <input
                className="form-control"
                type="text"
                placeholder="Ej: Parqueo gratuito para clientes"
                name="option"
                value={formData3.option}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleAddOption}
              >
                Agregar
              </button>
            </div>
          </div>
          <div className="mt-4 row">
            {options.map((option, index) => (
              <div key={index} className="mb-3 col-md-6">
                <div className="shadow-sm card">
                  <div className="card-body text-center">
                    <div className="card-text">{option}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    4: {
      title: "Experiencia social",
      subtitle: "¿Para quién es ideal este lugar?",
      content: (formData) => (
        <SocialGroupSelect
          options={socialOptions}
          selectedGroups={formData.socialGroups}
          onChange={handleSocialGroupChange}
        />
      ),
    },
    5: {
      title: "Fotos del lugar",
      subtitle: "Comparte imágenes que muestren lo mejor del lugar",
      content: (formData) => (
        <>
          <ImageUpload onChange={handleUploadImage} />
          <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
            {formData.image &&
              formData.image.map((image, index) => (
                <div
                  className="card my-2"
                  key={index}
                  style={{ width: "18rem" }}
                >
                  <img
                    src={image.url}
                    alt={`image-${index + 1}`}
                    className="card-img-top object-fit-cover w-100"
                    style={{ height: "10rem" }}
                  />
                </div>
              ))}
          </div>
        </>
      ),
    },
  };

  const renderStepContent = () => {
    const step = stepsConfig[currentStep];
    if (!step) return null;
    return (
      <FormSection
        title={step.title}
        subtitle={
          typeof step.subtitle === "function"
            ? step.subtitle(formData)
            : step.subtitle
        }
      >
        {step.content(formData, setFormData)}
      </FormSection>
    );
  };

  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async () => {
    const requiredFields = [
      "name",
      "description",
      "location",
      "socialGroups",
      "openTime",
      "dayOpen",
      "dayClose",
      "category",
      "closeTime",
      "image",
    ];

    for (let field of requiredFields) {
      if (
        !formData[field] ||
        (Array.isArray(formData[field]) && formData[field].length === 0)
      ) {
        setMessage(`El campo ${field} es obligatorio`);
        return;
      }
    }

    const dataPlace = {
      ...formData,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/places/upload/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataPlace),
        }
      );

      if (!response.ok) {
        setMessage(`Error al procesar el formulario`);
        setIsSuccess(false);
      }

      const data = await response.json();
      if (data.success) {
        setIsVisible(true);
        setMessage("Lugar publicado exitosamente");
        setIsSuccess(true);
      }else {
        setMessage("Error al publicar el lugar");
        setIsSuccess(false);
        setIsVisible(true);
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      setMessage(
        "Hubo un problema al enviar los datos. Inténtelo nuevamente."
      );
      setIsSuccess(false);
    }
  };

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (message) {
      setIsVisible(true);
    }
  }, [message]);

  return (
    <div className="container">
      <Header />
      <div className="mt-4">
        <StepIndicator steps={STEPS} currentStep={currentStep} />
        <Formik initialValues={formData} onSubmit={handleSubmit}>
          {({ handleSubmit, isSubmitting }) => (
            <>
              {message && (
                <div
                  className={`position-fixed bottom-0 mb-2 me-2 end-0 z-3 ${
                    isVisible ? "fade-in" : "fade-out"
                  }`}
                >
                  <div className={`text-bg-primary ${
                    isSuccess ? "bg-success": "bg-danger"
                  } p-3 border-0`}>
                    <div className="d-flex">
                      <div className="">{message}</div>
                      <button
                        type="button"
                        className="btn-close btn-close-white me-2 ms-4"
                        aria-label="Close"
                        onClick={() => {
                          setMessage("");
                          setIsVisible(false);
                        }}
                      ></button>
                    </div>
                  </div>
                </div>
              )}
              <form className="my-4" onSubmit={handleSubmit}>
                <div className="card p-4">
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn btn-secondary"
                      disabled={currentStep === 0}
                    >
                      <IoArrowBack /> Anterior
                    </button>
                    {currentStep !== STEPS.length - 1 && (
                      <button
                        type="button"
                        role="button"
                        onClick={nextStep}
                        className="btn btn-primary"
                      >
                        Siguiente <IoArrowForward />
                      </button>
                    )}
                    {currentStep === STEPS.length - 1 && (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {
                          isSubmitting ? "Publicando..." : "Publicar lugar"
                        }
                      </button>
                    )}
                  </div>

                  {renderStepContent()}
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormPostPlace;
