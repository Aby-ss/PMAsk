"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GratitudeWall() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight md:-mb-4 text-center pt-5 text-balance">
        End Your Day with Clarity: 
        <br/> <span className="bg-blue-800 px-2 -rotate-1 inline-block"><span className="text-white">Reflect with PM Ask</span></span>
      </h1>

      <p className="font-bold text-2xl text-center w-[650px] text-[20px] leading-[24px] absolute top-[28%]">
        Desire clear thoughts before bed? Our nightly prompts make reflection easy.
      </p>
      
      <div className="flex items-center justify-center mt-8 absolute top-[35%]">
        <Link href="/new/prompts">
            <button className="bg-blue-800 text-white font-semibold py-4 px-20 rounded-lg mt-4 transition-transform duration-300 hover:scale-105 hover:rotate-3">
                Start Reflection
            </button>
        </Link>
      </div>

      <div className="flex space-x-4 mt-8 absolute top-[50%]">
        <div className="bg-red-200 p-10 rounded-lg">
            <h1 className="text-2xl mb-2 text-center font-bold text-red-700">Without PM Ask</h1>
            <ul className="list-none text-left">
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Difficulty finding daily reflection prompts</li>
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Lack of structure for nightly self-reflection</li>
              <li className="flex items-center font-medium"><span className="mr-2">❌</span> Inconsistent end-of-day routines</li>
            </ul>
          </div>
          <div className="bg-green-200 p-10 rounded-lg">
            <h1 className="text-2xl mb-2 text-center font-bold text-green-700">With PM Ask</h1>
            <ul className="list-none text-left">
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Daily prompts for easy reflection</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Consistent structure for nightly self-reflection</li>
              <li className="flex items-center font-medium"><span className="mr-2">✅</span> Improved end-of-day routine and mindfulness</li>
            </ul>
          </div>
      </div>

      <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight text-center absolute top-[90%]">
        How to <span className="bg-blue-800 px-2 -rotate-1 inline-block"><span className="text-white">Get Started</span></span> with PM Ask
      </h1>

      <section className="w-full flex flex-col items-start absolute top-[100%] left-[15%] space-y-8">
        <div>
          <h2 className="text-[18px] font-bold mb-2 w-[450px]">1️⃣ Start Using PM Ask by Accessing the App</h2>
          <p className="text-[14px] font-medium w-[550px]">Simply open PM Ask to begin your daily reflection journey. No setup required!</p>
        </div>
        <div>
          <h2 className="text-[18px] font-bold mb-2 w-[450px]">2️⃣ Follow the Daily Reflection Prompts</h2>
          <p className="text-[14px] font-medium w-[550px]">Use the provided prompts each day to guide your reflections and insights.</p>
        </div>
        <div>
          <h2 className="text-[18px] font-bold mb-2 w-[450px]">3️⃣ Track Your Progress Over Time</h2>
          <p className="text-[14px] font-medium w-[550px]">Monitor and review your reflections to see your growth and insights over time.</p>
        </div>
      </section>
    </main>
  );
}