import React from 'react';
import styles from './search.module.css';
const Search = ({ setFilter }) => {
    const handleSearch = (e) => {
        setFilter(e.target.value);
    }

    return (<div className={styles.root}>
        <input aria-label="search" className={styles.search} placeholder="filter meds" type="search" onChange={handleSearch}></input>
    </div>);
}

export default Search;