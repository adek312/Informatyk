import "../styles/MainContent.css";
import propTypes from "prop-types"

function MainContent(props) {
  return (
    <section>
      <div className="MainContent">
        <div className="MainContentHeader">
          <h2>{props.header}</h2>
          <div />
          <div className="MainContentDescription">
            <div className="MainContentDescriptionText">
              <p>
                {props.para}
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

MainContent.defaultProps = {
  header: "Error",
  para: "Error"
};

MainContent.propTypes = {
  header: propTypes.string,
  para: propTypes.string
};

export default MainContent;
