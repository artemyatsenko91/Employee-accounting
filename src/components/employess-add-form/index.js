import { Component } from 'react';
import styles from './style.module.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        });
    };
    render() {
        const { name, salary } = this.state;
        return (
            <div className={styles.app_add_form}>
                <h3>Добавьте нового сотрудника</h3>
                <form className={`${styles.add_form} d-flex`}>
                    <input
                        type='text'
                        className='form-control new-post-label'
                        placeholder='Как его зовут?'
                        name='name'
                        value={name}
                        onChange={this.onHandleChange}
                    />
                    <input
                        type='number'
                        className='form-control new-post-label'
                        placeholder='З/П в $?'
                        name='salary'
                        value={salary}
                        onChange={this.onHandleChange}
                    />

                    <button
                        type='submit'
                        className='btn btn-outline-light'
                        onClick={this.onSubmit}
                    >
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
