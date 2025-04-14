import { AiFillPhone, AiOutline, AiFillEnvironment, AiOutlineMail } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";


const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(88) 98115-7751</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>Email</h3>
                    <p>ronaldqueiroz13@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Quixeramobim / CE</p>
                </div>
            </div>
        </section>
    );
}
 
export default InformationContainer;