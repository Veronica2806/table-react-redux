import React, { Component } from 'react';

// CHILD ROW
import TableHeaderRow from './TableHeaderRow';
class TableHeader extends Component {
    render() {
        const { headerColumnNames, activeColumns } = this.props;
        const TableHeaderRows = headerColumnNames
            .filter(item => activeColumns.indexOf(item) > -1 )
            .map(item =>
            (
                <TableHeaderRow
                    key={item}
                    name={item}
                />
            )
        );
        return (
         <thead>
             <tr>
                 {TableHeaderRows}
             </tr>
         </thead>
        );
    }
}



export default TableHeader;

