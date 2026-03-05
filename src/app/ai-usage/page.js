"use client";

import {
  CheckCircleOutlined,
  CodeOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import "./page.css";

const { Content } = Layout;

export default function AIUsagePage() {
  return (
    <Layout className="museum-layout">
      <Content className="museum-content ai-report">
        <section className="section-header">
          <h1 className="section-title">BÁO CÁO SỬ DỤNG AI</h1>
          <div className="project-info">
            <p>Dự án: Lịch sử Đảng Cộng sản Việt Nam</p>
            <p>VNR202 - Nhóm 3 - Half_2 GD1815</p>
            {/* <p className="meta">Ngày: 01/11/2025</p> */}
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <SearchOutlined style={{ marginRight: "8px" }} />
            I. THÔNG TIN DỰ ÁN
          </h2>
          <div className="info-box">
            <p>
              <strong>Link sản phẩm:</strong>{" "}
              <a
                href="https://assignment-vnr202-1945-1954.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                assignment-vnr202-1945-1954.vercel.app
              </a>
            </p>
            <p>
              <strong>Công nghệ:</strong> Website xây dựng bằng Next.js
            </p>
            <p>
              <strong>Chủ đề:</strong> Lịch sử Đảng Cộng sản Việt Nam trong giai
              đoạn 1945 - 1954
            </p>
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <CodeOutlined style={{ marginRight: "8px" }} />
            II. CÁC CÔNG CỤ AI ĐÃ SỬ DỤNG
          </h2>

          <h3 className="section-subtitle">
            1. Nghiên cứu và Thu thập Thông tin
          </h3>
          <table className="tools-table">
            <thead>
              <tr>
                <th style={{ width: "80px", textAlign: "center" }}>Logo</th>
                <th style={{ width: "180px" }}>Công cụ AI</th>
                <th>Công việc hỗ trợ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tool-logo">
                  <img
                    src="https://freepnglogo.com/images/all_img/1728457808_Google_Gemini_logo_PNG.png"
                    alt="Gemini"
                    className="logo-img logo-gemini"
                  />
                </td>
                <td className="tool-name">Google Gemini</td>
                <td>
                  <tr>
                    <strong>Chatbox trên website:</strong> Trả lời câu hỏi người
                    dùng về lịch sử Đảng
                  </tr>
                  <tr>
                    <strong>Tổ chức tài liệu:</strong> Phân tích và tổng hợp
                    thông tin lịch sử từ giáo trình
                  </tr>
                </td>
              </tr>
              {/* <tr>
                <td className="tool-logo">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7woc0Rqy5tfi8MGhUVLLswXfrqay2oH9e36Wpq37QM6bsR5WJIWAO_cTw7aIz6quqphauxZ6LTZQNnYWtben5gvKf-NNbXwK3duJBpIam-JTuIoNDg6p4ujmrUPMbkhyphenhyphenAPLvhe09-SQ95pgBMbYyEwIw9IeY8BgqtCjORkPq5kz_K_fYYq1fSRsebixN1/w1200-h630-p-k-no-nu/NotebookLM-logo.jpg"
                    alt="NotebookLM"
                    className="logo-img logo-notebook"
                  />
                </td>
                <td className="tool-name">NotebookLM</td>
                <td>
                  <strong>Tổ chức tài liệu:</strong> Phân tích và tổng hợp thông
                  tin lịch sử từ giáo trình
                </td>
              </tr> */}
            </tbody>
          </table>

          <div className="divider" />

          <h3 className="section-subtitle">2. Xây dựng Website</h3>
          <table className="tools-table">
            <thead>
              <tr>
                <th style={{ width: "80px", textAlign: "center" }}>Logo</th>
                <th style={{ width: "180px" }}>Công cụ AI</th>
                <th>Công việc hỗ trợ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tool-logo">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/555/259/large_2x/github-logo-transparent-free-png.png"
                    alt="GitHub"
                    className="logo-img logo-github"
                  />
                </td>
                <td className="tool-name">GitHub Copilot</td>
                <td>
                  <strong>Trợ lý lập trình:</strong> Gợi ý và viết code website,
                  tối ưu hiệu suất
                </td>
              </tr>
              <tr>
                <td className="tool-logo">
                  <img
                    src="https://freepnglogo.com/images/all_img/1728457808_Google_Gemini_logo_PNG.png"
                    alt="Gemini"
                    className="logo-img logo-gemini"
                  />
                </td>
                <td className="tool-name">Google Gemini</td>
                <td>
                  <tr>
                    <strong>Tư vấn kỹ thuật:</strong> Thiết kế cấu trúc website và
                    giải quyết vấn đề
                  </tr>
                  <tr>
                    <strong>Nội dung & Giao diện:</strong> Viết mô tả và tạo ý
                    tưởng thiết kế
                  </tr>
                  <tr>
                    <strong>Nghiên cứu:</strong> Tìm hiểu công nghệ mới và so sánh
                    giải pháp
                  </tr>
                  <tr>
                    <strong>Ảnh:</strong> Tô màu hình ảnh trắng đen lịch sử cho website
                  </tr>
                </td>
              </tr>
              {/* <tr>
                <td className="tool-logo">
                  <img
                    src="https://pnggallery.com/wp-content/uploads/chatgpt-05.png"
                    alt="ChatGPT"
                    className="logo-img logo-chatgpt"
                  />
                </td>
                <td className="tool-name">ChatGPT-5</td>
                <td>
                  <strong>Nội dung & Giao diện:</strong> Viết mô tả và tạo ý
                  tưởng thiết kế
                </td>
              </tr> */}
              {/* <tr>
                <td className="tool-logo">
                  <img
                    src="https://static.cnbetacdn.com/article/2025/0224/dcab1db41d8216a.webp"
                    alt="Grok"
                    className="logo-img logo-grok"
                  />
                </td>
                <td className="tool-name">Grok-1</td>
                <td>
                  <strong>Nghiên cứu:</strong> Tìm hiểu công nghệ mới và so sánh
                  giải pháp
                </td>
              </tr> */}
            </tbody>
          </table>
          <div className="divider" />
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <TeamOutlined style={{ marginRight: "8px" }} />
            III. QUY TRÌNH LÀM VIỆC
          </h2>

          <div className="workflow-step">
            <h3 className="step-title">Bước 1: Nghiên cứu Tài liệu</h3>
            <p>
              Sử dụng <strong>Google Gemini</strong> để tổ chức và phân tích tài
              liệu lịch sử Đảng từ nhiều nguồn. Nhóm kiểm tra và xác minh độ
              chính xác của thông tin.
            </p>
          </div>

          <div className="workflow-step">
            <h3 className="step-title">Bước 2: Xây dựng Website</h3>
            <p>
              Nhóm làm việc với{" "}
              <strong>GitHub Copilot, Google Gemini</strong> để:
            </p>
            <ul className="simple-list">
              <li>Thiết kế giao diện website</li>
              <li>Viết code và tối ưu hiệu suất</li>
              <li>Tích hợp chatbox Gemini</li>
              <li>Tạo nội dung và mô tả</li>
              <li>Tô màu hình ảnh</li>
            </ul>
          </div>

          <div className="workflow-step">
            <h3 className="step-title">Bước 3: Kiểm tra và Hoàn thiện</h3>
            <p>
              <strong>Nhóm chịu trách nhiệm:</strong> Kiểm duyệt toàn bộ thông
              tin lịch sử, đánh giá chất lượng website, chỉnh sửa và hoàn thiện
              sản phẩm cuối cùng.
            </p>
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <CheckCircleOutlined style={{ marginRight: "8px" }} />
            IV. TRÁCH NHIỆM CỦA NHÓM
          </h2>
          <div className="responsibility-note">
            AI chỉ là công cụ hỗ trợ. Nhóm chịu trách nhiệm chính về chất lượng
            sản phẩm:
          </div>

          <table className="tools-table responsibilities">
            <thead>
              <tr>
                <th style={{ width: "200px" }}>Trách nhiệm</th>
                <th>Nội dung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Kiểm duyệt thông tin</strong>
                </td>
                <td>
                  Xác minh tính chính xác của mọi thông tin lịch sử do AI tạo ra
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Đánh giá chất lượng</strong>
                </td>
                <td>Kiểm tra giao diện, tính năng và trải nghiệm người dùng</td>
              </tr>
              <tr>
                <td>
                  <strong>Chỉnh sửa & Hoàn thiện</strong>
                </td>
                <td>
                  Bổ sung và sửa đổi những phần AI chưa đầy đủ hoặc chưa phù hợp
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Quyết định cuối cùng</strong>
                </td>
                <td>
                  Đưa ra quyết định về nội dung, thiết kế và công nghệ sử dụng
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">V. KẾT LUẬN</h2>

          <div className="conclusion-box positive">
            <h3 className="conclusion-title">Lợi ích khi sử dụng AI</h3>
            <ul className="simple-list">
              <li>
                <strong>Tăng tốc độ:</strong> Giảm 60-70% thời gian làm việc
              </li>
              <li>
                <strong>Chất lượng tốt hơn:</strong> Website được tối ưu và dễ
                sử dụng
              </li>
              <li>
                <strong>Học hỏi nhiều:</strong> Tiếp cận công nghệ mới nhanh
                chóng
              </li>
              <li>
                <strong>Chatbox thông minh:</strong> Người dùng có thể hỏi đáp
                về lịch sử
              </li>
            </ul>
          </div>

          <div className="conclusion-box limitation">
            <h3 className="conclusion-title">Hạn chế cần lưu ý</h3>
            <ul className="simple-list">
              <li>
                <strong>Cần kiểm tra:</strong> AI có thể tạo thông tin không
                chính xác
              </li>
              <li>
                <strong>Thiếu sáng tạo:</strong> Cần con người để tạo nét riêng
              </li>
              <li>
                <strong>Chưa thay thế được:</strong> Vẫn cần kiến thức chuyên
                môn để đánh giá
              </li>
            </ul>
          </div>

          <div className="final-statement">
            <p>
              <strong>AI là công cụ hỗ trợ tuyệt vời</strong> giúp nhóm làm việc
              hiệu quả hơn và tạo ra sản phẩm chất lượng. Tuy nhiên,{" "}
              <strong>AI không thể thay thế con người</strong>. Nhóm vẫn phải
              kiểm duyệt thông tin, đánh giá chất lượng và đưa ra quyết định
              cuối cùng về sản phẩm.
            </p>
          </div>
        </section>
      </Content>
    </Layout>
  );
}
