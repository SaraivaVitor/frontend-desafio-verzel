import React, { useState, useEffect, useCallback, useRef } from "react";

//components
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

//images
import CodeImage1 from "../../assets/code1.svg";
import CodeImage2 from "../../assets/code2.svg";

//api
import { AxiosResponse } from "axios";
import api from "../../service/api";

//stylesh
import "../../styles/index.scss";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [modules, setModules] = useState<AxiosResponse | any>([]);

  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allmodules`);

        return setModules(req.data)
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);

  //Listando em ordem alfabética
  modules.sort(function (a: any, b: any) {
    return a.nameModule > b.nameModule ? 1 : b.nameModule > a.nameModule ? -1 : 0;
  });

  console.log(modules)
  
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
              {modules.map((e: any) => {
                let lessonsLength = [e.lessons]?.length;
                console.log(lessonsLength)
          
                return (
                  <Link to={`lessons/${e._id}`}>
                  <div className="card-module-container">
                    <div className="card-module-thumb">
                      <img src={e.thumb} alt="Thumb" />
                    </div>
                    <div className="card-module-description">
                      <h1>{e.nameModule}</h1>
                      <p>
                        {lessonsLength === undefined ? "0" : lessonsLength}/
                        {e.totalQuantity} aulas
                      </p>
                    </div>
                  </div>
                  </Link>
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
