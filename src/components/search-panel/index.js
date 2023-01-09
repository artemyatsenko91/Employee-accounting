import styles from './style.module.scss';
import AppFilter from '../app-filter';

const SearchPanel = () => {
    return (
        <div className={styles.serach_panel}>
            <input
                type='text'
                className='form-control seach-input'
                placeholder='Найти сотрудника'
            />
            <AppFilter />
        </div>
    );
};

export default SearchPanel;
