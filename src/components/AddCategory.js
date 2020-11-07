import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChangeText = useCallback(({target: {value}}) => setInputValue(value), []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }, [inputValue, setCategories]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search..." type="text" value={inputValue} onChange={handleChangeText} />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
