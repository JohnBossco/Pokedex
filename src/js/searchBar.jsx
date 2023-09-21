import "../css/searchBar.css";
import * as React from "react";
import { useDispatch } from "react-redux";
import { searchSlice } from "./searchSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");

  const handleChange = (e) => {
    setName(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchSlice.actions.setName(name));
  };

  return (
    <div className="search">
      <div className="searchBox">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            class="searchInput"
            placeholder="Search Any Pokemon"
          />
          <input type="submit" value=""></input>
        </form>
      </div>
    </div>
  );
}
