import styles from './style.module.scss';

import EmployeesListItem from '../employees-list-item';

const EmployeesList = ({ data, deleteItem, onToggleProp}) => {
    return (
        <ul className={`${styles.app_list} list-group`}>
            {data.map((item) => {
                const { id, ...itemProps } = item;
                return (
                    <EmployeesListItem
                        key={id}
                        {...itemProps}
                        deleteItem={() => deleteItem(id)}
                        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
                    />
                );
            })}
        </ul>
    );
};

export default EmployeesList;
