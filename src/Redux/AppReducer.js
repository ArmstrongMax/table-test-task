import storage, {getTotalCount} from "../NetworkStorage/Storage";
import tableHeaders from "../Table/TableHeadres";

const SET_DATA = 'SET_DATA'
const SET_TOTAL_ITEMS_COUNT = 'SET-TOTAL-ITEMS-COUNT'
const SET_ALREADY_LOAD_ITEMS_COUNT = 'SET-LOAD-ITEMS'
const SET_GOING_TO_LOAD_ITEMS_COUNT = 'SET-GOING-TO-LOAD-ITEMS-COUNT'
const SET_SORT_FIELD = 'SET-SORT-FIELD'
const SET_DISPLAYED_COLUMNS = 'SET-DISPLAYED-COLUMNS'
const SET_IS_SEARCHING_MODE = 'SET-IS-SEARCHING-MODE'

let initialState = {
    fullData: storage,
    data: [],
    totalItemsCount: null,
    alreadyLoadItemsCount: null,
    goingToLoadItemsCount: null,
    sortField: null,
    searchArgument: null,
    isSearchMode: false,
    displayedColumns: tableHeaders
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {...state, data: action.newData}
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return {...state, totalItemsCount: action.totalItemsCount}
        }
        case SET_ALREADY_LOAD_ITEMS_COUNT: {
            return {...state, alreadyLoadItemsCount: action.alreadyLoadItemsCount}
        }
        case SET_GOING_TO_LOAD_ITEMS_COUNT: {
            return {...state, goingToLoadItemsCount: action.goingToLoadItemsCount}
        }
        case SET_SORT_FIELD: {
            return {...state, sortField: action.sortField}
        }
        case SET_IS_SEARCHING_MODE: {
            debugger
            return {...state, isSearchMode: action.isSearchMode}
        }
        case SET_DISPLAYED_COLUMNS: {
            return (
                {
                    ...state, displayedColumns: state.displayedColumns.map(element => {
                            for (let key in action.displayedColumns) {
                                if (element.field === key) {
                                    return {...element, visible: action.displayedColumns[key]}
                                }
                            }
                            return element
                        }
                    )
                }
            )
        }
        default:
            return state;
    }
}
export const setData = (newData) => ({type: SET_DATA, newData: newData})
export const setIsSearchMode = (isSearchMode) => ({type: SET_IS_SEARCHING_MODE, isSearchMode: isSearchMode})
export const setTotalItemsCount = (totalItemsCount) => ({
    type: SET_TOTAL_ITEMS_COUNT,
    totalItemsCount: totalItemsCount
})
export const setAlreadyLoadItemsCount = (alreadyLoadItemsCount) => ({
    type: SET_ALREADY_LOAD_ITEMS_COUNT,
    alreadyLoadItemsCount: alreadyLoadItemsCount
})
export const setGoingToLoadItemsCount = (goingToLoadItemsCount) => ({
    type: SET_GOING_TO_LOAD_ITEMS_COUNT,
    goingToLoadItemsCount: goingToLoadItemsCount
})
export const setSortField = (sortField) => ({type: SET_SORT_FIELD, sortField: sortField})
export const setDisplayedColumns = (displayedColumns) => ({
    type: SET_DISPLAYED_COLUMNS,
    displayedColumns: displayedColumns
})

export const getData = (numberOfItems = 20) => (dispatch, getState) => {
    let response = []
    let neededNumberOfItems = getState().app.alreadyLoadItemsCount + numberOfItems
    for (let i = 0; i < neededNumberOfItems; i++) {
        response.push(storage[i])
    }
    if (getState().app.alreadyLoadItemsCount === getState().app.totalItemsCount && getState().app.alreadyLoadItemsCount !== null) return
    dispatch(setData(response))
    dispatch(setTotalItemsCount(storage.length))
    dispatch(setGoingToLoadItemsCount(numberOfItems))
    dispatch(setAlreadyLoadItemsCount(response.length))
}
export const searchByName = (value) => (dispatch, getState) => {
    let filteredData = []
    dispatch(setData(getState().app.fullData))
    getState().app.data.forEach(item => {
        if (item.firstName.toLocaleLowerCase() === value.toLocaleLowerCase()) {
            filteredData.push(item)
        }
    })
    if (filteredData.length > 0) {
        dispatch(setData(filteredData))
        dispatch(setIsSearchMode(true))
    }
    else {
        dispatch(getData())
        dispatch(setIsSearchMode(false))
    }
}

export const getFinalResult = (field) => (dispatch, getState) => {
    let targetData
    getState().app.isSearchMode ? targetData = getState().app.data : targetData = getState().app.fullData
    switch (field.dataType) {
        case 'number': {
            return `Среднее: ${getTotalCount(targetData,field).toFixed(2)}`
        }
        case 'string': {
            return `Количество записей: ${getTotalCount(targetData,field)}`
        }
        case 'money': {
            return `Итого: ${getTotalCount(targetData,field).toFixed(2)}`
        }
        case 'percent': {
            return `Среднее: ${getTotalCount(targetData,field).toFixed(2)}`
        }
        default:
            return undefined
    }

}
export default appReducer



