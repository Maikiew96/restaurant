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
    console.log(recipe?.strMealThumb)
    return (
        <Link href={`/recipes/${recipe?.idMeal}`}>
       
    <div className='max-w-sm border-2 border-gray-300 cursor-pointer hover:border-gray-800'>
        {/*unoptimized voor absolute url, oplossing voor nu, later even naar kijken.*/}
        <Image src={recipe?.strMealThumb} width={400} height={250} alt="Meal image" unoptimized/>
        <h3 className='bg-white py-4 text-gray-500 font-semibold text-md text-center'>{`${recipe?.strMeal}`}</h3>
    </div>
    </Link>
    
  )
}


export default Cards