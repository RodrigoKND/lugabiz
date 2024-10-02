import Isearch from "../../Icons/Isearch"
import Input from "../ui/Input"
import "./Navbar.css"
function InputSearch() {
    return (
        <div
            className="d-flex justify-content-center"
            id="navbarSupportedContent">
            <form className="d-flex" role="search">
                <Input
                    isBarSearch={true}
                    placeholder="Descubre asombrosas experiencias..."
                    type="search"
                />
                <span>
                    <button className="btn input-group-text border" id="basic-addon1">
                        <Isearch />
                    </button>
                </span>
            </form>
        </div>
    );
}

export default InputSearch