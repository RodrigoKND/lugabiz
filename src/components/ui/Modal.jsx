function Modal({ isVisibleModal, children }) {

    return (
        <dialog
            open={isVisibleModal}
            className="position-fixed top-50 start-50 translate-middle w-100 h-100 isModalVisible border border-0 rounded-3"
            style={{ zIndex: 1000 }}>
            {children}
        </dialog>
    )
}

export default Modal;