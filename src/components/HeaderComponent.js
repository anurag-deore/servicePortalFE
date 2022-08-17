import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;

const HeaderComponent = () => {
  return (
    <Header>Game of Thrones Quotes</Header>
  )
}

export default HeaderComponent