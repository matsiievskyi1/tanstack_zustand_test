import { basicRequest } from "./basicRequest";

interface ApiResponse<T> {
  errorMessage?: string;
  responseCode?: string;
  data?: T;
}

export const api = {
  get: <T>(url: string, params?: object) => basicRequest<T>(url, { ...params }),
  // post: <TBody extends BodyInit, TResp>(url: string, body: TBody) =>
  //   basicRequest<TResp>(url, { method: "POST", body }),

  post: <TBody, TResp>(url: string, body: TBody): Promise<ApiResponse<TResp>> => {
    return basicRequest(url, { method: "POST", body: JSON.stringify(body) });
  },
};
