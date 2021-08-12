import styled from "styled-components"
import { Container } from "../../globalStyles"

export const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  ${Container}
`

export const ProfileHeading = styled.h2`
  padding: 30px 0px 30px 0px;
  font-size: 40px;
`

export const Head = styled.div`
  display: flex;
  padding: 1rem;
  img {
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  h3 {
    font-size: 32px;
    padding: 20px 0px 20px 0px;
  }
`

export const CompanyDetails = styled.div`
  margin-left: 20px;
`

export const List = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 32px;
  font-size: 20px;
  color: #101522;
  p {
    color: gray;
  }
`

export const CompanyList = styled.li`
  display: flex;
  flex-direction: row;
  line-height: 32px;
  font-size: 20px;
  color: #101522;
  p {
    color: gray;
  }
`

export const AccountDetails = styled.div`
  padding: 20px;
  border-radius: 30px;
  border-color: #00008b;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  margin: 0 2rem;
  width: 300px;
  margin: 0.5rem;
`

export const MenuCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`

export const AccountWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`
