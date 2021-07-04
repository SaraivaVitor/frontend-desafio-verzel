import { Link } from "react-router-dom";

import "../../styles/nav.scss";

//images
import LogoImage from "../../assets/logo.svg";

//icons
import { FiLogOut } from "react-icons/fi";

let logado = true;

const Nav: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <Link id="logo" to="/">
          <img src={LogoImage} alt="Logotipo" />
        </Link>
        <div className="nav-left">
          {logado ? (
            <div className="nav-admin-optios">
              <Link to="/admin/adminmodules">Administrar Módulos</Link>
              <Link to="/admin/adminlessons">Administrar Aulas</Link>
              <span id="Logout-Mobile">
                  <FiLogOut />
              </span>
              <div className="nav-user">
                <a>Vitor</a>
                <span>
                  <FiLogOut />
                </span>
              </div>
            </div>
          ) : (
            <Link to="/admin/login">
              <div className="nav-button">Entrar</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
