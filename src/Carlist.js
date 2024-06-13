import React, {useState} from 'react'
import Displaycar from './Displaycar'

export default function Carlist() {
    const [cars,setcars]=useState([
        {
            name:"Audi",
            price:"43L",
            description:"Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. A subsidiary of the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.",
            picture:'https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?wid=850'
        },
        {
            name:"Kia",
            price:"7L",
            description:"Kia Corporation is a South Korean multinational automobile manufacturer headquartered in Seoul, South Korea. It is South Korea's second largest automobile manufacturer, after its parent company, Hyundai Motor Company, with sales of over 2.8 million vehicles in 2019.",
            picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgjKCXw8DS9-uJN4y9lE14WLsHV-SwRA4sQ&s'
        },
        {
            name:"Alto",
            price:"3.8L",
            description:"The musical term alto, meaning high in Italian (Latin: altus), historically refers to the contrapuntal part higher than the tenor and its associated vocal range.",
            picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnHHHLsqjLSt_NIDcADcjVfbUEhaS3iFZXg&s'
        },
        {
            name:"Benz",
            price:"40L",
            description:"Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG is headquartered in Stuttgart, Baden-Württemberg, Germany.",
            picture:'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/178537/c-class-right-side-view.jpeg?isig=0&q=80'
        },
    ])
  return (
    <div>
      <Displaycar carDetails={cars}/>
    </div>
  )
}
