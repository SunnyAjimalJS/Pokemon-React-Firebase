import React, { Component } from "react";
import styles from "./CardList.module.scss";
import PokeCard from "../Cards/Card";

export default class CardList extends Component {

    render () {
        return (
                
                <section className={styles.cards}>
                    {this.props.pokedata.map((pokemon, index) => (
                          <PokeCard pokedata={pokemon} key={index} />
                    ))}
                </section>
         
        )
    }
}