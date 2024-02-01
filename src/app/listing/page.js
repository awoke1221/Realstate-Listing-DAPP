"use client"
import { useState } from 'react';
import { sendJsonToIpfs } from '@components/pinata';

export default function List() {

  async function listingProperty() {
    let getTitle = document.getElementById('listingName').value.toString()
    let getPrice = document.getElementById('Price').value.toString()
    let getAddress = document.getElementById('address').value.toString()
    let getPin = document.getElementById('pin').value.toString()
    let getCity = document.getElementById('City').value.toString()
    let getCountry = document.getElementById('Country').value.toString()
    if (!getTitle || !getPrice || !getAddress || !getPin || !getCity || !getCountry) return

  }


  return (
    <div className='bg-[#f9f1f1eb] flex justify-center'>
      <div className="container flex justify-center font-mono">
        <form>

          <div className="mb-4">
            <label htmlFor="listingName" className="block text-gray-700 mb-2">
              Listing Name
            </label>
            <input
              type="text"
              id="listingName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={listingName}
              //onChange={(e) => setListingName(e.target.value)}
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
                //value={Price}
                //onChange={(e) => setListingPrice(e.target.value)}
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
                //value={address}
                //onChange={(e) => setAddress(e.target.value)}
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
                //value={pin}
                //onChange={(e) => setPinNumber(e.target.value)}
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
                //value={City}
                //onChange={(e) => setPropertyCity(e.target.value)}
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
                //value={Country}
                //onChange={(e) => setPropertyCountry(e.target.value)}
                required
              />
            </div>
          </div>


          <div className="flex mb-4">
            <div className="w-1/3 mr-2">
            <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
            Floors
            </label>
            <input
              type="text"
              id="Floors"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={Image}
              //onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
            </div>
            <div className="w-1/3 mr-2">
             <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
             Rooms
            </label>
            <input
              type="text"
              id="Rooms"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={Image}
              //onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
            </div>
            <div className="w-1/3 mr-2">
             <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
             Baths
            </label>
            <input
              type="text"
              id="Baths"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={Image}
              //onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
            </div>
          </div>
          
          <div className="flex mb-4">
          <div className="w-1/3 mr-2">
            <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
            Seller Name
            </label>
            <input
              type="text"
              id="sellername"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={Image}
              //onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
            </div>
            <div className="w-1/3 mr-2">
             <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
             Seller Email
            </label>
            <input
              type="text"
              id="selleremail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={Image}
              //onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
            </div>
            <div className="w-1/3 mr-2">
             <label htmlFor="propertyImage" className="block text-gray-700 mb-2">
             Seller Phone
            </label>
            <input
              type="text"
              id="sellerphone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //value={Image}
              //onChange={(e) => setPropertyImage(e.target.value)}
              required
            />
            </div>
          </div>
          <div>
          <input
                    type="file"
                    name="asset"
                    className="mt-4"
                    //onChange={onChange}
                />

                {
                    //fileUrl && (<img className="rounded mt-4" width='350px' src={fileUrl} />)
                }
          </div>



          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

