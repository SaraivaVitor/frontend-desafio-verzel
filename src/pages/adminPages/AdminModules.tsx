import React, { useEffect, useState } from "react";

//icons
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

//components
import Nav from "../../components/Nav";

//api
import { AxiosResponse } from "axios";
import api from "../../service/api";

//styles
import "../../styles/index.scss";
import { Link, useHistory } from "react-router-dom";

//images
import LogoWhite from "../../assets/LogoWhite.svg";

const AdminModules: React.FC = () => {
  const [modules, setModules] = useState<AxiosResponse | any>([]);

  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allmodules`);

        return setModules(req.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);

  async function DeleteModule(prop: any) {
    await api.delete(`/deletemodules/${prop}`);
    alert(`Aula Deletada!`);
    return (window.location.href = "/admin/adminmodules");
  }

  //passagem do id para adição e edição de aulas
  const historyAdd = useHistory();
  const historyEdit = useHistory();

  //Listando em ordem alfabética
  modules.sort(function (a: any, b: any) {
    return a.nameModule > b.nameModule
      ? 1
      : b.nameModule > a.nameModule
      ? -1
      : 0;
  });

  return (
    <>
      <div className="container">
        <Nav />
        <div className="home-content">
          <h1>Módulos:</h1>
          <div className="list-modules">
            <Link to="/admin/addmodule">
              <div id="AdminAdd" className="card-module-container">
                <span className="add">
                  <IoMdAddCircleOutline />
                </span>
              </div>
            </Link>
            {modules.map((e: any) => {
              let quantityLength = e.lessons?.length;
              return (
                <div
                  id="AdminModule"
                  key={e._id}
                  className="card-module-container"
                >
                  <div className="card-module-thumb">
                    <img src={LogoWhite} alt="Thumb" />
                  </div>
                  <div className="card-module-description">
                    <h1>{e.name}</h1>
                    <div className="bottom-module">
                      <p>
                        {quantityLength === undefined ? "0" : quantityLength}/
                        {e.totalQuanity} aulas
                      </p>
                      <div className="bottom-module-buttons">
                        <span
                          onClick={() =>
                            historyAdd.push({
                              pathname: "/admin/addlesson",
                              state: { id: e._id },
                            })
                          }
                        >
                          <RiVideoAddFill />
                        </span>
                        <span
                          onClick={() =>
                            historyEdit.push({
                              pathname: "/admin/editmodule",
                              state: { id: e._id },
                            })
                          }
                        >
                          <AiFillEdit />
                        </span>
                        <span onClick={() => DeleteModule(e._id)} id="delete">
                          <FaTrashAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModules;
