import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class HttpService {
  private service: AxiosInstance;

  constructor() {
    const token = window.localStorage.getItem("token");
    this.service = axios.create({
      baseURL: import.meta.env.VITE_API_URL as string,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });

    this.service.interceptors.response.use(
      this.handleSuccess.bind(this),
      this.handleError.bind(this)
    );
  }

  private handleSuccess<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    switch (error.response?.status) {
      case 401:
        // Token expired
        delete this.service.defaults.headers["Authorization"];
        window.localStorage.removeItem("token");
        this.redirectTo("/");
        break;
      case 404:
        // Not found
        this.redirectTo("/error/404");
        break;
      default:
        // Internal server error
        this.redirectTo("/error/500");
        break;
    }

    return Promise.reject(error);
  }

  private redirectTo(url: string): void {
    window.location.href = url;
  }

  get<T>(...args: Parameters<AxiosInstance["get"]>): Promise<AxiosResponse<T>> {
    return this.service.get<T>(...args);
  }

  post<T>(
    ...args: Parameters<AxiosInstance["post"]>
  ): Promise<AxiosResponse<T>> {
    return this.service.post<T>(...args);
  }

  put<T>(...args: Parameters<AxiosInstance["put"]>): Promise<AxiosResponse<T>> {
    return this.service.put<T>(...args);
  }

  patch<T>(
    ...args: Parameters<AxiosInstance["patch"]>
  ): Promise<AxiosResponse<T>> {
    return this.service.patch<T>(...args);
  }

  delete<T>(
    ...args: Parameters<AxiosInstance["delete"]>
  ): Promise<AxiosResponse<T>> {
    return this.service.delete<T>(...args);
  }
}

export default new HttpService();
