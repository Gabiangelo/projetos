import { Link } from 'react-router-dom';
import './LinkButton.css';

function LinkButton(props) {
    return (
        <Link 
            to={props.to}
        >
           <button className='question-btn'>Solução</button>
        </Link>
    )
}

export default LinkButton;