import Table from "./Table";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getData, getFinalResult, setData, setDisplayedColumns, setSortField} from "../Redux/AppReducer";


let TableContainer = (props) => {
    useEffect(() => {
        if ((props.isSearchMode === false) && (props.alreadyLoadItemsCount + props.goingToLoadItemsCount < props.totalItemsCount)) {
            window.onscroll = () => {
                if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                    props.getData(20)
                }
            }
        }
    }, [props.data, props.isSearchMode, props])
    useEffect(() => {
        props.getData()
    },[])
    return <Table data={props.data}
                  totalItemsCount={props.totalItemsCount}
                  alreadyLoadItemsCount={props.alreadyLoadItemsCount}
                  goingToLoadItemsCount={props.goingToLoadItemsCount}
                  setData={props.setData}
                  setSortField={props.setSortField}
                  sortField={props.sortField}
                  displayedColumns={props.displayedColumns}
                  setDisplayedColumns={props.setDisplayedColumns}
                  getFinalResult={props.getFinalResult}
                  getData = {props.getData}
    />
}

let mapStateToProps = (state) => {
    return {
        data: state.app.data,
        totalItemsCount: state.app.totalItemsCount,
        alreadyLoadItemsCount: state.app.alreadyLoadItemsCount,
        goingToLoadItemsCount: state.app.goingToLoadItemsCount,
        sortField: state.app.sortField,
        displayedColumns: state.app.displayedColumns,
        isSearchMode: state.app.isSearchMode
    }
}

export default connect(mapStateToProps, {
    getData,
    setData,
    setSortField,
    setDisplayedColumns,
    getFinalResult
})(TableContainer)