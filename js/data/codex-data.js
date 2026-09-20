/**
 * Historical Codex Data for "Bình Minh Tháng Tám - Hà Nội 1945"
 * Hồ sơ tư liệu lịch sử chính thống về Cách mạng Tháng Tám 1945 tại Hà Nội
 * Trích dẫn từ các văn kiện và tài liệu lưu trữ chính thức
 */

const CODEX_DATA = {
    documents: [
        {
            id: "doc_quan_lenh_1",
            title: "Quân Lệnh Số 1 (13/08/1945)",
            category: "Văn Kiện Lịch Sử",
            date: "Đêm 13 tháng 8 năm 1945",
            summary: "Lệnh Tổng khởi nghĩa của Ủy ban Khởi nghĩa toàn quốc do Tổng Bí thư Trường Chinh duyệt ký.",
            content: `
                <p><strong>Trích nguyên văn Quân lệnh số 1 của Ủy ban Khởi nghĩa toàn quốc:</strong></p>
                <blockquote>
                    <em>"Hỡi quân dân toàn quốc!... Giờ tổng khởi nghĩa đã đánh! Cơ hội có một cho quân dân Việt Nam vùng dậy giành lấy quyền độc lập của nước nhà!... Chúng ta phải hành động cho nhanh, với một tinh thần vô cùng quả cảm, vô cùng thận trọng!... Tiến lên! Tiến lên! Dưới lá cờ của Việt Minh, đồng bào hãy dũng cảm tiến lên!"</em>
                </blockquote>
                <p>Quân lệnh số 1 phát đi trong đêm 13/8/1945 từ căn cứ Tân Trào (Sơn Dương, Tuyên Quang) đã châm ngòi cho ngọn lửa cách mạng bùng cháy khắp ba miền Bắc - Trung - Nam, mở đầu cho thắng lợi thần tốc của cuộc Tổng khởi nghĩa Tháng Tám.</p>
            `,
            source: "Văn kiện Đảng Toàn tập, Tập 7 (1940 - 1945), NXB Chính trị Quốc gia Sự thật, Hà Nội, tr. 423-424.",
            tag: "Tối Mật - Phát Lệnh Khởi Nghĩa"
        },
        {
            id: "doc_loi_keu_goi_bac_ho",
            title: "Thư Kêu Gọi Tổng Khởi Nghĩa Của Chủ Tịch Hồ Chí Minh",
            category: "Văn Kiện Lịch Sử",
            date: "Tháng 8 năm 1945",
            summary: "Lời hịch non sông của Lãnh tụ Hồ Chí Minh gửi toàn thể quốc dân đồng bào trước giờ khởi nghĩa.",
            content: `
                <blockquote>
                    <em>"Hỡi đồng bào yêu quý!<br>
                    Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta!... Tiến lên! Tiến lên! Dưới lá cờ Việt Minh, đồng bào hãy dũng cảm tiến lên!"</em>
                </blockquote>
                <p>Bức thư thể hiện tư tưởng độc lập, tự chủ, tự lực cánh sinh sâu sắc của Chủ tịch Hồ Chí Minh: không trông chờ ỷ lại vào bất kỳ thế lực ngoại bang nào, mà phát huy tối đa khối đại đoàn kết toàn dân tộc để giành chính quyền trước khi quân Đồng minh kéo vào giải giáp phát xít Nhật.</p>
            `,
            source: "Hồ Chí Minh Toàn tập, Tập 3 (1930 - 1945), NXB Chính trị Quốc gia Sự thật, Hà Nội, tr. 596.",
            tag: "Lời Hịch Non Sông"
        },
        {
            id: "doc_nghi_quyet_van_phuc",
            title: "Quyết Định Lịch Sử Tại Làng Vạn Phúc (15/08/1945)",
            category: "Văn Kiện Lịch Sử",
            date: "Chiều 15 tháng 8 năm 1945",
            summary: "Hội nghị bất thường của Thường vụ Xứ ủy Bắc Kỳ do đồng chí Nguyễn Khang chủ trì, quyết định khởi nghĩa giành chính quyền ở Hà Nội.",
            content: `
                <p>Chiều ngày 15/8/1945, ngay sau khi nhận được tin Nhật hoàng đầu hàng Đồng minh qua sóng radio, Thường vụ Xứ ủy Bắc Kỳ đã triệu tập hội nghị bất thường tại làng Vạn Phúc (Hà Đông) do đồng chí Nguyễn Khang chủ trì.</p>
                <p>Do liên lạc với Trung ương tại Tân Trào bị chia cắt bởi đường sá xa xôi và quân địch phong tỏa, Hội nghị đã có một quyết định lịch sử mang tính độc lập, sáng tạo cao: <strong>Không thể thụ động chờ lệnh cấp trên, mà phải chớp ngay thời cơ vàng, phát động nhân dân Hà Nội đứng lên khởi nghĩa giành chính quyền.</strong></p>
                <p>Thành lập ngay <em>Ủy ban Khởi nghĩa Hà Nội</em> gồm 5 đồng chí: Nguyễn Khang (Chủ tịch), Nguyễn Quyết, Nguyễn Duy Thân, Trần Quang Huy, Lê Trọng Nghĩa.</p>
            `,
            source: "Lịch sử Đảng bộ Thành phố Hà Nội (1930 - 2020), Ban Chấp hành Đảng bộ TP. Hà Nội, NXB Hà Nội, tr. 112-116.",
            tag: "Quyết Định Bước Ngoặt"
        },
        {
            id: "doc_tien_quan_ca",
            title: "Bài Ca Khởi Nghĩa: 'Tiến Quân Ca'",
            category: "Âm Nhạc Lịch Sử",
            date: "Mùa đông 1944 - Tháng 8/1945",
            summary: "Nhạc phẩm bất hủ của nhạc sĩ Văn Cao, trở thành khúc ca chính thức của Cách mạng và Quốc ca Việt Nam.",
            content: `
                <p>Nhạc sĩ Văn Cao sáng tác <em>Tiến quân ca</em> vào mùa đông năm 1944 tại căn gác nhỏ số 171 phố Mai Hắc Đế, Hà Nội. Bài hát được in lần đầu trên trang văn nghệ báo <em>Độc Lập</em> bằng bản in đá bí mật.</p>
                <p>Chiều 17/8/1945, trước Nhà hát Lớn Hà Nội, giữa hàng vạn quần chúng nhân dân, bài hát lần đầu tiên cất lên đầy kiêu hãnh và hòa cùng tiếng hô vang dội của biển người: <em>"Ủng hộ Việt Minh!", "Việt Nam độc lập!"</em>, trở thành ngọn lửa tinh thần tiếp thêm sức mạnh cho quần chúng vùng lên khởi nghĩa.</p>
            `,
            source: "Hồi ký Nhạc sĩ Văn Cao; Lịch sử Âm nhạc Cách mạng Việt Nam, NXB Văn hóa Thông tin.",
            tag: "Quốc Ca Thiêng Liêng"
        }
    ],

    events: [
        {
            id: "evt_17_august",
            title: "Cuộc Biểu Tình Ngày 17/8 Tại Nhà Hát Lớn",
            category: "Sự Kiện Lịch Sử",
            date: "Chiều 17 tháng 8 năm 1945",
            summary: "Việt Minh táo bạo biến cuộc mít tinh của chính quyền thân Nhật thành cuộc tuần hành cách mạng vĩ đại.",
            content: `
                <p>Chiều 17/8/1945, Tổng hội Viên chức thân chính quyền bù nhìn Trần Trọng Kim tổ chức một cuộc mít tinh lớn trước Nhà hát Lớn Hà Nội nhằm phô trương thanh thế và xoa dịu làn sóng cách mạng.</p>
                <p>Nắm chắc thời cơ, Ban Cán sự Đảng Hà Nội chỉ đạo Đội Tuyên truyền Xung phong Thành Hoàng Diệu và các chiến sĩ tự vệ táo bạo thâm nhập. Đúng thời khắc bài hát của chính phủ bù nhìn chuẩn bị vang lên, các đội viên Việt Minh bất ngờ buông lá cờ đỏ sao vàng khổng lồ từ tầng 2 Nhà hát Lớn, tước micro và kêu gọi quần chúng đứng lên theo Mặt trận Việt Minh.</p>
                <p>Cuộc mít tinh lập tức biến thành cuộc tuần hành rầm rộ khắp các phố Tràng Tiền, Bờ Hồ, Cửa Nam trong tiếng reo hò rực lửa của biển người.</p>
            `,
            source: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Bậc Đại học), NXB Chính trị Quốc gia Sự thật, Hà Nội, 2021, tr. 101-103.",
            tag: "Bước Ngoặt Khởi Nghĩa"
        },
        {
            id: "evt_19_august",
            title: "Ngày 19/8: Tổng Khởi Nghĩa Toàn Thắng Tại Thủ Đô",
            category: "Sự Kiện Lịch Sử",
            date: "Ngày 19 tháng 8 năm 1945",
            summary: "Hà Nội vùng lên đập tan xiềng xích nô dịch, đánh chiếm các cơ quan đầu não của địch.",
            content: `
                <p>Từ sáng sớm 19/8/1945, hơn 20 vạn quần chúng nhân dân từ nội thành và các huyện ngoại thành rầm rập tiến về Quảng trường Nhà hát Lớn dưới rừng cờ đỏ sao vàng rực rỡ.</p>
                <p>Sau lời hiệu triệu của Ủy ban Khởi nghĩa, quần chúng chia thành nhiều mũi nhọn tiến công chiếm giữ các cơ quan trọng yếu:</p>
                <ul>
                    <li><strong>Phủ Khâm sai Bắc Bộ</strong> (Bắc Bộ Phủ) - cơ quan đầu não đại diện chính quyền tay sai.</li>
                    <li><strong>Trại Bảo an binh</strong> phố Hàng Bài - kiểm soát kho súng và đạn dược chiến lược.</li>
                    <li><strong>Sở Mật thám, Tòa Đốc lý, Bưu điện Bờ Hồ, Sở Cảnh sát...</strong></li>
                </ul>
                <p>Trước khí thế áp đảo của biển người và tài thương thuyết, binh vận khéo léo của đại diện Việt Minh, quân đội Nhật hoàng đã phải chấp nhận án binh bất động trong doanh trại, tránh được tổn thất xương máu to lớn cho đồng bào Thủ đô.</p>
            `,
            source: "Lịch sử Cách mạng Tháng Tám 1945 tại Hà Nội, Ban Tuyên giáo Thành ủy Hà Nội, NXB Hà Nội.",
            tag: "Đại Thắng Lịch Sử"
        },
        {
            id: "evt_thanh_hoang_dieu",
            title: "Đội Tuyên Truyền Xung Phong Thành Hoàng Diệu",
            category: "Lực Lượng Nòng Cốt",
            date: "1944 - 1945",
            summary: "Lực lượng xung kích gồm thanh niên, học sinh, sinh viên yêu nước của Mặt trận Việt Minh Hà Nội.",
            content: `
                <p>Thành lập tháng 8/1944 tại chùa Quảng Bá (Hà Nội), Đội Tuyên truyền Xung phong Thành Hoàng Diệu gồm các thanh niên, học sinh, sinh viên quả cảm.</p>
                <p>Họ hoạt động nửa công khai nửa bí mật: in truyền đơn, tổ chức diễn thuyết chớp nhoáng trên xe điện, rạp hát, chợ Hôm, chợ Đồng Xuân, diệt ác trừ gian và làm nòng cốt trong các cuộc biểu tình giành chính quyền tại Hà Nội tháng Tám năm 1945.</p>
            `,
            source: "Hồ sơ Di tích Cách mạng Kháng chiến Chùa Quảng Bá, Bảo tàng Hà Nội.",
            tag: "Tiên Phong Xung Kích"
        }
    ],

    figures: [
        {
            id: "fig_nguyen_khang",
            name: "Đồng chí Nguyễn Khang (1919 - 1976)",
            role: "Chủ tịch Ủy ban Khởi nghĩa Hà Nội",
            summary: "Người lãnh đạo trực tiếp quyết định phát lệnh khởi nghĩa ngày 19/8/1945 tại Hà Nội.",
            bio: `
                <p>Đồng chí Nguyễn Khang là Ủy viên Thường vụ Xứ ủy Bắc Kỳ, trực tiếp phụ trách phong trào cách mạng Hà Nội. Trong tình thế Nhật hoàng đầu hàng Đồng minh mà lệnh khởi nghĩa từ Trung ương (Tân Trào) chưa về tới Hà Nội do liên lạc tắc nghẽn, đồng chí cùng Thường vụ Xứ ủy đã dũng cảm, quyết đoán ra quyết định khởi nghĩa giành chính quyền tại Hà Nội vào ngày 19/8/1945.</p>
                <p>Sự chủ động, sáng tạo và tinh thần dám chịu trách nhiệm trước lịch sử của đồng chí đã tạo tiền đề quyết định và cổ vũ mạnh mẽ cho cuộc Tổng khởi nghĩa trên toàn quốc mau chóng thành công.</p>
            `,
            source: "Những người con kiên trung của Đảng bộ Hà Nội, Ban Tuyên giáo Thành ủy Hà Nội, NXB Hà Nội, tr. 78-85.",
            tag: "Lãnh Đạo Tiêu Biểu"
        },
        {
            id: "fig_thao_student",
            name: "Nữ Sinh Kháng Chiến (Hình tượng văn học lịch sử)",
            role: "Đội viên Thanh niên Cứu quốc Hà Nội",
            summary: "Đại diện cho hàng ngàn nữ sinh Đồng Khánh, Trưng Vương gan dạ tham gia cứu quốc.",
            bio: `
                <p>Nhân vật Thảo được xây dựng dựa trên hình tượng những nữ thanh niên tiêu biểu của Hà Nội trong những ngày mùa thu 1945 (như bà Lê Thi - người kéo cờ Tổ quốc tại Quảng trường Ba Đình ngày 2/9/1945; bà Từ Ngọc Liễn - nữ sinh cầm cờ dẫn đầu đoàn biểu tình ngày 17/8...).</p>
                <p>Họ đã từ bỏ cuộc sống khuê các, giấu truyền đơn trong tà áo dài, vận động binh lính thức tỉnh lòng yêu nước và hiên ngang phất cờ dẫn đầu phong trào cách mạng Thủ đô.</p>
            `,
            source: "Phụ nữ Hà Nội trong Cách mạng Tháng Tám và Kháng chiến chống Pháp, Hội LHPN Thành phố Hà Nội.",
            tag: "Thanh Niên Yêu Nước"
        },
        {
            id: "fig_bao_an_binh",
            name: "Binh Lính & Sĩ Quan Bảo An Binh",
            role: "Lực lượng bảo an bản xứ thời bấy giờ",
            summary: "Lực lượng bảo vệ chính quyền bù nhìn, mang nặng giằng xé giữa nghĩa vụ phụng sự chế độ và lòng yêu nước.",
            bio: `
                <p>Trong Cách mạng Tháng Tám tại Hà Nội, nhờ công tác binh vận sắc bén và chính sách khoan hồng của Việt Minh, phần lớn sĩ quan và binh lính trong Trại Bảo an binh phố Hàng Bài đã thức tỉnh lòng yêu nước, buông súng trao nộp kho vũ khí cho cách mạng mà không gây đổ máu, góp phần quyết định vào thắng lợi vẻ vang của nhân dân Thủ đô.</p>
            `,
            source: "Lịch sử Công tác Binh vận của Đảng Cộng sản Việt Nam, Viện Lịch sử Quân sự Việt Nam.",
            tag: "Binh Vận Cách Mạng"
        }
    ]
};

window.CODEX_DATA = CODEX_DATA;
