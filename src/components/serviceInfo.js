import React from "react";
import "./index.css";
import {Card,Input} from "antd";
import {AudioOutlined} from '@ant-design/icons';


import image1 from "../assets/image.PNG";
import image2 from "../assets/image2.PNG";

const ServiceInfo =()=>{
    

    return(
        <div>
    
        <Card style={{width:"100%"}}>
            <Card.Grid hoverable={false}  style={{width:"100%",display:"flex",padding:"50px"}}>
                <img src={image1} alt="image" width="100%"/>
           
            </Card.Grid>
        </Card>
        <div style={{marginLeft:""}}>
        <h1 style={{fontSize:"40px",color:"black", fontWeight:"bold",border:"white", backgroundColor:"darkgrey"}}> Welcome to blood donation and bank systen </h1> 
        </div>
        <div>
        <h4 style={{fontSize:"40px",color:"white", backgroundColor:"black",fontWeight:"bold",border:"white",align:"center"}}> The Need Of Blood  The Need Of Blood   The Need Of Blood</h4>
       
        
        <Card style={{width:"100%"}}>
                <Card.Grid hoverable={false}  style={{width:"30%"}}>
                    
                    <p style={{fontSize:"13px",padding:"10px",border:"white"}}>There are many reasons patients need blood. A 
common misunderstanding about blood usage is that accident victims are the patients who use the most blood. Actually, people needing the most blood include those:
</p>  
<ol style={{fontSize:"13px",padding:"10px",border:"white"}}>
    <li>Being treated for cancer</li>
    <li>Undergoing orthopedic surgeries</li>
    <li>Undergoing cardiovascular surgeries</li>
    <li>Being treated for inherited blood disorders</li>
    </ol> 
                   
                </Card.Grid>
       
        
       
               <Card.Grid hoverable={false}  style={{width:"30%"}}>
                   
                   <p style={{fontSize:"13px",padding:"10px",border:"white"}}>There are many reasons patients need blood. A 
common misunderstanding about blood usage is that accident victims are the patients who use the most blood. Actually, people needing the most blood include those:
</p> <ol style={{fontSize:"13px",padding:"10px",border:"white"}}>
    <li>You must be in good health.</li>
    <li>Hydrate and eat a healthy meal before your donation.</li>
    <li>You�re never too old to donate blood.</li>
    <li>Rest and relaxed.</li>
    <li>Don�t forget your FREE post-donation snack.</li></ol>    
                  
               </Card.Grid>
       
        
       
       <Card.Grid hoverable={false}  style={{width:"30%"}}>
           
           <p style={{fontSize:"13px",padding:"10px",border:"white"}}>There are many reasons patients need blood. A 
common misunderstanding about blood usage is that accident victims are the patients who use the most blood. Actually, people needing the most blood include those:
</p> <ol style={{fontSize:"13px",padding:"10px",border:"white"}}>
    <li>People who lose blood during major surgeries.</li>
    <li>People who have lost blood because of a gastrointestinal bleed.</li>
    <li>Women who have serious complications during pregnancy or childbirth.</li>
    <li>People with cancer or severe anemia sometimes caused by thalassemia</li>
    </ol>  
       </Card.Grid>
               
           </Card>
            </div>

           <div>
               <h1>BLOOD GROUPS</h1>
               <Card>
                   <Card.Grid hoverable={false} style={{width:"60%"}}>
                       <p>Blood group of any human being will mainly fall in any one of the following groups.</p>

                       <p>A positive or A negative <br></br> B positive or B negative <br></br> O positive or O negative <br></br> AB positive or AB negative.</p>

                        <p>Your blood group is determined by the genes you inherit from your parents.A healthy diet helps ensure a successful blood donation, and also 
                                   makes you feel better!</p>
                   </Card.Grid>
                   <Card.Grid hoverable={false} style={{width:"40%"}}>
                   <img src={image2} alt="image" width="100%"/>

                       </Card.Grid>  
               </Card>
               </div> 
      <div>
          <Card>
          <Card.Grid hoverable={false} style={{width:"60%"}}>  
          <h1>UNIVERSAL DONORS AND RECIPIENTS</h1> 
          <p style={{fontSize:"13px",padding:"10px",border:"white"}}>The most common blood type is O, followed by type A. Type O individuals are 
            often called universal donors since their blood can be transfused into persons 
            with any blood type. Those with type AB blood are called universal recipients 
            because they can receive blood of any type.
</p>
<p style={{fontSize:"13px",padding:"10px",border:"white"}}>For emergency transfusions, blood group type O negative blood is the variety of 
blood that has the lowest risk of causing serious reactions for most people who 
receive it. Because of this, it s sometimes called the universal blood donor type.</p>

          </Card.Grid> 
          <Card.Grid>
              <p style={{align:"right", fontSize:"20px", background:"darkgrey", padding:"10px",border:"black"}}>BECOME A DONOR </p>
              </Card.Grid>
          </Card>
      </div>
      <div style={{backgroundColor:"darkgrey", height:"50vh"}}>

          <h1>footer</h1>

      </div>
            
        
     </div>
    )
}

export default ServiceInfo;