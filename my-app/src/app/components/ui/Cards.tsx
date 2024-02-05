import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

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
        <Card className='border-2 cursor-pointer rounded-lg hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out'>
            {/*unoptimized voor absolute url, oplossing voor nu, later even naar kijken.*/}
            <Image src={recipe?.strMealThumb} width={400} height={250} alt="Meal image" unoptimized/>
            <CardDescription className=' py-4 text-md text-center'>{`${recipe?.strMeal}`}</CardDescription>
        </Card>
    </Link>
    
  )
}


export default Cards