import { Component } from 'react';

import styles from './style.module.scss';
import AppFilter from '../app-filter';

class SearchPanel extends Component {
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    };
    
    render() {
        return (
            <div className={styles.serach_panel}>
                <input
                    type='text'
                    className='form-control seach-input'
                    placeholder='Найти сотрудника'
                    value={this.term}
                    onChange={this.onUpdateSearch}
                />
                <AppFilter filter={this.props.filter} onChangeFilter={this.props.onChangeFilter}/>
            </div>
        );
    }
}

export default SearchPanel;
