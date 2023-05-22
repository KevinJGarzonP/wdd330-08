// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  let cartList = getLocalStorage(key);
  if (cartList == null) {
    localStorage.setItem(key, JSON.stringify([data]));
  } else {
    cartList.push(data);
    localStorage.setItem(key, JSON.stringify(cartList));
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let product = urlParams.get(param);
  return product;
}

export async function renderTemplate(templateFunction, element, data, callback, position = "afterbegin", clear = true) {
  if (clear) {
      element.innerHTML = "";
  }
  
  const htmlString = await templateFunction(data);

  element.insertAdjacentHTML(position, htmlString);
  if(callback) {
    callback(data)
  }
}

function loadTemplate(path) {
  return async function () {
    let response = await fetch (path);
    if (response.ok) {
      let text = await response.text();

      return text;
    }
  }
}


export async function loadHeaderFooter () {
  const headerTemplateFunction = loadTemplate("/partials/header.html");
  const footerTemplateFunction = loadTemplate("/partials/footer.html");

  const header = document.querySelector("#header");
  const footer = document.querySelector("#footer");

  renderTemplate(headerTemplateFunction, header);
  renderTemplate(footerTemplateFunction, footer);

}