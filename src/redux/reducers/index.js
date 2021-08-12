import { combineReducers } from "redux"
import {
  accountReducer,
  selectedAccountReducer,
  userReducer,
  companyReducer,
} from "./accountReducer"

const reducers = combineReducers({
  allAccounts: accountReducer,
  accounts: selectedAccountReducer,
  userDetails: userReducer,
  companyDetails: companyReducer,
})

export default reducers
