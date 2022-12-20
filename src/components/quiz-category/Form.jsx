import React, { useState } from 'react'
import { Message, Upload } from 'element-react'
import * as $http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'

import { Trans } from 'react-i18next';
const Form = ({ formData, setFormData }) => {
    function handleAvatarScucess(res, file) {
        let iconUrl = res.data.url;
        if (iconUrl !== null) {
            setFormData({
                ...formData,
                imageIcon: iconUrl
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
        setFormData({
            ...formData,
            [name]: name === 'status' ? checked : value,
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz-category.name'} /></label>
                <input onChange={handleChange} type="text" className="form-control" name="name" value={formData?.name} placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'class.description'} /></label>
                <textarea onChange={handleChange} name="description" className="form-control" value={formData?.description} placeholder="Description" />
            </div>
            <div className="form-group">
                <label htmlFor="name">Icon</label>
                <input onChange={handleChange} type="text" className="form-control" name="icon" value={formData?.icon} placeholder="Icon" />
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz-category.image-icon'} /></label>
                <div className="d-flex justify-content-between align-items-center">
                    <input onChange={handleChange} type="text" className="form-control" name="imageIcon" value={formData?.imageIcon} placeholder="Image icon" />
                    <Upload className="icon-uploader p-2" action={CONFIG.API_BASE_URL + "/v1/rest/upload"} showFileList={false}
                        onSuccess={(res, file) => handleAvatarScucess(res, file)}
                        beforeUpload={file => beforeAvatarUpload(file)}
                        headers={$http.getAuthenHeader()}
                    >
                        {formData.imageIcon ? <img src={formData.imageIcon} alt="icon" className="imageIcon" style={{ width: "34px", height: "34px" }} /> : <i className="el-icon-plus avatar-uploader-icon"></i>}
                    </Upload>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox d-inline">
                    <input onChange={handleChange} type="checkbox" className="custom-control-input" id="customCheck" name="status" checked={formData?.status} />
                    <label className="custom-control-label" htmlFor="customCheck"><Trans i18nKey={'quiz-category.status'} /></label>
                </div>
            </div>
        </form>
    )
}

export default Form