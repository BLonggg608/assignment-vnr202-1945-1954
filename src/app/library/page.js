"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import FoundationSection from "@/component/layout/library/chuong_1/FoundationSection";
import StrategySection from "@/component/layout/library/chuong_2/StrategySection";
import NorthSection from "@/component/layout/library/chuong_3/NorthSection";
import SouthSection from "@/component/layout/library/chuong_4/SouthSection";
import VictorySection from "@/component/layout/library/chuong_5/VictorySection";
import MuseumFooter from "@/component/layout/library/footer/MuseumFooter";
import MuseumHeader from "@/component/layout/library/header/MuseumHeader";
import MuseumHero from "@/component/layout/library/hero/MuseumHero";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useEffect, useState } from "react";
import "./page.css";

const { Content } = Layout;

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeSection]);

  const chapters = [
    { key: "hero", title: "Trang chủ", isHero: true },
    {
      key: "foundation",
      title: "I. Xây dựng và bảo vệ chính quyền",
      years: "1945 – 1946",
    },
    {
      key: "strategy",
      title: "II. Phá vòng vây, Toàn quốc kháng chiến",
      years: "1946 – 1950",
      subtitle: "Bùng nổ kháng chiến và các chiến dịch lớn",
    },
    {
      key: "north",
      title: "III. Đại hội II và phát triển mới",
      years: "1951 – 1953",
      subtitle: "Đảng ra hoạt động công khai",
    },
    {
      key: "south",
      title: "IV. Điện Biên Phủ & Giơ-ne-vơ",
      years: "1954",
      subtitle: "Chiến thắng lịch sử",
    },
    {
      key: "victory",
      title: "V. Ý nghĩa lịch sử",
      years: "1945 – 1954",
      subtitle: "Bài học kinh nghiệm",
    },
    { key: "footer", title: "Thông tin", isFooter: true },
  ];

  const currentIndex = chapters.findIndex((ch) => ch.key === activeSection);
  const safeCurrentIndex = currentIndex >= 0 ? currentIndex : 0;

  const handleNextChapter = () => {
    const nextIndex = (safeCurrentIndex + 1) % chapters.length;
    setActiveSection(chapters[nextIndex].key);
  };

  const handlePreviousChapter = () => {
    const prevIndex =
      (safeCurrentIndex - 1 + chapters.length) % chapters.length;
    setActiveSection(chapters[prevIndex].key);
  };

  const renderCurrentChapter = () => {
    const currentChapter = chapters[safeCurrentIndex];

    if (!currentChapter) {
      return <MuseumHero />;
    }

    if (currentChapter.isHero) {
      return <MuseumHero />;
    }

    if (currentChapter.isFooter) {
      return <MuseumFooter />;
    }

    return (
      <section
        id={currentChapter.key}
        className={`museum-section ${currentChapter.key}-section magazine-section bg-${currentChapter.key}`}
      >
        <ScrollReveal variant="fadeUp" duration={0.8}>
          <div className="section-header">
            <div className="section-roman">{currentChapter.title}</div>
            <div className="section-years">{currentChapter.years}</div>
            {currentChapter.subtitle && (
              <div className="section-subtitle">{currentChapter.subtitle}</div>
            )}
          </div>
        </ScrollReveal>

        {activeSection === "foundation" && <FoundationSection />}
        {activeSection === "strategy" && <StrategySection />}
        {activeSection === "north" && <NorthSection />}
        {activeSection === "south" && <SouthSection />}
        {activeSection === "victory" && <VictorySection />}
      </section>
    );
  };

  return (
    <Layout className="museum-layout">
      <MuseumHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Content className="museum-content museum-article">
        <div className="chapter-navigation-buttons">
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<ArrowLeftOutlined style={{ fontSize: "24px" }} />}
            onClick={handlePreviousChapter}
            className="nav-btn-circle nav-btn-prev"
            style={{
              width: "60px",
              height: "60px",
              background: "var(--lacquer-red)",
              borderColor: "var(--lacquer-gold)",
              border: "3px solid var(--lacquer-gold)",
              boxShadow: "0 4px 12px rgba(139, 26, 26, 0.4)",
            }}
            title="Quay lại"
          />

          <div className="chapter-indicator">
            {chapters[safeCurrentIndex].isHero
              ? "Home"
              : chapters[safeCurrentIndex].isFooter
                ? "Info"
                : `${safeCurrentIndex}/5`}
          </div>

          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<ArrowRightOutlined style={{ fontSize: "24px" }} />}
            onClick={handleNextChapter}
            className="nav-btn-circle nav-btn-next"
            style={{
              width: "60px",
              height: "60px",
              background: "var(--lacquer-red)",
              borderColor: "var(--lacquer-gold)",
              border: "3px solid var(--lacquer-gold)",
              boxShadow: "0 4px 12px rgba(139, 26, 26, 0.4)",
            }}
            title="Chuyển sang"
          />
        </div>

        {renderCurrentChapter()}
      </Content>
    </Layout>
  );
}
