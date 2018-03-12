import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarMain = ({
  categories = [],
  newPost,
  pushRoute,
  sortPost,
  category
}) => {
  const categoryUpper = () =>
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      {!category ? (
        <a className="navbar-brand disabled" href="#">
          Projeto Udacity Leitura
        </a>
      ) : (
        <Link className="close-search d-inline-block align-top" to="/" />
      )}
      {category && (
        <span class="badge navbar-brand badge-info">
          Categoria {categoryUpper()}
        </span>
      )}
      <form className="form-inline ">
        <div className="mr-sm-2">
          {!category && (
            <select
              id="category"
              className="form-control form-control-sm"
              onChange={pushRoute}
              defaultValue=""
            >
              <option value="" disabled hidden>
                Escolha uma categoria
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.patch}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="mr-sm-2">
          <select
            id="sort"
            className="form-control form-control-sm"
            onChange={sortPost}
          >
            <option value="SCORE_BIGGER">Maior Pontuação</option>
            <option value="SCORE_SMALLER">Menor Pontuação</option>
            <option value="RECENT_POST">Postagens Recentes</option>
            <option value="OLD_POST">Postagens Antigas</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          onClick={newPost}
        >
          Nova Postagem
        </button>
      </form>
    </nav>
  );
};

NavbarMain.propTypes = {
  categories: PropTypes.array,
  pushRoute: PropTypes.func,
  newPost: PropTypes.func,
  sortPost: PropTypes.func,
  category: PropTypes.string
};

export default NavbarMain;
