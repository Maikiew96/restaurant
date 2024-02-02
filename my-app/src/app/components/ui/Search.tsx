import React from 'react'

function Search() {
  return (
    <div className='flex flex-col items-center justify-center mt-20 mb-4 sm:flex-row md:m-4'>
        <select className='border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black-500 w-1/2 m-2 lg:w-1/6'>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Lamb">Lamb</option>
            <option value="Pork">Pork</option>
        </select>

        <h1 className="text-xl font-semibold text-center mx-4">OR</h1>

        <input type="text" className='border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black-500 w-1/2 lg:w-1/6 m-2' placeholder='Search for a recipe' />

        <button className='bg-red-500 px-4 py-3 border-r-4 rounded-md hover:bg-green-700 text-white m-2 w-1/2 md:w-1/6 transition duration-300' >Search</button>
    </div>
  )
}

export default Search