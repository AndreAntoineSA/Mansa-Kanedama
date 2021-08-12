import React, { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setUserDetails } from "../../redux/actions/accountActions"
import { FaHome, FaMobile, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import {
  ProfileCard,
  ImageContainer,
  Detail,
  StyledButton,
  HomeContainer,
  HomeWrapper,
} from "./Home.elements"

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userDetails[0])
  const { email, nat, cell } = user
  const { large } = user.picture
  const { title, first, last } = user.name
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios
        .get(process.env.REACT_APP_USER_API)
        .catch(err => {
          console.log("Err", err)
        })
      if (email === "" || last === "" || first === "") {
        dispatch(setUserDetails(response.data))
      }
    }
    fetchDetails()
  }, [dispatch])
  
  return (
    <HomeContainer>
      <HomeWrapper>
        <ImageContainer>
          <img
            src={large}
            style={{ width: "300px", height: "300px" }}
            alt="profile"
          />
        </ImageContainer>
        <ProfileCard>
          <Detail>
            <h1>
              {title}&nbsp; {first}&nbsp;
              {last}
            </h1>
            <p>
              <FaEnvelope />
              &nbsp;
              {email}
            </p>
            <p>
              <FaHome />
              &nbsp;
              {nat}
            </p>
            <p>
              <FaMobile />
              &nbsp;
              {cell}
            </p>
            <Link to={`/account`} style={{ textDecoration: "none" }}>
              <StyledButton>Click here to view account details</StyledButton>
            </Link>
          </Detail>
        </ProfileCard>
      </HomeWrapper>
    </HomeContainer>
  )
}

export default Home
