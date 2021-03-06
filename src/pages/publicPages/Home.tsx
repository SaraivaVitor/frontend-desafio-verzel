import React, { useState, useEffect } from "react";
//components
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

//images
import CodeImage1 from "../../assets/code1.svg";
import CodeImage2 from "../../assets/code2.svg";
//api
import { AxiosResponse } from "axios";
import api from "../../service/api";

//styles
import "../../styles/index.scss";
import { Module } from "../../typings";
import ModuleCard from "../../components/ModuleCard";

const Home: React.FC = () => {
  const [modules, setModules] = useState<AxiosResponse | any>([]);
  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allmodules`);
        return setModules(req.data);
      } catch (err) {
        window.alert(err);
      }
    }
    getApi();
  }, []);
  //Listando em ordem alfabética
  const sortedModules = modules.sort(function (a: any, b: any) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });
  return (
    <>
      <div className="container">
        <Nav />
        <div className="home-content">
          <div id="home-top" className="home-section">
            <div id="Home-content-top" className="home-section-content">
              <div className="text-home">
                <h1>Evolua sem pagar nada!</h1>
                <p>
                  Hora de elevar sua carreira a um novo patamar! Venha conosco
                  dar o próximo passo para que sua carreira decole de uma vez !
                </p>
              </div>
            </div>
            <div id="Home-content-top-img" className="home-section-content">
              <img src={CodeImage1} alt="Codigos" />
            </div>
          </div>
          <div id="home-bottom" className="home-section">
            <div className="home-section-content">
              <img src={CodeImage2} alt="Codigos2" />
            </div>
            <div className="home-section-content">
              <div className="text-home">
                <h1>Conteúdos novos toda semana!</h1>
                <p>
                  Na nossa plataforma você encontra conteúdos atualizados toda
                  semana para nunca ficar atrasado com relação ao mercado !
                </p>
              </div>
            </div>
          </div>
          <h1>Nossos módulos:</h1>
          <p>Selecione um módulo para ver os conteúdos dele!</p>
          <div className="list-modules">
            {sortedModules.map((currentModule: Module) => {
              return (
                <ModuleCard 
                  id={currentModule._id}
                  name={currentModule.name}
                  totalQuanity={currentModule.totalQuanity}
                  lessons={currentModule.lessons}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
