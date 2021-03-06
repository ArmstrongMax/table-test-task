import React, {useState} from "react";

let FilterForm = (props) => {

    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
    }

    return <div>
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => props.onSearch(value)}>Поиск по имени</button>
            </div>
            <input
                type="text"
                className="form-control"
                onChange={valueChangeHandler}
                value={value}
            />
        </div>
    </div>
}

export default FilterForm