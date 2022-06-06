import logo     from '../images/logotipo.png';
import download from '../images/download.svg';
import '../scss/card.scss'


function Card(props) {
  return <div className="Card">
    <div className="bgWrapper">
      <div className="topWrapper">
        <div className="logoWrapper">
          <img src={logo} alt="ITT Panetti Pitagora" />
        </div>
        <div className="nameWrapper">
          {props.name}
        </div>
        <div className="teachersWrapper">
          <span>Docenti:</span> <strong>{props.teachers.join(", ")}</strong>
        </div>
      </div>
    </div>
    <div className="bottomWrapper">
      <div className="downloadBtn">
        <a target="_blank" rel="noreferrer" href={props.href}>
          <img src={download} alt="Download" />
        </a>
      </div>
      <div className="classNameWrapper">
        <div className="label">Classe:</div>
        <div className="class">
          <span>{props.c}</span>
        </div>
      </div>
    </div>
  </div>
}

export default Card;