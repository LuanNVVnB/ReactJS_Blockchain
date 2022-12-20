import React, { Component } from 'react';
import { Dialog, Upload } from 'element-react';
import * as CONFIG from '../../config/configUrl';
import * as $http from '../../utils/httpProvider';
import './user-profile.css'

class UploadAvatar extends Component {

    render() {
        const { imageUrl, handleAvatarSuccess, beforeAvatarUpload } = this.props;
        return (
            <div className="user-profile">
                <Dialog title="Update Avatar" size="tiny" visible={this.props.showUploadAvatar}
                    onCancel={() => this.props.fnCloseUploadAvatar()}
                    lockScroll={false} >
                    <Dialog.Body>
                        <Upload
                            className="avatar-uploader user-profile"
                            action={CONFIG.API_BASE_URL + "/v1/rest/upload/avatar"}
                            showFileList={false}
                            onSuccess={(res, file) => handleAvatarSuccess(res, file)}
                            beforeUpload={file => beforeAvatarUpload(file.type, file.size)}
                            headers={$http.getAuthenHeader()}>
                            {imageUrl ? <img src={imageUrl} className="avatar" alt="Upload avatar"/> : <i className="el-icon-plus avatar-uploader-icon"></i>}
                        </Upload>
                    </Dialog.Body>
                </Dialog>
            </div>
        )
    }
}

export default UploadAvatar;