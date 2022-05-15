import queryString from "query-string";
import { omit } from "lodash";

export const queryStringToObject = (str, options = {}) =>
  queryString.parse(str, {
    arrayFormat: "bracket",
    ...options,
  });

export const objectToQueryString = (obj, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: "bracket",
    ...options,
  });

export const omitFromQueryString = (str, keys) =>
  objectToQueryString(omit(queryStringToObject(str), keys));

export const addToQueryString = (str, fields) =>
  objectToQueryString({
    ...queryStringToObject(str),
    ...fields,
  });

export const getStoredAuthToken = () => localStorage.getItem("authToken");

export const storeAuthToken = (token) =>
  localStorage.setItem("authToken", token);

export const removeStoredAuthToken = () => localStorage.removeItem("authToken");

export const validStringIsEmpty = (x) =>
  typeof x == "undefined" ||
  x == null ||
  x == false ||
  x.length == 0 ||
  x == 0 ||
  x == "" ||
  x.replace(/\s/g, "") == "" ||
  !/[^\s]/.test(x) ||
  /^\s*$/.test(x);
