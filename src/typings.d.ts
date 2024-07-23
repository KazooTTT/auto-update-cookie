interface LoginResponse {
  code: number;
  token: string;
  uid: number;
}

interface NewXMLHttpRequest extends XMLHttpRequest {
  originalSend: typeof XMLHttpRequest.send;
}
