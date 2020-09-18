import moment from "moment";
import { useEffect, useRef } from "react";

export * from './joiValidation';

export const getPath = (path = "") => (path ? `/${path}` : "");
export const getCustomUrl = (url = "") => url;
export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value
});

export const createUrlParamFromObj = (params = null) => {
  if (!params) return "";
  const result = [];
  Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
  return `?${result.join("&")}`;
};

export const convertDate = date => {
  if (!date) return null;
  return moment(date).format("DD MMMM YYYY");
};

export const convertISODate = (myDate, showTime = true) => {
  const newDate = new Date(myDate);
  const year = newDate.getFullYear();
  const month = (newDate.getMonth() + 1) < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
  const date = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const hours = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  const minutes = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes();
  const seconds = newDate.getSeconds() < 10 ? `0${newDate.getSeconds()}` : newDate.getSeconds();

  return showTime ? `${year}-${month}-${date} ${hours}:${minutes}:${seconds}` : `${year}-${month}-${date}`;
}

export const createFormData = (body) => {
  const data = new FormData();

  (body !== undefined && body !== null) && Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};