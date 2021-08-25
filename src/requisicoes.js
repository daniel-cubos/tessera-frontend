const BASE_URL = process.env.REACT_APP_BASE_URL;

async function get(resource, token) {
  const resposta = await fetch(`${BASE_URL}/` + resource, {
    headers: {
      authorization: token,
    }
  });

  return resposta;
}

async function post(resource, data, token) {
  const resposta = await fetch(`${BASE_URL}/` + resource, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      authorization: token,
    },
  });
  
  return await resposta;
}

async function put(resource, data, token) {
  const resposta = await fetch(`${BASE_URL}/` + resource, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      authorization: token,
    },
  });
  return resposta;
}

async function del(resource,token) {
  const resposta = await fetch(`${BASE_URL}/` + resource, {
    method: "DELETE",
    headers: {
      authorization: token,
    }
  });
  
  return resposta;
}

export { post, get, del, put };
