import React from "react";
import './WhyUs.css'

const WhyUs = () => {
    return(
        <>
    <h2 className="whyUsH2">Kim jesteśmy?</h2>
    <div className="container">
    <div className="example row py-5">
    <div className="col-md-6 mx-auto"> 
    <img className="img-fluid" src="papszunRadosc.webp" alt="" />
    </div>
    <div className="col-md-6 mx-auto"><p className="whyUsP">Jesteśmy nie tylko Trenerami, ale przede wszystkim pasjonatami piłki nożnej, którzy swoje życie poświęcili tej pięknej dyscyplinie sportu. Planując jednostki treningowe opieramy się na latach doświadczeń z boiska - również tych zawodniczych, oraz wiedzy, którą zdobywamy uczestnicząc w kursokonferencjach, jeżdząc na staże czy ucząc się od kolegów po fachu. Wszystkie ćwiczenia są przez nas dokładnie analizowane i sprawdzane na naszych drużynach. Współpracujemy z Trenerami najlepszych akademii oraz zespołów w Polsce i za granicą. Z nami będziesz mógł wynieść swój trening na wyższy poziom! Możesz mieć pewność, że środki treningowe, które Ci oferujemy sprawdzą się również w pracy z Twoim zespołem!</p></div>
    </div>
    <h2 className="whyUsH2">Jak możemy Ci pomóc?</h2>
    <div className="example row py-5">
    
    <div className="col-md-6 mx-auto"><p className="whyUsP">Dzięki rozbudowanej bazie sprawdzonych, uporządkowanych tematycznie ćwiczeń jesteś w stanie stworzyć konspekt odpowiedni do Twoich potrzeb, zgodny z zaplanowanym tematem treningu. Wszystkie ćwiczenia są przedstawione w formie grafik, które z łatwością wydrukujesz i zabierzesz ze sobą na zajęcia. Każdy środek treningowy opatrzony jest komentarzami, tzw. coaching pointami, które podpowiedzą Ci na co zwrócić uwagę w trakcie jego trwania. Z nami nauczysz się lepiej tworzyć własne ćwiczenia.</p> </div>
    <div className="col-md-6 mx-auto"> 
    <img className="img-fluid" src="taktyka.avif" alt="" />
    </div>
    </div>
    <h2 className="whyUsH2">Dołącz do nas!</h2>
    <div className="example row py-5">
    <div className="col-md-6 mx-auto"> 
    <img className="img-fluid" src="papszunRadosc.webp" alt="" />
    </div>
    <div className="col-md-6 mx-auto"><p className="whyUsP">Naszym celem jest nieustanny rozwój portalu, dlatego poszukujemy do współpracy Trenerów chcących podzielić się z innymi swoim warsztatem. Wyślij do nas swoje środki treningowe, a my opatrzymy je odpowiednim podpisem z Twoim imieniem i nazwiskiem. Połączmy siły i wspólnie stwórzmy Bibliotekę Trenera!</p></div>
    </div>
    </div>
    </>
    );
}

export default WhyUs;