import React, { Component } from 'react';

// CHILD ROW
import TableBodyRow from './TableBodyRow';
// IMPLEMENT THIS PURE COMPONENT TO OUR TABLE

class TableBody extends Component {
    render() {
        const { data, isCheckboxActive, activeRowHanlder, activeRowID } = this.props;
        const TableBodyRows = data
            // TODO SINGLE SEARCH AS WELL
            // TODO MAKE MULTIPLY OBJECT SEARCH
            .map(item => (
            // TODO MAKE REFACTORING WITH SCSS
            // TODO https://medium.com/@oreofeolurin/configuring-scss-with-react-create-react-app-1f563f862724
            <tr style={{ background: activeRowID.indexOf(item.id) > -1 ? "red" : "" }}  key={item.id}>
                <td style={{ display: !isCheckboxActive ? "none" : "block" }}>
                    <input
                        onChange={() => activeRowHanlder(item.id)}
                        type="checkbox"
                    />
                </td> 
                <TableBodyRow id={item.id} />
                <TableBodyRow id={item.title} />
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

