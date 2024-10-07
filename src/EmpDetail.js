import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row list-card" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2 class="details-title medium-grey">Detalhes Funcionário</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2 class="employee-name medium-grey">Nome: <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h5 class="employee-name medium-grey">Email: <b>{empdata.email}</b></h5>
                        <h5 class="employee-name medium-grey">Telefone: <b>{empdata.phone}</b></h5>
                        <Link className="btn btn-danger btn-back" to="/">Voltar</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;