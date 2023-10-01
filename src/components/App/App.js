import Header from "../Header/Header";
// import Project from "../Project/Project";
// import Techs from "../Techs/Techs";
// import Portfolio from "../Portfolio/Portfolio";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    // <div className="app-container">
    <div className="page">
      <Header loggedIn={loggedIn} />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="signin" element={<Login />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="saved-movies" element={<SavedMovies />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>

      <Footer />
    </div>
    // </div>
  );
};

export default App;
