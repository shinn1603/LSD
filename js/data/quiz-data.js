/**
 * Quiz Data for "Bình Minh Tháng Tám - Hà Nội 1945"
 * Bộ câu hỏi trắc nghiệm củng cố và ôn tập kiến thức lịch sử Cách mạng Tháng Tám
 */

const QUIZ_DATA = [
    {
        id: "q1",
        question: "Sự kiện lịch sử nào đánh dấu sự xuất hiện của 'thời cơ nghìn năm có một' cho cuộc Tổng khởi nghĩa giành chính quyền Tháng Tám năm 1945 ở Việt Nam?",
        options: [
            "Quân phát xít Nhật tiến hành đảo chính lật đổ thực dân Pháp (09/03/1945)",
            "Nhật hoàng Hirohito tuyên bố đầu hàng phe Đồng minh vô điều kiện (14/08 - 15/08/1945)",
            "Quân đội Đồng minh chính thức đặt chân vào Đông Dương giải giáp quân Nhật",
            "Đảng ta thành lập Khu giải phóng Việt Bắc làm căn cứ địa cách mạng (04/06/1945)"
        ],
        correctIndex: 1,
        explanation: "Ngày 15/8/1945, Nhật hoàng tuyên bố đầu hàng Đồng minh vô điều kiện. Quân viễn chinh Nhật ở Đông Dương tê liệt, chính quyền tay sai Trần Trọng Kim rệu rã, trong khi quân Đồng minh chưa kịp vào. Đây là thời điểm 'nghìn năm có một' để dân tộc ta vùng lên tự giải phóng.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị Quốc gia Sự thật, tr. 98."
    },
    {
        id: "q2",
        question: "Văn kiện lịch sử nào phát đi trong đêm 13/8/1945 từ Tân Trào với lời hiệu triệu hào hùng: 'Hỡi quân dân toàn quốc!... Giờ tổng khởi nghĩa đã đánh! Cơ hội có một cho quân dân Việt Nam vùng dậy giành lấy quyền độc lập của nước nhà!'?",
        options: [
            "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta'",
            "Bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa",
            "Quân lệnh số 1 của Ủy ban Khởi nghĩa toàn quốc",
            "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh"
        ],
        correctIndex: 2,
        explanation: "Đêm 13/8/1945, Ủy ban Khởi nghĩa toàn quốc do Tổng Bí thư Trường Chinh ký duyệt đã ban bố Quân lệnh số 1, phát lệnh Tổng khởi nghĩa trên toàn quốc trước khi Hội nghị toàn quốc của Đảng và Quốc dân Đại hội Tân Trào khai mạc.",
        source: "Văn kiện Đảng Toàn tập, Tập 7 (1940 - 1945), NXB Chính trị Quốc gia Sự thật, tr. 423."
    },
    {
        id: "q3",
        question: "Trước tình thế liên lạc với Trung ương Tân Trào bị chia cắt, Thường vụ Xứ ủy Bắc Kỳ do đồng chí nào chủ trì đã họp tại làng Vạn Phúc (15/8/1945) và chủ động quyết định phát động khởi nghĩa tại Hà Nội?",
        options: [
            "Đồng chí Trường Chinh",
            "Đồng chí Nguyễn Khang",
            "Đồng chí Võ Nguyên Giáp",
            "Đồng chí Hoàng Văn Thụ"
        ],
        correctIndex: 1,
        explanation: "Chiều 15/8/1945 tại làng Vạn Phúc (Hà Đông), đồng chí Nguyễn Khang (Thường vụ Xứ ủy Bắc Kỳ) đã chủ trì cuộc họp khẩn cấp. Nắm chắc thời cơ, Xứ ủy Bắc Kỳ đã chủ động quyết định khởi nghĩa giành chính quyền tại Hà Nội mà không thụ động ngồi chờ lệnh từ Tân Trào, thể hiện tinh thần sáng tạo và dám chịu trách nhiệm lịch sử.",
        source: "Lịch sử Đảng bộ Thành phố Hà Nội (1930 - 2020), Ban Chấp hành Đảng bộ TP. Hà Nội, tr. 112."
    },
    {
        id: "q4",
        question: "Chiều ngày 17/8/1945, lực lượng cách mạng Việt Minh tại Hà Nội đã có hành động táo bạo nào làm xoay chuyển cục diện trước Quảng trường Nhà hát Lớn?",
        options: [
            "Nổ súng tiêu diệt toàn bộ toán cảnh sát và lính bảo an thân Nhật",
            "Đánh bom phá hủy lễ đài mít tinh của chính phủ bù nhìn",
            "Cướp diễn đàn mít tinh của Tổng hội Viên chức, giương cờ đỏ sao vàng khổng lồ và biến mít tinh thành cuộc tuần hành cách mạng",
            "Kêu gọi quần chúng giải tán về nhà để bảo toàn lực lượng bí mật"
        ],
        correctIndex: 2,
        explanation: "Chiều 17/8/1945, Đội Tuyên truyền Xung phong Thành Hoàng Diệu và tự vệ Việt Minh đã táo bạo đột nhập ban công tầng hai Nhà hát Lớn, buông lá cờ đỏ sao vàng khổng lồ, tước micro kêu gọi đồng bào theo Việt Minh và hát vang 'Tiến Quân Ca', biến cuộc mít tinh thân Nhật thành biểu tình cách mạng rầm rộ.",
        source: "Lịch sử Cách mạng Tháng Tám 1945 tại Hà Nội, NXB Hà Nội."
    },
    {
        id: "q5",
        question: "Trong ngày Tổng khởi nghĩa 19/8/1945 tại Hà Nội, ta đã áp dụng đối sách sắc bén nào đối với quân đội phát xít Nhật để giành thắng lợi trọn vẹn mà tránh được đổ máu?",
        options: [
            "Đợi quân Đồng minh kéo vào Hà Nội giải giáp quân Nhật rồi mới tiếp quản công sở",
            "Huy động toàn bộ tự vệ vũ trang công kiên doanh trại xe tăng Nhật Bản",
            "Kết hợp sức mạnh áp đảo của biển người với đàm phán ngoại giao quân sự, cam kết an toàn để buộc quân Nhật phải án binh bất động",
            "Ký hiệp ước liên minh tạm thời với quân đội phát xít Nhật Bản"
        ],
        correctIndex: 2,
        explanation: "Việt Minh đã khéo léo kết hợp khí thế áp đảo của hàng vạn quần chúng với nghệ thuật thương thuyết ngoại giao quân sự, phân hóa kẻ thù, cam đoan an toàn tính mạng cho quân Nhật chờ hồi hương, buộc chúng phải chấp nhận án binh bất động, bảo toàn xương máu cho đồng bào Thủ đô.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị Quốc gia Sự thật, 2021, tr. 104."
    },
    {
        id: "q6",
        question: "Thắng lợi vang dội của cuộc khởi nghĩa ngày 19/8/1945 tại Thủ đô Hà Nội có ý nghĩa như thế nào đối với phong trào Tổng khởi nghĩa trong cả nước?",
        options: [
            "Là phát pháo lệnh giục giã, làm sụp đổ tinh thần chính quyền bù nhìn và thúc đẩy Tổng khởi nghĩa mau chóng toàn thắng cả nước",
            "Là cuộc khởi nghĩa địa phương đơn lẻ, không tác động tới phong trào miền Trung và miền Nam",
            "Chỉ có ý nghĩa về mặt quân sự, không mang tính biểu tượng chính trị",
            "Làm chậm tiến trình giải giáp vũ khí của quân đội các nước Đồng minh"
        ],
        correctIndex: 0,
        explanation: "Hà Nội là trung tâm chính trị đầu não của cả nước. Khởi nghĩa thắng lợi thần tốc ở Hà Nội như một phát pháo lệnh làm tê liệt hoàn toàn bộ máy chính quyền tay sai trên toàn quốc, cổ vũ mạnh mẽ Huế (23/8), Sài Gòn (25/8) và các địa phương khác nhất tề đứng lên giành độc lập.",
        source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam, NXB Chính trị Quốc gia Sự thật, tr. 106."
    }
];

window.QUIZ_DATA = QUIZ_DATA;
