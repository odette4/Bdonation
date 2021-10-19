import React, { useState } from 'react';
import "./index.css";
import {Menu,Modal} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import SigninForm from "./SigninForm";


const Header = ()=>{
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
         <div className="header-container" style={{display: 'flex'}}>
         <h1> Blood bank & Donation</h1>
          <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div style={{padding:"30px"}}>
            <SigninForm/>
            </div>
            </Modal> 

         <Menu className="menu" onClick={handleClick} selectkeys={[current]} mode="horizontal" style={{merg:"0px 0px 0px 60%", marginLeft:"600px", backgroundColor:"brown"}}>
             <Menu.Item key="home">
                 <Link to="/home">
                 home</Link>

                 </Menu.Item>
                 <Menu.Item key="Aboutus">
                     <Link onclick={handleClick} to="/aboutus">
                     About Us</Link>
                     </Menu.Item>

                         <Menu.Item key=" Donor" onClick={showModal}>
                         Donar
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
                            <h2 align="center" className="message-header"><marquee>first blood donation camp organized by RBC in all district of country come and be part to this noble cause </marquee></h2>
                            
                         </div>   
     
    )
}
export default Header;