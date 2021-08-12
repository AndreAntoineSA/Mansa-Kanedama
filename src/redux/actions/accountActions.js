import { ActionTypes } from "../constants/action-types"

export const setAccounts = accounts => {
  return {
    type: ActionTypes.SET_ACCOUNTS,
    payload: accounts,
  }
}

export const setCompany = company => {
  return {
    type: ActionTypes.SET_COMPANY,
    payload: company,
  }
}

export const selectedAccount = account => {
  return {
    type: ActionTypes.SELECTED_ACCOUNT,
    payload: account,
  }
}

export const removeSelectedAccount = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ACCOUNT,
  }
}

export const setUserDetails = details => {
  return {
    type: ActionTypes.SET_USER_DETAILS,
    payload: details,
  }
}
