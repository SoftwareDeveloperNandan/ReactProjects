import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Github() {

    const [data, setData] =  useState([])

    useEffect(() => {

        fetch(`https://api.github.com/users/hiteshchoudhary`)
        .then( response => response.json())
        .then( data => {
            console.log("DATA??", data);
            setData(data)
        })
    }, [])
    return (

        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src= {data.avatar_url}
                            alt="Github images"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Chai aur Code
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Follow on github and support.
                            Youtube pe best koi content and series hai to wo hai hitesh sir ka
                            Isiliye ek like and share to banta hai.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Total Followers:- <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-1xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            {data.followers}
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github

