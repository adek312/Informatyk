import MainContent from "../components/MainCard/MainContent.js";
import TopNavBar from "../components/TopNavBar/TopNavBar.js";

function Start() {
  const inf02TeoriaPara = (
    <p>
      Wybierz kwalifikacje i zacznij naukę do teorii.<br></br>
      Więcej informacji o egzaminie teoretycznym znajdziesz:{" "}
      <a href="oegzaminie">
        <span style={{ color: "#58A4B0" }}>tutaj</span>
      </a>
    </p>
  );
  // Dodac do linku od razu scroll do sekcji egzamin teoria

  return (
    <>
      <TopNavBar></TopNavBar>
      <MainContent header="Egzamin Teoretyczny" para={inf02TeoriaPara} />
    </>
  );
}

export default Start;
