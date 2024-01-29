import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='h-96 bg-red-300 w-full'>header</div>
      <div className='h-96 bg-green-200 w-full'>
        <Link href='/map'>Politics for Change</Link>
      </div>
      <div className='h-96 bg-blue-300 w-full'>Proof of possibility</div>
    </main>
  );
}
