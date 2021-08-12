import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useParams } from "react-router-dom"
import {
  selectedAccount,
  removeSelectedAccount,
} from "../../redux/actions/accountActions"
import {
  AccountContainer,
  Wrapper,
  AccountHead,
  Table,
} from "./Account.element"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import ProfileHead from "../Profile/ProfileHead"
import AccountDetail from "../Profile/AccountDetail"

const Account = () => {
  const { account_id } = useParams()
  const dispatch = useDispatch()
  const account = useSelector(state => state.accounts)
  const selectedAcc = useSelector(state =>
    state.allAccounts.find(account => account.account_id === account_id)
  )
  // Setting up column for Ag-grid table
  const columns = [
    {
      headerName: "Amount",
      field: "amount",
      sortable: true,
    },
    {
      headerName: "Timestamp",
      field: "timestamp",
      sortable: true,
    },
    {
      headerName: "Transaction Type",
      field: "transaction_type",
      sortable: true,
      filter: true,
    },
  ]

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const response = await axios
        .get(
          `${process.env.REACT_APP_API}/${account_id}/transactions?from=2015-12-26T08:15:22&to=2016-08-13T03:24:00`
        )
        .catch(err => {
          console.log("Err", err)
        })
      dispatch(selectedAccount(response.data))
    }
    fetchAccountDetails()
    return () => {
      dispatch(removeSelectedAccount())
    }
  }, [dispatch, account_id])
  return (
    <AccountContainer>
      <Wrapper>
        <ProfileHead />
        <AccountHead>
          <AccountDetail
            account_number={selectedAcc?.account_number}
            available={selectedAcc?.available}
            currency={selectedAcc?.currency}
          />
        </AccountHead>
      </Wrapper>
      <Table>
        <div
          className="ag-theme-alpine"
          style={{ height: "500px", width: "600px" }}
        >
          <AgGridReact rowData={account} columnDefs={columns} />
        </div>
      </Table>
    </AccountContainer>
  )
}

export default Account
