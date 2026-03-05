"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Timeline, Card, Tag } from "antd";
import { useState } from "react";
import "./StrategySection.css"; // Ensure this CSS file exists or create/update it

export default function StrategySection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 2);
  const section21 = chapter?.sections.find((s) => s.section_id === "2.1");
  const section22 = chapter?.sections.find((s) => s.section_id === "2.2");
  const section23 = chapter?.sections.find((s) => s.section_id === "2.3");

  return (
    <div className="strategy-section">
      {/* 2.1 Bùng nổ Toàn quốc kháng chiến */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.1</div>
            <h3 className="subsection-title">{section21?.title}</h3>
          </div>
        </ScrollReveal>

        <div className="content-container">
          <div className="event-highlight">
            <p>
              <strong>Nguyên nhân:</strong> {section21?.content?.cause}
            </p>
            <div
              className="major-event"
              style={{
                background: "#ffebee",
                padding: "1rem",
                borderLeft: "4px solid #d32f2f",
                margin: "1rem 0",
              }}
            >
              <h4 style={{ color: "#b71c1c", margin: 0 }}>
                {section21?.content?.event}
              </h4>
              <p style={{ margin: "0.5rem 0", fontStyle: "italic" }}>
                "{section21?.content?.hanoi_battle}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 Đường lối kháng chiến */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.2</div>
            <h3 className="subsection-title">{section22?.title}</h3>
          </div>
        </ScrollReveal>

        <div
          className="principles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {section22?.content?.principles?.map((p, i) => (
            <Card
              key={i}
              title={p.name}
              bordered={false}
              className="principle-card"
              headStyle={{ color: "#b71c1c", fontWeight: "bold" }}
              bodyStyle={{ background: "#fff8e1" }}
            >
              {p.desc}
            </Card>
          ))}
        </div>
        <p
          style={{
            marginTop: "1rem",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Nguồn: {section22?.content?.documents}
        </p>
      </div>

      {/* 2.3 Các mốc son quân sự */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.3</div>
            <h3 className="subsection-title">{section23?.title}</h3>
          </div>
        </ScrollReveal>

        <Timeline mode="alternate" style={{ marginTop: "2rem" }}>
          <Timeline.Item color="green" label="Thu Đông 1947">
            <Card title="Chiến dịch Việt Bắc" size="small">
              <p>
                <strong>Bối cảnh:</strong>{" "}
                {section23?.content?.viet_bac_1947?.context}
              </p>
              <p>
                <strong>Kết quả:</strong>{" "}
                {section23?.content?.viet_bac_1947?.result}
              </p>
            </Card>
          </Timeline.Item>
          <Timeline.Item color="red" label="Thu Đông 1950">
            <Card title="Chiến dịch Biên Giới" size="small">
              <p>
                <strong>Bối cảnh:</strong>{" "}
                {section23?.content?.bien_gioi_1950?.context}
              </p>
              <p>
                <strong>Hành động:</strong>{" "}
                {section23?.content?.bien_gioi_1950?.action}
              </p>
              <p>
                <strong>Kết quả:</strong>{" "}
                {section23?.content?.bien_gioi_1950?.result}
              </p>
            </Card>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
