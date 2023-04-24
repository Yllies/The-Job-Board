import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header title="The Job Board" />
        <div className="list">
          <div className="card">
            <Jobs
              title="Chef de Projets"
              contractType="CDI"
              country="Australie"
              city="Sydney"
            />
          </div>
          <div className="card">
            <Jobs
              title="Agent de Sécurité"
              contractType="CDD"
              country="France"
              city="Marseille"
            />
          </div>
          <div className="card">
            <Jobs
              title="Développeur React.js"
              contractType="CDI"
              country="France"
              city="Paris"
            />
          </div>
          <div className="card">
            <Jobs
              title="Développeur Node.js"
              contractType="CDD"
              country="France"
              city="Aix-en-Provence"
            />
          </div>
          <div className="card">
            <Jobs
              title="Développeur Angular"
              contractType="CDI"
              country="France"
              city="Nice"
            />
          </div>
          <div className="card">
            <Jobs
              title="CRM & Data Quality Analyst"
              contractType="CDD"
              country="France"
              city="Nice"
            />
          </div>
          <div className="card">
            <Jobs
              title="Vendeur/se"
              contractType="CDI"
              country="Italie"
              city="Milan"
            />
          </div>
          <div className="card">
            <Jobs
              title="Infirmier (H/F)"
              contractType="CDI"
              country="France"
              city="Sydney"
            />
          </div>
        </div>
      </div>
      <Footer library="React" bootcamp="Le Reacteur" name="Yllies" />
    </>
  );
}

export default App;
