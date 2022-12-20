import React, { useEffect, useState } from 'react'
import { Message, Upload } from 'element-react'
import * as $http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'
import { Trans } from 'react-i18next';

const Form = ({ formData, setFormData }) => {
    // State
    const [category, setCategory] = useState([])

    useEffect(() => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/category/name`)
            .then(response => setCategory(response.data))
            .catch(err => console.log(err))
    }, [])

    // Function
    function handleAvatarScucess(res, file) {
        let iconUrl = res.data.url;
        if (iconUrl !== null) {
            setFormData({
                ...formData,
                imageUrl: iconUrl
            })
        }
    }

    function beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Message('Icon picture size can not exceed 2MB!');
        }
        return isLt2M;
    }

    function handleChange({ target }) {
        const { name, value, checked } = target
        let form = { ...formData };
        (name === 'public' && checked)
            ? form.visibility = true
            : (name === 'private' && checked)
                ? form.visibility = false
                : form[name] = value
        setFormData(form)
    }

    function handleCategoryClick(index) {
        let active = [...formData.Categories]
        if (active.includes(index)) {
            active = active.filter(i => i !== index)
        }
        else {
            active = [...active, index]
        }
        setFormData({
            ...formData,
            Categories: active
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz.name'} /></label>
                <input onChange={handleChange} type="text" className="form-control" name="name" value={formData?.name} placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz.category'} /></label>
                <div className="d-flex flex-wrap">
                    {category.map((item) =>
                        <span
                            key={item.id}
                            className={`btn btn-${formData?.Categories.includes(item.id) ? 'primary' : 'secondary'} badge badge-pill badge-${formData?.Categories.includes(item.id) ? 'primary' : 'secondary'} m-1 p-2`}
                            onClick={() => handleCategoryClick(item.id)}
                        >
                            {item.name}
                        </span>
                    )}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz.image'} /></label>
                <div className="d-flex justify-content-between align-items-center">
                    <input onChange={handleChange} type="text" className="form-control" name="imageUrl" value={formData?.imageUrl} placeholder="Image" />
                    <Upload className="icon-uploader p-2" action={CONFIG.API_BASE_URL + "/v1/rest/upload"} showFileList={false}
                        onSuccess={(res, file) => handleAvatarScucess(res, file)}
                        beforeUpload={file => beforeAvatarUpload(file)}
                        headers={$http.getAuthenHeader()}
                    >
                        {formData.imageUrl ? <img src={formData.imageUrl} alt="icon" className="imageIcon" style={{ width: "34px", height: "34px" }} /> : <i className="el-icon-plus avatar-uploader-icon"></i>}
                    </Upload>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz.visibility'} /></label>
                <div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={handleChange} type="radio" id="customRadioInline1" name="public" className="custom-control-input" checked={formData?.visibility} />
                        <label className="custom-control-label" htmlFor="customRadioInline1">Public</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={handleChange} type="radio" id="customRadioInline2" name="private" className="custom-control-input" checked={!formData?.visibility} />
                        <label className="custom-control-label" htmlFor="customRadioInline2">Private</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="time"><Trans i18nKey={'quiz.time'} /></label>
                <input onChange={handleChange} type="text" className="form-control" name="time" value={formData?.time} placeholder="Minutes" />
            </div>
        </form>
    )
}

export default Form