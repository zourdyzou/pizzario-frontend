import { Nav, NavLink, Bars, NavIcon } from "./styles/Navbar";

export const Navbar = ({ setIsOpen }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizzario</NavLink>
        <NavIcon
          onClick={() => setIsOpen((/** @type {any} */ isOpen) => !isOpen)}
        >
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};
