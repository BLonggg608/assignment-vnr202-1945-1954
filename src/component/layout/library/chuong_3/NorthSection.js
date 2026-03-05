"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { Card, Tag, Typography } from "antd";
import "./NorthSection.css"; // Check CSS file

const { Title, Text } = Typography;

export default function NorthSection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 3);
  const section31 = chapter?.sections.find((s) => s.section_id === "3.1");
  const section32 = chapter?.sections.find((s) => s.section_id === "3.2");
  const section33 = chapter?.sections.find((s) => s.section_id === "3.3");

  return (
    <div
      className="north-section"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}
    >
      {/* 3.1 Đại hội Đảng II */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div
            className="section-header-block"
            style={{ marginBottom: "1rem" }}
          >
            <h3 className="section-title">3.1 {section31?.title}</h3>
            <Tag color="red">Tháng 2/1951</Tag>
          </div>
        </ScrollReveal>

        <Card
          title="Quyết nghị Đại hội"
          variant="borderless"
          style={{ marginBottom: "2rem" }}
        >
          <ul>
            {section31?.content?.decisions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>Lãnh đạo:</strong> {section31?.content?.leadership}
          </p>
        </Card>
      </div>

      {/* 3.2 Củng cố Hậu phương */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div
            className="section-header-block"
            style={{ marginBottom: "1rem" }}
          >
            <h3 className="section-title">3.2 {section32?.title}</h3>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <Card style={{ flex: 1, minWidth: "300px" }} title="Chủ trương">
            <p>{section32?.content?.policy}</p>
          </Card>
          <Card style={{ flex: 1, minWidth: "300px" }} title="Mục đích">
            <p>{section32?.content?.purpose}</p>
          </Card>
        </div>
      </div>

      {/* 3.3 Kế hoạch Nava */}
      <div className="section-block" style={{ marginTop: "3rem" }}>
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div
            className="section-header-block"
            style={{ marginBottom: "1rem" }}
          >
            <h3 className="section-title">3.3 {section33?.title}</h3>
          </div>
        </ScrollReveal>

        <Card>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div>
              <h4 style={{ color: "#d32f2f" }}>Kế hoạch Nava</h4>
              <p>
                <strong>Nguồn gốc:</strong>{" "}
                {section33?.content?.nava_plan?.origin}
              </p>
              <p>
                <strong>Mục tiêu:</strong> {section33?.content?.nava_plan?.goal}
              </p>
            </div>
            <div>
              <h4 style={{ color: "#1976d2" }}>Chủ trương của ta</h4>
              <p>{section33?.content?.our_strategy}</p>
              <p>
                <strong>Kết quả:</strong> {section33?.content?.result}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
