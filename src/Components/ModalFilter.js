import Modal from "react-modal";
import {ReactComponent as IconClose} from '../Assets/Images/close.svg'

const ModalFilter = ({isOpen, onCLose, title}) => {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onCLose}
            className="modal-filter"
            overlayClassName="overlay"
        >
            <div>
                <h4>{title}</h4> 
                <IconClose onClick={onCLose}/>
            </div>
        </Modal>
    )
}

export default ModalFilter