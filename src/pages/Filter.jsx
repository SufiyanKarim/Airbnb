import React, { useState } from 'react'

const Filter = () => {
    const [filteredData, setfilteredData] = useState("Rooms")
    const arra = [
        {title:"Rooms"},
        {title:"Country"},
        {title:"City"},
    ]

    const newArr =[
        {title:"Rooms", data: ["Room 1", "Room 2", "Room 3"]},
        {title:"Country", data: ["Country 1", "Country 2", "Country 3"]},
        {title:"City", data: ["City 1", "City 2", "City 3"]},
    ]

    const resData = newArr.filter((value)=>(
        value.title === filteredData
    ))
    console.log(resData)
  return (
    <div>
        {arra.map((item, index) => (
            <button onClick={()=>setfilteredData(item.title)} key={index} className="py-2 px-4 rounded-full bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:border-gray-400">
                {item.title}
            </button>
        ))}
{resData?.map((itm)=>(
    <h1>{itm.data.map((data)=>(
            <h2>{data}</h2>
    ))}</h1>
))}
       
        

    </div>
  )
}

export default Filter