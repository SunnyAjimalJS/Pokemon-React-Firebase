import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {
    render() {
        return(<input 
                    className={styles.searchBar}
                    placeholder="Search Cards..."
                    value={this.props.searchText}
                    onChange={this.props.setSearchText}
        
            />)
    }
}