"use client";

import { ArrowLeftOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Skeleton, Spin, Typography } from "antd";
import { MessageCircle, Plus, SendHorizontal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useAI } from "../../hooks/gemini-ai/use-ai";
import "./giaidap.css";

const { Header, Content } = Layout;
const { Title } = Typography;

const suggestedPrompts = [
  {
    title: "Hiệp định Giơnevơ và Bối cảnh 1954",
    text: "Phân tích tác động của Hiệp định Giơnevơ (7/1954) đến việc hình thành đường lối chiến lược của Đảng",
  },
  {
    title: "Đại hội III và Hai Nhiệm vụ Chiến lược",
    text: "Giải thích tính độc lập, tự chủ của Đảng khi đề ra đường lối hai nhiệm vụ chiến lược tại Đại hội III (9/1960)",
  },
  {
    title: "Nghị quyết 15 và Con đường Bạo lực Cách mạng",
    text: "Phân tích tầm quan trọng của Nghị quyết 15 (1/1959) trong việc chuyển hướng cách mạng miền Nam",
  },
  {
    title: "Phong trào Đồng Khởi 1960",
    text: "Đánh giá ý nghĩa lịch sử của phong trào Đồng Khởi bắt đầu từ Bến Tre và lan rộng ra cả nước",
  },
  {
    title: "Miền Bắc XHCN - Hậu phương Chiến lược",
    text: "Phân tích vai trò 'quyết định nhất' của miền Bắc trong việc xây dựng CNXH và hỗ trợ miền Nam",
  },
  {
    title: "Đường Hồ Chí Minh và Chiến lược Vận chuyển",
    text: "Giải thích tầm quan trọng của Đường mòn Hồ Chí Minh trong việc chi viện cho chiến trường miền Nam",
  },
  {
    title: "Chiến thắng Chiến tranh Cục bộ và Việt Nam hóa",
    text: "Phân tích sự lãnh đạo sáng tạo của Đảng trong việc đánh bại chiến lược 'Chiến tranh Cục bộ' và 'Việt Nam hóa'",
  },
  {
    title: "Mùa Xuân 1975 và Thống nhất Đất nước",
    text: "Đánh giá ý nghĩa lịch sử của chiến dịch Hồ Chí Minh và việc hoàn thành mục tiêu thống nhất đất nước",
  },
];

const suggestionTags = [
  "Hiệp định Giơnevơ 1954",
  "Đại hội III và Hai nhiệm vụ",
  "Nghị quyết 15 - Bạo lực cách mạng",
  "Phong trào Đồng Khởi 1960",
  "Miền Bắc - Hậu phương chiến lược",
  "Đường mòn Hồ Chí Minh",
  "Chiến tranh cục bộ",
  "Việt Nam hóa",
  "Mùa Xuân 1975",
  "Thống nhất đất nước",
];

export default function TestAI() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessions, setSessions] = useState([
    { id: 1, title: "Cuộc trò chuyện mới", active: true },
  ]);
  const { generateResponse, loading, error } = useAI();

  // Function to clean and format AI response
  const formatResponse = (text) => {
    if (!text) return text;

    // Clean up the response format
    return (
      text
        // Fix bold formatting from ** to proper markdown
        .replace(/\*\*(.*?)\*\*/g, "**$1**")
        // Fix list items
        .replace(/^\* /gm, "- ")
        // Add proper line breaks before headers
        .replace(/([.!?])\s*(\*\*[^*]+\*\*)/g, "$1\n\n$2")
        // Fix line breaks
        .replace(/\n\s*\n/g, "\n\n")
        .trim()
    );
  };

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = { text: text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Add loading message
    const loadingMessage = { text: "", isUser: false, isLoading: true };
    setMessages((prev) => [...prev, loadingMessage]);

    // Get AI response
    const response = await generateResponse(text);

    // Remove loading message and add actual response
    setMessages((prev) => {
      const newMessages = [...prev];
      newMessages.pop(); // Remove loading message
      if (response) {
        const formattedResponse = formatResponse(response);
        const aiMessage = {
          text: formattedResponse,
          isUser: false,
          isLoading: false,
        };
        newMessages.push(aiMessage);
      } else {
        // Add error message if no response
        const errorMessage = {
          text: "Xin lỗi, đã xảy ra lỗi khi xử lý câu hỏi của bạn. Vui lòng thử lại sau.",
          isUser: false,
          isLoading: false,
        };
        newMessages.push(errorMessage);
      }
      return newMessages;
    });
  };

  const handlePromptClick = (prompt) => {
    handleSend(prompt.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (loading || !input.trim()) return;
      handleSend();
    }
  };

  const createNewSession = () => {
    const newSession = {
      id: sessions.length + 1,
      title: `Cuộc trò chuyện ${sessions.length + 1}`,
      active: false,
    };
    setSessions((prev) => [
      newSession,
      ...prev.map((s) => ({ ...s, active: false })),
    ]);
    setMessages([]);
    setSidebarOpen(false);
  };

  const switchSession = (sessionId) => {
    setSessions((prev) =>
      prev.map((s) => ({ ...s, active: s.id === sessionId }))
    );
    // In a real app, you'd load messages for this session
    setMessages([]);
    setSidebarOpen(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header với thiết kế giống trang chính */}
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "#8b1a1a",
          padding: "0 16px",
          height: "56px",
          lineHeight: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Nút quay về */}
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push("/")}
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                height: "40px",
                padding: "0 8px",
              }}
              title="Quay về trang chính"
            />

            {/* Lá cờ Việt Nam */}
            <div
              style={{
                width: 40,
                height: 26,
                background: "#d43731",
                position: "relative",
                borderRadius: 3,
                border: "1px solid #b91c1c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#f9f350"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
              >
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
            </div>

            <Title
              level={5}
              style={{
                color: "white",
                margin: 0,
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              <RobotOutlined style={{ marginRight: 8 }} />
              Trợ lý AI - Lịch sử Đảng Cộng sản Việt Nam
            </Title>
          </div>
        </div>
      </Header>

      <Content style={{ marginTop: 56 }}>
        <div className="app-container">
          {/* Mobile Menu Toggle - Only show when sidebar is closed */}
          {/* {!sidebarOpen && (
            <Button
              className="mobile-menu-toggle"
              icon={<Menu size={20} />}
              onClick={() => setSidebarOpen(true)}
              style={{
                position: "fixed",
                top: "70px",
                left: "1rem",
                zIndex: 1001,
                background: "#a84334",
                borderColor: "#f9f350",
                color: "white",
                borderRadius: "12px",
                width: "48px",
                height: "48px",
                border: "2px solid #f9f350",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          )} */}

          {/* Sidebar Overlay - Only show when sidebar is open */}
          {sidebarOpen && (
            <div
              className="sidebar-overlay open"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <h3>Lịch sử trò chuyện</h3>
              <Button
                className="sidebar-close-btn"
                icon={<X size={16} />}
                type="text"
                onClick={() => setSidebarOpen(false)}
              />
            </div>

            <Button
              className="new-session-btn"
              icon={<Plus size={16} />}
              onClick={createNewSession}
            >
              Cuộc trò chuyện mới
            </Button>

            <div className="session-list">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className={`session-item ${session.active ? "active" : ""}`}
                  onClick={() => switchSession(session.id)}
                >
                  <MessageCircle size={16} style={{ marginRight: "8px" }} />
                  {session.title}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className={`main-content ${sidebarOpen ? "with-sidebar" : ""}`}>
            <div className="chat-container">
              {messages.length === 0 ? (
                // Welcome Screen
                <div className="welcome-screen">
                  <div className="welcome-title">
                    Sự Lãnh đạo của Đảng Cộng sản Việt Nam (1954-1975)
                  </div>
                  <div className="welcome-subtitle">
                    Trợ lý AI chuyên về lịch sử Đảng trong cuộc kháng chiến
                    chống đế quốc Mỹ xâm lược. Hãy bắt đầu cuộc trò chuyện bằng
                    cách chọn một chủ đề dưới đây hoặc đặt câu hỏi của riêng
                    bạn.
                  </div>

                  <div className="suggested-prompts">
                    {suggestedPrompts.map((prompt, index) => (
                      <div
                        key={index}
                        className="prompt-card"
                        onClick={() => handlePromptClick(prompt)}
                      >
                        <div className="prompt-card-title">{prompt.title}</div>
                        <div className="prompt-card-text">{prompt.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Chat Messages
                <div className="chat-messages">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`message ${
                        message.isUser ? "user-message" : "ai-message"
                      }`}
                    >
                      <div className="message-avatar">
                        {message.isUser ? "ME" : <RobotOutlined />}
                      </div>
                      <div className="message-content">
                        {message.isUser ? (
                          message.text
                        ) : message.isLoading ? (
                          <div className="ai-loading-skeleton">
                            <Skeleton
                              active
                              paragraph={{
                                rows: 3,
                                width: ["100%", "90%", "60%"],
                              }}
                              title={false}
                            />
                            <div className="loading-text">
                              Đang phân tích và tìm kiếm thông tin lịch sử...
                            </div>
                          </div>
                        ) : (
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ children }) => (
                                <p
                                  style={{
                                    marginBottom: "0.5rem",
                                    lineHeight: "1.6",
                                  }}
                                >
                                  {children}
                                </p>
                              ),
                              strong: ({ children }) => (
                                <strong
                                  style={{
                                    color: "var(--lacquer-red)",
                                    fontWeight: "700",
                                  }}
                                >
                                  {children}
                                </strong>
                              ),
                              ul: ({ children }) => (
                                <ul
                                  style={{
                                    paddingLeft: "1.5rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {children}
                                </ul>
                              ),
                              ol: ({ children }) => (
                                <ol
                                  style={{
                                    paddingLeft: "1.5rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {children}
                                </ol>
                              ),
                              li: ({ children }) => (
                                <li
                                  style={{
                                    marginBottom: "0.25rem",
                                    listStyleType: "disc",
                                  }}
                                >
                                  {children}
                                </li>
                              ),
                              h1: ({ children }) => (
                                <h1
                                  style={{
                                    color: "var(--lacquer-red)",
                                    fontSize: "1.5rem",
                                    fontWeight: "800",
                                    marginBottom: "1rem",
                                    borderBottom:
                                      "2px solid var(--lacquer-gold)",
                                    paddingBottom: "0.5rem",
                                  }}
                                >
                                  {children}
                                </h1>
                              ),
                              h2: ({ children }) => (
                                <h2
                                  style={{
                                    color: "var(--lacquer-red)",
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    marginBottom: "0.75rem",
                                  }}
                                >
                                  {children}
                                </h2>
                              ),
                              h3: ({ children }) => (
                                <h3
                                  style={{
                                    color: "var(--lacquer-red-light)",
                                    fontSize: "1.1rem",
                                    fontWeight: "700",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {children}
                                </h3>
                              ),
                              code: ({ children }) => (
                                <code
                                  style={{
                                    background: "var(--museum-beige)",
                                    color: "var(--jade-green)",
                                    padding: "0.2rem 0.4rem",
                                    borderRadius: "4px",
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  {children}
                                </code>
                              ),
                              blockquote: ({ children }) => (
                                <blockquote
                                  style={{
                                    borderLeft: "4px solid var(--lacquer-red)",
                                    paddingLeft: "1rem",
                                    margin: "1rem 0",
                                    fontStyle: "italic",
                                    background: "rgba(212, 55, 49, 0.05)",
                                    borderRadius: "0 8px 8px 0",
                                    padding: "0.75rem 0 0.75rem 1rem",
                                  }}
                                >
                                  {children}
                                </blockquote>
                              ),
                            }}
                          >
                            {message.text}
                          </ReactMarkdown>
                        )}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="loading-container">
                      <Spin size="large" />
                    </div>
                  )}
                  {error && <div className="error-message">Lỗi: {error}</div>}
                </div>
              )}

              {/* Suggestion Tags - Only show after conversation started */}
              {messages.length > 0 && (
                <div className="suggestion-tags">
                  <div className="suggestion-tags-title">
                    💡 Gợi ý câu hỏi tiếp theo:
                  </div>
                  <div className="suggestion-tags-list">
                    {suggestionTags.map((tag, index) => (
                      <button
                        key={index}
                        className="suggestion-tag"
                        onClick={() => handleSend(tag)}
                        disabled={loading}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Container */}
              <div className="input-container">
                <div className="input-wrapper">
                  <Input.TextArea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập câu hỏi ở đây nhé 😍..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#333333",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <Button
                  type="primary"
                  icon={<SendHorizontal size={20} />}
                  onClick={() => handleSend()}
                  disabled={loading || !input.trim()}
                  className="send-button"
                  style={{
                    background: "var(--yellow-500)",
                    borderColor: "var(--yellow-500)",
                    color: "var(--red-800)",
                    fontWeight: "600",
                    width: "40px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
