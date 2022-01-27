import "./header.css";
import Forum from "@material-ui/icons/Forum";
import Person from "@material-ui/icons/Person";
import Arrow from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
const logo = require('../assets/tinderLogo.png')

export const Header = () => {
  
  const location = useLocation();  
  const navigate = useNavigate()

  return (
    <div className="header">
        {
          location.pathname === '/' ?
          <IconButton>
            <Person className="header__icon" fontSize="large" />
          </IconButton>
          :
          <IconButton onClick={ () => navigate('/') } >
            <Arrow className="header__arrowBack" fontSize="large"/>
          </IconButton>
        }
      <Link to="/">
        <img src={ logo } className="header__logo" alt="tinderLogo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
