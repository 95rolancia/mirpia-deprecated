import styled from '@emotion/styled';

export default function Navbar({ children }: { children: JSX.Element[] }): JSX.Element {
  return <NavbarUl>{children.map((child) => child)}</NavbarUl>;
}

const NavbarUl = styled.ul`
  justify-content: space-between;
  display: flex;
  align-items: center;
  list-style: none;
`;
