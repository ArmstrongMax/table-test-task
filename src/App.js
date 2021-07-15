import React from "react";
import TableContainer from "./Table/TableContainer";
import FilterFormContainer from "./FilterForm/FilterFormContainer";
import styles from './App.module.css'
import ColumnsShowSelector from "./ColumnsShowSelector/ColumnsShowSelector";

let App = () => {
    return (
        <div className={styles.appContainer}>
            <div className={styles.formContainer}><FilterFormContainer /></div>
            <div className={styles.columnSelectorContainer}><ColumnsShowSelector/></div>
            <div className={styles.tableContainer}><TableContainer/></div>
        </div>
    );
}

export default App;