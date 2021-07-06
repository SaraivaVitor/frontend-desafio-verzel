//icons
import { GrConfigure } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

//components
import Nav from "../../components/Nav";
import { useHistory } from "react-router-dom";

//api
import api from "../../service/api";
import { AxiosResponse } from "axios";

//styles
import "../../styles/index.scss";

//images
import LogoWhite from "../../assets/LogoWhite.svg";

const AdminLessons: React.FC = () => {
  const [lessons, setLessons] = useState<AxiosResponse | any>([]);
  const historyEdit = useHistory();

  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allLessons`);

        return setLessons(req.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);

  //deleta aula
  async function DeleteLesson(prop: any) {
    await api.delete(`/deletelesson/${prop}`);
    alert(`Aula Deletada!`);
    return (window.location.href = "/admin/adminlessons");
  }

  //Listando em ordem alfabética
  lessons.sort(function (a: any, b: any) {
    return a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0;
  });
  return (
    <>
      <div className="container">
        <Nav />
        <div className="home-content">
          <h1>Aulas:</h1>
          <div className="list-modules">
            {lessons.map((e: any) => {
              return (
                <div
                  id="Admin-Lessons"
                  key={e._id}
                  className="card-module-container"
                >
                  <div id="Thumb-Lessons" className="card-module-thumb">
                    <img src={LogoWhite} alt="Thumb" />
                  </div>
                  <div
                    id="Description-Lessons"
                    className="card-module-description"
                  >
                    <h1>{e.name}</h1>
                    <p>{e.description}</p>
                    <div className="bottom-module">
                      <p>{e.date}</p>
                      <div
                        id="Buttons-admin-lesson"
                        className="bottom-module-buttons"
                      >
                        <span
                          onClick={() =>
                            historyEdit.push({
                              pathname: "/admin/editlesson",
                              state: { id: e._id },
                            })
                          }
                        >
                          <GrConfigure />
                        </span>
                        <span onClick={() => DeleteLesson(e._id)} id="delete">
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

export default AdminLessons;
