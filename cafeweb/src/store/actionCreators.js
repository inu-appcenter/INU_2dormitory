import { bindActionCreators } from "redux";
import * as domitoryActions from "./modules/domitory";

import store from "./index";

const { dispatch } = store;

export const DomitoryActions = bindActionCreators(domitoryActions, dispatch);
