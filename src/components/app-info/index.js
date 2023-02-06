import styles from './style.module.scss';

const AppInfo = (props) => {
    return (
        <div className={styles.app_info}>
            <h1>Учет сотрудников компании N</h1>
            <h2>Общее число сотрудников: {props.countEmp}</h2>
            <h2>Премию получают: {props.countIncrease}</h2>
        </div>
    );
};

export default AppInfo;
