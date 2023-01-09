import styles from './style.module.scss';

import EmployeesListItem from '../employees-list-item';

const EmployeesList = () => {
    return (
        <ul className={`${styles.app_list} list-group`}>
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    );
};

export default EmployeesList;
