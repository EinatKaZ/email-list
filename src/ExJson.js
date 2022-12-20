import React from "react";
import JsonData from './Data.json'

function JsonDataDisplay(){
    const DisplayData = JsonData.map(
        (info) =>{
            return(
               <tr>
                <td>{info.name}</td>
                <td>{info.email}</td>
               </tr>
            )
        }
    )

    return(
        <div>
            <h1> Emails Table </h1>
            <center>
            <table class="Table">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                    </tr>
                </thead>
                {DisplayData}
            </table>
            </center>
        </div>
    )
    }

    export default JsonDataDisplay;