"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { ArrowRight } from "lucide-react";

export interface AccommodationCardProps {
  name: string;
  imageUrl: string;
  href: string;
  distance: string;
  rooms: number;
  priceSingle: string; // 2 ágyas szoba (1 fő)
  priceDouble: string; // 2 ágyas szoba (2 fő)
  description: string;
}

const AccommodationCard: FC<AccommodationCardProps> = ({
  name,
  imageUrl,
  href,
  distance,
  rooms,
  priceSingle,
  priceDouble,
  description,
}) => {
  return (
    <Link
      href={href}
      className="group block w-full max-w-xl rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Kép */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Tartalom */}
      <div className="p-6 flex flex-col gap-5">
        
        {/* Cím */}
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-camouflage-green transition-colors flex items-center gap-2 underline">
        {name}
            <ArrowRight size={20} className="text-gray-500 group-hover:text-camouflage-green transition-colors" />
        </h3>

        {/* Alap információk */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-800">Távolság:</p>
            <p>{distance}</p>
          </div>

          <div>
            <p className="font-medium text-gray-800">Szobák száma:</p>
            <p>{rooms} db</p>
          </div>
        </div>

        {/* Ár blokk */}
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span>2 ágyas szoba (1 fő)</span>
            <span className="font-semibold text-gray-900">
              {priceSingle}
            </span>
          </div>

          <div className="flex justify-between">
            <span>2 ágyas szoba (2 fő)</span>
            <span className="font-semibold text-gray-900">
              {priceDouble}
            </span>
          </div>
        </div>

        {/* Leírás */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default AccommodationCard;