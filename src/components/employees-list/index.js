import styles from './style.module.scss';

import EmployeesListItem from '../employees-list-item';

const EmployeesList = ({ data }) => {
    return (
        <ul className={`${styles.app_list} list-group`}>
            {data.map((item, index) => (
                <EmployeesListItem key={index} {...item} />
            ))}
        </ul>
    );
};

export default EmployeesList;
