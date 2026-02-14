'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CustomCarouselProps  {
    imageSources: string[]
    interval?: number
}

export default function CustomCarousel({ imageSources, interval = 3000 }: CustomCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageSources.length);
    }, interval);

    return () => clearInterval(timer);
  }, [imageSources.length, interval]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg">
      {imageSources.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}