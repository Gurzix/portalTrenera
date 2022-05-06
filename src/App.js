import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useReducer, useRef} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Footer from "./components/Footer/Footer";
import Main from "./components/ContentContainer/Main/Main";
import ExampleEx from "./components/ExampleEx";
import Training from "./components/ContentContainer/Training/Training";
import Login from "./components/ContentContainer/Login/Login";
import Register from "./components/ContentContainer/Register/Register";
import YouMustLogin from "./components/ContentContainer/YouMustLogin/YouMustLogin";
import useWebsiteTitle from "./components/hooks/useWebsiteTitle";
import AuthContext from "./components/context/authContext";

function App() {

  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef)
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  useWebsiteTitle("Strona główna");


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
    finalizacja: {
      category: "shooting",
      title: "Rozegranie akcji zakończone strzałem na bramkę",
      img: "img/finalizacja.png",
      p: "Schemat działań jak na rysunku. Zawodnicy rozgrywają akcję na połowie przeciwnika, szukając podania prostopadłego między linię obrońców ustawioną z 'brazylijczyków', na zawodnika nr 10 rotującego z 9 lub zawodników 7/11 ",
      coachingPoints:
        "Uczul zawodników na szybką grę piłką na jeden/dwa kontakty. Zwróć uwagę na rotację na pozycjach, wyjście do piłki oraz odpowiedni timing ",
      author: "Piotr Gurzęda",
    },
    atakSzybki4x4: {
      category: "game",
      title: "Doskonalenie ataku szybkiego w grze 4 x 4.",
      img: "img/atakSzybki4x4.png",
      p: "Schemat działań jak na rysunku. Ćwiczenie rozpoczyna się podaniem od zawodnika stojącego najbliżej piłki do zawodnika nr 9, który zgrywa piłkę do wbiegających kolegów z jego drużyny. Po zagraniu obrońca mija wyznaczony pachołek i przechodzi do działań defensywnych. W tym samym czasie dwóch kolejnych obrońców wykonuje zadanie na płotkach i również przechodzi do zadań w defensywie. W tym czasie zespół atakujący znajduje się w przewadze 4 x 1 w ofensywie. ",
      coachingPoints:
        "Zawodnicy będący w ofensywie powinni jak najszybciej skończyć akcję. Muszą wykorzystać przewagę, grając na jeden,dwa kontakty. Piłka musi być grana do przodu,tak, aby uniemożliwić powrót do defensywy zawodnikom broniącym. ",
      author: "Piotr Gurzęda",
    },
    zegar: {
      category: "passing",
      title: "Zegar - doskonalenie podań z wyjściem do piłki po obiegu za plecy",
      img: "img/zegar.png",
      p: "Schemat działań jak na rysunku. W zależności od ilości osób w środku z piłką znajduje się jedna lub więcej par. Ćwiczenie rozpoczyna podaniem ze środka do zawodnika stojącego na obwodzie koła (zegara) jeden z zawodników znajdujących się w środku, po czym wchodzi w miejsce zawodnika do którego podał piłkę. Zawodnik z obwodu koła, który otrzymał piłkę od środkowego gra ją z powrotem do środka, do drugiego zawodnika z pary i idzie mu za plecy. Zawodnik , który otrzymał piłkę, gra ją znowu na obwód do kolejnego zawodnika tworzącego zegar. Sekwencja zaczyna się od nowa ",
      coachingPoints:
        "Zwróć uwagę na wyjście do zagranej piłki. Piłka powinna być zagrana na dalszą nogę, do przodu. ",
      author: "Piotr Gurzęda",
    },
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login: () => dispatch({ type: "login" }),
        logout: () => dispatch({ type: "logout" }),
      }}
    >
      <div  ref={myRef} className="App">
        <Router>
          <Header goTo={executeScroll}></Header>
          <Routes>
            <Route path="/"  element={<ContentContainer/>}>
              <Route
                index
                element={<Main goTo={executeScroll} exampleExcersises={exampleExcersises} />}
              />
              <Route
                path="/:item"
                element={<ExampleEx goUp={myRef} exampleExcersises={exampleExcersises} />}
              ></Route>
              <Route
                path="training"
                element={state.isAuthenticated ? <Training goTo={executeScroll} exampleExcersises={exampleExcersises} /> : <YouMustLogin goTo={executeScroll}/>}
              />
            </Route>
            <Route path="login" element={<Login goTo={executeScroll} />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>

        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
