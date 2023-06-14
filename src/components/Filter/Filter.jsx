import css from './Filter.module.css';

export const Filter = () => {
    return (
        <div className={css.filter}>
            <h2>Find contacts by name</h2>
            <input type="text" name="filter" id="filter" />
        </div>
    )
}