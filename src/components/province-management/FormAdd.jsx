import React, { useEffect, useState } from "react";
import { Message, Upload } from "element-react";
import * as $http from "../../utils/httpProvider";
import * as CONFIG from "../../config/configUrl";
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import RichTextEditor from "./RichTextEditor";


// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

// import { Trans } from "react-i18next";
const FormAdd = ({ formData, setFormData }) => {
    const [value, setValue] = useState()
    function handleAvatarScucess(res, file) {
        let iconUrl = res.data.url;
        if (iconUrl !== null) {
            setFormData({
                ...formData,
                FileImg: iconUrl,
            });
        }
    }

    function beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Message("Icon picture size can not exceed 2MB!");
        }
        return isLt2M;
    }

   function handleChange({ target }) {
        const { name, value, checked } = target;
        setFormData({
            ...formData,
            [name]: name === "status" ? checked : value,
        });
    }

   useEffect(() => {
    setFormData({ ...formData, description: value})
   },[value]);
      

    useEffect(() => {
       
    },[])

    
    return (
        <form className="container rounded bg-white" style={{ width: "750px" }}>
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-1 py-2 ">
                        <div className="d-flex flex-column align-items-center text-center mb-2" style={{ width: "125px", height: "125px", background: "gray", borderStyle: "dotted" }}>
                            <Upload
                                className="icon-uploader"
                                action={CONFIG.API_BASE_URL + "/v1/rest/upload"}
                                showFileList={false}
                                onSuccess={(res, file) => handleAvatarScucess(res, file)}
                                beforeUpload={(file) => beforeAvatarUpload(file)}
                                headers={$http.getAuthenHeader()}
                            >
                                {formData.FileImg ? (
                                    <img
                                        src={formData.FileImg}
                                        alt="icon"
                                        className="FileImg"
                                        style={{ width: "125px", height: "125px" }}
                                    />
                                ) : (
                                    <i className="el-icon-plus avatar-uploader-icon pt-5"></i>
                                )}
                            </Upload>
                        </div>
                        <span className="font-weight-bold">Edogaru</span>
                        <span className="text-black-50">edogaru@mail.com.my</span>
                        <span> </span>
                    </div>
                </div>
                <div className="col-md-9 border-right">
                    <div className="p-1 py-2">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Add Candidate</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-9">
                                <label className="labels">Full Name</label>
                                <input onChange={handleChange} type="text" className="form-control" name="fullname" placeholder="Name" />
                            </div>
                            <div className="col-md-3">
                                <label className="labels">Age</label>
                                <input onChange={handleChange} type="text" className="form-control" name="old" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Email </label>
                                <input onChange={handleChange} type="text" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Certification</label>
                                <input onChange={handleChange} type="text" className="form-control" name="certification" placeholder="Certification" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-12">
                    <label className="labels">description</label>
                    <RichTextEditor setValue={setValue}/>
           <br/>
           <div >{value}</div>
                </div>
            </div>

            {/* </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz-category.name'} /></label>
                <input onChange={handleChange} type="text" className="form-control" name="name" value={formData?.fullName} placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'class.description'} /></label>
                <textarea onChange={handleChange} name="description" className="form-control" value={formData?.description} placeholder="Description" />
            </div>
            
            <div className="form-group">
                <label htmlFor="name"><Trans i18nKey={'quiz-category.image-icon'} /></label>
                <div className="d-flex justify-content-between align-items-center">
                    <input onChange={handleChange} type="text" className="form-control" name="FileImg" value={formData?.FileImg} placeholder="Image icon" />
                    <Upload className="icon-uploader p-2" action={CONFIG.API_BASE_URL + "/v1/rest/upload"} showFileList={false}
                        onSuccess={(res, file) => handleAvatarScucess(res, file)}
                        beforeUpload={file => beforeAvatarUpload(file)}
                        headers={$http.getAuthenHeader()}
                    >
                        {formData.FileImg ? <img src={formData.FileImg} alt="icon" className="FileImg" style={{ width: "34px", height: "34px" }} /> : <i className="el-icon-plus avatar-uploader-icon"></i>}
                    </Upload>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox d-inline">
                    <input onChange={handleChange} type="checkbox" className="custom-control-input" id="customCheck" name="status" checked={formData?.status} />
                    <label className="custom-control-label" htmlFor="customCheck"><Trans i18nKey={'quiz-category.status'} /></label>
                </div>
            </div> */}
        </form>
    );
};

export default FormAdd;
