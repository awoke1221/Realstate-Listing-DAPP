"use client"
import { useState } from 'react';

const ListingForm = () => {
  const [listingName, setListingName] = useState('');
  const [listingPrice, setListingPrice] = useState('');
  const [address, setAddress] = useState('');
  const [propertyImage, setPropertyImage] = useState('');
  const [pinNumber, setPinNumber] = useState('');
  const [propertyCity, setPropertyCity] = useState('');
  const [propertyCountry, setPropertyCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the state variables
    console.log({
      listingName,
      listingPrice,
      address,
      propertyImage,
      pinNumber,
      propertyCity,
      propertyCountry,
    });
  };

  return (
    <div className='bg-[#f9f1f1eb] flex justify-center'>
      <div className="container flex justify-center font-mono">
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="listingName" className="block text-gray-700 mb-2">
              Listing Name
            </label>
            <input
              type="text"
              id="listingName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={listingName}
              onChange={(e) => setListingName(e.target.value)}
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/3 mr-2">
              <label htmlFor="listingPrice" className="block text-gray-700  mb-2">
                $ Price
              </label>
              <input
                type="number"
                id="Price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={listingPrice}
                onChange={(e) => setListingPrice(e.target.value)}
                required
              />
            </div>
            <div className="w-1/3 mr-2">
              <label htmlFor="address" className="block text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="w-1/3 mr-2">
            <label htmlFor="pinNumber" className="block text-gray-700 mb-2">
              Pin
            </label>
            <input
              type="text"
              id="pin"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={pinNumber}
              onChange={(e) => setPinNumber(e.target.value)}
              required
            />
          </div>
          </div>

          <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="propertyCity" className="block text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              id="City"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={propertyCity}
              onChange={(e) => setPropertyCity(e.target.value)}
              required
            />
          </div>
          <div className="w-1/2 mr-2">
            <label htmlFor="propertyCountry" className="block text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              id="Country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={propertyCountry}
              onChange={(e) => setPropertyCountry(e.target.value)}
              required
            />
          </div>
          </div>

          
          <div className="mb-4">
            <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
              Image
            </label>
            <input
              type="text"
              id="Image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={propertyImage}
              onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
          </div>



          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;