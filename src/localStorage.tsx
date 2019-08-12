import { string } from "prop-types";

export function save(key: any, value: any) {
  return window.localStorage.setItem(key, JSON.stringify(value))
}

export function load(key: any) {
  return JSON.parse(window.localStorage.getItem(key)!)
}