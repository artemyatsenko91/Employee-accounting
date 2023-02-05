import { Component } from 'react';

import AppInfo from '../app-info';
import SearchPanel from '../search-panel';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employess-add-form';

import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Artem Y.', salary: 700, increase: false, id: 1 },
                { name: 'Elena Y.', salary: 400, increase: true, id: 2 },
                { name: 'Sonya Y.', salary: 1000, increase: false, id: 3 },
            ],
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    render() {
        return (
            <div className='app'>
                <AppInfo />
                <SearchPanel />
                <EmployeesList
                    data={this.state.data}
                    deleteItem={this.deleteItem}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
