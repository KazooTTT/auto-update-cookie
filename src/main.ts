// @ts-ignore isolatedModules
import Cookies from 'js-cookie'
/**
 * @description: 重写XMLHttpRequest send方法(实现请求拦截)
 * @return {*}
 */
function interceptXHR() {
  // 保存原始send方法
  (XMLHttpRequest.prototype as NewXMLHttpRequest).originalSend =
    XMLHttpRequest.prototype.send;
  // 重写send方法
  XMLHttpRequest.prototype.send = function () {
    const xhr = this as NewXMLHttpRequest;
    xhr.onreadystatechange = function () {
      if (xhr.responseURL.endsWith("/auth/login")) {
        // the response json is like LoginResponse
        const { token } = JSON.parse(xhr.responseText) as LoginResponse;
        // update the token of the cookie of current path and expire prop is session and domain is current domain
        Cookies.set('token', token, { path: '/', domain: window.location.hostname, expires: null });
      }
    };
    xhr.originalSend.apply(xhr, arguments);
  };
}

// 开始拦截请求
interceptXHR();