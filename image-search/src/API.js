import axios from "axios";

const searchImages = async (term) => {
  const result = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4dQkOBuD1QzvNYUUyxHBjmfZoAP_SKFAhuMKFtuyQk8",
    },
    params: {
      query: term,
    },
  });
  return result.data.results;
};

export default searchImages;
