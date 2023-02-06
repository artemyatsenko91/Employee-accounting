import './style.scss';

const EmployeesListItem = (props) => {
        const { name, salary, deleteItem, increase, rise, onToggleProp} = props;
        const riseEmpoyee = rise ? 'like' : '';
        const listClassName = increase
            ? `list-group-item d-flex justify-content-between increase ${riseEmpoyee}`
            : `list-group-item d-flex justify-content-between ${riseEmpoyee}`;
        return (
            <li className={listClassName}>
                <span
                    className='list-group-item-label'
                    onClick={onToggleProp}
                    data-toggle="increase"
                >
                    {name}
                </span>
                <input
                    type='text'
                    className='list-group-item-input'
                    defaultValue={`${salary}$`}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-cookie btn-sm'>
                        <i
                            className='fas fa-cookie'
                            onClick={onToggleProp}
                            data-toggle="rise"
                        ></i>
                    </button>

                    <button type='button' className='btn-trash btn-sm '>
                        <i className='fas fa-trash' onClick={deleteItem}></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        );
}

export default EmployeesListItem;
