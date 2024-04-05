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
    maps:{
      googleMaps:string;
    }
    continents: string[];
    gini:{};
    timezones: string[];
    flags:{
      png:string;
    }
    coatOfArms:{
      svg:string;
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