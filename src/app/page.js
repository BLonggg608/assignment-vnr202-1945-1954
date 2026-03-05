"use client";

import HeroSection from "@/component/layout/dashboard/sections/hero-section";

export default function Dashboard() {
  // Historical images from the Vietnam War era (1954-1975)
  const historicalImages = [
    {
      title: "Hiệp định Giơnevơ 1954",
      thumbnail: "https://ttdn.vn/Uploads/Images/2022/7/20/5/7321-13.2.jpg",
    },
    {
      title: "Phong trào Đồng Khởi 1960",
      thumbnail:
        "https://vnanet.vn/Data/Articles/2020/01/16/4384796/vna_potal_ky_niem_60_nam_phong_trao_dong_khoi_1711960_-_1712020_huyen_thoai_%E2%80%9Cdoi_quan_toc_dai_ben_tre%E2%80%9D_102406468_stand.jpg",
    },
    {
      title: "Chiến thắng Ấp Bắc 1963",
      thumbnail:
        "https://cand.com.vn/Files/Image/linhchi/2016/12/19/8cd4b77c-8401-43f7-9157-2be317424430.jpg",
    },
    {
      title: "Xây dựng Miền Bắc XHCN",
      thumbnail:
        "https://cdn.hvcsnd.edu.vn/uploads/2025/04/08/6/unnamed-57-1744104303.jpg?q=75&f=6&s=mp6hq0egmwc",
    },
    {
      title: "Đường Trường Sơn Huyền thoại",
      thumbnail:
        "https://vnanet.vn/Data/Articles/2020/01/11/4369830/vna_potal_90_nam_dcs_viet_nam_mo_duong_truong_son_-_su_nhay_ben_tu_duy_va_tai_thao_luoc_trong_chi_dao_chien_tranh_cua_dang__stand.jpg",
    },
    {
      title: "Phòng không nhân dân",
      thumbnail:
        "https://file3.qdnd.vn/data/images/0/2024/12/09/upload_2165/vna-potal-51-nam-chien-thang-ha-noi-dien-bien-phu-tren-khong-121972-122023-tran-thang-mang-tam-voc-lich-su-o-the-ky-xx-stand.jpg?dpi=150&quality=100&w=870",
    },
    {
      title: "Chiến dịch Điện Biên Phủ trên không",
      thumbnail:
        "https://tuyenquang.dcs.vn/Image/Large/2023122975637_145629.jpg",
    },
    {
      title: "Đại thắng mùa Xuân 1975",
      thumbnail:
        "https://file3.qdnd.vn/data/images/0/2025/04/30/upload_2201/anh%20le%20ky%20niem.jpg?dpi=150&quality=100&w=870",
    },
    {
      title: "Dinh Độc Lập",
      thumbnail:
        "https://ik.imagekit.io/tvlk/blog/2025/04/dinh-doc-lap.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
    },
    {
      title: "Đại hội Đảng lần III 1960",
      thumbnail:
        "https://file3.qdnd.vn/data/images/0/2024/10/18/upload_2094/dai-hoi-iii.jpg?dpi=150&quality=100&w=870",
    },
    {
      title: "Nghị quyết 15 năm 1959",
      thumbnail:
        "https://file3.qdnd.vn/data/images/0/2024/10/18/upload_2318/hoi%20nghi%2015.jpg?dpi=150&quality=100&w=870",
    },
    {
      title: "Phụ nữ Việt Nam anh hùng",
      thumbnail:
        "https://phunu.hochiminhcity.gov.vn/img/Upload/web2b/Album/ContentNews/2016-9/36546-3a_10920160816.jpg",
    },
    {
      title: "Thanh niên xung phong",
      thumbnail:
        "https://doanthanhnien.vn/Content/uploads/images/132829702148100812_3-san-sang-080821.jpg",
    },
    {
      title: "Chiến tranh cục bộ",
      thumbnail:
        "https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg",
    },
    {
      title: "Chiến thắng lịch sử",
      thumbnail:
        "https://cdnmedia.baotintuc.vn/Upload/e9GdNZvHDFi8lZSWc6ubA/files/2025/04/dieu-hanh-30425-3.jpg",
    },
  ];

  // Navigation cards for main features
  const navigationCards = [
    {
      title: "Thư Viện Lịch Sử",
      description:
        "Khám phá tài liệu và hình ảnh lịch sử kháng chiến 1954-1975",
      link: "/library",
      icon: "BookOutlined",
      color: "lacquer-red",
    },
    {
      title: "Trắc Nghiệm Lịch Sử",
      description: "Kiểm tra kiến thức về cuộc kháng chiến chống Mỹ",
      link: "https://play.blooket.com/play",
      icon: "EditOutlined",
      color: "jade-green",
    },
    {
      title: "Báo cáo AI Usage",
      description: "Trò chuyện với AI về lịch sử Việt Nam",
      link: "/ai-usage",
      icon: "RobotOutlined",
      color: "lacquer-gold",
    },
  ];

  return (
    <>
      <main className="">
        <HeroSection
          historicalImages={historicalImages}
          navigationCards={navigationCards}
        />
      </main>
    </>
  );
}
