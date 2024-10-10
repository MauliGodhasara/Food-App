"use client";
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Home() {
  const [hovered, setHovered] = useState(false)
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Your Restaurant</title>
        <meta name="description" content="Delicious food awaits you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1455853659719-4b521eebc76d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Our Restaurant</h1>
            <p className="text-lg mb-8">Indulge in our mouthwatering dishes!</p>
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => router.push('/menu')}
              className={`px-6 py-3 rounded-lg text-lg font-bold transition-transform transform ${hovered ? 'scale-105' : 'scale-100'} bg-orange-500 hover:bg-orange-600`}
            >
              Go to Menu
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
