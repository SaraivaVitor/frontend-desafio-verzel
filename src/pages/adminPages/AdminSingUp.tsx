import React from "react";

//images
import Logo from "../../assets/logo.svg";
import LogoWhite from "../../assets/LogoWhite.svg";

//icons
import { FaUserCircle } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoMdMail } from "react-icons/io"
import { Link } from "react-router-dom";

//styles
import "../../styles/auth.scss";

const AdminSingUp: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="admin-login-left">
          <img src={LogoWhite} alt="Logotipo" />
        </div>
        <div className="admin-login-right">
        <img className="logo-mobile" src={Logo} alt="Logotipo" />
          <form id="Cadastro" className="form-login">
            <div className="input">
                <span><FaUserCircle /></span>
                <input type="text" placeholder="Nome" />
            </div>
            <div className="input">
                <span><IoMdMail /></span>
                <input type="text" placeholder="Email" />
            </div>
            <div className="input">
                <span><RiLockPasswordFill /></span>
                <input type="password" placeholder="Senha" />
            </div>
            <div className="input">
                <span><RiLockPasswordFill /></span>
                <input type="password" placeholder="Repita a senha" />
            </div>
            <div className="button-submit">Cadastrar</div>
            <p>
                Já possue conta ? <Link to="/admin/login">Entre!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSingUp;
