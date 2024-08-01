import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Page does not exist. Check the path again.</p>
      <p className='cta'>
        <Link href="/meals">Back to meals</Link>
      </p>
    </main>
  );
}
