// Bid service

// Mock bid data
const bids = [
    { id: 1, itemId: 1, userId: 1, amount: 120 },
    { id: 2, itemId: 1, userId: 2, amount: 130 },
    { id: 3, itemId: 2, userId: 1, amount: 160 }
  ];
  
  // Function to get all bids for an item
  const getBidsByItemId = (itemId) => {
    return bids.filter(bid => bid.itemId === itemId);
  };
  
  module.exports = { getBidsByItemId };
  