// avoid axios dependency and use custom fetch instead

type Params = {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | undefined
    | Params
    | Params[];
};

type Client = {
  baseURL: string;
  authorization: string | null;
  getHeader: () => Headers;
  get: <R>(url: string, params?: Params) => Promise<R>;
  post: <R>(url: string, params?: Params) => Promise<R>;
  put: <R>(url: string, params?: Params) => Promise<R>;
  delete: <R>(url: string, params?: Params) => Promise<R>;
  patch: <R>(url: string, params?: Params) => Promise<R>;
};

type HeaderParams =
  | string
  | Record<string, string>
  | URLSearchParams
  | string[][]
  | undefined;

async function handleResponse(response: Response) {
  const contentType = response.headers.get("Content-Type");
  if (!contentType) {
    throw new Error("Content-Type header is not present in the response");
  }

  return await response.json();
}

const baseURL = process.env.REACT_APP_API_TEST_URL!;

const client: Client = {
  baseURL,
  authorization: localStorage.getItem("token"),
  getHeader() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    if (this.authorization) {
      headers.append("Authorization", `Bearer ${this.authorization}`);
    }

    return headers;
  },
  async get<R>(url: string, params?: Params): Promise<R> {
    const uri = new URL(`${this.baseURL}${url}`);
    uri.search = new URLSearchParams(params as HeaderParams).toString();
    const response = await fetch(uri, {
      method: "GET",
      headers: this.getHeader(),
    });
    return handleResponse(response);
  },
  async post<R>(url: string, params?: Params): Promise<R> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: this.getHeader(),
    });
    return handleResponse(response);
  },
  async put<R>(url: string, params?: Params): Promise<R> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: this.getHeader(),
    });
    return handleResponse(response);
  },
  async delete<R>(url: string, params?: Params): Promise<R> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "DELETE",
      body: JSON.stringify(params),
      headers: this.getHeader(),
    });
    return handleResponse(response);
  },
  async patch<R>(url: string, params?: Params): Promise<R> {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "PATCH",
      body: JSON.stringify(params),
      headers: this.getHeader(),
    });
    return handleResponse(response);
  },
};

export default client;
