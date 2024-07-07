import "../../styles/MainContent.css";

function MainContent() {
  return (
    <section>
      <div className="MainContent">
        <div className="MainContentHeader">
          <h2>Egzamin Teoretyczny</h2>
          <div />
          <div className="MainContentDescription">
            <div className="MainContentDescriptionText">
              <p>
                Wybierz kwalifikacje i zacznij naukę do teorii.<br></br>
                Więcej informacji o egzaminie teoretycznym znajdziesz:{" "}
                <a href="oegzaminie"><span style={{color: "#58A4B0"}}>tutaj</span></a>
                {/* Dodac do linku od razu scroll do sekcji egzamin teoria */}
              </p>
            </div>
            <div className="MainContentDescriptionImage">
              <img src="https://via.placeholder.com/350" alt="INF02"></img>
              <img src="https://via.placeholder.com/350" alt="INF03"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
