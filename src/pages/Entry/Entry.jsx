import React, {useState} from 'react'
import { Container, Row, Col  } from "react-bootstrap"
import './entry.css';

import {Login} from "../../components/Login/Login";
import {ResetPassword} from "../../components/ResetPassword/ResetPassword";

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formShow, setformShow] = useState('login');

    const handleChange = e => {
        const { name, value} = e.target;
        switch(name){
            case "email":
                setEmail(value);
                break;
            case "password": 
                setPassword(value);
                break;
            default: 
             break;        
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!email || !password){
            alert('FILL THE FORM PLZ!!')
            return;
        }
        alert('SUBMITTED')
    }

    const handleResetSubmit = e => {
        e.preventDefault();
        if(!email){
            alert('FILL THE FORM PLZ!!')
            return;
        }
        alert('Reset SUBMITTED')
    }

    const handleSwitchForm = formName => {
        setformShow(formName);
    }

    return (
        <div className='entry-page bg-primary'>
            <Container>
                <Row>
                    <Col>
                        <div className='jumbotron'>
                            {formShow === "login" && <Login email={email} password={password} handleChange={handleChange} handleSubmit={handleSubmit} handleSwitchForm={handleSwitchForm}/>}
                            {formShow === "reset" && <ResetPassword email={email} handleChange={handleChange} handleResetSubmit={handleResetSubmit} handleSwitchForm={handleSwitchForm} />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
