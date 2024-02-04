"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Introduction from "./components/Introduction";
import Cards from "./components/ui/Cards";


export default function Home() {
  //3 states
  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    //fetch de recepten
    const fetchRecipes = async () => {
      //catch als er enige errors zijn
      try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

        if(!res.ok) {
          throw new Error ('something went wrong')
        }

        //verander resultaat in JSON object
        const result = await res.json();
       
        setRecipes(result?.meals)

      } catch (error) {
        console.log(error)
      }
      const response = await fetch('')
      const data = await response.json()
      setRecipes(data)
      setLoading(false)
    }
    
    fetchRecipes();
  }, []);


  

//assing types to data
interface Recipe {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}

interface CardsProps {
  recipe: Recipe;
}


  return (
    <main className="">
      <Introduction />
      <div className="flex items-center justify-center p10">
        <div className="flex flex-wrap flex-col items-center justify-center lg:flex-row gap-2">
          {recipes?.map((recipe: Recipe) => (
            <Cards key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}
