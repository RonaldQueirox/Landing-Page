import '../styles/components/maincontent.sass';
import AboutContainer from './aboutcontainer';
import ProjectsContainer from './projectscontainer';
import TechnologiesContainer from './technologiescontainer';

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
}

export default MainContent