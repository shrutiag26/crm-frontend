import React, {useState} from "react"
import './Entry.style.css';
import {Jumbotron} from 'react-bootstrap';
import {LoginForm} from '../../components/login/login.comp'
import {ResetPassword} from '../../components/password-reset/passwordReset.comp'

export const Entry = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [formLoad, setformLoad] = useState("login");

const handleOnChange= e=>{
    const {name, value} = e.target;

    switch(name){
        case 'email':
        setEmail(value);
        break;
        case 'password':
        setPassword(value);
        break;
        default:
            break;
    }
    console.log(name,value);
};

const handleOnSubmit = (e) => {
    e.prventDefault()       //to avoid page refresh on submit
    
    if(!email || !password){
        return alert("Fill all the form");
    }
    // TODO call api to submit form
    console.log(email, password);
};

const handleOnResetSubmit = (e) => {
    e.prventDefault()       //to avoid page refresh on submit
    
    if(!email){
        return alert("PLease enter email");
    }
    // TODO call api to submit form
    console.log(email);
};

const formSwitcher = (formType) => {
    setformLoad(formType);
}
    return (<div className="entry-page bg-info">
        <Jumbotron className="form-box">
            {formLoad === 'login' && <LoginForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
             />
             }
            {formLoad === 'reset' && <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
             />}
              
        </Jumbotron>
        </div>
        );
}

export default Entry;