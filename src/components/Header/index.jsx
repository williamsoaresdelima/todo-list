import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import './header.css';

const Header = ({handle, value}) => {
const AbrirForm = () => handle(!value);

    return (
        <div className="header">
            <div className="title"> Gerenciador de Tarefas </div>
            <div className="add" onClick={AbrirForm}>
                { !value ? <AiOutlinePlus size={15}/> : <AiOutlineMinus size={15} /> }
            </div>        
        </div>
    );
};

//GrSubtract AiOutlineMinus

export default Header;