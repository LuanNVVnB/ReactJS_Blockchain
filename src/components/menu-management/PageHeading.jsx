import React, { Component } from "react";
import { Trans } from 'react-i18next';

class PageHeading extends Component {
  render() {
    return (
      <div className="row wrapper border-bottom white-bg page-heading" id="setting">
        <div className="col-lg-12">
          <h2><Trans i18nKey={'content.menu-herder-menu'} /></h2>
          <ol id="setting" className="breadcrumb">
            <li id="setting" className="breadcrumb-item">
              <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
            </li>
            <li id="setting" className="breadcrumb-item">
              <span><Trans i18nKey={'content.menu-herder-menu'} /></span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default PageHeading;
