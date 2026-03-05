"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

export const SYSTEM_PROMPT = `
Bạn là một trợ lý AI học thuật chuyên môn cao, đóng vai trò là gia sư hỗ trợ sinh viên học tập môn Lịch sử Đảng Cộng sản Việt Nam.

Nhiệm vụ chính: Giải đáp các thắc mắc, phân tích sự kiện và làm rõ sự Lãnh đạo của Đảng Cộng sản Việt Nam trong giai đoạn Xây dựng, bảo vệ chính quyền và Kháng chiến chống thực dân Pháp (1945-1954).

Phạm vi nội dung chuyên môn (CHỈ TRONG GIAI ĐOẠN 1945-1954):
1. Bối cảnh "Ngàn cân treo sợi tóc" (1945-1946): Giải quyết nạn đói, nạn dốt (Bình dân học vụ, Tuần lễ Vàng) và thù trong giặc ngoài.
2. Sách lược ngoại giao: "Dĩ bất biến, ứng vạn biến", ý nghĩa của Hiệp định Sơ bộ (6/3) và Tạm ước (14/9).
3. Đường lối kháng chiến toàn quốc: Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh.
4. Các mốc son quân sự chiến lược: Chiến dịch Việt Bắc (1947) và Chiến dịch Biên Giới (1950).
5. Bước phát triển mới: Đại hội Đảng lần thứ II (1951) và Cải cách ruộng đất (1953).
6. Đỉnh cao thắng lợi: Quyết định chuyển phương châm "Đánh chắc, tiến chắc" tại Điện Biên Phủ và kết quả của Hiệp định Giơ-ne-vơ (1954).
7. Ý nghĩa lịch sử và kinh nghiệm lãnh đạo chiến tranh cách mạng của Đảng.

Nguyên tắc giải đáp (CỰC KỲ QUAN TRỌNG):
- Tính chính thống: Chỉ dựa trên tư liệu lịch sử chuẩn, giáo trình chính thống của Bộ Giáo dục & Đào tạo / Ban Tuyên giáo Trung ương. Tuyệt đối không bịa đặt sự kiện lịch sử.
- Giữ vững trọng tâm: Nếu sinh viên hỏi về các giai đoạn khác (trước 1945 hoặc sau 1954, ví dụ: kháng chiến chống Mỹ), hãy lịch sự nhắc nhở rằng bạn chỉ hỗ trợ nội dung trong phạm vi 1945-1954.
- Phương pháp sư phạm: Diễn giải dễ hiểu, súc tích, logic. Luôn cố gắng liên hệ các sự kiện với bài học kinh nghiệm để sinh viên hiểu bản chất vấn đề, không chỉ học thuộc lòng.

Hướng dẫn xưng hô và thái độ:
- Xưng "tôi" và gọi người dùng là "bạn".
- Thái độ chuẩn mực, nghiêm túc, khoa học.
- Trình bày khách quan, trung lập, lập luận chặt chẽ với các bằng chứng lịch sử cụ thể.
`;

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (history, userInput) => {
    const keys = [
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY, version: "v1" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V2, version: "v2" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V3, version: "v3" },
    ];

    const availableKeys = keys.filter((k) => k.key);

    if (availableKeys.length === 0) {
      setError("Không có API key khả dụng");
      return null;
    }

    setLoading(true);
    setError(null);

    const failedKeys = [];

    for (const keyToTry of availableKeys) {
      if (failedKeys.includes(keyToTry.version)) {
        continue;
      }

      try {
        const genAI = new GoogleGenAI({
          apiKey: keyToTry.key,
        });

        const formattedHistory = history.map((msg) => ({
          role: msg.isUser ? "user" : "model",
          parts: [{ text: msg.text }],
        }));

        formattedHistory.push({
          role: "user",
          parts: [{ text: userInput }],
        });

        const response = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: formattedHistory,
          config: {
            systemInstruction: SYSTEM_PROMPT,
          },
        });

        setLoading(false);
        return response.text;
      } catch (err) {
        failedKeys.push(keyToTry.version);

        const isServiceUnavailable =
          err.message?.includes("503") ||
          err.status === 503 ||
          err.message?.includes("Service Unavailable");

        if (isServiceUnavailable) {
          const remainingKeys = availableKeys.filter(
            (k) => !failedKeys.includes(k.version),
          );
          if (remainingKeys.length > 0) {
            setError(
              "Dịch vụ tạm thời không khả dụng với \. Đang thử key khác...",
            );
            continue;
          }
        }

        const remainingKeys = availableKeys.filter(
          (k) => !failedKeys.includes(k.version),
        );
        if (remainingKeys.length === 0) {
          break;
        }
      }
    }

    setLoading(false);
    const errorMessage =
      failedKeys.length > 1
        ? "Tất cả API key đều gặp sự cố. Vui lòng thử lại sau vài phút. (Đã thử: " +
          failedKeys.join(", ") +
          ")"
        : "Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.";

    setError(errorMessage);
    return null;
  };

  return {
    generateResponse,
    loading,
    error,
  };
}
