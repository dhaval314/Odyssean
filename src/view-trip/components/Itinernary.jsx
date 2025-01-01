import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GetPlaceDetails, PHOTO_URL } from '@/service/GlobalAPI'; 

function Itinerary({ trip }) {
  const [activityPhotos, setActivityPhotos] = useState({});
  const itinerary = trip?.tripData?.itinerary || {};

  // Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  // Fetch images for each activity
  useEffect(() => {
    const fetchPhotos = async () => {
      const photoMap = {};
      for (const day in itinerary) {
        const activities = itinerary[day]?.activities || [];
        for (const activity of activities) {
          if (activity.placeName && !photoMap[activity.placeName]) {
            try {
              const data = { textQuery: activity.placeName };
              const result = await GetPlaceDetails(data);
              const photos = result?.data?.places[0]?.photos;
              if (photos && photos.length > 0) {
                const photoUrl = PHOTO_URL.replace('{NAME}', photos[0].name);
                photoMap[activity.placeName] = photoUrl;
              } else {
                photoMap[activity.placeName] = 'https://via.placeholder.com/150'; // Fallback image
              }
            } catch (error) {
              console.error(`Error fetching photo for ${activity.placeName}:`, error);
              photoMap[activity.placeName] = 'https://via.placeholder.com/150'; // Fallback image
            }
          }
        }
      }
      setActivityPhotos(photoMap);
    };

    fetchPhotos();
  }, [itinerary]);

  return (
    <div>
      <h2 data-aos="fade-up" className="underline font-bold mt-10 text-xl">
        Trip Itinerary:
      </h2>
      {Object.keys(itinerary).length > 0 ? (
        Object.entries(itinerary)
          .sort(([dayA], [dayB]) => {
            const numA = parseInt(dayA.replace(/\D/g, ''), 10);
            const numB = parseInt(dayB.replace(/\D/g, ''), 10);
            return numA - numB;
          })
          .map(([day, details]) => (
            <div key={day} className="my-5">
              <h3
                data-aos="fade-up"
                className="text-lg font-bold mb-3 capitalize"
              >{`Day ${day.replace(/\D/g, '')}`}</h3>
              <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {details.activities.map((activity, index) => (
                  <Link
                    key={index}
                    to={`https://www.google.com/maps/search/?api=1&query=${activity.geoCoordinates.latitude},${activity.geoCoordinates.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-300 hover:scale-105"
                  >
                    <div
                      data-aos="fade-up"
                      className="text-black h-full border rounded-lg shadow-md p-5"
                    >
                      <img
                        src={activityPhotos[activity.placeName] || 'https://via.placeholder.com/150'}
                        alt={activity.placeName}
                        className="rounded-md mb-3 w-full h-40 object-cover"
                      />
                      <h4 className="text-lg font-bold">{activity.placeName}</h4>
                      <p className="text-sm text-gray-500">{activity.placeDetails}</p>
                      <p className="text-sm mt-2">
                        <span className="font-medium">Rating:</span> {activity.rating} ⭐
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Ticket Pricing:</span>{' '}
                        {activity.ticketPricing}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Travel Time:</span>{' '}
                        {activity.travelTime}
                      </p>
                      {activity.bestTimeToVisit && (
                        <p className="text-sm">
                          <span className="font-medium">Best Time to Visit:</span>{' '}
                          {activity.bestTimeToVisit}
                        </p>
                      )}
                      {activity.theme && (
                        <p className="text-sm">
                          <span className="font-medium">Theme:</span> {activity.theme}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
      ) : (
        <p>No itinerary available.</p>
      )}
    </div>
  );
}

export default Itinerary;
