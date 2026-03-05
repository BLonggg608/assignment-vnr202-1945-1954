"use client";

import contentData from "@/content/contentData";
import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import "./MuseumFooter.css";

const { Footer } = Layout;

export default function MuseumFooter() {
  const { title, subtitle, period, clos } = contentData.document_metadata;
  const learningObjectives = contentData.learning_objectives;

  return (
    <Footer className="museum-footer">
      <div className="footer-content">
        <div className="footer-quote-section">
          <div className="quote-ornament">❋</div>
          <div className="footer-quote">
            <p className="quote-main">"Không có gì quý hơn độc lập, tự do"</p>
            <p className="quote-author">— Chủ tịch Hồ Chí Minh</p>
          </div>
          <div className="quote-ornament">❋</div>
        </div>

        <div className="footer-divider" />

        <Row gutter={[48, 32]} className="footer-info">
          <Col xs={24} md={10}>
            <div className="footer-section">
              <h4 className="footer-title">
                <StarOutlined className="title-icon" />
                Đề tài ({period})
              </h4>
              <p
                className="footer-text"
                style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                {title}
              </p>
              <p className="footer-text" style={{ fontStyle: "italic" }}>
                {subtitle}
              </p>
            </div>
          </Col>

          <Col xs={24} md={14}>
            <div className="footer-section">
              <h4 className="footer-title">
                <HeartOutlined className="title-icon" />
                Mục tiêu Học tập (Learning Objectives)
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {learningObjectives.map((obj, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "0.5rem",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    {/* <strong style={{ minWidth: "50px" }}>{obj.code}:</strong> */}
                    {/* <span>{obj.vi}</span> */}
                    <p
                      className="footer-text"
                      style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                    >
                      {obj.vi}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            borderTop: "1px solid #eee",
            paddingTop: "1rem",
            color: "#888",
          }}
        >
          © 2026 Nhóm 3 - VNR202. Lịch sử Đảng Cộng sản Việt Nam (1945-1954).
        </div>
      </div>
    </Footer>
  );
}
