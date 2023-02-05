import { Component } from 'react';
import './style.scss';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rise: false,
            increase: false,
        };
    }
    onHandleIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase,
        }));
    };
    onHandleRise = () => {
        this.setState(({ rise }) => ({
            rise: !rise,
        }));
    };
    render() {
        const { name, salary, deleteItem } = this.props;
        const { increase } = this.state;
        const { rise } = this.state;
        const riseEmpoyee = rise ? 'like' : '';
        const listClassName = increase
            ? `list-group-item d-flex justify-content-between increase ${riseEmpoyee}`
            : `list-group-item d-flex justify-content-between ${riseEmpoyee}`;
        return (
            <li className={listClassName}>
                <span
                    className='list-group-item-label'
                    onClick={this.onHandleRise}
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
                            onClick={this.onHandleIncrease}
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
}

export default EmployeesListItem;
