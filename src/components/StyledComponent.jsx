import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--bloodOrange)" : "var(--mainBlue)"};
  color: ${(props) => (props.cart ? "var(--bloodOrange)" : "var(--mainBlue)")};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--bloodOrange)" : "var(--mainBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;

export const MyCartButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: none;
  color: ${(props) => (props.navbar ? "var(--mainWhite)" : "var(--mainWhite)")};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    font-size: 1.6rem;
  }
  &:focus {
    outline: none;
  }
`;

export const NavWrapper = styled.nav`
  .nav-link {
    color: ${(props) =>
      props.navbar ? "var(--mainWhite)" : "var(--mainWhite)"};
    font-size: 1.3rem;
    transition: all 1s ease-in-out;
  }

  background: ${(props) =>
    props.navbar ? "var(--mainBlue)" : "var(--bloodOrange)"};
  transition: all 1s ease-in-out;
  color: ${(props) =>
    props.navbar
      ? "var(--mainWhite) !important"
      : "var(--mainWhite) !important"};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export const FooterWrapper = styled.div`
  background: ${(props) =>
    props.navbar ? "var(--mainBlue)" : "var(--bloodOrange)"};
  transition: all 1s ease-in-out;
  color: ${(props) =>
    props.navbar
      ? "var(--mainWhite) !important"
      : "var(--mainWhite) !important"};
`;
