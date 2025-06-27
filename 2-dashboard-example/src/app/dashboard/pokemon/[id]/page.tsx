interface Props {
params:{ id:string}
}

export default function PokemonPage( {params}:Props){
   console.log(params)
return (
   <div>
    Hello Pokemon Page {params.id}
   </div>
)
}