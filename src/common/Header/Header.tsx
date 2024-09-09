import { FC, FormEvent, useContext, useRef } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import "./header.css";
import { SearchContext } from "../../services/context/context";

const Header: FC = () => {
  const { setSearch } = useContext<any>(SearchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const FormSubmit = (e: FormEvent) => {
    setSearch(inputRef.current?.value.trim());
    e.preventDefault();
  };

  return (
    <header id="header">
      <Container>
        <div className="row flex flex-between">
          <Link to={"/"} target="_top" className="flex flex-align-center">
            Git <span>Finder</span>
          </Link>

          <div className="flex flex-align-center">
            <div className="form-area flex flex-align-center">
              <IoIosSearch className="search" />
              <form onSubmit={FormSubmit}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search username"
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
