import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./dashboard.css";
import {
  getMenuData,
  getFlagCreatMenu,
  getFlagUpdateMenu,
  getFlagEditMemberMenu,
  getMenuItemNeedEdit,
  getMenuRoleUpdate,
  getMenuItemCreate
} from "../../reducers/menu-management";
import { getAllRole } from "../../reducers/role/index";
import * as menumangementAction from "../../actions/menu-management/menuManagementAction";
import * as roleActions from '../../actions/role/roleActions'
import MenuList from "./MenuList";
import CreateMenuForm from "./CreateMenuForm";
import UpdateMenuForm from "./UpdateMenuForm";
import EditMemberMenuFrom from "./EditMemberMenuForm";
import PageHeading from "./PageHeading";
import { Trans, withTranslation } from 'react-i18next';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fnGetMenuData, fnGetAllRole } = this.props;
    // fnGetMenuData();
    fnGetAllRole();
  }
  render() {
    const { fnToggleCreateModel } = this.props;
    return (
      <div>
        <PageHeading />
        <div className="wrapper wrapper-content animated">
          <div className="row">
            <div className="col-md-12">
              <div className="ibox ">
                <div className="ibox-title">
                  <h4><Trans i18nKey={'content.menu-herder-menu'} /></h4>
                  <div className="ibox-tools">
                    <a className="collapse-link" href="#">
                      <i className="fa fa-chevron-up"></i>
                    </a>
                    <a className="close-link" href="#">
                      <i className="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div className="ibox-content">
                  <button
                    className="btn btn-outline btn-primary"
                    type="button"
                    onClick={() => fnToggleCreateModel(true)}
                  >
                    <Trans i18nKey={'Button.button-create'} />
                  </button>
                  <MenuList
                    menuData={this.props.menuData}
                    fnDeleteMenuData={this.props.fnDeleteMenuData}
                    fnToggleUpdateModel={this.props.fnToggleUpdateModel}
                    fnToggleEditMemberModel={this.props.fnToggleEditMemberModel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INCLUDE MODAL HERE */}
        <CreateMenuForm
          flagCreateMenu={this.props.flagCreateMenu}
          fnToggleCreateModel={this.props.fnToggleCreateModel}
          fnCreateMenuData={this.props.fnCreateMenuData}
          menuData={this.props.menuData}
          fnChangeCreateMenuData={this.props.fnChangeCreateMenuData}
          menuItemCreate={this.props.menuItemCreate}
        />
        <UpdateMenuForm
          flagUpdateMenu={this.props.flagUpdateMenu}
          fnUpdateMenuData={this.props.fnUpdateMenuData}
          fnToggleUpdateModel={this.props.fnToggleUpdateModel}
          menuData={this.props.menuData}
          menuItemNeedEdit={this.props.menuItemNeedEdit}
          fnChangeUpdateMenuData={this.props.fnChangeUpdateMenuData}
        />

        <EditMemberMenuFrom
          flagEditMemberMenu={this.props.flagEditMemberMenu}
          fnToggleEditMemberModel={this.props.fnToggleEditMemberModel}
          menuRoleUpdate={this.props.menuRoleUpdate}
          fnChangeUpdateMenuRoleData={this.props.fnChangeUpdateMenuRoleData}
          fnUpdateMenuRoleData={this.props.fnUpdateMenuRoleData}
          roleData={this.props.roleData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // MENU DATA
  menuData: getMenuData(state),
  menuItemNeedEdit: getMenuItemNeedEdit(state),
  menuRoleUpdate: getMenuRoleUpdate(state),
  menuItemCreate: getMenuItemCreate(state),
  roleData: getAllRole(state),

  // STATE OPEN/CLOSE FORM
  flagCreateMenu: getFlagCreatMenu(state),
  flagUpdateMenu: getFlagUpdateMenu(state),
  flagEditMemberMenu: getFlagEditMemberMenu(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // FN CRUD MENU DATA
      fnGetMenuData: menumangementAction.fnGetAllMenuData,
      fnCreateMenuData: menumangementAction.fnCreateMenuData,
      fnUpdateMenuData: menumangementAction.fnUpdateMenuData,
      fnDeleteMenuData: menumangementAction.fnDeleteMenuData,
      // FN OPEN CLOSE FORM
      fnToggleCreateModel: menumangementAction.fnToggleCreateModel,
      fnToggleUpdateModel: menumangementAction.fnToggleUpdateModel,
      fnToggleEditMemberModel: menumangementAction.fnToggleEditMemberModel,

      //
      fnGetMenuItemById: menumangementAction.fnGetMenuItemById,
      fnChangeUpdateMenuData: menumangementAction.fnChangeUpdateMenuData,
      fnChangeUpdateMenuRoleData:
        menumangementAction.fnChangeUpdateMenuRoleData,
      fnUpdateMenuRoleData: menumangementAction.fnUpdateMenuRoleData,
      fnChangeCreateMenuData: menumangementAction.fnChangeCreateMenuData,

      // ROLE ACTIONE
      fnGetAllRole: roleActions.fnGetAllRole,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Dashboard));
