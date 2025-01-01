import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { travelersOptions, budgetOptions, AI_PROMPT } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { db } from '@/service/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';
import Aos from 'aos';
import 'aos/dist/aos.css';

function CreateTrip() {
  // Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    origin: '',
    location: '',
    noOfDays: '',
    budget: '',
    traveler: '',
  });

  const [hasAnimated, setHasAnimated] = useState({
    budget: false,
    traveler: false,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onGenerateTrip = async () => {
    const { origin, location, noOfDays, budget, traveler } = formData;

    // Validation
    if (!origin || !location || !noOfDays || !budget || !traveler) {
      toast('Please fill all the details');
      return;
    }

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT
      .replace('{origin}', origin)
      .replace('{location}', location)
      .replace('{totalDays}', noOfDays)
      .replace('{budget}', budget)
      .replace('{traveler}', traveler);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripData = result?.response?.text();
      SaveAITrip(tripData);
    } catch (error) {
      console.error('Error generating trip:', error);
      toast('Failed to generate trip. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const SaveAITrip = async (TripData) => {
    const docId = Date.now().toString();

    try {
      const trip = {
        userSelection: formData,
        tripData: JSON.parse(TripData),
        id: docId,
      };

      await setDoc(doc(db, 'AITrips', docId), trip);
      navigate('/view-trip/' + docId, { state: trip });
    } catch (error) {
      console.error('Error saving trip:', error);
      toast('Failed to save trip. Please try again.');
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-20 px-5 mt">
      <h2 className="mt-10 font-bold text-3xl">Let’s Get Started on Your Dream Trip!</h2>
      <p className="mt-10 text-gray-500 text-xl">
        Fill in the details below to create a tailored and personalized trip plan.
      </p>

      <div className="mt-16 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">Where are you from?</h2>
          <ReactGoogleAutocomplete
            className="rounded-md border border-black w-full p-2"
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            onPlaceSelected={(place) => handleInputChange('origin', place.formatted_address)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">Where do you want to go?</h2>
          <ReactGoogleAutocomplete
            className="rounded-md border border-black w-full p-2"
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            onPlaceSelected={(place) => handleInputChange('location', place.formatted_address)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">How many days will you travel?</h2>
          <Input
            type="number"
            placeholder="E.g. 4"
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

        {/* Budget */}
        <div
          data-aos={!hasAnimated.budget ? 'fade-up' : ''}
          data-aos-once="true"
          data-aos-delay="1200"
          onAnimationEnd={() =>
            setHasAnimated((prev) => ({ ...prev, budget: true }))
          }
        >
          <h2 className="text-xl my-3 font-medium">Select your budget</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {budgetOptions.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                  formData?.budget === item.value
                    ? 'shadow-lg border-gray-500'
                    : ''
                }`}
                onClick={() => handleInputChange('budget', item.value)}
              >
                <h2>{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-gray-500 text-sm">{item.description}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Number of People */}
        <div
          data-aos={!hasAnimated.traveler ? 'fade-up' : ''}
          data-aos-once="true"
          data-aos-delay="1500"
          onAnimationEnd={() =>
            setHasAnimated((prev) => ({ ...prev, traveler: true }))
          }
        >
          <h2 className="text-xl my-3 font-medium">Who’s traveling?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {travelersOptions.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                  formData.traveler === item.title
                    ? 'shadow-lg border-gray-500'
                    : ''
                }`}
                onClick={() => handleInputChange('traveler', item.title)}
              >
                <h2>{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-gray-500 text-sm">{item.description}</h2>
              </div>
            ))}
          </div>
        </div>

        <Button
          disabled={loading}
          data-aos-once="true"
          data-aos="fade-up"
          onClick={onGenerateTrip}
          className="my-10 flex ml-auto"
        >
          {loading ? <VscLoading className="h-7 w-7 animate-spin" /> : 'Generate Trip'}
        </Button>
      </div>
    </div>
  );
}

export default CreateTrip;
