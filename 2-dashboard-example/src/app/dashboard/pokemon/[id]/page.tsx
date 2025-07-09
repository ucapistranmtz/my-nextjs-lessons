import {Pokemon} from '../../../../pokemons/'
interface Props {
params:{ id:string}
}

const getPokemon = async (id:string):Promise<Pokemon>=>{
   const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
      cache:'force-cache'
   })
   .then(res=> res.json());

 //  console.log('loading ',pokemon.name)
return pokemon;
}

export default async  function PokemonPage( {params}:Props){
   console.log(params)
   const pokemon =await getPokemon(params.id)
return (
   <div>
    Hello Pokemon Page {params.id}
    <div>{JSON.stringify(pokemon)}</div>
   </div>
)
}