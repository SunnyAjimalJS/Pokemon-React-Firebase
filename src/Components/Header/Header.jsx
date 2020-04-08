import React, { Component } from 'react';
import logo from "./img/pokemon.jpg";
import styles from "./Header.module.scss";

export default class Header extends Component{
    render(){
        return(<img src={logo} className={styles.logo}></img>)
    }
}