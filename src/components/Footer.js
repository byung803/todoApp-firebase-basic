import React from 'react';
import FilterLink from '../containers/FilterLink';
import { visibilityFilter } from '../actions';

const Footer = () => {
    return (
        <div>
            <FilterLink visibilityFilter={visibilityFilter.SHOW_ALL}>Show All</FilterLink>
            <FilterLink visibilityFilter={visibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink visibilityFilter={visibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    );
}

export default Footer;