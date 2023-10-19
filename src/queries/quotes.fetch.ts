export const fetchAllQuotes = async () => {
    const response = await fetch("http://localhost:5000/api/quotes");
    if (response.ok) {
      return response.json().then((json) => {
        return json;
      });
    }
    return []
  };