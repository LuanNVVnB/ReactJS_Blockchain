import React from 'react';
import './dashboard.css'

class Dashboard extends React.Component {
    render() {
        if (typeof window.localStorage.getItem('accessToken') === "undefined" || window.localStorage.getItem('accessToken') == null) {
            window.location.href = '#/login';
        }
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading"  id="setting">
                    <div className="col-lg-12">
                        <h2>Dashboard</h2>
                        <ol id = "setting" className="breadcrumb" id="setting">
                            <li id = "setting" className="breadcrumb-item">
                                <span>Home</span>
                            </li>
                            <li id = "setting" className="breadcrumb-item">
                                <span>Dashboard</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="wrapper wrapper-content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>What is S.K.U?</h4>
                                    <ul className="notes">
                                        <li>
                                            <div>

                                                <h4>S.K.U</h4>
                                                <p>is a program that encourage FSOFTers to share, contribute and utilize sharing assets
                                                    by a incentive/ reward policy which is applied to submitter and contributor.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>S.K.U is designed including:</h4>
                                                <p>- Coordinator team.</p>
                                                <p>- Reviewer.</p>
                                                <p>- FSOFTers.</p>
                                                <p>- SKU Portal.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Coordinator team</h4>
                                                <p>Deploy S.K.U program, collect submission from members.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Reviewer</h4>
                                                <p>Review and mark submission.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>FSOFTers</h4>
                                                <p>Attend to contribute, share content.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>SKU Portal</h4>
                                                <p>A web application which is used to centralize sharing assets at FSOFT level. It
                                                    provides approval process for publishing sharing assets and ability to restrict sharing assets.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div className="ibox ">
                                        <div className="ibox-title">
                                            <h5>Some IP of SKU</h5> <span className="label label-primary">Recommend</span>
                                            <div className="ibox-tools">
                                                <a className="collapse-link" href="#i">
                                                    <i className="fa fa-chevron-up"></i>
                                                </a>
                                                <a className="close-link" href="#i">
                                                    <i className="fa fa-times"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ibox-content">
                                            <div>
                                                <ol>
                                                    <li><a href="https://insight.fsoft.com.vn/sku/screen/index?screenKey=sk_ip_view&objectKey=1725">JAVA
                                                    Web Application framework (Spring boot + ReactJS)</a></li>
                                                    <li><a href="https://insight.fsoft.com.vn/sku/screen/index?screenKey=sk_ip_view&objectKey=1721">JAVA
                                                        Web Application framework (spring boot-thymeleaf-spring data
                                                    jpa)</a></li>
                                                    <li><a href="https://insight.fsoft.com.vn/sku/screen/index?screenKey=sk_ip_view&objectKey=1673">Role &amp; Pemission</a></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;