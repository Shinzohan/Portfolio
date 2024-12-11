// pages/under-construction.js
import Head from 'next/head';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <Head>
        <title>Under Construction</title>
      </Head>
      <h1 className="text-4xl font-bold text-gray-800">🚧 Under Construction 🚧</h1>
      <p className="mt-4 text-lg text-gray-600">
        We're working hard to bring you something amazing! Check back soon.
      </p>
    </div>
  );
}
