// Item service

// Mock item data
const items = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1', startingPrice: 100 },
    { id: 2, name: 'Item 2', description: 'Description of Item 2', startingPrice: 150 },
    { id: 3, name: 'Item 3', description: 'Description of Item 3', startingPrice: 200 }
  ];
  
  // Function to get all items
  const getAllItems = () => {
    return items;
  };
  
  // Function to get item by ID
  const getItemById = (itemId) => {
    return items.find(item => item.id === itemId);
  };
  
  module.exports = { getAllItems, getItemById };
  