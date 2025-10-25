import React, { useState, useEffect } from 'react';

const aboutUs = () => {
  // Sample data for Section 1
  const allArticles = [
    {
      date: "25/10/2025",
      tag: "Công nghệ đa phương tiện",
      image: "https://fit.ptithcm.edu.vn/wp-content/uploads/2024/05/thong-bao-tuyen-sinh-dai-hoc-chinh-quy-2024.webp",
      title: "Khám phá công nghệ mới nhất",
      content: "Cập nhật những xu hướng công nghệ đa phương tiện đang thịnh hành hiện nay..."
    },
    {
      date: "25/10/2025",
      tag: "Công nghệ đa phương tiện",
      image: "https://fit.ptithcm.edu.vn/wp-content/uploads/2024/05/thong-bao-tuyen-sinh-dai-hoc-chinh-quy-2024.webp",
      title: "Khám phá công nghệ mới nhất",
      content: "Cập nhật những xu hướng công nghệ đa phương tiện đang thịnh hành hiện nay..."
    },
    {
      date: "25/10/2025",
      tag: "Công nghệ đa phương tiện",
      image: "https://fit.ptithcm.edu.vn/wp-content/uploads/2024/05/thong-bao-tuyen-sinh-dai-hoc-chinh-quy-2024.webp",
      title: "Khám phá công nghệ mới nhất",
      content: "Cập nhật những xu hướng công nghệ đa phương tiện đang thịnh hành hiện nay..."
    },
    {
      date: "24/10/2025",
      tag: "An toàn thông tin",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      title: "Bảo mật dữ liệu trong kỷ nguyên số",
      content: "Tìm hiểu các phương pháp bảo vệ thông tin cá nhân và dữ liệu quan trọng..."
    },
    {
      date: "23/10/2025",
      tag: "Công nghệ thông tin",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      title: "Lập trình web hiện đại",
      content: "Tìm hiểu các framework và công nghệ mới nhất trong phát triển web..."
    },
    {
      date: "22/10/2025",
      tag: "Truyền thông đa phương tiện",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=400&h=250&fit=crop",
      title: "Thiết kế đồ họa sáng tạo",
      content: "Khám phá nghệ thuật thiết kế và các công cụ hỗ trợ sáng tạo nội dung..."
    },
    {
      date: "21/10/2025",
      tag: "Công nghệ thông tin",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      title: "AI và Machine Learning",
      content: "Ứng dụng trí tuệ nhân tạo trong cuộc sống và doanh nghiệp hiện đại..."
    },
    {
      date: "20/10/2025",
      tag: "An toàn thông tin",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      title: "Phòng chống tấn công mạng",
      content: "Các biện pháp bảo vệ hệ thống khỏi các mối đe dọa an ninh mạng..."
    },
    {
      date: "19/10/2025",
      tag: "Công nghệ đa phương tiện",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop",
      title: "Video Production chuyên nghiệp",
      content: "Kỹ thuật sản xuất video và các công cụ biên tập hàng đầu..."
    },
    {
      date: "18/10/2025",
      tag: "Truyền thông đa phương tiện",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=250&fit=crop",
      title: "Content Marketing hiệu quả",
      content: "Chiến lược xây dựng nội dung thu hút và giữ chân khách hàng..."
    }
  ];

  // Sample data for Section 2
  const simpleArticles = [
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Công nghệ thông tin",
      title: "Nguyễn Hồng Sơn",
      content: "Giảng viên ngành Công nghệ thông tin..."
    },
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Công nghệ đa phương tiện",
      title: "Nguyễn Tất Mão",
      content: "Giảng viên ngành Công nghệ đa phương tiện..."
    },
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Truyền thông đa phương tiện",
      title: "Nguyễn Công Khanh",
      content: "Giảng viên ngành Truyền thông đa phương tiện..."
    },
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "An toàn thông tin",
      title: "Phan Văn X",
      content: "Giảng viên ngành An toàn thông tin..."
    },
    
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Công nghệ đa phương tiện",
      title: "Lê Minh Hóa",
      content: "Giảng viên ngành Công nghệ đa phương tiện..."
    },
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Công nghệ đa phương tiện",
      title: "Nguyễn Văn Sáu",
      content: "Giảng viên ngành Công nghệ đa phương tiện..."
    },
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Công nghệ đa phương tiện",
      title: "Huỳnh Thị Tuyết Trinh",
      content: "Giảng viên ngành Công nghệ đa phương tiện..."
    },
    {
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
      tag: "Công nghệ đa phương tiện",
      title: "Trương Thị Quyên",
      content: "Giảng viên ngành Công nghệ đa phương tiện..."
    }
  ];

  // Sample data for Section 3
  const listArticles = [
    {
      tag: "Phòng học",
      image: "https://ptithcm.edu.vn/wp-content/uploads/2025/10/10-8.jpg",
      title: "Phòng 2A08",
      content: "phòng học lớn với sức chứa hơn 100 sinh viên, được trang bị đầy đủ thiết bị giảng dạy hiện đại..."
    },
    {
      tag: "Hội trường",
      image: "https://ptithcm.edu.vn/wp-content/uploads/2025/10/10-8.jpg",
      title: "Hội trường D",
      content: "Hội trường cỡ vừa với sức chứa khoảng 200 chỗ ngồi, thích hợp cho các buổi thuyết trình và hội thảo nhỏ..."
    },
    {
      tag: "Phòng thực hành",
      image: "https://ptithcm.edu.vn/wp-content/uploads/2025/10/10-8.jpg",
      title: "Phòng 2B12",
      content: "Phòng thực hành máy tính hiện đại với đầy đủ trang thiết bị hỗ trợ học tập và nghiên cứu..."
    },
    {
      tag: "Hội trường",
      image: "https://ptithcm.edu.vn/wp-content/uploads/2025/10/10-8.jpg",
      title: "Hội trường A",
      content: "Hội trường lớn với sức chứa hơn 500 chỗ ngồi, trang bị hệ thống âm thanh và ánh sáng hiện đại, phù hợp cho các sự kiện lớn..."
    },
    {
      tag: "Phòng học",
      image: "https://ptithcm.edu.vn/wp-content/uploads/2025/10/10-8.jpg",
      title: "Phòng E02",
      content: "Phòng học mới với trang thiết bị hiện đại, tạo môi trường học tập tốt nhất cho sinh viên..."
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = () => {
    const filtered = allArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchText.toLowerCase()) || 
                          article.content.toLowerCase().includes(searchText.toLowerCase());
      const matchesFilter = !filterTag || article.tag === filterTag;
      return matchesSearch && matchesFilter;
    });
    setFilteredArticles(filtered);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Section 1: Search and Grid Cards with Pagination */}
        <div 
          className="relative mb-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
          
          {/* Previous Button - Absolute positioned within section */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-gray-700 p-4 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300 ${
            
              (isHovering && currentPage > 1) 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Next Button - Absolute positioned within section */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages} // Thường disable khi ở trang cuối
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-gray-700 p-4 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300 ${
              (isHovering && currentPage < totalPages) 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
            {/* Search Section - Single Row */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Tin Tức & Sự Kiện</h1>
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Tìm kiếm bài viết..." 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select 
                  value={filterTag}
                  onChange={(e) => setFilterTag(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 md:w-64"
                >
                  <option value="">Tất cả chuyên mục</option>
                  <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                  <option value="Công nghệ đa phương tiện">Công nghệ đa phương tiện</option>
                  <option value="An toàn thông tin">An toàn thông tin</option>
                  <option value="Truyền thông đa phương tiện">Truyền thông đa phương tiện</option>
                </select>
                <button 
                  onClick={handleSearch}
                  className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  Tìm kiếm
                </button>
              </div>
            </div>

            {/* Grid Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {currentArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">{article.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center pt-6 border-t border-gray-200">
              <span className="text-gray-600 font-medium">
                <span className="font-bold text-red-600">{currentPage}</span> / {totalPages}
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Simple Grid Cards */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Giảng viên</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {simpleArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mb-3">{article.tag}</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{article.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Section 3: List Cards with Images */}
<div className="bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Cơ sở vật chất</h2>
  <div className="space-y-4">
    {listArticles.map((article, index) => (
      <div key={index} className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative">
        <img src={article.image} alt={article.title} className="w-full sm:w-32 h-48 sm:h-24 object-cover rounded-lg flex-shrink-0" />
        <div className="flex-1 min-w-0 pr-0 sm:pr-24">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-1 mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{article.content}</p>
        </div>
        <span className="sm:absolute top-4 right-4 inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium self-start">
          {article.tag}
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default aboutUs;