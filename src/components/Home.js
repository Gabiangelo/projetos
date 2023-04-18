import { FaCode} from "react-icons/fa";
import avatar from '../img/AvatarAndIcons.svg';

import './Home.css'
function Home() {
    return ( 
        <div className="container">
            <div className="text-content">
                <h1><FaCode/>Progamando com React</h1>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="avatar">
                <img src={avatar}/>
            </div>
        </div>
     );
}

export default Home;