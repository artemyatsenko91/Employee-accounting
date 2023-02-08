import { Component } from 'react';
import styles from './style.module.scss';

class AppFilter extends Component {
    render () {
        const buttonsData = [
            { name: 'all', btnText: 'Все сотрудники' },
            { name: 'rise', btnText: 'На повышение' },
            { name: 'moreThan500', btnText: 'З/П большн 500$' },
        ];
    
        const buttons = buttonsData.map(({ name, btnText }) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button className={`btn ${clazz}`} type='button' key={name} onClick={() => this.props.onChangeFilter(name)}>
                    {btnText}
                </button>
            );
        });
        return (
            <div className={styles.btn_group}>
                {buttons}
            </div>
        );
    }
};

export default AppFilter;
