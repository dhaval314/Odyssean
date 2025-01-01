import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PHOTO_URL } from '@/service/GlobalAPI';
import { GetPlaceDetails } from '@/service/GlobalAPI';

function HotelCard({ hotel }, { index }) {
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        hotel && GetPlacePhoto();
    }, [hotel]);

    const GetPlacePhoto = async () => {
        try {
            const data = {
                textQuery: hotel.hotelName
            };
            const result = await GetPlaceDetails(data);

            const photos = result.data.places[0]?.photos;
            if (photos && photos.length > 2) {
                const PhotoUrl = PHOTO_URL.replace('{NAME}', photos[0].name);
                setPhotoUrl(PhotoUrl);
            } else {
                console.error("Photo not found for", hotel.hotelName);
                setPhotoUrl("https://via.placeholder.com/150"); // Fallback image
            }
        } catch (error) {
            console.error("Error fetching photo:", error);
            setPhotoUrl("https://via.placeholder.com/150"); // Fallback image
        }
    };

    return (
        <Link
            to={
                'https://www.google.com/maps/search/?api=1&query=' +
                encodeURIComponent(hotel.hotelName) +
                ',' +
                encodeURIComponent(hotel?.hotelAddress)
            }
            target="_blank"
            className=""
        >
            <div
                data-aos="fade-up"
                key={index}
                className="mt-5 text-black h-full border rounded-lg shadow-md p-5 hover:scale-105 cursor-pointer transition-all"
            >
                <img
                    src={photoUrl}
                    alt={hotel.hotelName}
                    className="rounded-md mb-3 w-full h-40 object-cover"
                />
                <h4 className="text-lg font-bold">{hotel.hotelName}</h4>
                <p className="text-sm text-gray-500">{hotel.description}</p>
                <p className="text-sm mt-2">
                    <span className="font-medium">Address:</span> {hotel.hotelAddress}
                </p>
                <p className="text-sm">
                    <span className="font-medium">Price:</span> ${hotel.price} per night
                </p>
                <p className="text-sm">
                    <span className="font-medium">Rating:</span> {hotel.rating} ⭐
                </p>
            </div>
        </Link>
    );
}

export default HotelCard;
