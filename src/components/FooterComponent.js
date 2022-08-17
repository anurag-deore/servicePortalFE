import styled from "styled-components";

const Footer = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.background};

  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
      </p>
    </Footer>
  )
}

export default FooterComponent;