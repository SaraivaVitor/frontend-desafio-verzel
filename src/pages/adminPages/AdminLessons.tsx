import { useEffect, useState } from "react";
//components
import Nav from "../../components/Nav";
//api
import api from "../../service/api";
//styles
import "../../styles/index.scss";
//images
import { Lesson } from "../../typings";
import LessonsCard from "../../components/LessonsCard";

const AdminLessons: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allLessons`);
        console.log(req.data);
        return setLessons(req.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);
  const sortedLessons = lessons.sort(function (a: Lesson, b: Lesson) {
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
            {sortedLessons.map((lesson: Lesson) => {
              return (
                <LessonsCard
                  id={lesson._id}
                  name={lesson.name}
                  date={lesson.date}
                  description={lesson.description}
                  isAdmin
                />               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLessons;
