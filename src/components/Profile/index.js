import React, { useEffect } from "react"
import {
  ProfileContainer,
  Wrapper,
  CompanyDetails,
  List,
  AccountWrapper,
  CompanyList,
} from "./Profile.element"
import { useDispatch, useSelector } from "react-redux"
import { setAccounts, setCompany } from "../../redux/actions/accountActions"
import ProfileHead from "./ProfileHead"
import AccountDetail from "./AccountDetail"
import { Link } from "react-router-dom"
import axios from "axios"

const Profile = () => {
  const dispatch = useDispatch()
  const acc = useSelector(state => state.allAccounts)
  console.log("acc", acc.length)
  const company = useSelector(state => state.companyDetails.unite_legale)
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(process.env.REACT_APP_API).catch(err => {
        console.log("Err", err)
      })
      if (acc.length === 1) {
        dispatch(setAccounts(response.data))
      }
      const companyResponse = await axios
        .get(process.env.REACT_APP_MANSA_API)
        .catch(err => {
          console.log("Err", err)
        })
      dispatch(setCompany(companyResponse.data))
    }
    fetchDetails()
  }, [dispatch])

  const renderAccounts = acc.map(account => {
    const { account_number, available, account_id, currency } = account
    return (
      <Link
        to={`/account/${account_id}`}
        style={{ textDecoration: "none" }}
        key={account_id}
      >
        <AccountDetail
          account_number={account_number}
          available={available}
          currency={currency}
        />
      </Link>
    )
  })
  return (
    <>
      <ProfileContainer>
        <ProfileHead />
        <Wrapper>
          <h3>Company</h3>
          <CompanyDetails>
            <List>
              <CompanyList>
                <p>Name</p> : {company.denomination}
              </CompanyList>
              <CompanyList>
                <p>SIRET</p> : {company.etablissement_siege.siret}
              </CompanyList>
              <CompanyList>
                <p>Address</p> : {company.etablissement_siege.geo_adresse}
              </CompanyList>
            </List>
          </CompanyDetails>
        </Wrapper>
        <Wrapper>
          <h3>Accounts</h3>
          <AccountWrapper>{renderAccounts}</AccountWrapper>
        </Wrapper>
      </ProfileContainer>
    </>
  )
}

export default Profile
