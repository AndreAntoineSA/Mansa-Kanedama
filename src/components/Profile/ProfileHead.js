import React, { useEffect } from "react"
import { ProfileHeading, Head } from "./Profile.element"
import { useDispatch, useSelector } from "react-redux"
import { setUserDetails } from "../../redux/actions/accountActions"
import axios from "axios"

/**
 * A component that displays the profile image and name of the user.
 */
const ProfileHead = () => {
  const user = useSelector(state => state.userDetails)
  const dispatch = useDispatch()
  const { title, first, last } = user[0].name
  const { thumbnail } = user[0].picture

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios
        .get(process.env.REACT_APP_USER_API)
        .catch(err => {
          console.log("Err", err)
        })
      if (thumbnail === "" || last === "" || first === "") {
        dispatch(setUserDetails(response.data))
      }
    }
    fetchDetails()
  }, [dispatch])

  return (
    <Head>
      <img
        src={thumbnail}
        alt={thumbnail}
        style={{ width: "100px", height: "100px" }}
      />
      <ProfileHeading>
        {title}&nbsp;
        {first}&nbsp;
        {last}
      </ProfileHeading>
    </Head>
  )
}

export default ProfileHead
