"use client"
import React from "react";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";
import styles from './WorkSection.module.css';

const WorkSection = () => {
  const { setCursorVariant } = useCursor();
  const images = [
    "/work-1.webp",
    "/work-2.webp",
    "/work-3.webp",
    "/work-4.webp"
  ];

  return (
    <section className={styles.workSection}>
      <div style={{
        height: `${(images.length + 1) * 100}vh`,
        position: 'relative',
        marginTop: '-120px',
      }}>
        {images.map((src, index) => (
          <div
            key={index}
            onMouseEnter={() => setCursorVariant('work')}
            onMouseLeave={() => setCursorVariant('default')}
            className={styles.imageContainer}
            style={{
              top: `${index * 50 + 80}px`, // Add navbar height offset
              zIndex: images.length + index,
            }}
          >
            <Image
              src={src}
              alt={`Work ${index + 1}`}
              fill
              className={styles.image}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
