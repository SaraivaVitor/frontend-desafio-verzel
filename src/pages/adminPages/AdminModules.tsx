import React from 'react';


//icons
import { IoMdAddCircleOutline } from "react-icons/io"
import { GrConfigure } from "react-icons/gr"
import { FaTrashAlt } from "react-icons/fa"

//components
import Nav from "../../components/Nav"

//styles
import  '../../styles/index.scss';
import { Link } from 'react-router-dom';


// //Ordenando em ordem alfabética
// modules.sort(function (a, b) {
// 	return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
// });

const AdminModules: React.FC = () => {
  return (
      <>
        <div className="container">
            <Nav />
            <div className="home-content">
            <h1>Módulos:</h1>
            <div className="list-modules">
                <Link to="/admin/addmodule" >
                    <div id="AdminAdd" className="card-module-container">
                        <span className="add"><IoMdAddCircleOutline /></span>
                    </div>
                </Link>
                {/* {modules.map(e => {
                let quantityLength = e.lessons?.length
                return(
                    <div id="AdminModule" key={e.id} className="card-module-container">
                    <div className="card-module-thumb">
                        <img src={e.thumb} alt="Thumb" />
                    </div>
                    <div className="card-module-description">
                        <h1>{e.name}</h1>
                        <div className="bottom-module">
                            <p>{ quantityLength === undefined ? '0' : quantityLength }/{e.totalQuantity} aulas</p>
                            <div className="bottom-module-buttons">
                                <span id="edit" ><GrConfigure /></span>
                                <span id="delete" ><FaTrashAlt /></span>
                            </div>
                        </div>
                    </div>
                    </div>
                )
                })} */}
          </div>
          </div>
        </div>
      </>
  )
}

export default AdminModules;