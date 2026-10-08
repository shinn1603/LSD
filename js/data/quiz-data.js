/**
 * Quiz Data for "Cách Mạng Tháng Tám 1945 - Hà Nội"
 * Học phần: Lịch Sử Đảng Cộng Sản Việt Nam (Bậc Đại học)
 * Ngân hàng 6 câu hỏi trắc nghiệm trọng tâm củng cố và ôn tập kiến thức
 * Căn cứ: Giáo trình Lịch sử Đảng Cộng sản Việt Nam - NXB Chính trị quốc gia Sự thật (Chương I - Mục III)
 */

const QUIZ_DATA = [
    {
        id: "q1",
        question: "Bản Chỉ thị lịch sử 'Nhật - Pháp bắn nhau và hành động của chúng ta' (12/03/1945) của Ban Thường vụ Trung ương Đảng đã xác định kẻ thù cụ thể, trước mắt của nhân dân Đông Dương là lực lượng nào?",
        options: [
            "Thực dân Pháp và bọn phong kiến tay sai",
            "Phát xít Nhật Bản",
            "Liên minh quân đội đế quốc Anh và Pháp",
            "Tập đoàn quân phiệt Tưởng Giới Thạch"
        ],
        correctIndex: 1,
        explanation: "Sau khi Nhật nổ súng đảo chính Pháp đêm 9/3/1945, Ban Thường vụ Trung ương Đảng đã họp và ban hành Chỉ thị ngày 12/3/1945, chỉ rõ: Sau cuộc đảo chính, kẻ thù chính, cụ thể và duy nhất trước mắt của nhân dân ta là phát xít Nhật. Đảng đã phát động cao trào kháng Nhật cứu nước làm tiền đề cho Tổng khởi nghĩa.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị quốc gia Sự thật, 2021, tr. 94."
    },
    {
        id: "q2",
        question: "Văn kiện lịch sử nào được Ủy ban Khởi nghĩa toàn quốc ban bố trong đêm 13/08/1945 từ Tân Trào (do Tổng Bí thư Trường Chinh duyệt ký) nhằm phát lệnh Tổng khởi nghĩa giành chính quyền trên phạm vi cả nước?",
        options: [
            "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta'",
            "Quân lệnh số 1 của Ủy ban Khởi nghĩa toàn quốc",
            "Bản Tuyên ngôn Độc lập của Chủ tịch Hồ Chí Minh",
            "Lời kêu gọi Toàn quốc kháng chiến của Trung ương Đảng"
        ],
        correctIndex: 1,
        explanation: "Ngay khi nhận tin phát xít Nhật sắp đầu hàng Đồng minh, đêm 13/8/1945 tại Tân Trào, Ủy ban Khởi nghĩa toàn quốc do Tổng Bí thư Trường Chinh duyệt ký đã ban bố Quân lệnh số 1, chính thức phát động Tổng khởi nghĩa giành chính quyền trước khi Hội nghị toàn quốc của Đảng khai mạc.",
        source: "Văn kiện Đảng Toàn tập, Tập 7 (1940 - 1945), NXB Chính trị quốc gia Sự thật, tr. 423."
    },
    {
        id: "q3",
        question: "Trước tình thế liên lạc với Trung ương tại Tân Trào bị chia cắt, cơ quan Đảng nào đã họp tại làng Vạn Phúc (15/08/1945) và chủ động, sáng tạo quyết định phát động khởi nghĩa giành chính quyền tại Hà Nội vào ngày 19/08/1945?",
        options: [
            "Ban Chấp hành Trung ương Đảng họp bất thường",
            "Ban Thường vụ Xứ ủy Bắc Kỳ (do đồng chí Nguyễn Khang chủ trì)",
            "Đại hội Quốc dân Tân Trào",
            "Tổng bộ Việt Minh lâm thời tại Chiến khu Việt Bắc"
        ],
        correctIndex: 1,
        explanation: "Chiều 15/8/1945 tại làng Vạn Phúc (Hà Đông), Ban Thường vụ Xứ ủy Bắc Kỳ do đồng chí Nguyễn Khang chủ trì đã họp khẩn cấp. Nắm vững tinh thần Chỉ thị ngày 12/3/1945 của Đảng, Xứ ủy đã chủ động thành lập Ủy ban Khởi nghĩa Hà Nội và quyết định phát lệnh khởi nghĩa vào ngày 19/8/1945 mà không thụ động ngồi chờ lệnh Trung ương, thể hiện tinh thần dám chịu trách nhiệm trước lịch sử.",
        source: "Lịch sử Đảng bộ Thành phố Hà Nội (1930 - 2020), Ban Chấp hành Đảng bộ TP. Hà Nội, NXB Hà Nội, tr. 112."
    },
    {
        id: "q4",
        question: "Hành động táo bạo nào của Đội Tuyên truyền Xung phong Việt Minh chiều 17/08/1945 tại Nhà hát Lớn đã biến cuộc mít tinh của chính quyền thân Nhật thành cuộc biểu dương lực lượng của cách mạng?",
        options: [
            "Cướp diễn đàn mít tinh, buông lá cờ đỏ sao vàng khổng lồ, đọc Lời Hiệu Triệu Việt Minh và hát vang 'Tiến Quân Ca'",
            "Nổ súng tiêu diệt toàn bộ viên chức chính quyền bù nhìn Trần Trọng Kim",
            "Bố trí mìn phá hủy khán đài mít tinh của đối phương",
            "Bí mật rải truyền đơn rồi giải tán quần chúng về nhà bảo toàn lực lượng"
        ],
        correctIndex: 0,
        explanation: "Chiều 17/8/1945, dưới sự chỉ đạo của Thành ủy Hà Nội, Đội Tuyên truyền Xung phong Thành Hoàng Diệu đã bất ngờ cướp micro, buông lá cờ đỏ sao vàng khổng lồ từ tầng 2 Nhà hát Lớn, đọc Lời Hiệu Triệu Việt Minh và hát vang Tiến Quân Ca, biến cuộc mít tinh của địch thành cuộc biểu tình thị uy rầm rộ của quần chúng cách mạng dưới ngọn cờ của Đảng.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị quốc gia Sự thật, 2021, tr. 102."
    },
    {
        id: "q5",
        question: "Trong ngày Tổng khởi nghĩa 19/08/1945 tại Hà Nội, Đảng bộ Hà Nội đã áp dụng nghệ thuật ngoại giao quân sự sắc bén nào trước hàng xe tăng quân đội Nhật để đảm bảo thắng lợi trọn vẹn và tránh đổ máu?",
        options: [
            "Huy động tự vệ vũ trang công kiên dùng bom ba càng đánh sáp lá cà xe tăng Nhật",
            "Đợi quân Đồng minh tiến vào Hà Nội giải giáp quân Nhật rồi mới tiếp quản các công sở",
            "Kết hợp sức mạnh áp đảo của biển người với đàm phán ngoại giao quân sự, cam kết an toàn cho lính Nhật chờ hồi hương để buộc chúng án binh bất động",
            "Ký kết thỏa ước nhượng bộ quyền kiểm soát các công sở trọng yếu cho quân đội Nhật"
        ],
        correctIndex: 2,
        explanation: "Đảng bộ Hà Nội đã khéo léo kết hợp khí thế áp đảo của hơn 20 vạn quần chúng với nghệ thuật thương thuyết ngoại giao quân sự tài tình: Khẳng định quyền dân tộc tự quyết, cam đoan an toàn tính mạng cho binh lính Nhật chờ hồi hương, phân hóa kẻ thù, buộc quân Nhật phải án binh bất động, giành thắng lợi trọn vẹn mà hạn chế tối đa xương máu đồng bào.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị quốc gia Sự thật, 2021, tr. 104."
    },
    {
        id: "q6",
        question: "Theo Giáo trình Lịch sử Đảng Cộng sản Việt Nam, một trong những bài học kinh nghiệm sâu sắc nhất của Đảng rút ra từ Cách mạng Tháng Tám năm 1945 là gì?",
        options: [
            "Chỉ dựa vào viện trợ quân sự và sự giúp đỡ trực tiếp của các nước Đồng minh lớn",
            "Giương cao ngọn cờ độc lập dân tộc, phát huy khối đại đoàn kết toàn dân trên nền tảng liên minh công nông và nắm vững nghệ thuật chớp thời cơ",
            "Tiến hành cách mạng ruộng đất triệt để trước khi giải phóng dân tộc",
            "Ưu tiên phát triển đấu tranh nghị trường và đấu tranh kinh tế hòa bình"
        ],
        correctIndex: 1,
        explanation: "Giáo trình Lịch sử Đảng đúc kết 4 bài học kinh nghiệm lớn của Cách mạng Tháng Tám: Giương cao ngọn cờ độc lập dân tộc; xây dựng khối đại đoàn kết toàn dân trên nền tảng liên minh công nông trong Mặt trận Việt Minh; nắm vững nghệ thuật chớp thời cơ và phân hóa kẻ thù; và xây dựng một Đảng Mác - Lênin vững mạnh về chính trị, tư tưởng và tổ chức.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị quốc gia Sự thật, 2021, tr. 110-112."
    }
];

window.QUIZ_DATA = QUIZ_DATA;
