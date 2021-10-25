import React, { useState } from 'react';
import "./index.css";
import {Menu,Modal} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import SigninForm from "./SigninForm";
import logo9 from "../assets/logo9.PNG";


const MyHeader = ()=>{
    const [isModalVisible,setIsModalVisible]=useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () =>{
        setIsModalVisible(false);
    };

    const handleCancel = () =>{
        setIsModalVisible(false);
    };

    const [current, setCurrent]=useState("home");

    const handleClick = e => {
        console.log('click',e);
        setCurrent(e);
    };
    return(
            
        <div>
         <div className="header-container" style={{display:"flex",position:""}}>
         <img src={logo9} alt="image" width="100%"/>
         <h1 style={{color:"white",marginLeft:"100px",width:"200px"}}> BloodBankDonation</h1>
          <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div style={{padding:"30px"}}>
            <SigninForm/>
            </div>
            </Modal>
           
            
            <Menu onClick={handleClick} selectkeys={[current]} mode="horizontal" style={{ marginLeft:"600px",backgroundColor:"brown",color:"white"}}>
            
             <Menu.Item key="home">
                 <Link to="/home">
                 home</Link>

                 </Menu.Item>
                 <Menu.Item key="Aboutus">
                     <Link onclick={handleClick} to="/aboutus">
                     About Us</Link>
                     </Menu.Item>

                         <Menu.Item key=" Dashboard">
                             <Link onclick={handleClick} to="/dashboard">
                         Dash</Link>

                         </Menu.Item>
                         <Menu.Item key="Hospital">
                             <Link onClick={handleClick} to="/hospital">
                         Hospital</Link>
                         </Menu.Item>
                         <Menu.Item key="Signin" onClick={showModal}>
                         Signin
                         </Menu.Item>
                         
                         </Menu> 
                            </div>
                            <h2 style={{color:"white",width:"200%"}} className="message-header"><marquee>first blood donation camp organized by RBC in all district of country come and be part to this noble cause </marquee></h2>
                            
                         </div>   
     
    )
}
export default MyHeader;