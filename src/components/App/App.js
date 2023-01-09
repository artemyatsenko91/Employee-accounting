import './App.scss';
import AppInfo from '../app-info';
import SearchPanel from '../search-panel';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employess-add-form';

const App = () => {
    return (
        <div className='app'>
            <AppInfo />
            <SearchPanel />
            <EmployeesList />
            <EmployeesAddForm />
        </div>
    );
};

export default App;
