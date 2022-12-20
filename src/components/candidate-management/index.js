import React from 'react';

// import Header from './Header';
// import Paging from './Paging';
import Table from './Table';
import { Trans, withTranslation } from 'react-i18next';
import "./index.css"


function Candidates() {
  return (
      <div id="quiz-category">
          <div className="row wrapper border-bottom white-bg page-heading">
              <div className="col-lg-12">
                  <h2><Trans i18nKey={'quiz-category.header'} /> </h2>
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                          <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
                      </li>
                      <li className="breadcrumb-item">
                          <span><Trans i18nKey={'quiz-category.quiz-manager'} /></span>
                      </li>
                      <li className="breadcrumb-item">
                          <span><Trans i18nKey={'quiz-category.header'} /></span>
                      </li>
                  </ol>
              </div>
          </div>
          <div className="wrapper wrapper-content animated">
              <div className="row">
                  <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                          <div className="card-body">
                              <h4 className='card-title'><Trans i18nKey={'quiz-category.header'} /></h4>
                              <hr />
                              {/* <Header /> */}
                              <hr />
                              <Table />
                              {/* <Paging /> */}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Candidates