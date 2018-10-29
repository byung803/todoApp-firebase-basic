import React from 'react';

const Link = ({ children, active, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}</button>
)

export default Link;