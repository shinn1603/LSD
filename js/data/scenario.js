/**
 * Scenario & Branching Script for "Cách Mạng Tháng Tám 1945 - Hà Nội"
 * Học phần: Lịch Sử Đảng Cộng Sản Việt Nam (Bậc Đại học)
 * Căn cứ: Giáo trình Lịch sử Đảng Cộng sản Việt Nam - NXB Chính trị quốc gia Sự thật (Chương I - Mục III)
 * Tái hiện vai trò lãnh đạo của Đảng Cộng sản Đông Dương, Ban Thường vụ Trung ương Đảng,
 * Tổng Bí thư Trường Chinh, Xứ ủy Bắc Kỳ và Thành ủy Hà Nội từ đêm 14/08 đến 19/08/1945.
 */

const SCENARIO_DATA = {
    initialStats: {
        morale: 40,
        readiness: 35,
        garrison: 30,
        alert: 30
    },

    nodes: {
        // ==========================================
        // HỒI 1: ĐÊM 14/08/1945 - QUÁN TRIỆT CHỈ THỊ CỦA ĐẢNG
        // CĂN GÁC BÍ MẬT PHỐ HÀNG BÔNG, HÀ NỘI
        // ==========================================
        "start": {
            id: "start",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            date: "Đêm 14 tháng 8 năm 1945",
            location: "Căn gác bí mật Thành ủy Hà Nội, phố Hàng Bông",
            background: "assets/images/bg_safehouse.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Đêm 14 tháng 8 năm 1945. Hà Nội chìm trong bầu không khí ngột ngạt trước cơn bão táp cách mạng. Trong căn gác bí mật của Thành ủy tại phố Hàng Bông, ngọn đèn bão leo lét soi rọi chiếc máy in roneo đang chạy hết công suất.",
            sfx: "typewriter",
            next: "act1_1"
        },
        "act1_1": {
            id: "act1_1",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Bạn là Vũ Minh - Đảng viên Đảng Cộng sản Đông Dương thuộc Thành ủy Hà Nội, phụ trách Đội Tuyên truyền Xung phong Việt Minh. Đồng chí Lâm, cán bộ Thường trực Thành ủy kiêm liên lạc viên Xứ ủy Bắc Kỳ, vừa vội vã vượt qua mạng lưới mật thám bước vào phòng.",
            sfx: "typewriter",
            next: "act1_2"
        },
        "act1_2": {
            id: "act1_2",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Đồng chí Vũ Minh! Đài phát thanh Đồng minh vừa phát đi tin chính thức: Nhật hoàng Hirohito đã tuyên bố đầu hàng Đồng minh không điều kiện! Đúng như Ban Thường vụ Trung ương Đảng đã dự báo trong Chỉ thị ngày 12/3/1945!",
            sfx: "tension",
            shake: true,
            next: "act1_3"
        },
        "act1_3": {
            id: "act1_3",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Thảo (Hội Phụ nữ Cứu quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Kẻ thù chính của cách mạng đã ngã gục! Quân đội viễn chinh phát xít Nhật ở Hà Nội đang hoang mang, dao động tột độ; chính quyền bù nhìn Trần Trọng Kim tê liệt rệu rã. Thời cơ nghìn năm có một đã thực sự đến rồi!",
            sfx: "typewriter",
            next: "act1_4"
        },
        "act1_4": {
            id: "act1_4",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Đúng vậy! Trung ương Đảng và Tổng bộ Việt Minh tại Tân Trào đã thành lập Ủy ban Khởi nghĩa toàn quốc, ban bố Quân lệnh số 1 trong đêm 13/8 phát lệnh Tổng khởi nghĩa. Nguy cơ lớn là quân Tưởng và quân viễn chinh Pháp đang lăm le tràn vào nước ta. Ta phải giành chính quyền trước khi quân Đồng minh kịp tới!",
            sfx: "typewriter",
            next: "act1_5"
        },
        "act1_5": {
            id: "act1_5",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Tuy nhiên, đường dây giao thông liên lạc từ Tân Trào về xuôi đang bị đứt đoạn. Mệnh lệnh bằng văn bản chưa thể về kịp trong đêm nay. Theo tinh thần Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta', tổ chức Đảng ta ở Hà Nội phải hành động ra sao, đồng chí Vũ Minh?",
            sfx: "typewriter",
            choices: [
                {
                    text: "Chủ động, quyết đoán theo chỉ đạo của Đảng: In ngay truyền đơn mang tinh thần Quân lệnh số 1, huy động công nhân Cứu quốc nhà máy điện Yên Phụ, xe lửa Gia Lâm chuẩn bị tổng bãi công, biểu tình thị uy.",
                    statChanges: { morale: 20, readiness: 15, alert: 5 },
                    unlockCodex: "doc_quan_lenh_1",
                    cutscene: {
                        tag: "QUÁN TRIỆT CHỈ THỊ ĐẢNG",
                        title: "PHÁT ĐỘNG CAO TRÀO KHỞI NGHĨA",
                        frames: [
                            {
                                image: "assets/images/cutscene_rush_alley.jpg",
                                title: "CHẤP HÀNH NGHỊ QUYẾT TRONG ĐÊM",
                                speaker: "Lời Dẫn",
                                text: "Thời cơ ngàn năm có một, Đảng chỉ rõ không thể chần chừ một khắc. Người đảng viên trẻ nhận lệnh từ Thành ủy, xé toang bóng đêm Hà Nội mang chỉ đạo của Đảng tỏa đi các cơ sở bí mật.",
                                sfx: "tension",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_print_press.jpg",
                                title: "MÁY IN RONEO CHẠY SUỐT ĐÊM",
                                speaker: "Lời Dẫn",
                                text: "Dưới ánh đèn dầu leo lét, chiếc máy in roneo của Thành ủy Hà Nội rít lên liên hồi. Từng chồng truyền đơn đỏ thắm in rõ Lời kêu gọi của Đảng và Mặt trận Việt Minh cấp tốc xuất xưởng.",
                                sfx: "typewriter"
                            },
                            {
                                image: "assets/images/cutscene_distribute_leaflets.jpg",
                                title: "TRUYỀN ĐƠN ĐẢNG LAN KHẮP CÁC CỬA Ô",
                                speaker: "Lời Dẫn",
                                text: "Mờ sáng, các đội viên Phụ nữ Cứu quốc và Thanh niên Cứu quốc tỏa về ga Hàng Cỏ, chợ Đồng Xuân, xưởng xe lửa Gia Lâm trao tận tay công nhân lời hịch khởi nghĩa của Đảng.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act1_choice_bold"
                },
                {
                    text: "Thận trọng điều tra: Vừa tuyên truyền giác ngộ quần chúng, vừa trinh sát nắm chắc hệ thống bố phòng doanh trại Nhật và Trại Bảo an binh để báo cáo Xứ ủy.",
                    statChanges: { readiness: 10, garrison: 15, alert: -5 },
                    cutscene: {
                        tag: "ĐIỀU TRA NẮM CHẮC TÌNH HÌNH ĐỊCH",
                        title: "BƯỚC CHÂN TRONG BÓNG ĐÊM",
                        frames: [
                            {
                                image: "assets/images/cutscene_recon_night.jpg",
                                title: "ÁP SÁT BỐT GÁC QUÂN PHÁT XÍT",
                                speaker: "Lời Dẫn",
                                text: "Tổ trinh sát của Thành ủy bám sát từng ụ cát súng máy và doanh trại lính Nhật phố Hàng Bài, ghi chép tỉ mỉ thời gian đổi gác và bố phòng quân sự để báo cáo Ban Thường vụ.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/cutscene_plan_map.jpg",
                                title: "HOÀN THIỆN PHƯƠNG ÁN TÁC CHIẾN",
                                speaker: "Lời Dẫn",
                                text: "Dưới ánh đèn dầu, bản đồ hệ thống phòng thủ của địch được cán bộ Đảng hoàn thiện chính xác. Nắm chắc lực lượng đối phương giúp ta chủ động giành thắng lợi với tổn thất thấp nhất.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act1_choice_cautious"
                },
                {
                    text: "Chờ đợi thụ động: Án binh bất động, kiên quyết ngồi chờ chỉ thị bằng văn bản chính thức đóng dấu từ Tân Trào gửi về rồi mới dám phát động phong trào.",
                    statChanges: { morale: -20, readiness: -15, alert: -10 },
                    cutscene: {
                        tag: "DAO ĐỘNG CHỜ ĐỢI",
                        title: "NGUY CƠ BỎ LỠ THỜI CƠ",
                        frames: [
                            {
                                image: "assets/images/cutscene_safehouse_wait.jpg",
                                title: "CĂN GÁC IM LÌM",
                                speaker: "Lời Dẫn",
                                text: "Căn gác phố Hàng Bông chìm trong khoảng lặng thụ động. Sự chần chừ, máy móc chờ chỉ thị giấy tờ giữa lúc liên lạc bị chia cắt có nguy cơ biến thời cơ ngàn năm của Đảng trôi qua kẽ tay.",
                                sfx: "tension"
                            }
                        ]
                    },
                    next: "act1_choice_hesitant"
                }
            ]
        },

        "act1_choice_bold": {
            id: "act1_choice_bold",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Thảo (Hội Phụ nữ Cứu quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Đồng chí Vũ Minh quán triệt rất đúng tinh thần của Đảng! Chỉ thị 12/3/1945 đã nêu rõ: 'Dù chưa có chỉ thị của Trung ương, địa phương có điều kiện là phải chủ động đứng lên'! Em sẽ cùng chị em phụ nữ giấu truyền đơn trong quai làn, tỏa ngay đi các chợ!",
            sfx: "choice",
            next: "act2_intro"
        },

        "act1_choice_cautious": {
            id: "act1_choice_cautious",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Rất thấu đáo! Đảng ta luôn nhấn mạnh phương châm 'vô cùng quả cảm, vô cùng thận trọng'. Nắm chắc tình hình Trại Bảo an binh và phản ứng của quân Nhật sẽ giúp Thành ủy đưa ra phương án khởi nghĩa chắc thắng nhất.",
            sfx: "choice",
            next: "act2_intro"
        },

        "act1_choice_hesitant": {
            id: "act1_choice_hesitant",
            chapter: "Hồi 1: Ban Thường Vụ Trung Ương Đảng Phát Lệnh Tổng Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Đồng chí Vũ Minh! Nhận thức như vậy là biểu hiện của sự thụ động, ỷ lại! Đảng đã dự liệu tình huống đứt liên lạc và trao quyền chủ động cho Xứ ủy. Nếu ngồi chờ văn bản chính thức, quân địch kịp trấn tĩnh, thời cơ vàng sẽ vuột mất!",
            sfx: "tension",
            next: "act2_intro"
        },

        // ==========================================
        // HỒI 2: CHIỀU 17/08/1945 - QUYẾT ĐỊNH XỨ ỦY BẮC KỲ
        // BIẾN MÍT TINH CỦA ĐỊCH THÀNH BIỂU DƯƠNG LỰC LƯỢNG CÁCH MẠNG
        // ==========================================
        "act2_intro": {
            id: "act2_intro",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            date: "Chiều 17 tháng 8 năm 1945",
            location: "Quảng trường Nhà hát Lớn Hà Nội",
            background: "assets/images/bg_revolution.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Trước đó, chiều 15/8/1945 tại làng Vạn Phúc (Hà Đông), Ban Thường vụ Xứ ủy Bắc Kỳ do đồng chí Nguyễn Khang chủ trì đã quyết định thành lập Ủy ban Quân sự Cách mạng (Ủy ban Khởi nghĩa Hà Nội) và ấn định ngày 19/8 khởi nghĩa giành chính quyền. Đến chiều 17/8, chính quyền bù nhìn tay sai tổ chức mít tinh lớn của Tổng hội Viên chức trước Nhà hát Lớn hòng lôi kéo dư luận.",
            sfx: "typewriter",
            next: "act2_1"
        },
        "act2_1": {
            id: "act2_1",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Hàng vạn công chức, học sinh và dân chúng tụ tập chật kín quảng trường. Nhận định thời cơ biểu dương lực lượng, Thành ủy Hà Nội và Ban Thường vụ Xứ ủy đã chỉ thị cho Đội Tuyên truyền Xung phong Việt Minh và tự vệ bằng mọi giá phải biến cuộc mít tinh của địch thành cuộc biểu dương sức mạnh cách mạng.",
            sfx: "typewriter",
            next: "act2_2"
        },
        "act2_2": {
            id: "act2_2",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo (Hội Phụ nữ Cứu quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Đồng chí Vũ Minh! Em và các đội viên Đội Tuyên truyền Xung phong Thành Hoàng Diệu đã bí mật ém quân trên tầng hai Nhà hát Lớn. Trong áo em giấu lá cờ đỏ sao vàng bằng lụa đỏ rộng bốn mét. Tên đại diện chính quyền bù nhìn chuẩn bị đọc diễn văn rồi!",
            sfx: "typewriter",
            next: "act2_3"
        },
        "act2_3": {
            id: "act2_3",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Viên chức bù nhìn bước tới bục micro. Hàng vạn ánh mắt quần chúng đang ngơ ngác, phân vân dõi theo. Tình thế đòi hỏi sự chỉ đạo chớp nhoáng theo đúng chủ trương của Thành ủy!",
            sfx: "tension",
            choices: [
                {
                    text: "Chấp hành kế hoạch táo bạo của Thành ủy: Buông lá cờ đỏ sao vàng khổng lồ từ tầng 2, tước micro đọc Lời Hiệu Triệu của Mặt trận Việt Minh và dẫn đầu đoàn tuần hành thị uy.",
                    statChanges: { morale: 25, readiness: 15, alert: 5 },
                    unlockCodex: "evt_17_august",
                    cutscene: {
                        tag: "NGHỆ THUẬT LÃNH ĐẠO CỦA ĐẢNG",
                        title: "CƯỚP DIỄN ĐÀN - BIỂU DƯƠNG LỰC LƯỢNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_storm_podium.jpg",
                                title: "CƯỚP DIỄN ĐÀN CỦA CHÍNH QUYỀN TAY SAI",
                                speaker: "Lời Dẫn",
                                text: "Theo đúng kế hoạch của Thành ủy, chiến sĩ Đội Tuyên truyền Xung phong bất ngờ vọt lên lễ đài, tước phăng micro của tên tay sai, dõng dạc đọc Lời Hiệu Triệu cứu quốc của Mặt trận Việt Minh.",
                                sfx: "choice",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_flag_opera.jpg",
                                title: "LÁ CỜ ĐỎ SAO VÀNG RỰC RỠ",
                                speaker: "Lời Dẫn",
                                text: "Từ ban công tầng hai Nhà hát Lớn, lá cờ đỏ sao vàng khổng lồ buông phủ xuống mặt tiền! Giây phút thiêng liêng khiến cả quảng trường nín thở rồi vỡ òa trong tiếng reo hò dậy sóng.",
                                sfx: "fanfare",
                                flash: true
                            },
                            {
                                image: "assets/images/bg_revolution.jpg",
                                title: "TIẾN QUÂN CA VANG DỘI THỦ ĐÔ",
                                speaker: "Lời Dẫn",
                                text: "Bài hát 'Tiến Quân Ca' lần đầu vang lên giữa lòng Hà Nội! Cuộc mít tinh của địch hoàn toàn biến thành cuộc biểu tình thị uy rầm rộ của quần chúng cách mạng dưới ngọn cờ của Đảng.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act2_choice_hijack"
                },
                {
                    text: "Thận trọng: Chỉ đứng rải rác trong đám đông tán phát truyền đơn của Đảng và hô khẩu hiệu ủng hộ Việt Minh.",
                    statChanges: { morale: 5, readiness: 5, alert: -5 },
                    cutscene: {
                        tag: "VẬN ĐỘNG TRONG LẶNG LẼ",
                        title: "KHÍ THẾ CHƯA ĐƯỢC THỔI BÙNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_leaflets_crowd.jpg",
                                title: "RẢI TRUYỀN ĐƠN BÍ MẬT",
                                speaker: "Lời Dẫn",
                                text: "Len lỏi giữa dòng người đông đúc, từng tập truyền đơn bí mật của Đảng được chuyền tay, nhưng thiếu ngọn cờ lãnh đạo công khai để dẫn dắt hàng vạn người.",
                                sfx: "unlock"
                            },
                            {
                                image: "assets/images/cutscene_reading_leaflets.jpg",
                                title: "QUẦN CHÚNG CÒN NGƠ NGÁC",
                                speaker: "Lời Dẫn",
                                text: "Quần chúng đón đọc truyền đơn nhưng không khí chung vẫn còn dè dặt, ta chưa tận dụng triệt để diễn đàn của địch để phô trương sức mạnh cách mạng.",
                                sfx: "typewriter"
                            }
                        ]
                    },
                    next: "act2_choice_subtle"
                },
                {
                    text: "Manh động: Ra lệnh cho tổ tự vệ nổ súng chỉ thiên xua đuổi các viên chức thân Nhật để giải tán cuộc mít tinh.",
                    statChanges: { morale: -15, readiness: -10, alert: 35 },
                    shake: true,
                    cutscene: {
                        tag: "MANH ĐỘNG TỰ PHÁT",
                        title: "VI PHẠM PHƯƠNG CHÂM CỦA ĐẢNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_gunshot_warning.jpg",
                                title: "TIẾNG SÚNG LÀM VỠ TRẬN",
                                speaker: "Lời Dẫn",
                                text: "Tiếng súng nổ chỉ thiên bất ngờ khiến đám đông hoảng loạn tháo chạy giẫm đạp lên nhau. Sự manh động tự phát đã làm hỏng thời cơ tập hợp và biểu dương sức mạnh quần chúng.",
                                sfx: "tension",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_chaos_barricade.jpg",
                                title: "QUÂN NHẬT KÉO RÀO PHONG TỎA",
                                speaker: "Lời Dẫn",
                                text: "Tiếng súng nổ tạo cớ cho lính Nhật kéo rào thép gai phong tỏa khu vực Nhà hát Lớn, gây khó khăn cho việc triển khai kế hoạch khởi nghĩa ngày 19/8 của Đảng.",
                                sfx: "tension"
                            }
                        ]
                    },
                    next: "act2_choice_violent"
                }
            ]
        },

        "act2_choice_hijack": {
            id: "act2_choice_hijack",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Lá cờ đỏ sao vàng kiêu hãnh tung bay! Chiến sĩ Đội Tuyên truyền Xung phong Việt Minh giương cao loa kêu gọi: 'Hỡi đồng bào Thủ đô! Phát xít Nhật đã quỳ gối! Dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh, toàn dân hãy đứng dậy giành lấy chính quyền!'.",
            sfx: "fanfare",
            flash: true,
            next: "act2_hijack_2"
        },
        "act2_hijack_2": {
            id: "act2_hijack_2",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo (Hội Phụ nữ Cứu quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Hàng vạn cánh tay giơ cao hô vang: 'Ủng hộ Việt Minh!', 'Việt Nam hoàn toàn độc lập!'. Cảnh sát bù nhìn buông súng hòa vào dòng người. Cuộc diễn tập quần chúng vĩ đại ngày 17/8 đã thổi bùng ngọn lửa chuẩn bị cho ngày Tổng khởi nghĩa 19/8!",
            sfx: "unlock",
            unlockCodex: "doc_tien_quan_ca",
            next: "act3_intro"
        },

        "act2_choice_subtle": {
            id: "act2_choice_subtle",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Ta đã bảo toàn được cơ sở, nhưng đã bỏ lỡ mất một cơ hội vàng để biến cuộc mít tinh của địch thành màn tập dượt biểu dương lực lượng quần chúng cách mạng theo đúng chỉ đạo của Xứ ủy...",
            sfx: "tension",
            next: "act3_intro"
        },

        "act2_choice_violent": {
            id: "act2_choice_violent",
            chapter: "Hồi 2: Quyết Định Lịch Sử Của Xứ Ủy Bắc Kỳ & Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Tiếng súng nổ tự phát đã vi phạm phương châm khởi nghĩa của Đảng! Đám đông tan tác, lính Nhật ở khách sạn Metropole lập tức tăng cường chốt chặn, đe dọa trực tiếp đến kế hoạch Tổng khởi nghĩa ngày 19/8.",
            sfx: "tension",
            next: "act3_intro"
        },

        // ==========================================
        // HỒI 3: ĐÊM 18/08/1945 - THÀNH ỦY HÀ NỘI CHỈ ĐẠO BINH VẬN
        // ĐỐI MẶT TẠI TRẠI BẢO AN BINH PHỐ HÀNG BÀI
        // ==========================================
        "act3_intro": {
            id: "act3_intro",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            date: "Đêm 18 tháng 8 năm 1945",
            location: "Trước cổng Trại Bảo an binh, phố Hàng Bài, Hà Nội",
            background: "assets/images/bg_garrison.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Đêm 18 tháng 8 năm 1945. Không khí khởi nghĩa hừng hực khắp các cửa ô. Tuy nhiên, Trại Bảo an binh tại phố Hàng Bài vẫn là một trọng điểm nguy hiểm bậc nhất trong kế hoạch khởi nghĩa của Thành ủy.",
            sfx: "typewriter",
            next: "act3_1"
        },
        "act3_1": {
            id: "act3_1",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Bên trong trại có hơn 1.000 lính bảo an trang bị súng đạn hiện đại. Nếu lực lượng này nổ súng chống cự vào sáng 19/8, tiếng súng sẽ tạo cớ cho các tiểu đoàn xe tăng của quân Nhật can thiệp quân sự, gây tổn thất lớn cho quần chúng.",
            sfx: "typewriter",
            next: "act3_2"
        },
        "act3_2": {
            id: "act3_2",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Đồng chí Vũ Minh! Chủ trương của Đảng ta là: 'Triệt để phân hóa và cô lập kẻ thù, lôi kéo binh lính bản xứ về phía nhân dân'. Ta không dùng xung đột vũ trang đối đầu trực tiếp, mà phải vào tận sào huyệt thực hiện công tác binh vận ngay trong đêm nay!",
            sfx: "typewriter",
            next: "act3_3"
        },
        "act3_3": {
            id: "act3_3",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh là cán bộ Việt Minh?! Các anh to gan lắm! Có biết chỉ cần một hiệu lệnh của tôi, cả nghìn tay súng bảo an sẽ bao vây các anh ngay lập tức không?",
            sfx: "tension",
            choices: [
                {
                    text: "Quán triệt đường lối cứu quốc và chính sách khoan hồng của Đảng: 'Đảng và Mặt trận Việt Minh luôn coi binh lính người Việt là con Lạc cháu Hồng bị lừa gạt. Phát xít Nhật đã đầu hàng, chính phủ tay sai đã tan rã. Hãy quay súng về với Tổ quốc để lập công chuộc tội!'",
                    statChanges: { garrison: 35, morale: 15, alert: -10 },
                    unlockCodex: "fig_bao_an_binh",
                    cutscene: {
                        tag: "CÔNG TÁC BINH VẬN CỦA ĐẢNG",
                        title: "THỨC TỈNH TINH THẦN YÊU NƯỚC",
                        frames: [
                            {
                                image: "assets/images/bg_garrison.jpg",
                                title: "VÀO THẲNG PHÒNG CHỈ HUY",
                                speaker: "Lời Dẫn",
                                text: "Cán bộ Đảng tay không vũ khí, đĩnh đạc bước qua hàng lính gác lưỡi lê phố Hàng Bài, tiến thẳng vào bàn chỉ huy đối thoại trực tiếp bằng chính nghĩa cách mạng.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/cutscene_talk_commander.jpg",
                                title: "LÝ LẼ CHÍNH NGHĨA CỦA ĐẢNG",
                                speaker: "Lời Dẫn",
                                text: "Đường lối đại đoàn kết toàn dân và chính sách khoan hồng của Đảng đã đánh trúng tâm can người lính, phân tích rõ tiền đồ đất nước và nghĩa vụ với non sông.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/char_bao_an.jpg",
                                title: "CAM KẾT QUY THUẬN CÁCH MẠNG",
                                speaker: "Lời Dẫn",
                                text: "Viên chỉ huy cúi đầu cảm phục, cam kết: Sáng mai khi cờ đỏ sao vàng tiến tới, toàn trại sẽ buông súng mở toang cổng và bàn giao toàn bộ kho vũ khí cho nhân dân.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act3_choice_reason"
                },
                {
                    text: "Đưa tối hậu thư áp đảo: 'Ủy ban Khởi nghĩa Hà Nội cảnh cáo: Hai mươi vạn nhân dân ngày mai sẽ san phẳng nơi này nếu các anh chống cự. Hãy nộp súng đầu hàng!'",
                    statChanges: { garrison: 10, morale: 10, alert: 10 },
                    cutscene: {
                        tag: "ĐỐI ĐẦU NGHẸT THỞ",
                        title: "LẰN RANH CĂNG THẲNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_threat_dialogue.jpg",
                                title: "TUYÊN ĐỌC TỐI HẬU THƯ",
                                speaker: "Lời Dẫn",
                                text: "Tối hậu thư đanh thép được đưa ra khiến viên sĩ quan tái mặt, nhưng sự đe dọa đơn thuần làm tăng thêm nghi ngại và phòng thủ trong trại lính.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/cutscene_barracks_tension.jpg",
                                title: "TIẾNG LÊN ĐẠN TRONG BÓNG TỐI",
                                speaker: "Lời Dẫn",
                                text: "Trong các góc tối, tiếng lên đạn lách cách căng thẳng. Thiếu đi sự giác ngộ về chính trị, tình thế giằng co đối đầu kéo dài đầy nguy cơ rủi ro.",
                                sfx: "tension"
                            }
                        ]
                    },
                    next: "act3_choice_threat"
                },
                {
                    text: "Chấp nhận thỏa hiệp trung lập: 'Các anh không cần đi theo cách mạng, chỉ cần cam kết đóng chặt cổng trại và không nổ súng vào nhân dân ngày mai.'",
                    statChanges: { garrison: 5, readiness: -10, alert: 0 },
                    cutscene: {
                        tag: "TRUNG LẬP HÓA BỊ ĐỘNG",
                        title: "KHO SÚNG BỊ KHÓA CHẶT",
                        frames: [
                            {
                                image: "assets/images/cutscene_iron_gate.jpg",
                                title: "CỔNG SẮT KHÉP CHẶT",
                                speaker: "Lời Dẫn",
                                text: "Cánh cổng sắt nặng nề khép kín. Trại lính cam kết không can thiệp, nhưng ta chưa thu phục được lực lượng này về với cách mạng.",
                                sfx: "typewriter"
                            },
                            {
                                image: "assets/images/cutscene_armory_locked.jpg",
                                title: "KHO VŨ KHÍ BỊ NIÊM PHONG",
                                speaker: "Lời Dẫn",
                                text: "Kho vũ khí chiến lược hơn một nghìn khẩu súng vẫn nằm nguyên sau song sắt, lực lượng tự vệ của ta mất đi cơ hội trang bị hỏa lực quý báu.",
                                sfx: "tension"
                            }
                        ]
                    },
                    next: "act3_choice_neutral"
                }
            ]
        },

        "act3_choice_reason": {
            id: "act3_choice_reason",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các đồng chí... nói rất đúng! Lương tâm người Việt không cho phép chúng tôi tiếp tục cầm súng bảo vệ chế độ tay sai. Tôi xin hứa danh dự: Sáng mai khi đoàn biểu tình của Đảng và Mặt trận tiến tới, toàn thể binh lính Trại Hàng Bài sẽ mở cổng và trao nộp toàn bộ kho vũ khí cho cách mạng!",
            sfx: "unlock",
            next: "act4_intro"
        },

        "act3_choice_threat": {
            id: "act3_choice_threat",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh đừng dọa chúng tôi! Chúng tôi có súng, có công sự! Sáng mai nếu nhân dân thực sự đứng lên ủng hộ các anh, chúng tôi mới cân nhắc có nên buông vũ khí hay không!",
            sfx: "tension",
            next: "act4_intro"
        },

        "act3_choice_neutral": {
            id: "act3_choice_neutral",
            chapter: "Hồi 3: Thành Ủy Chỉ Đạo Binh Vận & Vô Hiệu Hóa Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Được, các anh rời khỏi đây an toàn. Sáng mai chúng tôi án binh bất động trong trại, không nổ súng chống lại đoàn biểu tình, nhưng cũng sẽ không bàn giao kho súng.",
            sfx: "typewriter",
            next: "act4_intro"
        },

        // ==========================================
        // HỒI 4: NGÀY 19/08/1945 - TỔNG KHỞI NGHĨA TOÀN THẮNG
        // NGHỆ THUẬT NGOẠI GIAO QUÂN SỰ CỦA ĐẢNG TRƯỚC HỌNG SÚNG QUÂN NHẬT
        // ==========================================
        "act4_intro": {
            id: "act4_intro",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng & Ngoại Giao Quân Sự",
            date: "Sáng 19 tháng 8 năm 1945",
            location: "Quảng trường Nhà hát Lớn & Bắc Bộ Phủ",
            background: "assets/images/bg_revolution.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Sáng 19 tháng 8 năm 1945! Dưới sự lãnh đạo của Ủy ban Khởi nghĩa Hà Nội, hơn hai mươi vạn nhân dân từ khắp các cửa ô: Cầu Giấy, Đống Đa, Bạch Mai, Ba Đình cuồn cuộn đổ về Quảng trường Nhà hát Lớn trong biển cờ đỏ sao vàng rực rỡ!",
            sfx: "fanfare",
            flash: true,
            next: "act4_1"
        },
        "act4_1": {
            id: "act4_1",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng & Ngoại Giao Quân Sự",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo (Hội Phụ nữ Cứu quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Đồng chí Vũ Minh ơi! Theo sự phân công của Ủy ban Khởi nghĩa, quần chúng đã chia thành các mũi tiến công, đánh chiếm Phủ Khâm sai Bắc Bộ, Tòa Đốc lý và Sở Cảnh sát! Nhưng nhìn đằng kia xem!",
            sfx: "tension",
            shake: true,
            next: "act4_2"
        },
        "act4_2": {
            id: "act4_2",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng & Ngoại Giao Quân Sự",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Tiếng xích sắt gầm rú nghiến mặt đường đá Tràng Tiền! Bốn xe bọc thép hạng nặng cùng hai tiểu đoàn lính Nhật từ Phủ Toàn quyền ập tới, dàn đội hình tác chiến, chĩa nòng súng máy hạng nặng vào Bắc Bộ Phủ và Trại Bảo an binh!",
            sfx: "tension",
            shake: true,
            next: "act4_3"
        },
        "act4_3": {
            id: "act4_3",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng & Ngoại Giao Quân Sự",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Tình hình ngàn cân treo sợi tóc! Lính Nhật đang ngón tay đặt trên cò súng. Ban Thường vụ Xứ ủy đã chỉ thị: Phải triệt để tránh xung đột vũ trang với quân đội Nhật, dùng áp lực chính trị kết hợp đàm phán ngoại giao quân sự buộc chúng án binh bất động! Đồng chí Vũ Minh, ta xử trí thế nào?",
            sfx: "typewriter",
            choices: [
                {
                    text: "Vận dụng sáng tạo nghệ thuật ngoại giao quân sự của Đảng: Cùng phái đoàn Ủy ban Khởi nghĩa đĩnh đạc tiến ra đối mặt chỉ huy quân Nhật, khẳng định quyền tự quyết của nhân dân Việt Nam, cam kết an toàn cho lính Nhật chờ hồi hương và yêu cầu Nhật án binh bất động.",
                    statChanges: { morale: 20, garrison: 20, alert: -25 },
                    unlockCodex: "evt_19_august",
                    cutscene: {
                        tag: "BẢN LĨNH NGOẠI GIAO CỦA ĐẢNG",
                        title: "ĐỐI MẶT HỌNG SÚNG XE TĂNG NHẬT",
                        frames: [
                            {
                                image: "assets/images/cutscene_negotiation.jpg",
                                title: "CHẶN ĐẦU ĐOÀN XE THIẾT GIÁP",
                                speaker: "Lời Dẫn",
                                text: "Dù nòng pháo đại bác của xe tăng Nhật chĩa thẳng, phái đoàn cán bộ của Ủy ban Khởi nghĩa vẫn đĩnh đạc tiến lên đứng sừng sững trước cổng Bắc Bộ Phủ đàm phán trực diện.",
                                sfx: "tension",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_negotiation_face.jpg",
                                title: "LẬP LUẬN ĐANH THÉP CỦA CÁCH MẠNG",
                                speaker: "Lời Dẫn",
                                text: "Đại diện cách mạng khẳng định: Nhân dân Việt Nam giành lại độc lập từ chính quyền bù nhìn, cam đoan bảo toàn tính mạng danh dự cho lính Nhật chờ hồi hương nếu họ không can thiệp.",
                                sfx: "unlock"
                            },
                            {
                                image: "assets/images/cutscene_tanks_withdraw.jpg",
                                title: "XE TĂNG RÚT LUI - KHỞI NGHĨA TOÀN THẮNG",
                                speaker: "Lời Dẫn",
                                text: "Trước bản lĩnh kiên cường của Đảng và biển người bao vây, chỉ huy quân Nhật chấp nhận yêu sách, ra lệnh xe tăng nổ máy lùi dần về doanh trại! Lá cờ đỏ sao vàng ngạo nghễ tung bay!",
                                sfx: "fanfare",
                                flash: true
                            }
                        ]
                    },
                    evalEnding: true
                },
                {
                    text: "Kêu gọi quần chúng tự vệ dùng tay không và giáo mác xông lên húc xe tăng bọc thép của quân Nhật bằng tinh thần quyết tử.",
                    statChanges: { morale: 10, readiness: -20, alert: 40 },
                    shake: true,
                    cutscene: {
                        tag: "XUNG ĐỘT NGOÀI Ý MUỐN",
                        title: "BÃO LỬA TRƯỚC BẮC BỘ PHỦ",
                        frames: [
                            {
                                image: "assets/images/cutscene_clash_tanks.jpg",
                                title: "XUNG ĐỘT KHỐC LIỆT ĐẪM MÁU",
                                speaker: "Lời Dẫn",
                                text: "Sự manh động đã dẫn tới hỏa lực súng máy xe tăng đối phương nổ xé toạc bầu trời. Dù quần chúng dũng cảm hy sinh bảo vệ công sở, thắng lợi phải trả giá bằng xương máu đồng bào ngoài ý muốn của Đảng.",
                                sfx: "tension",
                                shake: true
                            }
                        ]
                    },
                    evalEnding: true
                },
                {
                    text: "Dao động, ra lệnh cho các đội tự vệ tạm rút lui khỏi Bắc Bộ Phủ để tránh đối đầu với quân Nhật.",
                    statChanges: { morale: -35, readiness: -25, alert: 0 },
                    cutscene: {
                        tag: "BỎ LỠ THỜI KHẮC LỊCH SỬ",
                        title: "KHOẢNG TRỐNG NGUY HẠI",
                        frames: [
                            {
                                image: "assets/images/cutscene_retreat_fog.jpg",
                                title: "TẠM LÙI TRONG MÀN SƯƠNG",
                                speaker: "Lời Dẫn",
                                text: "Việc rút lui bỏ lại các công sở đầu não đã tạo khoảng trống quyền lực nguy hiểm, đe dọa biến thắng lợi cách mạng của Đảng tại Thủ đô thành tình thế giằng co bế tắc.",
                                sfx: "tension"
                            }
                        ]
                    },
                    evalEnding: true
                }
            ]
        }
    },

    // ==========================================
    // CÁC KẾT THÚC (ENDINGS) - ĐÚC KẾT BÀI HỌC KINH NGHIỆM CỦA ĐẢNG
    // ==========================================
    endings: {
        "true_ending": {
            id: "true_ending",
            title: "CÁCH MẠNG THÁNG TÁM TOÀN THẮNG - SỰ LÃNH ĐẠO TÀI TÌNH CỦA ĐẢNG",
            badge: "Kết Thúc Lịch Sử Toàn Thắng (Chính Sử)",
            background: "assets/images/ending_victory_badinh.jpg",
            bgm: "victory",
            sfx: "fanfare",
            text: `
                <p><strong>Ngày 19 tháng 8 năm 1945 đã đi vào trang sử vàng chói lọi của Đảng Cộng sản Việt Nam và dân tộc ta!</strong></p>
                <p>Dưới sự lãnh đạo sáng suốt, kiên cường của Ban Thường vụ Trung ương Đảng, Tổng Bí thư Trường Chinh, Xứ ủy Bắc Kỳ và Thành ủy Hà Nội, cuộc khởi nghĩa giành chính quyền tại Thủ đô đã toàn thắng rực rỡ mà hầu như không đổ một giọt máu.</p>
                <p>Lực lượng cách mạng đã làm chủ Phủ Khâm sai Bắc Bộ, Trại Bảo an binh, Tòa Đốc lý và Sở Mật thám; cô lập và buộc toàn bộ quân đội viễn chinh phát xít Nhật phải án binh bất động. Thắng lợi ở Hà Nội đóng vai trò phát pháo lệnh giục giã cả nước đứng lên, tạo tiền đề quyết định để Chủ tịch Hồ Chí Minh đọc bản <em>Tuyên ngôn Độc lập</em> ngày 2/9/1945 tại Quảng trường Ba Đình lịch sử, khai sinh ra nước Việt Nam Dân chủ Cộng hòa!</p>
                <hr style="border: 0; border-top: 1px solid rgba(212,160,23,0.3); margin: 15px 0;">
                <p><strong>BỐN BÀI HỌC KINH NGHIỆM VÔ GIÁ CỦA ĐẢNG RÚT RA TỪ CÁCH MẠNG THÁNG TÁM 1945:</strong></p>
                <p>1. <strong>Giương cao ngọn cờ độc lập dân tộc:</strong> Đặt lợi ích tối cao của Tổ quốc lên trên hết, giải quyết đúng đắn mối quan hệ giữa nhiệm vụ giải phóng dân tộc và cách mạng ruộng đất.</p>
                <p>2. <strong>Xây dựng và phát huy khối đại đoàn kết toàn dân:</strong> Lấy liên minh công nông làm nền tảng, tập hợp mọi giai tầng yêu nước trong Mặt trận Việt Minh rộng rãi.</p>
                <p>3. <strong>Nắm vững nghệ thuật chớp thời cơ và phân hóa kẻ thù:</strong> Nhạy bén nắm bắt thời cơ vàng khi Nhật đầu hàng và trước khi quân Đồng minh vào; khôn khéo kết hợp đấu tranh chính trị với ngoại giao quân sự.</p>
                <p>4. <strong>Xây dựng Đảng Mác - Lênin vững mạnh:</strong> Đảng có đường lối đúng đắn, tổ chức cơ sở Đảng chủ động, sáng tạo, dám nghĩ, dám làm và dám chịu trách nhiệm trước lịch sử.</p>
            `,
            historicalNote: "Bạn đã hoàn thành xuất sắc sứ mệnh lịch sử, thể hiện trọn vẹn những luận điểm cốt lõi trong Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Chương I - Mục III)."
        },

        "costly_victory": {
            id: "costly_victory",
            title: "CHIẾN THẮNG TRONG BÃO LỬA - BÀI HỌC VỀ CHỈ ĐẠO NGOẠI GIAO QUÂN SỰ",
            badge: "Kết Thúc Thắng Lợi Cam Go",
            background: "assets/images/ending_standoff.jpg",
            bgm: "gameplay",
            sfx: "tension",
            text: `
                <p>Dưới sự lãnh đạo của Đảng và khí thế cách mạng vũ bão của quần chúng, bộ máy chính quyền bù nhìn tay sai đã bị đập tan. Nhân dân Thủ đô đã giành được quyền làm chủ các công sở trọng yếu trước khi quân Đồng minh kéo vào.</p>
                <p>Tuy nhiên, do những xung đột vũ trang cục bộ bộc phát ngoài ý muốn trước hàng xe tăng Nhật và tại Trại Bảo an binh, một số chiến sĩ tự vệ trung kiên và đồng bào yêu nước đã ngã xuống ngay trước giờ khải hoàn.</p>
                <p>Hà Nội giành được chính quyền, nhưng bài học kinh nghiệm sâu sắc của Đảng về việc kiên trì kết hợp đấu tranh chính trị với nghệ thuật đàm phán ngoại giao quân sự sắc bén đã để lại giá trị lịch sử vô giá cho các giai đoạn cách mạng tiếp theo.</p>
            `,
            historicalNote: "Giáo trình Lịch sử Đảng khẳng định: Nghệ thuật phân hóa kẻ thù và ngoại giao quân sự mềm dẻo là chìa khóa để giành thắng lợi với chi phí xương máu thấp nhất."
        },

        "missed_opportunity": {
            id: "missed_opportunity",
            title: "BỎ LỠ THỜI CƠ VÀNG - BÀI HỌC VỀ NGHỆ THUẬT CHỚP THỜI CƠ CỦA ĐẢNG",
            badge: "Kết Thúc Bỏ Lỡ Thời Cơ Lịch Sử",
            background: "assets/images/ending_defeat.jpg",
            bgm: "gameplay",
            sfx: "tension",
            text: `
                <p>Sự do dự, máy móc chờ lệnh bằng văn bản và thiếu tinh thần chủ động sáng tạo đã khiến thời cơ 'nghìn năm có một' trôi tuột khỏi tầm tay.</p>
                <p>Khi các công sở đầu não chưa kịp tiếp quản dứt điểm, quân đội Tưởng Giới Thạch từ phương Bắc và tàn dư thực dân Pháp đã ồ ạt kéo vào Hà Nội, đẩy cách mạng nước ta vào tình thế 'ngàn cân treo sợi tóc'.</p>
                <p>Bài học lịch sử này khắc sâu lời dạy của Chủ tịch Hồ Chí Minh và Ban Thường vụ Trung ương Đảng: Trong giờ phút quyết định vận mệnh non sông, phải thần tốc, táo bạo chớp thời cơ; do dự, chần chừ là có tội với lịch sử dân tộc.</p>
            `,
            historicalNote: "Chủ tịch Hồ Chí Minh từng nhấn mạnh: 'Lúc này thời cơ thuận lợi đã tới, dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!'"
        },

        "heroic_sacrifice": {
            id: "heroic_sacrifice",
            title: "TẤM KHIÊN BẤT TỬ - BẢO VỆ CƠ SỞ ĐẢNG ĐẾN CÙNG",
            badge: "Kết Thúc Kiên Trung Vì Đảng Vì Dân",
            background: "assets/images/cutscene_rush_alley.jpg",
            bgm: "gameplay",
            sfx: "tension",
            text: `
                <p>Trong giờ phút hiểm nghèo khi mật thám và hiến binh địch ập tới cơ sở in ấn tài liệu bí mật của Thành ủy, bạn đã dũng cảm ở lại cản hậu, tiêu hủy toàn bộ tài liệu tối mật và thu hút hỏa lực địch về phía mình để các đồng chí lãnh đạo Thành ủy rút lui an toàn.</p>
                <p>Sự hy sinh kiên trung của bạn đã bảo vệ trọn vẹn cơ quan đầu não chỉ đạo khởi nghĩa của Đảng bộ Hà Nội. Ngày 19 tháng 8, ngọn cờ đỏ sao vàng tung bay rực rỡ khắp Thủ đô, và tấm gương người đảng viên cộng sản kiên trung mãi mãi được khắc ghi trong trang sử vàng của Đảng và lòng dân.</p>
            `,
            historicalNote: "Sự trung thành vô hạn với Đảng và tinh thần xả thân vì sự nghiệp giải phóng dân tộc là phẩm chất cao đẹp của người chiến sĩ cộng sản."
        }
    }
};

window.SCENARIO_DATA = SCENARIO_DATA;
