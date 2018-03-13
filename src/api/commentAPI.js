const api = "http://localhost:3001";

const headers = {
  Authorization: "whatever-you-want"
};

export default {
  create: body =>
    fetch(`${api}/comments`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "Application/json" },
      body: JSON.stringify(body)
    }),

  remove: id =>
    fetch(`${api}/comments/${id}`, { method: "DELETE", headers }).then(resp =>
      resp.json().then(data => data)
    ),

  edit: body =>
    fetch(`${api}/comments/${body.id}`, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(res => res.json().then(data => data)),

  getId: id =>
    fetch(`${api}/comments/${id}`, { method: "GET", headers }).then(res =>
      res.json().then(data => data)
    ),

  getPostIdComments: id =>
    fetch(`${api}/posts/${id}/comments/`, { method: "GET", headers })
      .then(res => res.json())
      .then(data => data),

  vote: body =>
    fetch(`${api}/comments/${body.id}`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "Application/json" },
      body: JSON.stringify(body)
    }).then(res => res.json().then(data => data))
};
