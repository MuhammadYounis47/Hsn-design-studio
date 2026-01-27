'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Work } from '../data/works';

interface Props {
  works: Work[];
}

// Helper function to slugify title (lowercase, spaces to dash, etc)
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-');    // Replace multiple - with single -
}

export default function WorkGrid({ works }: Props) {
  const rows: Work[][] = [];

  for (let i = 0; i < works.length; i += 2) {
    rows.push(works.slice(i, i + 2));
  }

  return (
    <div className="space-y-10 mt-12">
      {rows.map((row, rowIndex) => {
        const reverse = rowIndex % 2 !== 0;

        return (
          <div
            key={rowIndex}
            className={`flex gap-6 flex-col md:flex-row ${
              reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* BIG IMAGE */}
            <Link href={`/project/${slugify(row[0].title)}`} className="group relative md:flex-1 lg:flex-1 h-105 rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src={row[0].image}
                alt={row[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* hover text */}
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-white">
                <p className="text-sm opacity-80">{row[0].industry}</p>
                <h3 className="text-xl font-semibold">{row[0].title}</h3>
              </div>
            </Link>

            {/* SMALL IMAGE */}
            {row[1] && (
              <Link href={`/project/${slugify(row[1].title)}`} className="group relative w-full md:w-[38%] h-105 rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={row[1].image}
                  alt={row[1].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-white">
                  <p className="text-sm opacity-80">{row[1].industry}</p>
                  <h3 className="text-xl font-semibold">{row[1].title}</h3>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
