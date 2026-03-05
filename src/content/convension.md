# UI Design Convention - Thư viện Lịch sử Đảng CSVN (1945-1954)

## 📋 Tổng quan Convention

Dự án sử dụng phong cách **Minimalist Vietnamese Heritage** với nguyên tắc **NO CARD** - nội dung được đặt trực tiếp lên background trang, tạo cảm giác như đọc tạp chí/thư viện truyền thống.

---

## 🎨 Màu sắc Chính (Global Colors)

### Palette Cơ bản từ `globals.css`

```css
/* Vietnamese Museum Vintage Colors */
--museum-cream: #f5f1e8; /* Background chính */
--museum-beige: #e8dcc8; /* Background phụ */
--museum-tan: #d4c4a8; /* Accent nhẹ */
--museum-brown: #8b6f47; /* Text phụ */

/* Lacquer Colors (Màu sơn mài truyền thống) */
--lacquer-red: #8b1a1a; /* Đỏ chính - header, title */
--lacquer-red-light: #a83838; /* Đỏ nhạt - hover */
--lacquer-gold: #d4af37; /* Vàng chính - accent */
--lacquer-gold-light: #e6c95c; /* Vàng nhạt - highlight */

/* Heritage Colors */
--silk-blue: #4a6fa5; /* Xanh lụa */
--jade-green: #5c7a6b; /* Xanh ngọc */
--ink-black: #2c1810; /* Đen mực */

Màu Pastel Bổ sung
/* Pastel backgrounds cho sections */
rgba(212, 165, 116, 0.05)      /* Vàng pastel */
rgba(255, 243, 224, 0.5)       /* Kem pastel */
rgba(139, 0, 0, 0.05)          /* Đỏ pastel */
rgba(245, 241, 232, 0.4)       /* Beige pastel */


🚫 Nguyên tắc NO CARD
✅ Được phép:
Text trực tiếp trên background section
border-left đơn giản (4px solid color)
Background trong suốt: rgba(color, 0.05-0.1)
Padding trực tiếp vào container
❌ Không được phép:
.content-card, .highlight-box với background đậm
Border 360° bao quanh (trừ bảng)
Box-shadow lớn
Background trắng/màu đậm che nền trang
Ví dụ NO CARD:

/* ✅ Đúng - Border trái đơn giản */
.content-block {
  border-left: 4px solid var(--lacquer-gold);
  padding: 1.5rem;
  background: rgba(212, 165, 116, 0.05);
}

/* ❌ Sai - Card style */
.content-card {
  border: 2px solid var(--lacquer-red);
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

🔄 Bo Cong Tối Thiểu
Quy tắc BorderRadius:
Component nhỏ: 4px (button, input)
Component trung bình: 8px (image, section)
Component lớn: 12px (modal, container)
Tối đa: 16px (chỉ cho hero/special sections)

/* Standard border radius */
.standard-radius {
  border-radius: 8px;
}
.small-radius {
  border-radius: 4px;
}
.large-radius {
  border-radius: 12px;
}
```

⚡ Hiệu ứng Tối thiểu (Hạn chế hoặc không dùng)
✅ Hiệu ứng được phép:
/_ Hover nhẹ cho interactive elements _/
.button:hover {
opacity: 0.8;
transform: translateY(-1px); /_ Tối đa 2px _/
}

/_ Transition đơn giản _/
.element {
transition: all 0.2s ease; /_ Tối đa 0.3s _/
}

❌ Hiệu ứng không dùng:
transform: scale(1.1) lớn
box-shadow animation phức tạp
Gradient animation
Hover effects > 3px translateY

📊 Ant Design Components
Tables (Chủ yếu dùng):

<table style={{
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.95rem",
}}>
  <thead>
    <tr>
      <th style={{
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "0.75rem",
        background: "rgba(139,69,19,0.3)",
      }}>Header</th>
    </tr>
  </thead>
</table>

Buttons:

<Button
type="text"
icon={<InfoCircleOutlined />}
style={{ minimalStyle: true }}

>

Modal ((cho p/s notes) - Xuất hiện rải rác cho các nội dung cần bổ trợ thông tin):
<Button
type="text"
icon={<InfoCircleOutlined />}
style={{ minimalStyle: true }}

>

🎯 Icons Tối thiểu
Chủ yếu dùng Ant Design Icons:
import {
InfoCircleOutlined, // Cho p/s modal
DownOutlined, // Dropdown (nếu cần)
UpOutlined, // Collapse (nếu cần)
} from "@ant-design/icons";

Quy tắc Icon:
Functional icons only: Info, Arrow, Close
Không dùng: Decorative icons, emoji nhiều
Style: color: #1890ff cho info, color: var(--lacquer-red) cho action

📝 Typography
Font chính:
font-family: var(--font-fraunces), serif;

Hierarchy:
/_ Section title _/
.section-title {
font-size: 2rem;
font-weight: 700;
color: var(--lacquer-red);
}

/_ Subsection title _/
.subsection-title {
font-size: 1.5rem;
font-weight: 600;
color: var(--lacquer-red);
}

/_ Body text _/
.key-summary {
font-size: 1.1rem;
line-height: 1.8;
color: var(--ink-black);
}

🖼️ Images
Standard styling:
<Image
src="url"
alt="description"
preview={true}
style={{
    width: "100%",
    borderRadius: "8px", // Standard radius
    maxWidth: "600px"
  }}
/>

Caption style:
.image-caption {
text-align: center;
margin-top: 0.5rem;
font-style: italic;
color: var(--museum-brown);
}

📐 Layout Patterns
Split Screen (Image + Text):

<div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  alignItems: "center"
}}>
  <div>{/* Image */}</div>
  <div>{/* Content */}</div>
</div>

✅ Checklist Convention
Trước khi commit:
Không có .content-card background đậm
Border-radius ≤ 16px
Hiệu ứng hover ≤ 2px translateY
Màu sắc theo palette global
Text contrast đủ trên background pastel
Modal chỉ dùng cho p/s notes
Icons chỉ functional, không decorative
Typography theo hierarchy chuẩn
Responsive grid layouts

🔧 Utils CSS
Helper classes:
/_ Text utilities _/
.text-center { text-align: center; }
.text-justify { text-align: justify; }

/_ Spacing utilities _/
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.p-2 { padding: 1rem; }

/_ Border utilities _/
.border-left-gold { border-left: 4px solid var(--lacquer-gold); }
.border-left-red { border-left: 4px solid var(--lacquer-red); }

/_ Background utilities _/
.bg-pastel-gold { background: rgba(212, 165, 116, 0.05); }
.bg-pastel-red { background: rgba(139, 0, 0, 0.05); }
