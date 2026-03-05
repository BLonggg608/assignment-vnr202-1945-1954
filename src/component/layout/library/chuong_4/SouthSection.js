"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { Typography, Row, Col, Card, Statistic, Timeline } from "antd";
import {
  TrophyOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import "./SouthSection.css"; // Ensure CSS exists

const { Title, Paragraph } = Typography;

export default function SouthSection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 4);
  const section41 = chapter?.sections.find((s) => s.section_id === "4.1");
  const section42 = chapter?.sections.find((s) => s.section_id === "4.2");

  return (
    <div className="south-section" style={{ padding: "2rem" }}>
      {/* 4.1 Điện Biên Phủ */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="section-header-top">
            <Title level={2} style={{ color: "#b71c1c", textAlign: "center" }}>
              Đỉnh cao Chiến thắng Điện Biên Phủ
            </Title>
            <Title
              level={4}
              style={{ textAlign: "center", fontWeight: "normal" }}
            >
              Tháng 3 - Tháng 5/1954
            </Title>
          </div>
        </ScrollReveal>

        <Row gutter={[24, 24]} style={{ marginTop: "2rem" }}>
          <Col xs={24} md={12}>
            <Card
              title="Pháo đài bất khả xâm phạm"
              bordered={false}
              style={{ height: "100%" }}
            >
              <Paragraph>{section41?.content?.position}</Paragraph>
              <Paragraph type="danger" strong>
                Thay đổi phương châm: {section41?.content?.tactic_change}
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Thời gian"
                    value={56}
                    suffix=" ngày đêm"
                    prefix={<ClockCircleOutlined />}
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Địch bị tiêu diệt/bắt"
                    value={16200}
                    prefix={<TeamOutlined />}
                    valueStyle={{ color: "#cf1322" }}
                  />
                </Card>
              </Col>
              <Col span={24}>
                <Card style={{ background: "#fff1f0", borderColor: "#ffa39e" }}>
                  <Statistic
                    title="Kết quả"
                    value="Chiến thắng vang dội"
                    prefix={<TrophyOutlined />}
                    valueStyle={{ color: "#a8071a" }}
                  />
                  <p>{section41?.content?.significance}</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* 4.2 Geneva */}
      <div className="section-block" style={{ marginTop: "4rem" }}>
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <Title
            level={3}
            style={{ borderLeft: "5px solid #1890ff", paddingLeft: "1rem" }}
          >
            {section42?.title}
          </Title>
        </ScrollReveal>

        <Card
          title="Nội dung hiệp định (21/7/1954)"
          style={{ marginTop: "1rem" }}
        >
          <Timeline>
            {section42?.content?.terms?.map((term, i) => (
              <Timeline.Item key={i} color="blue">
                {term}
              </Timeline.Item>
            ))}
          </Timeline>
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "#f0f5ff",
              borderRadius: "4px",
            }}
          >
            <strong>Ý nghĩa:</strong> {section42?.content?.meaning}
          </div>
        </Card>
      </div>
    </div>
  );
}
