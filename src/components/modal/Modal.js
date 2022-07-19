

export const Modal = ({ openModal, setOpenModal }) => {

    return <dialog open={openModal ? true : false}>
        <h3>This is a Modal</h3>
        <button
            onClick={
                () => setOpenModal(false)

            }
        >Close</button>
    </dialog >
}