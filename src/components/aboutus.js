import React from "react";
import Header from "../components/Header";
import {Card,Input} from "antd";


import image3 from "../assets/image3.jpeg";
const Aboutus=()=>{
    return(
        <div>
            <Header/>

            

             
               <h1 style={{fontFamily:"serif",marginLeft:"600px"}}>About Us</h1>
               <Card style={{width:"70%", marginLeft:"150px"}}>
                   <Card.Grid hoverable={false} style={{width:"60%",height:"300px"}}>
                   <p style={{width:"500px", marginLeft:""}}>Blood bank is a place where blood bag is collected from blood donation
            events is stored in one place. the term "blood bank" refers to adivision of a hospital laboratory
            where the storage of blood product occurs and where proper testing is performed to reduce the risk
             of transfusion related events. the process of managing the blood bag that is received from
             the blood donation events needs a proper and systematic management.
             the blood bag must be handled with care and treated thoroughly as it is related to someone's life.
             the development of web-based blood bank and donation management system(BBDMS)
             is proposed to provide a management functional to the blood bank in order to handle the blood bag and to make entries of the individual
             who want to donate blood and who are in needed.</p>
                   </Card.Grid>
                   <Card.Grid hoverable={false} style={{width:"40%",height:"300px"}}>
                   <img src={image3} alt="image" width="100%"/>

                       </Card.Grid>  
               </Card>
               
        </div>

        
    )
}

export default Aboutus;