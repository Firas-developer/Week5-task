async function getAndFilterData(apiEndpoint, titleToFilter) {
    try {
      // Fetch data from the mock API
      const response = await fetch(apiEndpoint);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Filter data based on the title
      const filteredData = data.filter(post => post.title.includes(titleToFilter));
  
      // Console the filtered data
      console.log("Filtered Data:", filteredData);
  
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
    }
  }
  
  // Example usage
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
  const titleToFilter = 'title';
  getAndFilterData(apiEndpoint, titleToFilter);
  