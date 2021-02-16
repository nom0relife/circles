import React from "react";
import {
  FontAwesomeIcon,
  fontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Botify</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
