import MainContent from "./components/maincontent";
import Sidebar from "./components/sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Ronald Queiroz</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
