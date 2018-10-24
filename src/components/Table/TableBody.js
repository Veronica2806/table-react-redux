import React, {Component} from 'react';
import TableBodyRow from './TableBodyRow';

class TableBody extends Component {
    render() {
        const {data, isCheckboxActive, removeRowFromTable, activeRowHanlder, activeRowID} = this.props;
        const TableBodyRows = data
            .map(item => (
                    <tr style={{background: activeRowID.indexOf(item.id) > -1 ? "red" : ""}} key={item.id}>
                        <td style={{display: !isCheckboxActive ? "none" : "block"}}>
                            <input
                                onChange={() => activeRowHanlder(item.id)}
                                type="checkbox"
                            />
                        </td>
                        <TableBodyRow id={item.id}/>
                        <TableBodyRow id={item.title}/>
                        <td>
                            <button
                                onClick={() => removeRowFromTable(item.id)}
                            >remove</button>
                        </td>
                    </tr>
                )
            );
        return (
            <tbody>
            {TableBodyRows}
            </tbody>
        );
    }
}


export default TableBody;

