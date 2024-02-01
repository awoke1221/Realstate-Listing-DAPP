"use client"
import { useState } from 'react';
import axios from 'axios';
const FormData = require('form-data')

export default function List() {
  const [formImput, updateFormImput] = useState({
    title: " ", price: " ", location: " ",
    pin: " ", city: " ", floors: " ", rooms: " ", baths: " ", sellername: " ", selleremail: " ", sellerphone: " "
  })
  const [fileUrl, setFileUrl] = useState(null)


  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: `0f2053dea67482e5b933`,
          pinata_secret_api_key: `bfae1ef0d6f46532d1a157024054109e6cb9665c481af8d4acfe1ea588b2e6cd`
        }
      })
      const { IpfsHash } = response.data;
      const url = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`;
      setFileUrl(url)

    } catch (error) {
      console.log("error uploading a file: ", error);
    }
  }


  async function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let dateString = year + "-" + month + "-" + day;
    return dateString;
  }


  async function listingProperty() {
    const { title, price, location, pin, city, floors, rooms, baths, sellername, selleremail, sellerphone } = formImput

    if (!title || !price || !location || !pin || !city || !floors || !rooms || !baths || !sellername || !selleremail || !sellerphone || !!fileUrl) return

    try {
      const listdate = await getDate()
      const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'

      let data = JSON.stringify({
        "pinataMetadata": {
          name: "listed",
        },
        "pinataOptions": {
          "cidVersion": 1
        },
        "pinataContent": {
          "PropertyInfo": {
            "Title": title,
            "Price": price,
            "Address": location,
            "Zip": pin,
            "City": city,
            "Floors": floors,
            "Rooms": rooms,
            "Baths": baths,
            "Name": sellername,
            "Email": selleremail,
            "Phone": sellerphone,
            "Listed": listdate,
            "Picture": fileUrl
          }
        }
      })

      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          pinata_api_key: `0f2053dea67482e5b933`,
          pinata_secret_api_key: `bfae1ef0d6f46532d1a157024054109e6cb9665c481af8d4acfe1ea588b2e6cd`

        }
      })
      const hash = `ipfs://${response.data.IpfsHash}`
      //return hash
      console.log(hash)


    } catch (error) {
      console.log("error to uplod a file: ", error)
    }
    

  }
  return (

    <div className="bg-[#f9f1f1eb] flex justify-center">
      <div className="w-1/2 flex flex-col pb-12 ">


        <input
          placeholder="Name of Listing Property"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, title: e.target.value })}
        />


        <input
          placeholder="price"
          type="number"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, price: e.target.value })}
        />

        <input
          placeholder="location"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, location: e.target.value })}
        />

        <input
          placeholder="pin"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, pin: e.target.value })}
        />

        <input
          placeholder="city"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, city: e.target.value })}
        />

        <input
          placeholder="# of Floors"
          type="number"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, floors: e.target.value })}
        />

        <input
          placeholder="# of Rooms"
          type="number"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, rooms: e.target.value })}
        />

        <input
          placeholder="# of Baths"
          type="number"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, baths: e.target.value })}
        />

        <input
          placeholder="seller name"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, sellername: e.target.value })}
        />

        <input
          placeholder="seller email"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, selleremail: e.target.value })}
        />

        <input
          placeholder="seller phone"
          type="text"
          className="mt-8 border rounded-full p-4"
          required
          onChange={e => updateFormImput({ ...formImput, sellerphone: e.target.value })}
        />

        <input
          type="file"
          name="asset"
          className="mt-4"
          required
          onChange={onChange}
        />

        {
          fileUrl && (<img className="rounded mt-4" width='350px' src={fileUrl} />)
        }

        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            onClick={() => listingProperty()}
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

