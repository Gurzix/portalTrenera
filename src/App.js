import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Footer from "./components/Footer/Footer";
import Main from "./components/ContentContainer/Main/Main";
import ExampleEx from "./components/ExampleEx";
import Training from "./components/ContentContainer/Training/Training";
import Login from "./components/ContentContainer/Login/Login";
import Register from "./components/ContentContainer/Register/Register";
import NotFound from "./components/ContentContainer/NotFound/NotFound";
import useWebsiteTitle from "./components/hooks/useWebsiteTitle";
import AuthContext from "./components/context/authContext";

function App() {

  useWebsiteTitle("Strona główna");
;
  const initialState = {
    isAuthenticated: JSON.parse(window.localStorage.getItem('token-data')) ? true : false ,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, isAuthenticated: true };
      case "logout":
        return { ...state, isAuthenticated: false };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const exampleExcersises = {
    kombinacja1: {
      category: "passing",
      title: "Wyjście spod pressingu - dwa warianty rozegrania",
      img: "img/wyjscie-spod-pressingu-dwa-warianty.png",
      p: "Ćwiczenie w formie ścisłej doskonalące otwarcie gry od bramkarza. Sekwencja podań wg kolejności.",
      coachingPoints:
        "Zwróć uwagę na rotację zawodników z pozycji nr 6 i nr 10. Defensywny pomocnik (6) ucieka w górę, zabierając swojego zawodnika i robiąc miejsce dla ofensywnego pomocnika zbiegającego do podania od środkowego obrońcy ",
      author: "Piotr Gurzęda",
    },
    kombinacja2: {
      category: "passing",
      title:
        "Kombinacja podań doskonaląca wyjście spod pressingu oraz grę na ścianę.",
      img: "img/kombinacja-pod-wyjscie-spod-pressingu.png",
      p: "Ćwiczenie w formie ścisłej doskonalące grę 'na ścianę', ułatwiające wyjście spod pressingu oraz grę na połowie przeciwnika. Zmiany o jednego w górę.",
      coachingPoints:
        "Zwróć uwagę na rotację zawodników oraz mocne i celne podania. Ruch do piłki i gra na jeden kontakt ",
      author: "Piotr Gurzęda",
    },
    kombinacja3: {
      category: "passing",
      title:
        "Kombinacja podań doskonaląca współpracę z graczem ustawionym wyżej (9) oraz grę na ścianę.",
      img: "img/kombinacja-podan-gra-na-sciane-z-9 .png",
      p: "Ćwiczenie w formie ścisłej doskonalące grę 'na ścianę'. Zmiany za podaniem.",
      coachingPoints:
        "Uczul zawodników, aby zawsze szukali możliwości gry do najwyżej ustawionego zawodnika. ",
      author: "Piotr Gurzęda",
    },
    strzelba: {
      category: "shooting",
      title:
        "Schemat rozegrania ataku na połowie przeciwnika zakończony strzałem - 2 warianty",
      img: "img/schemat-rozegrania-zakonczony-strzalem-2-warianty.png",
      p: "Schemat rozegrania ataku odpowiedni dla systemu 4-3-3. ",
      coachingPoints:
        "Uczul zawodników, aby zawsze szukali możliwości gry do najwyżej ustawionego zawodnika. ",
      author: "",
    },
    kombinacja4: {
      category: "passing",
      title: "Kombinacja podań na jeden kontakt z wyjściem do piłki.",
      img: "img/kombinacja-podan-na-jeden-kontakt.png",
      p: "Zmiany za podaniem.",
      coachingPoints:
        "Zwróc uwagę na ustawienie ciała oraz podanie piłki w tempo biegu.",
      author: "Piotr Gurzęda",
    },
    graTransferPoz: {
      category: "game",
      title: "Gra doskonaląca przejście z obrony do ataku z 2 obrońcami.",
      img: "img/gra-transfer-pozytywny.png",
      p: "Gra na utrzymanie w wyznaczonym sektorze. Zespół utrzymujący się przy piłce stara się uniknąć straty, zespół broniący dąży do odzyskania piłki i przejścia do działań ofensywnych przeciwko dwóm broniącym zawodnikom ustawionym w strefie przed bramką.",
      coachingPoints:
        "Po odbiorze szybkie wyjście zawodników w stronę bramki - stworzenie przewagi i możliwości wyboru rozegrania przez zawodnika z piłką.",
      author: "Piotr Gurzęda",
    },
    szukanieStrefy: {
      category: "game",
      title: "Gra doskonaląca podanie w wolną przestrzeń między strefy.",
      img: "img/tricolore-z-gra-w-wolna-przestrzen-miedzy-strefy.png",
      p: "Schemat działań jak na rysunku. Będący przy piłce starają się znaleźć możliwość podania piłki do wbiegającego (lub kilku wbiegających) zawodników w strefę za plecami broniących. Dwóch broniących w strefie aktywnego odbioru, dwóch w strefie bliższej, tak, aby za ich plecami była przestrzeń do wbiegania dla zawodników ofensywnych. ",
      coachingPoints:
        "Uczul zawodników na szybką grę piłką oraz ustawienie wysokie w ataku. ",
      author: "Piotr Gurzęda",
    },
    // graTransferPoz: {
    //   category: 'game',
    //   title: "Gra doskonaląca przejście z obrony do ataku z 2 obrońcami.",
    //   img: "img/gra-transfer-pozytywny.png",
    //   p: "Gra na utrzymanie w wyznaczonym sektorze. Zespół utrzymujący się przy piłce stara się uniknąć straty, zespół broniący dąży do odzyskania piłki i przejścia do działań ofensywnych przeciwko dwóm broniącym zawodnikom ustawionym w strefie przed bramką.",
    //   coachingPoints: "Po odbiorze szybkie wyjście zawodników w stronę bramki - stworzenie przewagi i możliwości wyboru rozegrania przez zawodnika z piłką.",
    //   author: 'Piotr Gurzęda',
    // },  graTransferPoz: {
    //   category: 'game',
    //   title: "Gra doskonaląca przejście z obrony do ataku z 2 obrońcami.",
    //   img: "img/gra-transfer-pozytywny.png",
    //   p: "Gra na utrzymanie w wyznaczonym sektorze. Zespół utrzymujący się przy piłce stara się uniknąć straty, zespół broniący dąży do odzyskania piłki i przejścia do działań ofensywnych przeciwko dwóm broniącym zawodnikom ustawionym w strefie przed bramką.",
    //   coachingPoints: "Po odbiorze szybkie wyjście zawodników w stronę bramki - stworzenie przewagi i możliwości wyboru rozegrania przez zawodnika z piłką.",
    //   author: 'Piotr Gurzęda',
    // },  graTransferPoz: {
    //   category: 'game',
    //   title: "Gra doskonaląca przejście z obrony do ataku z 2 obrońcami.",
    //   img: "img/gra-transfer-pozytywny.png",
    //   p: "Gra na utrzymanie w wyznaczonym sektorze. Zespół utrzymujący się przy piłce stara się uniknąć straty, zespół broniący dąży do odzyskania piłki i przejścia do działań ofensywnych przeciwko dwóm broniącym zawodnikom ustawionym w strefie przed bramką.",
    //   coachingPoints: "Po odbiorze szybkie wyjście zawodników w stronę bramki - stworzenie przewagi i możliwości wyboru rozegrania przez zawodnika z piłką.",
    //   author: 'Piotr Gurzęda',
    // },  graTransferPoz: {
    //   category: 'game',
    //   title: "Gra doskonaląca przejście z obrony do ataku z 2 obrońcami.",
    //   img: "img/gra-transfer-pozytywny.png",
    //   p: "Gra na utrzymanie w wyznaczonym sektorze. Zespół utrzymujący się przy piłce stara się uniknąć straty, zespół broniący dąży do odzyskania piłki i przejścia do działań ofensywnych przeciwko dwóm broniącym zawodnikom ustawionym w strefie przed bramką.",
    //   coachingPoints: "Po odbiorze szybkie wyjście zawodników w stronę bramki - stworzenie przewagi i możliwości wyboru rozegrania przez zawodnika z piłką.",
    //   author: 'Piotr Gurzęda',
    // },  graTransferPoz: {
    //   category: 'game',
    //   title: "Gra doskonaląca przejście z obrony do ataku z 2 obrońcami.",
    //   img: "img/gra-transfer-pozytywny.png",
    //   p: "Gra na utrzymanie w wyznaczonym sektorze. Zespół utrzymujący się przy piłce stara się uniknąć straty, zespół broniący dąży do odzyskania piłki i przejścia do działań ofensywnych przeciwko dwóm broniącym zawodnikom ustawionym w strefie przed bramką.",
    //   coachingPoints: "Po odbiorze szybkie wyjście zawodników w stronę bramki - stworzenie przewagi i możliwości wyboru rozegrania przez zawodnika z piłką.",
    //   author: 'Piotr Gurzęda',
    // },
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login: () => dispatch({ type: "login" }),
        logout: () => dispatch({ type: "logout" }),
      }}
    >
      <div className="App">
        <Router>
          <Header></Header>

          <Routes>
            <Route path="/" element={<ContentContainer />}>
              <Route
                index
                element={<Main exampleExcersises={exampleExcersises} />}
              />
              <Route
                path="/:item"
                element={<ExampleEx exampleExcersises={exampleExcersises} />}
              ></Route>
              <Route
                path="training"
                element={<Training exampleExcersises={exampleExcersises} />}
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>

        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
