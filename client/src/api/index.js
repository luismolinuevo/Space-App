import axios from "axios";

export const getDailyImage = async () => {
    try {
        const apiResponse = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = apiResponse.data;
        // console.log(data);

        return data;
      } catch (e) {
        return "Failed to get data";
      }
}

export const getMarsImages = async () => {
    try {
        const apiResponse = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=80&api_key=${import.meta.env.VITE_API_KEY}`);

        const data = apiResponse.data.photos;
        console.log(data);

        return data;
      } catch (e) {
        return "Failed to get data";
      }
}

export const getSpecificNasaImages = async (nasa_id) => {
  try {
      const apiResponse = await axios.get(`https://images-api.nasa.gov/asset/${nasa_id}`);

      const data = apiResponse.data.collection.items;
      console.log(data);

      return data;
    } catch (e) {
      return "Failed to get data";
    }
}



