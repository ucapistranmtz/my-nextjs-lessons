import { CartCounter } from '@/app/shopping-cart';

export const metadata = {
  title: 'Counter Page',
  description: 'A simple counter page to demonstrate state management in Next.js',
};

export default function CounterPage() {
  return (
    <div className=' flex flex-col items-center justify-center w-full h-full'>
      <span>Shopping car items </span>
      <CartCounter value={20} />
    </div>
  );
}
