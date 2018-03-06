const api = "http://localhost:3001";

const headers = {
  Authorization: "whatever-you-want"
};

export default {
  create: body =>
    fetch(`${api}/posts`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => data),

  getAllPostCategory: category =>
    fetch(`${api}/${category}/posts`, { method: "GET", headers }).then(res =>
      res.json()
    ),

  getAllPost: () =>
    fetch(`${api}/posts`, { method: "GET", headers }).then(res => res.json()),

  remove: id =>
    fetch(`${api}/posts/${id}`, { method: "DELETE", headers }).then(res =>
      res.json()
    ),

  edit: body =>
    fetch(`${api}/posts/${body.id}`, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(res => res.json()),

  getId: id =>
    fetch(`${api}/posts/${id}`, { method: "GET", headers }).then(res =>
      res.json()
    ),

  vote: body =>
    fetch(`${api}/posts/${body.id}`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(res => res.json()),

  getAllComment: id =>
    fetch(`${api}/posts/${id}/comment`, { method: "GET", headers }).then(res =>
      res.json()
    )
};
