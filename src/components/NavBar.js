import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { filters } from "../constants/ActionTypes";

const Navbar = ({ categories = [], newPost, sortPost, disabled, filter }) => {
  const upperName = name => name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <NavLink className="navbar-brand" to="/">
        Udacity
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" exact to="/">
              Home 
            </NavLink>
          </li>
          {categories.map((category, index) => (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" exact to={`/${category.path}`}>
                {upperName(category.name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <form className="form-inline ">
        <div className="mr-sm-2">
          <select
            id="sort"
            className="form-control form-control-sm"
            onChange={sortPost}
            value={filter}
            disabled={disabled}
          >
            <option value={filters.SCORE_BIGGER}>Maior Pontuação</option>
            <option value={filters.SCORE_SMALLER}>Menor Pontuação</option>
            <option value={filters.RECENT_POST}>Postagens Recentes</option>
            <option value={filters.OLD_POST}>Postagens Antigas</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          onClick={newPost}
          disabled={disabled}
        >
          Nova Postagem
        </button>
      </form>
    </nav>
  );
};

Navbar.propTypes = {
  categories: PropTypes.array,
  newPost: PropTypes.func,
  sortPost: PropTypes.func,
  disabled: PropTypes.bool,
  filter: PropTypes.string
};

export default Navbar;
