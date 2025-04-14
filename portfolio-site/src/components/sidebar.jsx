import SocialNetwork from './socialnetwork';

import Avatar from '../img/eu.jpg';

import "../styles/components/sidebar.sass";
import InformationContainer from './informationcontainer';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Ronald Queiroz" />
            <p className="title">Desenvolvedor FullStack</p>
            <SocialNetwork />
            <InformationContainer />
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar