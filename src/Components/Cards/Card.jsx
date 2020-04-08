import React, { Component } from "react";
import styles from "./Card.module.scss";
import Card from "react-bootstrap/Card";



export default class PokeCard extends Component {
  render() {
    return (
      <section className={styles.allCards}>
        <Card bg="warning" text="white" style={{ width: "20rem" }} className={styles.Card}>
        <Card.Header><h2>{this.props.pokedata.Name}</h2></Card.Header>
        <p>HP: {this.props.pokedata.HP}</p>
        <Card.Img variant="top" src={this.props.pokedata.picture} className={styles.photo} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                <p className={styles.CardDesc}>Attack Name: </p>
                <p className={styles.Attack}>{this.props.pokedata.Attack.Name}</p>
                <p className={styles.CardDesc}>Description: </p>
                <p className={styles.Attack}>{this.props.pokedata.Attack.Description} </p>
             
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    );
  }
}


