import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('dashboard/counter');
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
