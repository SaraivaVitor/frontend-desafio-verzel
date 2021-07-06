import { useLocation } from "react-router-dom";

//icons
import { useEffect, useState } from "react";

//components
import Nav from "../../components/Nav";

//api
import api from "../../service/api";
import { AxiosResponse } from "axios";

//images
import LogoWhite from "../../assets/LogoWhite.svg";

//styles
import "../../styles/index.scss";

const Lessons: React.FC = () => {
  const locationState = useLocation();
  const moduleId: any = locationState.state;
  const [lessons, setLessons] = useState<AxiosResponse | any>([]);

  useEffect(() => {
    async function getApi() {
      try {
        const data = await api.get(`/alllessonsbymodule/${moduleId.id}`);

        return setLessons(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, [moduleId.id]);

  console.log(lessons);

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
        <div  className="home-content">
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
                    <p>{e.date}</p>
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

export default Lessons;
