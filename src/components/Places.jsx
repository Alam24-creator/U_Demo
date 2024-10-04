import React from 'react'
import PlacesCard from './PlacesCard'

import Img1 from "../assets/places/boat.png";
import Img2 from "../assets/places/tajmahal.png";
import Img3 from "../assets/places/water.png";
import Img4 from "../assets/places/place4.png";
import Img5 from "../assets/places/place5.png";
import Img6 from "../assets/places/place6.png";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2
        pl-2 text-3xl font-bold'>
            Best Places To Visit
        </h1>
        <div className='grid grid-cols-1
        sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {PlacesData.map((item,index)=>(
                <PlacesCard key={index} {...item}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Places
