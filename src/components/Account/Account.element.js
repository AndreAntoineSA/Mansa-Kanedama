import styled from "styled-components"
import { Container } from "../../globalStyles"

export const AccountContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${Container};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AccountHead = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0.5rem;
`
export const Table = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`
