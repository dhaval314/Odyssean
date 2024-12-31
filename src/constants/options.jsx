export const travelersOptions = [
    { 
      id: "1", 
      value: 1, 
      title: "Just Me", 
      icon: "🧍", 
      description: "Perfect for solo adventurers looking for personal experiences." 
    },
    { 
      id: "2", 
      value: 2, 
      title: "Couple", 
      icon: "❤️", 
      description: "Ideal for romantic getaways or exploring as a pair." 
    },
    { 
      id: "3", 
      value: 3, 
      title: "Small Group (3-5)", 
      icon: "👨‍👩‍👧‍👦", 
      description: "Great for families or close friends traveling together." 
    },
    { 
      id: "4", 
      value: 6, 
      title: "Large Group (6-10)", 
      icon: "🧑‍🤝‍🧑", 
      description: "Perfect for team outings or extended family trips." 
    },
    { 
      id: "5", 
      value: 11, 
      title: "Very Large Group (11+)", 
      icon: "🎉", 
      description: "Best suited for celebrations, events, or big gatherings." 
    },
  ];
  
  export const budgetOptions = [
    { 
      id: "1", 
      value: "cheap", 
      title: "Budget Friendly", 
      icon: "💵", 
      description: "Affordable options without compromising on quality." 
    },
    { 
      id: "2", 
      value: "medium", 
      title: "Medium", 
      icon: "💰", 
      description: "Balanced choices offering good value and comfort." 
    },
    { 
      id: "3", 
      value: "high", 
      title: "High", 
      icon: "🤑", 
      description: "Luxury experiences for those who want the best." 
    },
  ];

  export const AI_PROMPT='I am from {origin} Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me the Hotels options list  with HotelName,Hotel address ,Price ,hotel image url,geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details , Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {Days} days with each day plan with best time to visit in JSON format.'
  