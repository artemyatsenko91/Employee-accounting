import styles from './style.module.scss';

import EmployeesListItem from '../employees-list-item';

const EmployeesList = ({ data, deleteItem }) => {
    return (
        <ul className={`${styles.app_list} list-group`}>
            {data.map((item) => {
                const { id, ...itemProps } = item;
                return (
                    <EmployeesListItem
                        key={id}
                        {...itemProps}
                        deleteItem={() => deleteItem(id)}
                    />
                );
            })}
        </ul>
    );
};

export default EmployeesList;
