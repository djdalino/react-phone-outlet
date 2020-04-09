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
  color: var(--mainWhite);
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
  background: var(--bloodOrange);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
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
