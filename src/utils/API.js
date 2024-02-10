export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5204443&lng=87.3119227&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    localStorage.setItem("swiggyApi", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
