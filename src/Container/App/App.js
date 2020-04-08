import React, { Component } from "react";
import Card from "../../Components/Cards/Card";
import CardList from "../../Components/CardList/CardList";
import { firestore } from "../../firebase";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./App.css";
import Header from "../../Components/Header/Header";

export default class App extends Component {
  state = {
    pokedata: [],
    searchText: "",
    filteredPokes: []
  };

  setSearchText = event => {
    const searchText = event.target.value.toLowerCase();
    this.setState({ searchText }, this.filterPokes);
  };

  filterPokes = () => {
    let filteredPokes = this.state.pokedata.filter(pokedata => {
      return pokedata.Name.toLowerCase().includes(this.state.searchText);
    });
    this.setState({ filteredPokes });
  };

  componentDidMount() {
    firestore
      .collection("pokedata")
      .get()
      .then(query => {
        const pokedata = query.docs.map(doc => doc.data());
        this.setState({
          pokedata: pokedata,
          filteredPokes: pokedata
        });
      });
  }

  render() {
    return (
      <>
        < Header />
        <SearchBar
          searchText={this.state.searchText}
          setSearchText={this.setSearchText}
        />
        <section className={styles.cards}>
          <CardList pokedata={this.state.filteredPokes} />
          {/* {this.state.filteredPokes.map((pokemon, index) => (
                    <Card className={styles.cards}pokedata={pokemon} key={index}/>
                ))}  */}
        </section>
      </>
    );
  }
}
