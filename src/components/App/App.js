import './App.scss';
import AppInfo from '../app-info';
import SearchPanel from '../search-panel';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employess-add-form';

const App = () => {
    const data = [
        { name: 'Artem Y.', salary: 700, increase: false },
        { name: 'Elena Y.', salary: 400, increase: true },
        { name: 'Sonya Y.', salary: 1000, increase: false },
    ];

    return (
        <div className='app'>
            <AppInfo />
            <SearchPanel />
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
};

export default App;
