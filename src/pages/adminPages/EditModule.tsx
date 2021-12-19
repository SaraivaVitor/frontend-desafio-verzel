import React, { useState } from "react";
import api from "../../service/api";
//images
import LogoWhite from "../../assets/LogoWhite.svg";
//icons
import { FaCalendarAlt } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
//components
import Logo from "../../assets/logo.svg";
import Nav from "../../components/Nav";
//styles
import "../../styles/auth.scss";
import { useLocation } from "react-router-dom";

const EditModule: React.FC = () => {
  const [name, setName] = useState("");
  const [totalQuanity, setTotal] = useState("");
  const locationState = useLocation();
  const moduleId: any = locationState.state;
  async function EditModule() {
    try {
      await api.put(`/editmodules/${moduleId.id}`, {
        name: name,
        totalQuanity: totalQuanity,
      });
      alert(`Módulo editado!`);
      return (window.location.href = "/admin/adminmodules");
    } catch (error) {
      window.alert("Houve erro!");
    }
  }
  return (
    <>
      <div className="container">
        <Nav />
        <div className="admin-login-left">
          <img src={LogoWhite} alt="Logotipo" />
        </div>
        <div className="admin-login-right">
          <img className="logo-mobile" src={Logo} alt="Logotipo" />
          <form className="form-login">
            <h1>Editar módulo:</h1>
            <div className="input">
              <span>
                <HiIdentification />
              </span>
              <input
                type="text"
                placeholder="Novo nome do módulo"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div id="text-area" className="input">
              <span>
                <FaCalendarAlt />
              </span>
              <input
                type="text-area"
                placeholder="Total de aulas"
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>
            <input id="selecao-arquivo" type="file"></input>
            <div onClick={() => EditModule()} className="button-submit">
              Enviar
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditModule;
