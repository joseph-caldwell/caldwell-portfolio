
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutMe from './components/about-me/About-Me';
import Services from './components/services/Services';
import Experience  from './components/experience/Experience';


function App() {
  return (
    <>

      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
    </>
  );
}

export default App;
