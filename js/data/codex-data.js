/**
 * Historical Codex Data for "Bình Minh Tháng Tám - Hà Nội 1945"
 * Tư liệu lịch sử chính thống về Cách mạng Tháng Tám 1945 tại Hà Nội
 */

const CODEX_DATA = {
    documents: [
        {
            id: "doc_quan_lenh_1",
            title: "Quân Lệnh Số 1 (13/08/1945)",
            category: "Văn Kiện Lịch Sử",
            date: "Đêm 13 tháng 8 năm 1945",
            summary: "Lệnh Tổng khởi nghĩa của Ủy ban Khởi nghĩa toàn quốc do Tổng Bí thư Trường Chinh ký duyệt.",
            content: `
                <p><strong>Trích Quân lệnh số 1 của Ủy ban Khởi nghĩa toàn quốc:</strong></p>
                <blockquote>
                    <em>"Hỡi quân dân toàn quốc!... Giờ tổng khởi nghĩa đã đánh! Cơ hội có một cho quân dân Việt Nam vùng dậy giành lấy quyền độc lập của nước nhà!... Chúng ta phải hành động cho nhanh, với một tinh thần vô cùng quả cảm, vô cùng thận trọng!... Tiến lên! Tiến lên! Dưới lá cờ của Việt Minh, đồng bào hãy dũng cảm tiến lên!"</em>
                </blockquote>
                <p>Quân lệnh số 1 phát đi trong đêm 13/8/1945 từ Tân Trào (Tuyên Quang) đã châm ngòi cho ngọn lửa cách mạng bùng cháy khắp ba miền Bắc - Trung - Nam, dẫn tới thắng lợi vĩ đại của Cách mạng Tháng Tám.</p>
            `,
            tag: "Tối Mật - Khởi Nghĩa"
        },
        {
            id: "doc_loi_keu_goi_bac_ho",
            title: "Thư Kêu Gọi Tổng Khởi Nghĩa",
            category: "Văn Kiện Lịch Sử",
            date: "Tháng 8 năm 1945",
            summary: "Lời hịch non sông của Chủ tịch Hồ Chí Minh gửi toàn thể quốc dân đồng bào.",
            content: `
                <blockquote>
                    <em>"Hỡi đồng bào yêu quý!<br>
                    Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta!... Tiến lên! Tiến lên! Dưới lá cờ Việt Minh, đồng bào hãy dũng cảm tiến lên!"</em>
                </blockquote>
                <p>Bức thư lan tỏa tinh thần tự lực cánh sinh, thúc giục hơn 20 triệu đồng bào cả nước nhất tề vùng lên trước khi quân đội các nước đế quốc kéo vào Đông Dương.</p>
            `,
            tag: "Lời Hịch Non Sông"
        },
        {
            id: "doc_tien_quan_ca",
            title: "Bài Ca Khởi Nghĩa: 'Tiến Quân Ca'",
            category: "Âm Nhạc Lịch Sử",
            date: "Cuối năm 1944 - Tháng 8/1945",
            summary: "Nhạc phẩm bất hủ của nhạc sĩ Văn Cao, trở thành Quốc ca của nước Việt Nam.",
            content: `
                <p>Nhạc sĩ Văn Cao sáng tác <em>Tiến quân ca</em> vào mùa đông năm 1944 tại căn gác nhỏ số 171 phố Mai Hắc Đế, Hà Nội. Bài hát được in lần đầu trên trang văn nghệ báo <em>Độc Lập</em> bằng bản in đá bí mật.</p>
                <p>Ngày 17/8/1945, trước Nhà hát Lớn Hà Nội, giữa hàng vạn quần chúng nhân dân, bài hát lần đầu tiên cất lên đầy kiêu hãnh và hòa cùng tiếng hô vang dội: <em>"Ủng hộ Việt Minh!", "Việt Nam độc lập!"</em>.</p>
            `,
            tag: "Quốc Ca"
        }
    ],

    events: [
        {
            id: "evt_17_august",
            title: "Cuộc Biểu Tình Ngày 17/8 Tại Nhà Hát Lớn",
            category: "Sự Kiện Lịch Sử",
            date: "Chiều 17 tháng 8 năm 1945",
            summary: "Việt Minh táo bạo biến cuộc mít tinh của chính quyền thân Nhật thành cuộc tuần hành cách mạng.",
            content: `
                <p>Chiều 17/8/1945, Tổng hội Công chức chính quyền Trần Trọng Kim tổ chức một cuộc mít tinh lớn trước Nhà hát Lớn Hà Nội nhằm phô trương thanh thế và xoa dịu làn sóng cách mạng.</p>
                <p>Nắm chắc thời cơ, Ban Cán sự Đảng Hà Nội chỉ đạo Đội Tuyên truyền Xung phong Thành Hoàng Diệu và tự vệ cứu quốc táo bạo thâm nhập. Khi bài hát của chính phủ bù nhìn vừa vang lên, các đội viên Việt Minh bất ngờ giương cao lá cờ đỏ sao vàng khổng lồ từ tầng 2 Nhà hát Lớn, tước micro và kêu gọi quần chúng đứng lên theo Mặt trận Việt Minh.</p>
                <p>Cuộc mít tinh lập tức biến thành cuộc tuần hành rầm rộ khắp các phố phường Tràng Tiền, Bờ Hồ, Cửa Nam trong tiếng reo hò rực lửa.</p>
            `,
            tag: "Bước Ngoặt Then Chốt"
        },
        {
            id: "evt_19_august",
            title: "Ngày 19/8: Tổng Khởi Nghĩa Toàn Thắng Tại Thủ Đô",
            category: "Sự Kiện Lịch Sử",
            date: "Ngày 19 tháng 8 năm 1945",
            summary: "Hà Nội vùng lên đập tan xiềng xích thực dân - phong kiến, đánh chiếm các cơ quan đầu não.",
            content: `
                <p>Từ sáng sớm 19/8/1945, hơn 20 vạn quần chúng nhân dân từ nội thành và ngoại thành rầm rập tiến về Quảng trường Nhà hát Lớn dưới rừng cờ đỏ sao vàng.</p>
                <p>Sau lời hiệu triệu của Ủy ban Khởi nghĩa, quần chúng chia thành nhiều mũi nhọn tiến công chiếm:</p>
                <ul>
                    <li><strong>Phủ Khâm sai Bắc Bộ</strong> (Bắc Bộ Phủ) - sào huyệt chính quyền bù nhìn.</li>
                    <li><strong>Trại Bảo an binh</strong> phố Hàng Bài - thu giữ hàng ngàn khẩu súng và đạn dược.</li>
                    <li><strong>Sở Mật thám, Tòa Đốc lý, Bưu điện Bờ Hồ, Sở Cảnh sát...</strong></li>
                </ul>
                <p>Trước sức mạnh áp đảo của nhân dân và tài thương thuyết khéo léo của các đại diện Việt Minh, quân đội Nhật hoàng đã phải chấp nhận án binh bất động trong doanh trại, tránh được tổn thất xương máu to lớn.</p>
            `,
            tag: "Đại Thắng"
        },
        {
            id: "evt_thanh_hoang_dieu",
            title: "Đội Tuyên Truyền Xung Phong Thành Hoàng Diệu",
            category: "Lực Lượng Nòng Cốt",
            date: "1944 - 1945",
            summary: "Đội quân xung kích thanh niên, học sinh, sinh viên yêu nước của Mặt trận Việt Minh Hà Nội.",
            content: `
                <p>Thành lập tháng 8/1944 tại chùa Quảng Bá (Hà Nội), Đội Tuyên truyền Xung phong Thành Hoàng Diệu gồm những thanh niên, sinh viên, học sinh quả cảm.</p>
                <p>Họ hoạt động bán công khai và bí mật: in truyền đơn, diễn thuyết chớp nhoáng trên xe điện, rạp hát, chợ Hôm, chợ Đồng Xuân, trừ gian diệt ác và làm nòng cốt trong các cuộc biểu tình giành chính quyền tại Hà Nội tháng Tám năm 1945.</p>
            `,
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
                <p>Đồng chí Nguyễn Khang là Thường vụ Xứ ủy Bắc Kỳ, phụ trách phong trào cách mạng Hà Nội. Trước tình thế Nhật đầu hàng và lệnh từ Trung ương chưa kịp về tới nơi do đường sá liên lạc khó khăn, đồng chí cùng Thường vụ Xứ ủy đã dũng cảm, quyết đoán ra quyết định khởi nghĩa giành chính quyền tại Hà Nội vào ngày 19/8/1945.</p>
                <p>Sự chủ động, sáng tạo ấy đã tạo tiền đề và cổ vũ mạnh mẽ cho cuộc Tổng khởi nghĩa trên toàn quốc mau chóng thành công.</p>
            `
        },
        {
            id: "fig_thao_student",
            name: "Nữ Sinh Kháng Chiến (Hình tượng văn học lịch sử)",
            role: "Đội viên Thanh niên Cứu quốc Hà Nội",
            summary: "Đại diện cho hàng ngàn nữ sinh Đồng Khánh, Trưng Vương gan dạ tham gia cứu quốc.",
            bio: `
                <p>Nhân vật Thảo được xây dựng dựa trên hình tượng những nữ thanh niên, nữ sinh tiêu biểu của Hà Nội như bà Lê Thi (người kéo cờ tại Quảng trường Ba Đình ngày 2/9/1945), bà Từ Ngọc Liễn,... Họ đã từ bỏ cuộc sống nhung lụa để đi theo cách mạng, giấu truyền đơn trong tà áo dài, vận động binh lính và hiên ngang phất cờ trước họng súng phát xít.</p>
            `
        },
        {
            id: "fig_bao_an_binh",
            name: "Binh Lính & Sĩ Quan Bảo An Binh",
            role: "Lực lượng vũ trang bản xứ thời bấy giờ",
            summary: "Lực lượng cảnh vệ thuộc quyền bảo hộ, mang nặng mâu thuẫn giữa nghĩa vụ và lòng yêu nước.",
            bio: `
                <p>Trong Cách mạng Tháng Tám, nhờ công tác binh vận sắc bén của Việt Minh, phần lớn sĩ quan và binh lính trong Trại Bảo an binh phố Hàng Bài đã thức tỉnh lòng yêu nước, buông súng trao nộp kho vũ khí cho cách mạng mà không gây đổ máu, góp phần quyết định vào thắng lợi vẻ vang của nhân dân Thủ đô.</p>
            `
        }
    ]
};

window.CODEX_DATA = CODEX_DATA;
