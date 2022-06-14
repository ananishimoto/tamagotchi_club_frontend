import React, { useEffect } from "react";
import "./App.css";

import { Loading, MessageBox, Navigation } from "./components";
import { Club, HomePage, Login, Profile, SignUp, TipsAndTricks } from "./pages";

import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/club/:id" element={<Club />} />
        <Route path="/tips" element={<TipsAndTricks />} />
      </Routes>
    </div>
  );
}

export default App;
