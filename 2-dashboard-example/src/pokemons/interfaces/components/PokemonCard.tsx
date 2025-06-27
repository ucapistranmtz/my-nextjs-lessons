import Link from 'next/dist/client/link';
import { SimplePokemon } from '../simplePokemon';
import Image from 'next/image';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='text-center p-6 bg-gray-800 border-b'>
          (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          ></Image>
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{pokemon.name}</p>
          <p className='text-sm text-gray-100'>John@Doe.com</p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemon/${id}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              more info
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <Link href='/dashboard/main' className='px-4 py-2 hover:bg-gray-100 flex items-center'>
            <div className='text-red-600'>
              <IoHeartOutline />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>
                it is not your favorite
              </p>
              <p className='text-xs text-gray-500'>View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
