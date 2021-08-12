import styled from "styled-components"

export const ProfileCard = styled.div`
  margin: auto;
  background: #fff;
  top: 5rem;
  width: 50%;
`
export const ImageContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 300px;
  margin-left: 10rem;
  margin: 5rem;
`

export const Detail = styled.div`
  margin-left: -10rem;
  color: #101522;
  h1 {
    font-weight: bold;
    font-size: 30px;
    padding: 10px;
    margin-top: -5rem;
    margin-bottom: 5rem;
  }
  p {
    display: flex;
    flex-direction: row;
    line-height: 22px;
    font-size: 20px;
    padding: 0.5rem;
  }
`

export const StyledButton = styled.button`
  display: block;
  background-color: #141414;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 2rem;
`

export const HomeContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  margin-top: 5rem;
  @media screen and(max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 10px;
`
