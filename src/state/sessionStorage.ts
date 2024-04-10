import { CountryData } from "../types";

export const loadState = (key: string, defaultValue: CountryData | undefined) => {
  try {
    const serializedState =  sessionStorage.getItem(key);
  
    if(serializedState === null){
        return defaultValue;
    }
    return JSON.parse(serializedState);
} catch (error) {
    return defaultValue;
  }
};

export const saveState = (key:string, obj: CountryData | undefined) =>{
    try {
        sessionStorage.setItem(key,JSON.stringify(obj))
    } catch (error) {
        return error;
    }
}
