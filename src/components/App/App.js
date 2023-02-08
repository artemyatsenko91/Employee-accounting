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
                    rise: true,
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
            term: '',
            filter: 'all'
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filtered = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter((item) => item.rise);
            case 'moreThan500':
                return items.filter((item) => item.salary > 500);
            default:
                return items;
        }
    };

    onChangeFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const { data, term, filter } = this.state;
        const countEmp = this.state.data.length;
        const countIncrease = this.state.data.filter(
            (item) => item.increase === true
        ).length;
        const visibleData = this.filtered(this.searchEmp(data, term), filter);
        return (
            <div className='app'>
                <AppInfo countEmp={countEmp} countIncrease={countIncrease} />
                <SearchPanel onUpdateSearch={this.onUpdateSearch} filter={filter} onChangeFilter={this.onChangeFilter}/>
                <EmployeesList
                    data={visibleData}
                    deleteItem={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
