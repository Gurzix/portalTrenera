import React from "react";
import { useState } from "react";

const useStateStorage = (key, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  let value;

  const storageValue = window.localStorage.getItem(key);

  if(storageValue) {

      value = JSON.parse(storageValue);
  } else {
      value = state;
  }
 const setValue = val => {
setState(val);
window.localStorage.setItem(key, JSON.stringify(val));
 }
  return [value, setValue];

};

export default useStateStorage;
