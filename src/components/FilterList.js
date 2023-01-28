import React from 'react';
import Styles from './FilterList.module.css';

const filterOptions = [
    'All', 
    'Active', 
    'Completed'
];

export default function FilterList(props) {

    const handleClick = (filter) => {
        props.setFilter(filter);
    }

    const filters = filterOptions.map((filterOption, index) => {
        return (
            <li className={Styles.filterList} key={index}>
                <button 
                    className={props.filter === filterOption ? Styles.active : Styles.filterBtn}
                    onClick={(e) => handleClick(filterOption)}
                >
                    {filterOption}
                </button>
            </li>
        )
    });

    return(
        <ul className={Styles.filterGroup}>
            {filters}
        </ul>
    );
}