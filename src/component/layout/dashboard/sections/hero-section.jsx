"use client";

import Gaydient from "@/component/layout/dashboard/elements/gaydient/gaydient";
import { HeroParallax } from "@/component/layout/dashboard/ui/hero-parallax";
import {
  BookOutlined,
  EditOutlined,
  RobotOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import "./hero-section.css";

const iconMap = {
  BookOutlined: BookOutlined,
  EditOutlined: EditOutlined,
  RobotOutlined: RobotOutlined,
};

export default function HeroSection({ historicalImages, navigationCards }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="relative w-full bg-[var(--museum-cream)] hero-section">
      <Gaydient />

      {/* Vietnamese Pattern Overlay */}
      <div className="vn-pattern-overlay" />

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="flex flex-col items-center gap-2 text-[var(--museum-brown)]">
          <span className="text-sm font-semibold">Lướt xuống để khám phá</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[var(--lacquer-gold)]"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Historical Images Parallax with Integrated Header */}
      <div className="relative">
        <HeroParallax
          products={historicalImages}
          headerContent={{
            badge: "VNR202 - Nhóm 3 - Haft_2 GD1815",
            mainTitle:
              "Sự Lãnh đạo Độc lập, Sáng tạo của Đảng Cộng sản Việt Nam",
            subtitle:
              "Trong Kháng chiến Chống Mỹ và Hoàn thành Thống nhất Đất nước",
            clo2: "Phân tích sự lãnh đạo của Đảng trong kháng chiến chống Mỹ",
            clo4: "Củng cố niềm tin vào sự lãnh đạo của Đảng",
          }}
        />
      </div>

      {/* Start Exploring Button - After scrolling through images */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-48 sm:pt-56 lg:pt-64 pb-12 sm:pb-16 text-center bg-[var(--museum-cream)]">
        <div className="max-w-7xl mx-auto">
          {!showOptions ? (
            <Button
              type="primary"
              size="large"
              onClick={() => setShowOptions(true)}
              className="bg-[var(--lacquer-red)] hover:bg-[var(--lacquer-red-light)] border-none text-white font-bold text-base sm:text-lg lg:text-xl px-8 sm:px-12 py-4 sm:py-6 h-auto rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2 sm:gap-3">
                <StarOutlined className="text-xl sm:text-2xl" />
                <span>Bắt đầu khám phá</span>
                <StarOutlined className="text-xl sm:text-2xl" />
              </span>
            </Button>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fadeIn">
              {navigationCards.map((card, index) => {
                const IconComponent = iconMap[card.icon];
                // Check if it's an external link (starts with http)
                const isExternalLink = card.link.startsWith("http");

                return (
                  <Link
                    key={index}
                    href={card.link}
                    target={isExternalLink ? "_blank" : undefined}
                    rel={isExternalLink ? "noopener noreferrer" : undefined}
                  >
                    <div
                      className="nav-card group relative overflow-hidden rounded-lg p-6 sm:p-8 cursor-pointer transition-all duration-300 h-full min-h-[200px] sm:min-h-[240px]"
                      style={{
                        background: `linear-gradient(135deg, var(--${card.color}) 0%, var(--${card.color}-light) 100%)`,
                        border: "3px solid var(--lacquer-gold)",
                      }}
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {IconComponent && <IconComponent />}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white text-with-shadow">
                          {card.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm flex-grow">
                          {card.description}
                        </p>

                        {/* Arrow indicator */}
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white text-xl sm:text-2xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                          →
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-[var(--lacquer-gold)] opacity-20 transform rotate-45 translate-x-8 sm:translate-x-10 -translate-y-8 sm:-translate-y-10"></div>

                      {/* Gold accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--lacquer-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section with Historical Context */}
      <div className="relative z-10 bg-[var(--museum-beige)] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base sm:text-lg text-[var(--museum-dark-brown)] max-w-4xl mx-auto leading-relaxed">
            Từ Hiệp định Giơnevơ 1954 đến ngày Giải phóng hoàn toàn miền Nam,
            thống nhất đất nước 30/4/1975, dưới sự lãnh đạo sáng suốt của Đảng
            Cộng sản Việt Nam, nhân dân ta đã vượt qua mọi thử thách, đánh bại
            kẻ thù hùng mạnh nhất hành tinh, góp phần vào sự nghiệp đấu tranh
            giải phóng dân tộc trên toàn thế giới.
          </p>
        </div>
      </div>
    </section>
  );
}
