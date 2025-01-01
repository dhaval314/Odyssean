import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "I am from Mumbai, India Generate Travel Plan for Location: Las Vegas, for 3 Days for a Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place image URL, Geo Coordinates, ticket Pricing, rating. Time travel each of the locations 3 days with each day plan with the best time to visit in JSON format. "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada, USA\",\n    \"duration\": \"3 Days\",\n     \"budget\":\"Cheap\",\n    \"travelers\": \"Couple\",\n      \"origin\":\"Mumbai,India\",\n    \"currency\":\"USD\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": 60,\n      \"hotelImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/27/92/1d/9c/circus-circus-hotel-casino.jpg\",\n      \"geoCoordinates\": {\"latitude\": 36.1381, \"longitude\": -115.1638},\n      \"rating\": 3.8,\n      \"description\": \"A classic Vegas hotel with a carnival theme, offering affordable rooms and entertainment options including a theme park.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": 70,\n      \"hotelImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/27/37/2b/3a/exterior.jpg\",\n      \"geoCoordinates\": {\"latitude\": 36.0983, \"longitude\": -115.1740},\n      \"rating\": 4.0,\n      \"description\": \"A medieval-themed hotel with budget-friendly rooms, multiple dining options, and live shows.\"\n    },\n     {\n      \"hotelName\": \"OYO Hotel and Casino Las Vegas\",\n      \"hotelAddress\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"price\": 55,\n        \"hotelImageURL\": \"https://media-cdn.tripadvisor.com/media/photo-s/26/82/c7/af/oyo-hotel-casino-las-vegas.jpg\",\n      \"geoCoordinates\": {\"latitude\": 36.1019, \"longitude\": -115.1675},\n       \"rating\": 3.9,\n      \"description\": \"An affordable hotel near the strip with a casino, multiple restaurants, and a pool. Offers reasonable value for a budget stay.\"\n     }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Strip\",\n      \"bestTimeToVisit\": \"Evening (for cooler temperatures and night views)\",\n      \"activities\": [\n        {\n          \"placeName\": \"The Las Vegas Strip\",\n          \"placeDetails\": \"Walk along the iconic Las Vegas Strip, taking in the sights and sounds of the famous hotels and casinos. Enjoy free attractions like the Bellagio Fountains and the volcano show at the Mirage.\",\n          \"placeImageURL\": \"https://media.istockphoto.com/id/178012974/photo/las-vegas-strip.jpg?s=612x612&w=0&k=20&c=55B5a68m_k7fI_n653G1bH984w86vF1e3lHjO_68v7M=\",\n          \"geoCoordinates\": {\"latitude\": 36.1146, \"longitude\": -115.1728},\n          \"ticketPricing\": \"Free (some shows have charges)\",\n          \"rating\": 4.8,\n          \"travelTime\":\"0-20 minutes from most hotels\"\n        },\n          {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"placeDetails\": \"Enjoy the free conservatory inside the Bellagio, where floral displays change with the seasons. \",\n          \"placeImageURL\": \"https://media.cntraveler.com/photos/5a314b2b5367065a30841970/master/w_2580%2Cc_limit/bellagio-conservatory-las-vegas-2018-courtesy.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1113, \"longitude\": -115.1725},\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.6,\n            \"travelTime\":\"5-10 minutes from Las Vegas Strip\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Head downtown to experience the Fremont Street Experience, a pedestrian mall with a light and sound show over a canopy of LED screens. \",\n          \"placeImageURL\": \"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_767,q_75,w_1150/v1/clients/lasvegas/fremont_street_experience_lights_1482_d79224f9-372d-4499-9df3-8e007a544c2f.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1707, \"longitude\": -115.1416},\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n           \"travelTime\":\"20-30 minutes by car/bus\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Nature and Exploration\",\n      \"bestTimeToVisit\": \"Morning (to avoid the heat)\",\n      \"activities\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Take a scenic drive through Red Rock Canyon, enjoying the stunning desert landscapes. There are also hiking trails available for those who wish to explore further. Please note, entry has a small fee, or free with a National Park Pass.\",\n           \"placeImageURL\": \"https://www.nps.gov/common/uploads/structured_article/3C7B9D9B-1DD8-B71B-0B2624F0D324C764.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1217, \"longitude\": -115.4167},\n          \"ticketPricing\": 15,\n          \"rating\": 4.7,\n          \"travelTime\":\"30 minutes by car\"\n        },\n        {\n           \"placeName\": \"The LINQ Promenade\",\n           \"placeDetails\": \"Explore the LINQ Promenade, an outdoor shopping, dining, and entertainment district with plenty of sights and people watching opportunities. The area also has the High Roller observation wheel (ticketed separately).\",\n            \"placeImageURL\": \"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_683,q_75,w_1024/v1/clients/lasvegas/Linq_Promenade_3905_1__924512c6-3d04-441c-b816-1c7d607c5040.jpg\",\n           \"geoCoordinates\": {\"latitude\": 36.1161, \"longitude\": -115.1692},\n          \"ticketPricing\": \"Free (High Roller is extra)\",\n          \"rating\": 4.4,\n             \"travelTime\":\"20-30 minutes by car/bus\"\n        },\n          {\n          \"placeName\": \"Welcome to Las Vegas Sign\",\n           \"placeDetails\": \"Take a picture with the iconic 'Welcome to Las Vegas' sign.\",\n           \"placeImageURL\": \"https://media.istockphoto.com/id/1078936896/photo/welcome-to-fabulous-las-vegas-nevada-sign.jpg?s=612x612&w=0&k=20&c=rT7xXqZg2YtL2h0w9R9vX5q-iX280F0uD5-i0W6W6aY=\",\n          \"geoCoordinates\": {\"latitude\": 36.0828, \"longitude\": -115.1726},\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.3,\n            \"travelTime\":\"10-20 minutes by car/bus\"\n         }\n\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Culture and Free Entertainment\",\n      \"bestTimeToVisit\": \"Daytime and Evening\",\n      \"activities\": [\n        {\n         \"placeName\":\"The Venetian Hotel & Grand Canal Shoppes\",\n           \"placeDetails\": \"Explore the themed canals and architecture of the Venetian Hotel and take in the impressive shopping area. You can even have a gondola ride for an added expense.\",\n           \"placeImageURL\": \"https://media.istockphoto.com/id/182497394/photo/gondolas-at-venetian-hotel-and-casino-las-vegas.jpg?s=612x612&w=0&k=20&c=w_r08L4eH23t8-m-0sJ-Yq2yZq9lJ5k8s5WdK-K8hM=\",\n           \"geoCoordinates\": {\"latitude\": 36.1218, \"longitude\": -115.1699},\n          \"ticketPricing\": \"Free (Gondola rides are extra)\",\n          \"rating\": 4.6,\n            \"travelTime\":\"10-20 minutes from the strip area\"\n        },\n         {\n          \"placeName\": \"Ethel M Chocolate Factory and Botanical Cactus Garden\",\n           \"placeDetails\": \"Visit the Ethel M Chocolate Factory for a free tour and samples. Wander through their adjacent Botanical Cactus Garden for a unique dessert plant experience. \",\n           \"placeImageURL\": \"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/2b/8e.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.0536, \"longitude\": -115.0638},\n          \"ticketPricing\": \"Free (chocolate purchases extra)\",\n           \"rating\": 4.5,\n          \"travelTime\":\"15-20 minutes by car\"\n         },\n          {\n          \"placeName\": \"Free Shows and Entertainment\",\n           \"placeDetails\": \"Spend the evening enjoying free shows on the strip such as the Volcano at the Mirage or street performers. Walking the strip at night is an attraction in itself.\",\n           \"placeImageURL\": \"https://cdn.travelpulse.com/images/2aa3a57d-6242-4610-a33e-f19f55539322/d8ab885a-22f6-469e-82c7-a7a8c9f3ca66/630x355.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1146, \"longitude\": -115.1728},\n           \"ticketPricing\": \"Free\",\n           \"rating\": 4.4,\n          \"travelTime\":\"Depends on your location\"\n         }\n      ]\n    }\n  }\n}\n```\n\n**Important Notes for Budget Travelers from Mumbai:**\n\n*   **Book in Advance:** Hotel prices and even some attractions can be cheaper if you book well in advance, especially if your visit coincides with a major event.\n*   **Travel Off-Season:** Avoid peak seasons and holidays to find the best deals on flights and hotels.\n*   **Free Activities:** Take advantage of the many free attractions Las Vegas has to offer, like the Bellagio fountains, strolling through the casinos, and exploring the Fremont Street Experience.\n*   **Food:** Look for affordable dining options, like buffets (if you can get a discount coupon), fast food, and grocery stores where you can purchase snacks and drinks.\n*   **Transportation:** Walking is a great way to see the Strip. Consider using the public bus system (RTC) for longer distances. Avoid taxis if possible, as they can be expensive.\n*   **Stay Hydrated:** Las Vegas is a desert, so it's important to stay hydrated. Bring a reusable water bottle and fill it at your hotel or from public fountains.\n*   **Wi-Fi:** Many hotels and some public areas offer free Wi-Fi. Look for those to avoid high roaming charges from your phone.\n\n**Additional Tips for Indian Travelers**\n\n*   **Carry Converter:** The US uses Type A and B plugs so bring an adapter.\n*   **Spice Preference:** Consider packing some favorite spice mix if you like food spicy. Although many Indian restaurants exist in Las Vegas, it might not fit the budget.\n*   **Cash:** Carry cash in smaller denominations for tips and other small purchases.\n*   **Comfortable Shoes:** You'll be doing a lot of walking. Bring very comfortable walking shoes.\n*   **Sun Protection:** The desert sun can be intense. Bring sunscreen, hats, and sunglasses.\n\nThis plan is designed to give you a fun and memorable Las Vegas experience without breaking the bank. Enjoy your trip!\n"},
          ],
        },
      ],
    });

  
  