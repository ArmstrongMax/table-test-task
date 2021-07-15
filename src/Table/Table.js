import React, {useEffect, useState} from 'react'
import _ from 'lodash';
import styles from './Table.module.css'
import cn from 'classnames';

let Table = (props) => {
    let moneyFormat = (value) => {
        return parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', ',');
    }
    let percentFormat = (value) => {
        return `${value}%`
    }
    let onSort = (sortingField, sortType) => {
        const orderedData = _.orderBy(props.data.concat(), sortingField, sortType)
        props.setData(orderedData)
    }
    let changeOrder = (header, direction) => {
        let newOrder = []
        for (let i = 0; i < columnsOrder.length; i++) {
            if (columnsOrder[i].field === header) {
                if (direction === 'toLeft') {
                    let tempVal = columnsOrder[i - 1]
                    newOrder[i - 1] = columnsOrder[i]
                    newOrder[i] = tempVal
                } else if (direction === 'toRight') {
                    let tempVal = columnsOrder[i + 1]
                    newOrder[i + 1] = columnsOrder[i]
                    newOrder[i] = tempVal
                    i++
                }
            } else newOrder[i] = columnsOrder[i]
        }
        setColumnsOrder(newOrder)
    }
    let stickyVisibleColumnsIndexes = (data) => {
        let indexes = []
        for (let i = 0, j = 0; i < 3; j++) {
            if (data[j].visible === true) {
                indexes.push(j)
                i++
            }
        }
        return indexes
    }
    const [sortField, setSortField] = useState('id')
    const [sort, setSort] = useState('asc')
    const [columnsOrder, setColumnsOrder] = useState(props.displayedColumns)
    useEffect(() => {
        onSort(sortField, sort)
    }, [sortField, sort])
    useEffect(() => {
        setColumnsOrder(props.displayedColumns)
    }, [props.displayedColumns])

    return <div>
        <table>
            <thead>
            <tr className={styles.firstRow}>
                <th className={styles.stickyHead1}>№</th>
                {columnsOrder.map(item => {
                    return <th
                        className={cn(
                            {[styles.stickyHead2]: columnsOrder.indexOf(item) === stickyVisibleColumnsIndexes(columnsOrder)[0]},
                            {[styles.stickyHead3]: columnsOrder.indexOf(item) === stickyVisibleColumnsIndexes(columnsOrder)[1]},
                            {[styles.stickyHead4]: columnsOrder.indexOf(item) === stickyVisibleColumnsIndexes(columnsOrder)[2]},
                            {[styles.hiddenCol]: item.visible === false}
                        )}
                        key={item.field}>
                        {item.translation}
                        <div>
                            {columnsOrder.indexOf(item) > 0 &&
                            <button onClick={() => {
                                changeOrder(item.field, 'toLeft')
                            }}>&#9668;</button>}
                            {columnsOrder.indexOf(item) < columnsOrder.length - 1 &&
                            <button onClick={() => {
                                changeOrder(item.field, 'toRight')
                            }}>&#9658;</button>}
                        </div>
                        <button onClick={() => {
                            setSortField(item.field)
                            sort === "asc" ? setSort("desc") : setSort("asc")
                        }}>{sort === "asc" ? <>&#9650;</> : <>&#9660;</>}</button>
                    </th>
                })}
            </tr>
            <tr className={styles.secondRow}>
                <th className={styles.stickyHead1}/>
                {columnsOrder.map(item => {
                    return <th
                        className={cn(
                            {[styles.stickyHead2]: columnsOrder.indexOf(item) === stickyVisibleColumnsIndexes(columnsOrder)[0]},
                            {[styles.stickyHead3]: columnsOrder.indexOf(item) === stickyVisibleColumnsIndexes(columnsOrder)[1]},
                            {[styles.stickyHead4]: columnsOrder.indexOf(item) === stickyVisibleColumnsIndexes(columnsOrder)[2]},
                            {[styles.hiddenCol]: item.visible === false}
                        )}>
                        {item.dataType === 'money' && props.getFinalResult(item)}
                        {item.dataType === 'percent' && props.getFinalResult(item)}
                        {(item.dataType === 'string' || item.dataType === 'number') && props.getFinalResult(item)}
                    </th>
                })}
            </tr>
            </thead>
            <tbody>
            {props.data.map(dataItem => {
                return <tr key={dataItem}>
                    <td className={styles.stickyCol1}>{props.data.indexOf(dataItem) + 1}</td>
                    {columnsOrder.map(orderItem => {
                        return <td className={cn(
                            {[styles.stickyCol2]: columnsOrder.indexOf(orderItem) === stickyVisibleColumnsIndexes(columnsOrder)[0]},
                            {[styles.stickyCol3]: columnsOrder.indexOf(orderItem) === stickyVisibleColumnsIndexes(columnsOrder)[1]},
                            {[styles.stickyCol4]: columnsOrder.indexOf(orderItem) === stickyVisibleColumnsIndexes(columnsOrder)[2]},
                            {[styles.hiddenCol]: orderItem.visible === false}
                        )}
                                   key={orderItem.field}>
                            {
                                orderItem.dataType === "money"
                                    ? moneyFormat(dataItem[orderItem.field])
                                    : orderItem.dataType === "percent"
                                    ? percentFormat(dataItem[orderItem.field])
                                    : dataItem[orderItem.field]
                            }
                        </td>
                    })}
                </tr>
            })
            }
            </tbody>
        </table>
    </div>
}
export default Table
