type Methods = "GET" | "POST" | "PUT" | "DELETE";
type Header = Record<string, number>;

type Bode = 
| Blob
| URLSearchParams
| FormData
| string
| null
| undefined;

type Requests = {
  method: Methods,
  url: URL,
  headers: Header,
  body: Bode
};

export const request =
  (method: Methods) =>
  (url: URL): Requests => ({
    method,
    url: url,
    headers: {},
    body: undefined,
  });

// functions of arity 1
export const get = request("GET");
export const post = request("POST");
export const put = request("PUT");
export const del = request("DELETE");

const getRequest = request("GET")(new URL("https://google.com"));