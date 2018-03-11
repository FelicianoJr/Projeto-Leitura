import React from "react";

const NavbarMain = ({
  categories = [],
  toggle,
  pushRoute,
  sortPost,
  category
}) => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      {!category ? (
        <a className="navbar-brand" href="/">
          Project Udacity
        </a>
      ) : (
        <a className=" close-search" href="/" />

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
              {categories.map(category => (
                <option key={category.name} value={category.patch}>
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
          onClick={toggle}
        >
          Nova Postagem
        </button>
      </form>
    </nav>
  );
};

export default NavbarMain;
