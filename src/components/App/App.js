import Header from "../Header/Header";
// import Promo from "../Promo/Promo";
// import Project from "../Project/Project";
// import Techs from "../Techs/Techs";
// import AboutMe from "../AboutMe/AboutMe";
// import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Films from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

const App = () => {
  return (
    // <div className="dark-bg">
    <div className="page">
      <Header />

      <main className="main">
        <Films />
        <SavedMovies />
        {/* <Promo />
        <Project />
        <Techs />
        <AboutMe />
        <Portfolio /> */}
      </main>

      <Footer />
    </div>
    // </div>
  );
};

export default App;
