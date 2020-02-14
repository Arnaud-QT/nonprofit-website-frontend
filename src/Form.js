import React from 'react';
import './Form.css';
import axios from 'axios';


function Submit() {
    const data = {
    name: document.getElementById("inputName").value,
    website: document.getElementById("inputWebsite").value,
    address: document.getElementById("inputAddress").value,
    neighborhood: document.getElementById("inputNeighborhood").value,
    description: document.getElementById("inputDescription").value,
    schedule: document.getElementById("inputSchedule").value
    }
    axios.post("https://nonprofit-medellin.herokuapp.com/api/v1/create/nonprofit", data).then( (result) => {
        console.log(result)
    }).catch( (err) => {
        console.log(err);
    })

}

function Form() {
    return(
        <div>
            <h1>Non-Profit Form</h1>
             <form className="form-horizontal" action="/action_page.php">
             <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="inputName">Non Profit Name</label>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputName" placeholder="Medellin Fundacion"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="inputWebsite">Website</label>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputWebsite" placeholder="www.fundacion.co"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="inputAddress">Address</label>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Carrera 1 #34-67"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="inputNeighborhood">Medellin Neighborhood</label>
                    <div className="col-sm-4">
                    <select className="form-control" id="inputNeighborhood">
                    <option>Laureles</option>
                    <option>Poblado</option>
                    <option>Envigado</option>
                    <option>Boston</option>
                    <option>Belen</option>
                    <option>Suramericana</option>
                    <option>La Palma</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="inputDescription">Mission Description</label>
                    <div className="col-sm-4">
                    <textarea className="form-control" id="inputDescription" rows="3"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="inputSchedule">Schedule</label>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputSchedule" placeholder="9 a.m. to 7 p.m."/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button onClick={Submit} type="button" className="btn btn-default">Submit</button>
                    </div>
                </div>
            </form> 
        </div>
    )
}


export default Form;