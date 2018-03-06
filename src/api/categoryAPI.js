const api = "http://localhost:3001";

const headers = {
  Authorization: "whatever-you-want"
};

export default {
  getAll: () =>
    fetch(`${api}/categories`, { method: "GET", headers })
      .then(res => res.json())
        .then(data => data.categories)
};
