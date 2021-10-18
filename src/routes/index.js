import React from "react";
import {Switch,Route} from "react-router-dom";
import RegisterForm from "../components/registerForm";
import Home from "../views/home";
import Hospital from "../components/hospital";




const Index=() =>{
    return(
        <Switch>
            <Route component={RegisterForm} path="/registerForm"/>
            <Route component={Hospital} path="/hospital"/>
           
            <Route component={Home} path={["/home","/" ]}/>
            
        </Switch>
    )
}

export default Index;