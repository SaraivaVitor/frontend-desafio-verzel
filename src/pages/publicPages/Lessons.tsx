import { useLocation } from "react-router-dom";
//icons
import { useEffect, useState } from "react";
//components
import Nav from "../../components/Nav";
//api
import api from "../../service/api";
import { AxiosResponse } from "axios";
//styles
import "../../styles/index.scss";
import LessonsCard from "../../components/LessonsCard";

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
  //Listando em ordem alfabética
  const sortedLessons = lessons.sort(function (a: any, b: any) {
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
            {sortedLessons.map((lesson: any) => {
              return (
                <LessonsCard
                  id={lesson._id}
                  name={lesson.name}
                  date={lesson.date}
                  description={lesson.description}
                /> 
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lessons;
