import React from "react";
import { motion } from "framer-motion";

const ScrapbookSection = () => {
  const stickers = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png",
      alt: "Sticker 1",
      rotate: -5,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png",
      alt: "Sticker 2",
      rotate: 4,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png",
      alt: "Sticker 3",
      rotate: -2,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png",
      alt: "Sticker 4",
      rotate: 6,
    },
  ];

  return (
    <section className="w-full p-6 bg-white rounded-xl shadow border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Scrapbook</h2>
      <div
        className="relative w-full h-[400px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {stickers.map((sticker, idx) => (
          <motion.div
            key={idx}
            drag
            dragMomentum={false}
            initial={{ x: 50 * idx, y: 50 }}
            style={{
              position: "absolute",
              cursor: "grab",
              rotate: `${sticker.rotate}deg`,
              border: "6px solid white", // Heavy border like stickers
              borderRadius: "12px",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              padding: "4px",
            }}
            whileDrag={{ scale: 1.1 }}
          >
            <img
              src={sticker.src}
              alt={sticker.alt}
              className="w-28 h-auto object-contain pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrapbookSection;
