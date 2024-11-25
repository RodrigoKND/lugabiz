import "../../styles/UserStyles.css"
function Modal({ isVisibleModal, children, styleModal }) {
    return (
        <dialog
            open={isVisibleModal}
            className={`position-fixed top-50 start-50 translate-middle 
               isModalVisible ${styleModal} border border-0 rounded-3`}
            style={{ zIndex: 1000 }}>
            {children}
        </dialog>
    )
}

export default Modal;