import { useEffect, useState } from "react";
import { error, locationType } from "../types";

export const useGeoLocation = () => {
  const [location, setLoaction] = useState<locationType>({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    error: null,
  });

  const onSuccess = (location: {
    coords: { latitude: any; longitude: any };
  }) => {
    setLoaction({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      error: null,
    });
  };

  const onError = (error: error) => {
    setTimeout(() => {
      setLoaction({
        loaded: true,
        coordinates: null,
        error: {
          code: error.code,
          message: error.message,
        },
      });
    }, 1000);
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  
  return location;
};
