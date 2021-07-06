import React, { useState } from "react";

//images
import Logo from "../../assets/logo.svg";
import LogoWhite from "../../assets/LogoWhite.svg";

//icons
import { ImListNumbered } from "react-icons/im";
import { GoFileSubmodule } from "react-icons/go";

//components
import Nav from "../../components/Nav";

import api from "../../service/api";

//styles
import "../../styles/auth.scss";

const AddModule: React.FC = () => {
  const [name, setName] = useState("");
  const [totalQuantity, setTotal] = useState("");

  async function AddModule() {
    try {
      await api.post("/createmodules", {
        name: name,
        totalQuanity: totalQuantity,
      });

      alert(`Módulo adicionado!`);
      return (window.location.href = "/admin/adminmodules");
    } catch (error) {
      console.log(error, "Houve erro!");
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
            <h1>Adicionar módulo:</h1>
            <div className="input">
              <span>
                <GoFileSubmodule />
              </span>
              <input
                type="text"
                placeholder="Nome do módulo"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <span>
                <ImListNumbered />
              </span>
              <input
                type="text"
                placeholder="Quantidade total de aulas"
                name="totalQuantity"
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>
            <div onClick={() => AddModule()} className="button-submit">
              Adicionar
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddModule;
