import React, {useState} from "react";
import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";
import {setDisplayedColumns} from "../Redux/AppReducer";
import styles from './ColumnsShowSelector.module.css'
import cn from 'classnames';

let ColumnsShowSelector = (props) => {
    let [showColumnSelector, setShowColumnSelector] = useState(false)
    let getInitialFormValue = (array) => {
        let initVal = {}
        array.forEach(element => {
            initVal[element.field] = element.visible
        })
        return initVal
    }

    return <>
        <button className="btn btn-outline-secondary" onClick={()=>{setShowColumnSelector(!showColumnSelector)}}>Отображаемые колонки</button>
        <Formik
            initialValues={getInitialFormValue(props.displayedColumns)}
            onSubmit={(values) => {
                props.setDisplayedColumns(values)
            }}>
            {() => (
                <Form>
                    <div className={cn(
                        {[styles.hideItem]:showColumnSelector === false},
                        {[styles.columnSelector]:true}
                        )}>
                        <div id="checkbox-group"></div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                {props.displayedColumns.map(item => {
                                    return <div key={item.field}>
                                        <Field type={'checkbox'}
                                               name={item.field}
                                        />
                                        {item.translation}
                                    </div>
                                })}
                            </label>
                        </div>
                        <button type="submit">Отобразить</button>
                    </div>
                </Form>
            )}
        </Formik></>
}

let mapStateToProps = (state) => {
    return {
        displayedColumns: state.app.displayedColumns
    }
}
export default connect(mapStateToProps, {setDisplayedColumns})(ColumnsShowSelector)