import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: "Александр",
    email: "pochta@yandex.ru",
    id: "6506ea2d69e6c40f81b0e994",
  });

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
      }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        {/* // <div className="app-container"> */}
        <div className="page">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="signup" element={<Register />}></Route>
            <Route path="signin" element={<Login />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="saved-movies" element={<SavedMovies />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Routes>
        </div>
        {/* // </div> */}
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
