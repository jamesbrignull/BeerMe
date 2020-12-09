const base_url = "https://api.punkapi.com/v2/beers?page=";
let page = 1;
let optionsABV = "";
let optionsIBU = "";

export const defaultBeersGET = () =>
  `${base_url}${page}${optionsABV}${optionsIBU}`;
