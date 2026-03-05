"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import ARImage from "@/component/common/ARImage";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./FoundationSection.css";

export default function FoundationSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter1 = contentData.chapters.find((ch) => ch.chapter_number === 1);
  const section11 = chapter1?.sections[0];
  const section12 = chapter1?.sections[1];
  const section13 = chapter1?.sections[2];

  return (
    <div className="foundation-section">
      {/* Section 1.1: Bối cảnh Lịch sử */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.1</div>
            <h3 className="subsection-title">{section11?.title}</h3>
          </div>
        </ScrollReveal>

        {/* Khó khăn: Ngoại xâm & Kinh tế Xã hội */}
        <ScrollReveal variant="slideLeft" delay={0.2} duration={0.7}>
          <div className="context-section international">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Khó khăn & Thách thức
            </h4>

            <div className="split-content">
              <div className="text-content">
                <div className="challenges-block">
                  <strong className="block-label challenges">
                    Giặc Ngoại xâm & Nội phản:
                  </strong>
                  <ul className="challenges-list">
                    {section11?.content?.difficulties?.foreign_invaders?.map(
                      (item, i) => (
                        <li key={i} className="challenge-item">
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="challenges-block" style={{ marginTop: "1rem" }}>
                  <strong className="block-label challenges">
                    Kinh tế - Xã hội:
                  </strong>
                  <ul className="challenges-list">
                    {section11?.content?.difficulties?.socio_economic?.map(
                      (item, i) => (
                        <li key={i} className="challenge-item">
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              <div className="image-content">
                <ARImage
                  src="https://upload.wikimedia.org/wikipedia/commons/2/23/Nan_doi_nam_1945.jpg"
                  alt="Nạn đói năm 1945"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                  caption="Nạn đói năm Ất Dậu 1945 - Thảm cảnh đau lòng"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Thuận lợi */}
        <ScrollReveal variant="slideRight" delay={0.2} duration={0.7}>
          <div className="context-section domestic">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Thuận lợi
            </h4>

            <div className="split-content reverse">
              <div className="text-content">
                <div className="favorable-block">
                  <strong className="block-label favorable">
                    Tinh thần dân tộc:
                  </strong>
                  <p className="context-text">
                    {section11?.content?.advantages?.spirit}
                  </p>
                </div>
                <div className="favorable-block">
                  <strong className="block-label favorable">Quốc tế:</strong>
                  <p className="context-text">
                    {section11?.content?.advantages?.international}
                  </p>
                </div>
              </div>
              <div className="image-content">
                <Image
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-08/19-8-mit-tinh-o-ha-noi1.jpg"
                  alt="Mít tinh Cách mạng tháng Tám"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Tinh thần Cách mạng tháng Tám 1945 sục sôi
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section 1.2: Các biện pháp giải quyết */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.2</div>
            <h3 className="subsection-title">{section12?.title}</h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="dual-strategy-container">
            <h4 className="strategy-main-title">
              Chỉ thị "Kháng chiến kiến quốc"
            </h4>
            <div className="strategies-grid">
              {/* Chỉ đạo Chiến lược */}
              <div className="strategy-card south">
                <div className="card-header">
                  <h5 className="card-title">Về Chỉ đạo Chiến lược</h5>
                </div>
                <div className="card-body">
                  <ul className="challenges-list">
                    {section12?.content?.strategic_direction?.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ paddingBottom: "20px" }} />
              </div>

              {/* Chính trị */}
              <div className="strategy-card north">
                <div className="card-header">
                  <h5 className="card-title">Về Chính trị</h5>
                </div>
                <div className="card-body">
                  <ul className="challenges-list">
                    {section12?.content?.political?.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ paddingBottom: "20px" }} />
              </div>

              {/* Kinh tế */}
              <div className="strategy-card south">
                <div className="card-header">
                  <h5 className="card-title">Về Kinh tế (Diệt giặc đói)</h5>
                </div>
                <div className="card-body">
                  <ul className="challenges-list">
                    {section12?.content?.economic?.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ paddingBottom: "20px" }} />
              </div>

              {/* Văn hóa */}
              <div
                className="strategy-card north"
                style={{ marginTop: "1rem" }}
              >
                <div className="card-header">
                  <h5 className="card-title">Về Văn hóa (Diệt giặc dốt)</h5>
                </div>
                <div className="card-body">
                  <ul className="challenges-list">
                    {section12?.content?.cultural?.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ paddingBottom: "20px" }} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section 1.3: Ngoại giao (NEW) */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.3</div>
            <h3 className="subsection-title">{section13?.title}</h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="context-section international">
            <p
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                marginBottom: "2rem",
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#b71c1c",
              }}
            >
              "Dĩ bất biến, ứng vạn biến"
            </p>
            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Giai đoạn</th>
                    <th>Sách lược</th>
                    <th>Hành động cụ thể</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ whiteSpace: "nowrap" }}>
                      {section13?.content?.phase_1?.period}
                    </td>
                    <td style={{ fontWeight: "bold", color: "#d32f2f" }}>
                      {section13?.content?.phase_1?.strategy}
                    </td>
                    <td>
                      <ul
                        style={{ paddingLeft: "1rem", listStyleType: "disc" }}
                      >
                        {section13?.content?.phase_1?.actions?.map((act, i) => (
                          <li key={i} style={{ marginBottom: "5px" }}>
                            {act}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ whiteSpace: "nowrap" }}>
                      {section13?.content?.phase_2?.period}
                    </td>
                    <td style={{ fontWeight: "bold", color: "#1976d2" }}>
                      {section13?.content?.phase_2?.strategy}
                    </td>
                    <td>
                      <ul
                        style={{ paddingLeft: "1rem", listStyleType: "disc" }}
                      >
                        {section13?.content?.phase_2?.actions?.map((act, i) => (
                          <li key={i} style={{ marginBottom: "5px" }}>
                            {act}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Image
                src="https://image.vov.vn/w500/uploaded/8qj40c7y0l1r8y84iu5a/2021_03_06/h1_brmu.jpg"
                alt="Chủ tịch Hồ Chí Minh ký Hiệp định Sơ bộ 6/3/1946"
                preview={true}
                style={{ maxWidth: "600px", borderRadius: "8px" }}
              />
              <p className="image-caption">
                Chủ tịch Hồ Chí Minh ký Hiệp định Sơ bộ 6/3/1946
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Đóng
          </Button>,
        ]}
        width={700}
      >
        {modalContent.content}
      </Modal>
    </div>
  );
}
