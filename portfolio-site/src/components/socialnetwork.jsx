import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import "../styles/components/socialnetworks.sass"

const socialnetwork = [
    {name: "linkedin", icon: <FaLinkedinIn /> },
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},
];

const SocialNetwork = () => {
    return <section id="social-networks">
        {socialnetwork.map((network) => (
            <a href="#" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
}
 
export default SocialNetwork