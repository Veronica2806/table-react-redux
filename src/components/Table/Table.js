import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


class Table extends Component {

    constructor() {
        super();

        this.state = {
            activeRowID: [],
            myUserList: []
        }

    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            myUserList: nextProps.data
        });
    }

    deleteFromTable = () => {
        const array = this.state.myUserList;
        const activeRows = this.state.activeRowID;

        for (let i = 0; i < array.length; i++) {
            if (activeRows.includes(array[i])) {
                delete array[i];
            }
        }
        ;

        this.setState({
            myUserList: array
        });
    }

    removeRowFromTable = (value) => {

        const array = this.state.myUserList;
        let arrIndex = array.splice(array.findIndex(v => v.id === value), 1), i;
        while ((i = array.indexOf(arrIndex)) !== -1) {
            array.splice(i, 1);
        }
        console.log(array);
        this.setState({
            myUserList: array
        });
    }

    activeRowHanlder = (value) => {
        const array = this.state.activeRowID;
        if (array.indexOf(value) > -1) {
            let indexToRemove = array.indexOf(value);
            delete array[indexToRemove];

        } else {
            array.push(value);
        }
        localStorage.setItem('activeUsers', array);
        this.setState({
            activeRowID: array
        });
    }


    render() {
        const {data} = this.props;
        const headerColumnNames = this.state.myUserList.length > 0 ? Object.keys(this.state.myUserList[0]) : [];
        headerColumnNames.unshift('checkbox');
        const activeColumns = ['checkbox', 'id', 'title'];
        return (
            <div>
                <button
                    style={{display: this.state.activeRowID.length > 1 ? "block" : "none"}}
                    onClick={this.deleteFromTable}
                >MULTIPLY DELETE
                </button>
                <table className="rwd-table">
                    <TableHeader
                        activeColumns={activeColumns}
                        headerColumnNames={headerColumnNames}
                    >
                    </TableHeader>
                    <TableBody
                        activeRowID={this.state.activeRowID}
                        activeRowHanlder={this.activeRowHanlder}
                        removeRowFromTable={this.removeRowFromTable}
                        data={data.length > 0 ? data : []}
                        isCheckboxActive={activeColumns.indexOf('checkbox') > -1}
                    >
                    </TableBody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array
}


export default Table;

