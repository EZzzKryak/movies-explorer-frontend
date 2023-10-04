import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  const [currentUser, setCurrentUser] = useState({
    name: "Александр",
    email: "pochta@yandex.ru",
    id: "6506ea2d69e6c40f81b0e994",
  });

  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);

  const handleLogin = () => {
    console.log("Вы вошли!");
    // setTooltipStatus(true);
    // setIsTooltipPopupOpen(true);
    setLoggedIn(true);
    navigate("/");
  };
  const handleRegister = () => {
    console.log("Вы зарегистрировались!");
    setTooltipStatus(true);
    setIsTooltipPopupOpen(true);
    navigate("/signin");
  };
  const handleEditProfile = profileData => {
    setCurrentUser({
      ...currentUser,
      name: profileData.name,
      email: profileData.email,
    });
    setTooltipStatus(true);
    setIsTooltipPopupOpen(true);
  };
  const handleSignOut = () => {
    console.log('Вы вышли');
    setLoggedIn(false);
    navigate("/");
  };

  const closeAllPopups = () => {
    setIsTooltipPopupOpen(false);
  };

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
            <Route
              path="signup"
              element={<Register handleRegister={handleRegister} />}
            ></Route>
            <Route
              path="signin"
              element={<Login handleLogin={handleLogin} />}
            ></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="saved-movies" element={<SavedMovies />}></Route>
            <Route
              path="profile"
              element={
                <Profile
                  handleEditProfile={handleEditProfile}
                  onSignOut={handleSignOut}
                />
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <InfoTooltip
            isOpen={isTooltipPopupOpen}
            onClose={closeAllPopups}
            tooltipStatus={tooltipStatus}
          />
        </div>
        {/* // </div> */}
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
