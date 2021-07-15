import FilterForm from "./FilterForm";
import React from "react";
import {connect} from "react-redux";
import {searchByName} from "../Redux/AppReducer";

let FilterFormContainer = (props) => {
    return <FilterForm onSearch={props.searchByName}/>}

export default connect (null,{searchByName})(FilterFormContainer)