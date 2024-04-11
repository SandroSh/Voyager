export type error = {
  code: number;
  message: string;
};


export type locationType ={
    loaded:boolean;
    coordinates: {lat:string; lng:string;} | null;
    error: error | null;
}


export type CountryData  = {

    name:{
      common:string;
      official:string;
    }
    cca2:string;
    cca3:string;
    independent: boolean;
    unMember:boolean;
    landlocked:boolean;
    currencies:{}
    capital:string[];
    altSpellings: string[];
    region:string;
    subregion:string;
    languages:{};
    latlng:number[];
    area:number;
    population:number;
 
    gini:{
      [key: number]:number;
    };
    timezones: string[];
    flags:{
      png:string;
    }
    coatOfArms:{
      svg:string;
      png:string;
    }
    startOfWeek:string;

}
export type currentLocationType = {
  
  countryName:string;
  city:string;

}
export interface curCountry {
  curCountry: CountryData;
}

export interface currentCountry{
  currentCountry : CountryData | undefined;
}
export type countryDetails ={ countryDetails: curCountry}



export type BoolElementType = {
  title:string;
  bool:boolean | undefined;
}

export interface CountryAir{
  name:string;
  iata:string;
  city:string;
  region:string;
  country:string;
  elevation_ft:string;
  
}

export type AirData = {
   Data: CountryData | CountryAir | City;
}

export interface City {
  name:string;
  population:number;
  is_capital: boolean;
}