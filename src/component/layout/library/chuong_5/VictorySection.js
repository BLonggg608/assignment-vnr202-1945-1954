"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { Typography, Row, Col, Card } from "antd";
import { CheckCircleOutlined, StarOutlined } from "@ant-design/icons";
import "./VictorySection.css"; // Ensure CSS exists

const { Title, Paragraph } = Typography;

export default function VictorySection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 5);
  const section51 = chapter?.sections.find((s) => s.section_id === "5.1");
  const section52 = chapter?.sections.find((s) => s.section_id === "5.2");

  return (
    <div
      className="victory-section"
      style={{ padding: "3rem 2rem", background: "#fafafa" }}
    >
      {/* 5.1 Ý nghĩa lịch sử */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            5. {chapter?.title}
          </Title>
        </ScrollReveal>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <StarOutlined /> Ý nghĩa Dân tộc
                </>
              }
              hoverable
              style={{ height: "100%", borderColor: "#f1c40f" }}
            >
              <Paragraph style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                {section51?.content?.national}
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <StarOutlined /> Ý nghĩa Quốc tế
                </>
              }
              hoverable
              style={{ height: "100%", borderColor: "#3498db" }}
            >
              <Paragraph style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                {section51?.content?.international}
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* 5.2 Bài học kinh nghiệm */}
      <div className="section-block" style={{ marginTop: "4rem" }}>
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <Title
            level={3}
            style={{
              borderBottom: "2px solid #52c41a",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            Bài học Kinh nghiệm
          </Title>
        </ScrollReveal>

        <div style={{ marginTop: "2rem" }}>
          <Row
            gutter={[16, 16]}
            style={{ display: "flex", alignItems: "stretch" }}
          >
            {section52?.content?.lessons?.map((lesson, idx) => (
              <Col xs={24} sm={12} key={idx} style={{ display: "flex" }}>
                <Card
                  size="small"
                  style={{
                    borderLeft: "4px solid #52c41a",
                    width: "100%",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "1rem", height: "100%" } }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircleOutlined
                      style={{
                        color: "#52c41a",
                        fontSize: "1.2rem",
                        marginTop: "0.2rem",
                      }}
                    />
                    <span style={{ fontSize: "1rem" }}>{lesson}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
