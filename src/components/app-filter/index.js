import styles from './style.module.scss';

const AppFilter = () => {
    return (
        <div className={styles.btn_group}>
            <button className='btn btn-light' type='button'>
                Все сотрудники
            </button>
            <button className='btn btn-outline-light' type='button'>
                На повышение
            </button>
            <button className='btn btn-outline-light' type='button'>
                З/П большн 1000$
            </button>
        </div>
    );
};

export default AppFilter;
