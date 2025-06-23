export const metadata = {
  title: 'Pokemons Page',
  description: 'get and catch them all!',
};

export default function PokemonPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Pokemons</span>
      <div className='flex flex-wrap gap-4'>
        <img src='/pokemons/pikachu.png' alt='Pikachu' className='w-24 h-24' />
        <img src='/pokemons/bulbasaur.png' alt='Bulbasaur' className='w-24 h-24' />
        <img src='/pokemons/charmander.png' alt='Charmander' className='w-24 h-24' />
      </div>
    </div>
  );
}
