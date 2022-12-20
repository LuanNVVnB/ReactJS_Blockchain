import { reducer as formReducer } from "redux-form";
import Theme from "./Theme";
import UserProfile from "./user-profile";
import Commentation from "./commentation";
import MenuManagement from "./menu-management";
import FileManager from "./upload-file";
import History from "./history";
import LoginPage from "./login";
import RegisterPage from "./register";
import UserManager from "./user-manager";
import GroupManager from "./group-manager";
import Permission from './permission';
import Role from './role';
import ObjectType from './object-type';
import ForgotPage from "./forgetpassword";
import OutcomePage from "./outcome"
import QuizManagement from './quiz-management';
import ClassManagement from './class-management';
import ClassDetailManagement from './class-detail-management';
import ExportManager from './export-manager';
import CandidateManagerReducer from './candidate-management';
import BallotManagerReducer from './ballot-management';
import ProvinceManagerReducer from './province-management';

export default {
  Theme,
  form: formReducer,
  UserProfile,
  Commentation,
  MenuManagement,
  FileManager,
  History,
  LoginPage,
  UserManager,
  GroupManager,
  RegisterPage,
  Permission,
  Role,
  ObjectType,
  ForgotPage,
  OutcomePage,
  QuizManagement,
  ClassManagement,
  ClassDetailManagement,
  ExportManager,
  CandidateManagerReducer,
  BallotManagerReducer,
  ProvinceManagerReducer
};
