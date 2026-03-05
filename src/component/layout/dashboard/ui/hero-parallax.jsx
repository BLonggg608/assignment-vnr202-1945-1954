"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React from "react";

export const HeroParallax = ({
  products,
  headerContent
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Giảm khoảng cách di chuyển của hình ảnh
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 600]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  // Giảm khoảng cách di chuyển theo trục Y để text và hình ảnh gần nhau hơn
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-200, 100]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header headerContent={headerContent} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-56">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ headerContent }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-16 px-4 w-full left-0 top-0 text-center">
      {/* Badge */}
      {headerContent?.badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--lacquer-red)] text-white mb-4 shadow-lg">
          <span className="text-[var(--lacquer-gold)]">★</span>
          <span className="text-sm font-semibold">{headerContent.badge}</span>
          <span className="text-[var(--lacquer-gold)]">★</span>
        </div>
      )}

      {/* Combined Title with Historical Journey */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 max-w-5xl mx-auto">
        {headerContent?.mainTitle && (
          <span className="block mb-4 bg-gradient-to-r from-[var(--lacquer-red)] via-[var(--lacquer-red-light)] to-[var(--lacquer-red)] bg-clip-text text-transparent">
            {headerContent.mainTitle}
          </span>
        )}

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 bg-[var(--lacquer-gold)]"></div>
          <span className="text-2xl text-[var(--lacquer-gold)]">✦</span>
          <div className="h-px w-16 bg-[var(--lacquer-gold)]"></div>
        </div>

        {headerContent?.subtitle && (
          <span className="block mb-4 text-xl md:text-3xl text-[var(--museum-dark-brown)]">
            {headerContent.subtitle}
          </span>
        )}

        <span className="block mb-2 text-[var(--museum-brown)] text-lg md:text-2xl">
          Hành Trình Lịch Sử
        </span>
        <span className="text-[var(--lacquer-gold)]">1945 - 1954</span>
        <span className="block mt-2">
          Kháng Chiến <span className="text-[var(--lacquer-gold)]">Chống Pháp</span>.
        </span>
      </h1>

      {/* Description */}
      {headerContent?.description && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--museum-dark-brown)] mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-1 font-medium">
          {headerContent.description}
        </p>
      )}

      {/* Learning Outcomes */}
      {headerContent?.clo2 && headerContent?.clo4 && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--museum-beige)] border-2 border-[var(--lacquer-red)]">
            <span className="font-bold text-[var(--lacquer-red)]">CLO2</span>
            <span className="text-sm text-[var(--museum-dark-brown)]">
              {headerContent.clo2}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--museum-beige)] border-2 border-[var(--jade-green)]">
            <span className="font-bold text-[var(--jade-green)]">CLO4</span>
            <span className="text-sm text-[var(--museum-dark-brown)]">
              {headerContent.clo4}
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-4 text-[var(--museum-brown)]">
        <div className="h-px w-12 bg-[var(--lacquer-gold)]"></div>
        <span className="text-sm font-semibold">CUỘC KHÁNG CHIẾN VĨ ĐẠI</span>
        <div className="h-px w-12 bg-[var(--lacquer-gold)]"></div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-lg overflow-hidden border-4 border-[var(--lacquer-gold)] shadow-xl">
      <div className="block group-hover/product:shadow-2xl h-full w-full">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-300 group-hover/product:scale-105"
          alt={product.title} />
      </div>

      {/* Title overlay - always visible with semi-transparent background */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
        <h2 className="text-white text-xl font-bold drop-shadow-lg">
          {product.title}
        </h2>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-[var(--lacquer-gold)] border-l-transparent opacity-90"></div>
    </motion.div>
  );
};
