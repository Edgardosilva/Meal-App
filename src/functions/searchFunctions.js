// searchFunctions.js
export const handleInputChange = (e, setSearchTerm) => {
    setSearchTerm(e.target.value);
  };
  
  export const handleSubmit = (e, setSearchTerm, setInputSearch, searchTerm) => {
    e.preventDefault();
    setInputSearch(searchTerm);
    setSearchTerm("");
  };
  
  export const fetchData = async (inputSearch, setLoader, setData) => {
    try {
      setLoader(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`
      );
      const result = await response.json();
      setData(result.meals);
  
      const imagePromises = result.meals.map((meal) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.src = meal.strMealThumb;
        });
      });
  
      await Promise.all(imagePromises);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  