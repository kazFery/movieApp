const baseUrl = "http://localhost:3000";

export function getMovies() {
  const api = baseUrl + "/movies";

  return fetch(api, { method: "GET" }).then((res) => res.json());
}

export function addMovie(movie) {
  const api = baseUrl + "/movies";
  return fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
}

export function deleteMovie(id) {
  const api = baseUrl + `/movies/${id}`;
  return fetch(api, {
    method: "DELETE",
  });
}
