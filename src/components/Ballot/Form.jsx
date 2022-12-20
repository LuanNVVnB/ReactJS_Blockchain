import React, { useState } from 'react'

import { Trans } from 'react-i18next';
const Form = ({ formData, setFormData }) => {

    function handleChange({ target }) {
        const { name, value, checked } = target
        setFormData({
            ...formData,
            [name]: name === 'status' ? checked : value,
        })
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">title</label>
                <input onChange={handleChange} type="text" className="form-control" name="name" placeholder="Name" />
            </div>
        </form>
    )
}

export default Form