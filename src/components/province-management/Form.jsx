import React, { useState } from 'react'
import { Message, Upload } from 'element-react'
import DatePicker from 'react-date-picker';

import { Trans } from 'react-i18next';
import RichTextEditor from './RichTextEditor';
const Form = ({ formData, setFormData }) => {
    const [valueDateStart, setValueDateStart] = useState(new Date());
    const [valueDateEnd, setValueDateEnd] = useState(new Date());
    const [lastUpdated, setLastUpdated] = useState(new Date());
    const [value,setValue] = useState();

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
                <label htmlFor="name"><Trans i18nKey={'quiz-category.name'} /></label>
                <input onChange={handleChange} type="text" className="form-control" name="name" value={formData.electionDate} placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'class.description'} /></label>
                {formData.description ? <textarea onChange={handleChange} name="description" className="form-control" value={formData.description} />:
                    <RichTextEditor setValue={setValue}/>
                }
               
            </div>

            <div className="form-group">
                <label htmlFor="name">pollClose</label>
                <textarea onChange={handleChange} name="description" className="form-control" value={formData.pollClose} />
            </div>
            <div className="form-group">
                <label htmlFor="name">name</label>
                <textarea onChange={handleChange} name="description" className="form-control" value={formData.name} />
            </div>
            <div className="form-group">
                <label htmlFor="name">codeName</label>
                <textarea onChange={handleChange} name="description" className="form-control" value={formData.codeName} />
            </div>
            <div className="form-group">
                <label htmlFor="name">lastUpdated</label>
                <div className="form-group row">
                    <DatePicker onChange={setLastUpdated} value={valueDateEnd} minDate={new Date()} className="col-6" />
                </div>
            </div>
        </form>
    )
}

export default Form