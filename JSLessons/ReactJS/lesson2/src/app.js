import React from 'react';
import ReactDOM from 'react-dom';
import LogoImg from './img/antaresRocet.jpg';
import './sass/style.scss'




const temp = <div>
    <img width='300' src={LogoImg}/>
    <h1>Hello</h1></div>

ReactDOM.render(temp, document.getElementById('root'))