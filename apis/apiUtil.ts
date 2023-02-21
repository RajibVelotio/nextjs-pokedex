type CallApiParams = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  queryParams?: Record<string, any>;
  headers?: Record<string, string>;
};

const CallApi = async ({
  url,
  method,
  body,
  headers = {},
  queryParams = {},
}: CallApiParams) => {
  const options = {
    method: method,
    headers: new Headers({ 'content-type': 'application/json', ...headers }), // by default setting the content-type to be json type
    body: body ? JSON.stringify(body) : null,
  };
  if (queryParams) {
    url = `${url}?${new URLSearchParams(queryParams)}`;
  }

  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then(function (json) {
        // to be able to access error status when you catch the error
        return Promise.reject({
          status: res.status,
          ok: false,
          message: json.message,
          body: json,
        });
      });
    }
  });
};

export default CallApi;
