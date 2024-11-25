import Button from "../ui/Button"

function Hero() {
    return (
        <section
            className="bg_gradient">
            <div className="container mx-auto text-center">
                <h3 className="mb-3 fs-1">Descubre lugares cotidianos</h3>
                <p className="text-muted mb-5 fs-5">Explora y comparte tus lugares favoritos de tu ciudad</p>
                <Button 
                    onClick={() => document.documentElement.scrollTop = 20 * 22}
                    styleButton="bg-purple text-decoration-none fs-5 fw-medium text-white px-5 py-2 rounded-3">
                    Empezar a explorar
                </Button>
            </div>
        </section>
    );
}

export default Hero;