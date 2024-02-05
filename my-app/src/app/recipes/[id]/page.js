import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"

//fetch de data met als id als identifier
async function getData(id){
  const res = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

  if(!res.ok){
    throw new Error('Something went wrong');
  }

  return res.json();
}

export default async function page({params}) {
  const {id} = params;
  const data = await getData(id)
  console.log(data);
  return (
    <div className="flex justify-center flex-grow align-middle">{id}
    {/*container*/}
      <div >
        {/* <p>{data.meals[0].strIngredient1}</p> */}

      </div>
    </div>
    
  )

}

