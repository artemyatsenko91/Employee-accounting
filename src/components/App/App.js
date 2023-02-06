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
                {
                    name: 'Artem Y.',
                    salary: 700,
                    increase: false,
                    rise: false,
                    id: 1,
                },
                {
                    name: 'Elena Y.',
                    salary: 400,
                    increase: true,
                    rise: false,
                    id: 2,
                },
                {
                    name: 'Sonya Y.',
                    salary: 1000,
                    increase: false,
                    rise: false,
                    id: 3,
                },
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
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    render() {
        const countEmp = this.state.data.length;
        const countIncrease = this.state.data.filter(
            (item) => item.increase === true
        ).length;
        return (
            <div className='app'>
                <AppInfo countEmp={countEmp} countIncrease={countIncrease} />
                <SearchPanel />
                <EmployeesList
                    data={this.state.data}
                    deleteItem={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
