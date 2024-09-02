// app/new.js

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PMAsk_form() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarOpacity = Math.max(0.3, 1 - scrollPosition / 600);


  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationColor, setNotificationColor] = useState('bg-green-500');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-extrabold text-4xl text-center w-[650px] leading-9 absolute top-[5%] text-pretty">
      Reflect, Learn, <span className = "bg-blue-800 px-2 -rotate-1 inline-block"><span className = "text-white">Grow</span></span>
      </h1>

      {/* What were my biggest wins today, and how can I replicate them tomorrow? */}
      <p className="absolute top-[15%] right-[33%] font-bold">
        What were my biggest wins today, and how can I replicate them tomorrow <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[20%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* What challenges tested me the most today, and did I respond like the leader I want to be? */}
      <p className="absolute top-[40%] right-[25%] font-bold">
        What challenges tested me the most today, and did I respond like the leader I want to be? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[45%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* Did I make progress towards my key goals today, or did I let distractions take over? */}
      <p className="absolute top-[65%] right-[29%] font-bold">
        Did I make progress towards my key goals today, or did I let distractions take over? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[70%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* Who did I add value to today, and how can I deepen those relationships? */}
      <p className="absolute top-[90%] right-[34%] font-bold">
        Who did I add value to today, and how can I deepen those relationships? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[95%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* What tough decisions did I face today, and did I handle them with courage and clarity? */}
      <p className="absolute top-[115%] right-[26%] font-bold">
        What tough decisions did I face today, and did I handle them with courage and clarity? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[120%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* What did I learn today that can give me an edge tomorrow? */}
      <p className="absolute top-[140%] right-[42%] font-bold">
        What did I learn today that can give me an edge tomorrow? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[145%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* How did I use my time today—was it spent moving the needle or just staying busy? */}
      <p className="absolute top-[165%] right-[28%] font-bold">
        How did I use my time today—was it spent moving the needle or just staying busy? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[170%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* What held me back today, and what’s my plan to eliminate that barrier? */}
      <p className="absolute top-[190%] right-[35%] font-bold">
        What held me back today, and what’s my plan to eliminate that barrier? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[195%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* Did I step out of my comfort zone today, or did I play it safe? */}
      <p className="absolute top-[215%] right-[40%] font-bold">
        Did I step out of my comfort zone today, or did I play it safe? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[220%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>

      {/* If today was a chapter in my story, what would it say about my drive and discipline? */}
      <p className="absolute top-[240%] right-[28%] font-bold">
        If today was a chapter in my story, what would it say about my drive and discipline? <span className="text-red-500">*</span>
      </p>
      <div className="absolute top-[245%] bg-zinc-100 opacity-0.9 border border-white-300 rounded-lg p-4" style={{ width: '700px', height: '150px' }}>
        <textarea
          className="w-full h-full border-none outline-none resize-none rounded-lg"
          placeholder="Write your response here..."
          style={{ backgroundColor: 'transparent' }}
        ></textarea>
      </div>


      {/* Notification */}
      {showNotification && (
        <div
          className={`fixed top-5 right-0 transform translate-x-[150%] animate-slide-in ${notificationColor} text-white py-1 px-5 rounded-lg shadow-lg opacity-90`}
          style={{
            animation: 'slide-in 0.5s forwards',
          }}
        >
          <h3 className="text-lg font-medium mb-2">{notificationMessage}</h3>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(150%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}