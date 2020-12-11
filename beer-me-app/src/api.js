const base_url = "https://api.punkapi.com/v2/beers?page=";
let page = 1;
let optionsABV = "";
let optionsIBU = "";

export const starterBeersGET = () =>
  `${base_url}${page}${optionsABV}${optionsIBU}`;

export const strongBeersGET = () => {
  let optionsABV = "&abv_gt=7.5";
  return `${base_url}${page}${optionsABV}${optionsIBU}`;
};

export const bitterBeersGET = () => {
  let optionsIBU = "&ibu_gt=74";
  return `${base_url}${page}${optionsABV}${optionsIBU}`;
};
