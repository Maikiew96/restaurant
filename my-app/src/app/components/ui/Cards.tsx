import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//assing types to data
interface Recipe {
    idMeal: number;
    strMeal: string;
    strMealThumb: string;
}

interface CardsProps {
    recipe: Recipe;
}

function Cards({recipe}: CardsProps) {
    return (
        <Link href={`/recipes/${recipe?.idMeal}`}>
       
    <div className='max-w-sm border-2 border-gray-300 cursor-pointer hover:border-gray-800'>
        <Image src={recipe?.strMealThumb} width={350} height={250} alt='Meal image' />
        <h1 className='bg-white py-4 text-gray-500 font-semibold text-2xl text-center'>{`${recipe?.strMeal}`}</h1>
    </div>
    </Link>
    
  )
}


export default Cards