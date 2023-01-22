import '../../styles/auth.css';
import {useState} from "react";

import { useSelector } from 'react-redux';

import { userSelect } from '../../store/usersSlice';
import LogInForm from './logInForm';
import SingUpForm from './signUpForm';

export default function RegisterForm() {
    const [logIn, setLogIn] = useState(false);
    const [singUp, setSingUp] = useState(false);
    const user = useSelector(userSelect)

    function chooseLogIn(){
        setSingUp(false)
        setLogIn(!logIn)
    }    
    function chooseSingUp(){
        setLogIn(false)
        setSingUp(!singUp)
    }
    

    return (
        <div>
           <button className='btn btn-success' onClick={() => chooseLogIn()}>Авторизация</button>
           <button className='btn btn-info' onClick={() => chooseSingUp()}>Регистрация</button>
           {!user && logIn?  <LogInForm/>:null}
           {!user && singUp? <SingUpForm/>:null}
        </div>
    )
}