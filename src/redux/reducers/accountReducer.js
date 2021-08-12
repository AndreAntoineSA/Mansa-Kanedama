import { ActionTypes } from "../constants/action-types"

export const accountReducer = (state = [{}], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ACCOUNTS:
      return payload
    default:
      return state
  }
}

export const selectedAccountReducer = (state = [{}], { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ACCOUNT:
      return payload
    case ActionTypes.REMOVE_SELECTED_ACCOUNT:
      return [{}]
    default:
      return state
  }
}

const initialState = [
  {
    name: {
      first: "",
      last: "",
      title: "",
    },
    email: "",
    picture: { large: "" },
  },
]

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_DETAILS:
      return payload.results
    default:
      return state
  }
}

export const companyReducer = (
  state = {
    unite_legale: {
      denomination: "",
      etablissement_siege: { siret: "", geo_adresse: "" },
    },
  },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_COMPANY:
      return payload
    default:
      return state
  }
}
