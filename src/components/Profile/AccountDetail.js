import React from "react"
import { List, ListItem, AccountDetails } from "./Profile.element"

/**
 *
 * A component to display account details.
 *
 * @param {number} account_number
 * @param {string} available
 * @param {string} currency
 *
 */
const AccountDetail = ({ account_number, available, currency }) => {
  return (
    <AccountDetails>
      <List>
        <ListItem>
          <p>Account No :</p> &nbsp;{account_number}
        </ListItem>
        <ListItem>
          <p>Balance :</p>&nbsp; {available}&nbsp;
          {currency}
        </ListItem>
      </List>
    </AccountDetails>
  )
}

export default AccountDetail
