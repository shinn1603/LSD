/**
 * Scenario & Branching Script for "Cách Mạng Tháng Tám 1945 - Hà Nội"
 * Học phần: Lịch Sử Đảng Cộng Sản Việt Nam (Bậc Đại học)
 * Căn cứ: Giáo trình Lịch sử Đảng Cộng sản Việt Nam - NXB Chính trị quốc gia Sự thật (Chương I - Mục III)
 * Tái hiện hào hùng, tự nhiên, đậm chất lịch sử và nghệ thuật chớp thời cơ của Đảng tại Hà Nội.
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
        // HỒI 1: ĐÊM 14/08/1945 - QUÁN TRIỆT CHỦ TRƯƠNG TỔNG KHỞI NGHĨA
        // CĂN GÁC BÍ MẬT PHỐ HÀNG BÔNG, HÀ NỘI
        // ==========================================
        "start": {
            id: "start",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            date: "Đêm 14 tháng 8 năm 1945",
            location: "Căn gác bí mật phố Hàng Bông, Hà Nội",
            background: "assets/images/bg_safehouse.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Hà Nội về đêm chìm trong bầu không khí ngột ngạt trước cơn bão táp cách mạng. Trong căn gác bí mật của Thành ủy tại phố Hàng Bông, ngọn đèn bão leo lét soi rọi chiếc máy in roneo đang chạy hết công suất.",
            sfx: "typewriter",
            next: "act1_1"
        },
        "act1_1": {
            id: "act1_1",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Bạn là Vũ Minh - Đảng viên phụ trách Đội Tuyên truyền Xung phong Việt Minh. Đồng chí Lâm, cán bộ Thành ủy kiêm liên lạc viên Xứ ủy Bắc Kỳ, vừa khẽ khàng vượt qua mạng lưới mật thám bước vào phòng.",
            sfx: "typewriter",
            next: "act1_2"
        },
        "act1_2": {
            id: "act1_2",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Vũ Minh! Tin tối mật từ đài phát thanh vừa xác nhận: Hai quả bom nguyên tử đã ném xuống Hiroshima và Nagasaki. Nhật hoàng đã chính thức tuyên bố đầu hàng Đồng minh không điều kiện!",
            sfx: "tension",
            shake: true,
            next: "act1_3"
        },
        "act1_3": {
            id: "act1_3",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Thảo",
            avatar: "assets/images/char_thao.jpg",
            text: "Thật sao anh Lâm?! Vậy là quân phát xít đã ngã quỵ! Bọn lính Nhật ở Hà Nội đang hoang mang tột độ, còn chính phủ bù nhìn thì rệu rã như rắn mất đầu!",
            sfx: "typewriter",
            next: "act1_4"
        },
        "act1_4": {
            id: "act1_4",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Đúng vậy! Trung ương từ Tân Trào đã phát Quân lệnh số 1 hạ lệnh Tổng khởi nghĩa. Nguy cơ lớn lúc này là quân Tưởng ở phía Bắc và quân viễn chinh Pháp đang lăm le tràn vào nước ta. Ta phải giành lấy chính quyền trước khi quân Đồng minh kịp tới!",
            sfx: "typewriter",
            next: "act1_5"
        },
        "act1_5": {
            id: "act1_5",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Tuy nhiên, đường dây liên lạc từ Tân Trào về xuôi đang bị đứt đoạn, mệnh lệnh chính thức chưa thể về tới Hà Nội trong đêm nay. Theo tinh thần chủ động sáng tạo của Đảng, chúng ta phải hành động thế nào đây, Vũ Minh?",
            sfx: "typewriter",
            choices: [
                {
                    text: "Táo bạo chủ động: In ngay một vạn truyền đơn cứu quốc, cấp tốc chuyển giao cho công nhân xe lửa Gia Lâm và nhà máy điện Yên Phụ chuẩn bị biểu tình bãi công.",
                    statChanges: { morale: 20, readiness: 15, alert: 5 },
                    unlockCodex: "doc_quan_lenh_1",
                    cutscene: {
                        tag: "HÀNH ĐỘNG KHẨN CẤP",
                        title: "PHÁT ĐỘNG CAO TRÀO KHỞI NGHĨA",
                        frames: [
                            {
                                image: "assets/images/cutscene_rush_alley.jpg",
                                title: "XÉ MÀN ĐÊM PHỐ CỔ",
                                speaker: "Lời Dẫn",
                                text: "Thời cơ ngàn năm có một, không thể chần chừ một khắc nào. Chiến sĩ liên lạc lập tức băng qua khung cửa gác mái, lao xuống từng bậc thang gỗ ọp ẹp và phóng mình xé màn đêm phố cổ Hà Nội.",
                                sfx: "tension",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_print_press.jpg",
                                title: "GUỒNG MÁY IN KHẨN CẤP",
                                speaker: "Lời Dẫn",
                                text: "Dưới ánh đèn bão leo lét trong căn buồng bí mật, con lăn máy in roneo rít lên liên hồi. Từng chồng truyền đơn mang lời hiệu triệu cứu quốc nóng hổi liên tục xuất xưởng.",
                                sfx: "typewriter"
                            },
                            {
                                image: "assets/images/cutscene_distribute_leaflets.jpg",
                                title: "TRUYỀN ĐƠN VỀ CÁC CỬA Ô",
                                speaker: "Lời Dẫn",
                                text: "Trời vừa hửng sáng, các đội nữ sinh và thanh niên cứu quốc đã tỏa về ga xe lửa Gia Lâm, chợ Đồng Xuân và trạm xe điện Bờ Hồ, trao tận tay công nhân lời hịch khởi nghĩa.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act1_choice_bold"
                },
                {
                    text: "Thận trọng điều tra: Vừa tuyên truyền giác ngộ quần chúng, vừa cử trinh sát bám sát bố phòng của quân Nhật và Trại Bảo an binh.",
                    statChanges: { readiness: 10, garrison: 15, alert: -5 },
                    cutscene: {
                        tag: "TRINH SÁT NẮM ĐỊCH",
                        title: "BƯỚC CHÂN TRONG BÓNG ĐÊM",
                        frames: [
                            {
                                image: "assets/images/cutscene_recon_night.jpg",
                                title: "ÁP SÁT BỐT GÁC QUÂN ĐỊCH",
                                speaker: "Lời Dẫn",
                                text: "Tổ trinh sát của Thành ủy bám sát từng ụ cát súng máy và bốt gác lính Nhật phố Hàng Bài, dùng ống nhòm ghi chép tỉ mỉ thời gian đổi gác và sơ đồ bố phòng.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/cutscene_plan_map.jpg",
                                title: "HOÀN THIỆN PHƯƠNG ÁN TÁC CHIẾN",
                                speaker: "Lời Dẫn",
                                text: "Dưới ánh đèn dầu chụm đầu cùng các chỉ huy, bản đồ phòng thủ của đối phương nằm trọn trong tay cách mạng. Nắm chắc lực lượng đối phương giúp ta chủ động hạn chế tối đa thương vong.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act1_choice_cautious"
                },
                {
                    text: "Chờ lệnh cấp trên: Tạm thời giữ nguyên cơ sở, kiên quyết chờ công văn chính thức từ Tân Trào gửi về.",
                    statChanges: { morale: -20, readiness: -15, alert: -10 },
                    cutscene: {
                        tag: "THỜI KHẮC DAO ĐỘNG",
                        title: "NGUY CƠ BỎ LỠ THỜI CƠ",
                        frames: [
                            {
                                image: "assets/images/cutscene_safehouse_wait.jpg",
                                title: "CĂN GÁC IM LÌM",
                                speaker: "Lời Dẫn",
                                text: "Căn gác phố Hàng Bông chìm trong khoảng lặng thụ động. Sự chần chừ, máy móc chờ giấy tờ giữa lúc liên lạc bị chia cắt có nguy cơ biến thời cơ ngàn năm trôi qua kẽ tay.",
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
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Thảo",
            avatar: "assets/images/char_thao.jpg",
            text: "Anh Minh nói rất đúng! Các đồng chí lãnh đạo đã dặn rồi: thời cơ nghìn năm có một, chần chừ là có tội với non sông! Em sẽ cùng các bạn nữ sinh giấu truyền đơn trong quai giỏ hoa và vạt áo dài, tỏa đi khắp các chợ Đồng Xuân, chợ Hôm ngay sáng mai!",
            sfx: "choice",
            next: "act2_intro"
        },

        "act1_choice_cautious": {
            id: "act1_choice_cautious",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Phán đoán rất chắc chắn! Biết mình biết người, trăm trận không nguy. Nắm chắc lực lượng Bảo an binh sẽ là chìa khóa để chiếm kho súng mà không làm kinh động tới xe bọc thép của quân Nhật.",
            sfx: "choice",
            next: "act2_intro"
        },

        "act1_choice_hesitant": {
            id: "act1_choice_hesitant",
            chapter: "Hồi 1: Lệnh Tổng Khởi Nghĩa Phát Động",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Vũ Minh! Cách mạng là nghệ thuật chớp thời cơ! Nếu cứ máy móc ngồi chờ văn bản đóng dấu giữa lúc liên lạc nghẽn mạch, quân thù sẽ kịp trấn tĩnh và thời cơ vàng sẽ trôi qua kẽ tay!",
            sfx: "tension",
            next: "act2_intro"
        },

        // ==========================================
        // HỒI 2: CHIỀU 17/08/1945 - QUYẾT ĐỊNH XỨ ỦY BẮC KỲ
        // BIẾN MÍT TINH CỦA ĐỊCH THÀNH BIỂU DƯƠNG LỰC LƯỢNG CÁCH MẠNG
        // ==========================================
        "act2_intro": {
            id: "act2_intro",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            date: "Chiều 17 tháng 8 năm 1945",
            location: "Quảng trường Nhà hát Lớn Hà Nội",
            background: "assets/images/bg_revolution.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Trước đó, chiều 15/8/1945 tại làng Vạn Phúc (Hà Đông), Ban Thường vụ Xứ ủy Bắc Kỳ đã quyết định thành lập Ủy ban Khởi nghĩa và ấn định ngày 19/8 khởi nghĩa giành chính quyền ở Hà Nội. Đến chiều 17/8, chính quyền bù nhìn Trần Trọng Kim tổ chức cuộc đại mít tinh trước Nhà hát Lớn hòng phô trương thanh thế.",
            sfx: "typewriter",
            next: "act2_1"
        },
        "act2_1": {
            id: "act2_1",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Hàng vạn công chức, học sinh và dân chúng tụ tập chật kín quảng trường. Nhận định thời cơ thuận lợi, Thành ủy Hà Nội chủ trương: phải táo bạo biến cuộc mít tinh của địch thành cuộc biểu dương lực lượng của quần chúng cách mạng!",
            sfx: "typewriter",
            next: "act2_2"
        },
        "act2_2": {
            id: "act2_2",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo",
            avatar: "assets/images/char_thao.jpg",
            text: "Anh Minh! Em và các đội viên xung phong đã ém sẵn trên ban công tầng hai Nhà hát Lớn! Trong áo em giấu lá cờ đỏ sao vàng rộng bốn mét. Chúng sắp sửa cử bài hát của chính phủ bù nhìn rồi, tính sao đây anh?",
            sfx: "typewriter",
            next: "act2_3"
        },
        "act2_3": {
            id: "act2_3",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Một viên chức bù nhìn bước lên micro chuẩn bị đọc diễn văn. Mọi ánh mắt dưới quảng trường đang đổ dồn về khán đài. Đây chính là thời khắc bước ngoặt của phong trào Hà Nội!",
            sfx: "tension",
            choices: [
                {
                    text: "Táo bạo cướp diễn đàn: Buông lá cờ đỏ sao vàng khổng lồ từ tầng hai, tước lấy micro đọc Lời Hiệu Triệu Việt Minh và biến cuộc mít tinh thành tuần hành cách mạng.",
                    statChanges: { morale: 25, readiness: 15, alert: 5 },
                    unlockCodex: "evt_17_august",
                    cutscene: {
                        tag: "BƯỚC NGOẶT LỊCH SỬ",
                        title: "CƯỚP DIỄN ĐÀN - BIỂU DƯƠNG LỰC LƯỢNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_storm_podium.jpg",
                                title: "CƯỚP DIỄN ĐÀN TRUYỀN THANH",
                                speaker: "Lời Dẫn",
                                text: "Chiến sĩ Đội Tuyên truyền Xung phong bất ngờ vọt lên lễ đài! Trong chớp mắt, chiếc micro của viên chức bù nhìn bị tước phăng, nhường chỗ cho Lời Hiệu Triệu cứu quốc của Mặt trận Việt Minh.",
                                sfx: "choice",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_flag_opera.jpg",
                                title: "CỜ ĐỎ SAO VÀNG RỰC RỠ",
                                speaker: "Lời Dẫn",
                                text: "Từ ban công tầng hai Nhà hát Lớn, lá cờ đỏ sao vàng bằng lụa đỏ rộng bốn mét buông phủ xuống mặt tiền! Cả quảng trường nín thở trong một giây rồi bùng nổ trong tiếng reo hò dậy sóng.",
                                sfx: "fanfare",
                                flash: true
                            },
                            {
                                image: "assets/images/bg_revolution.jpg",
                                title: "TIẾN QUÂN CA VANG DỘI HÀ NỘI",
                                speaker: "Lời Dẫn",
                                text: "Hàng vạn cánh tay giơ cao như rừng! Bài hát 'Tiến Quân Ca' lần đầu tiên vang lên giữa lòng Hà Nội, biến cuộc mít tinh của địch thành cuộc biểu tình tuần hành rực lửa dọc phố Tràng Tiền.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act2_choice_hijack"
                },
                {
                    text: "Phát truyền đơn bí mật: Chỉ đứng trong đám đông tán phát truyền đơn và hô khẩu hiệu ủng hộ Việt Minh.",
                    statChanges: { morale: 5, readiness: 5, alert: -5 },
                    cutscene: {
                        tag: "VẬN ĐỘNG TRONG LẶNG LẼ",
                        title: "DÒNG NGƯỜI PHÂN VÂN",
                        frames: [
                            {
                                image: "assets/images/cutscene_leaflets_crowd.jpg",
                                title: "RẢI TRUYỀN ĐƠN TRONG BIỂN NGƯỜI",
                                speaker: "Lời Dẫn",
                                text: "Len lỏi giữa dòng người đông đúc trước Nhà hát Lớn, từng tập truyền đơn bí mật được các chiến sĩ tự vệ chuyền tay đến từng người dân.",
                                sfx: "unlock"
                            },
                            {
                                image: "assets/images/cutscene_reading_leaflets.jpg",
                                title: "NGỌN LỬA ÂM Ỉ TRONG LÒNG DÂN",
                                speaker: "Lời Dẫn",
                                text: "Quần chúng truyền tay nhau đọc từng dòng chữ cứu quốc trong niềm xúc động, nhưng khí thế cách mạng chưa bùng phát thành biển lửa công khai.",
                                sfx: "typewriter"
                            }
                        ]
                    },
                    next: "act2_choice_subtle"
                },
                {
                    text: "Nổ súng thị uy: Ra lệnh cho tổ tự vệ nổ súng chỉ thiên để giải tán ngay lập tức cuộc mít tinh thân Nhật.",
                    statChanges: { morale: -15, readiness: -10, alert: 35 },
                    shake: true,
                    cutscene: {
                        tag: "HIỂM NGU BẤT NGỜ",
                        title: "TIẾNG SÚNG XÉ TAN QUẢNG TRƯỜNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_gunshot_warning.jpg",
                                title: "TIẾNG SÚNG CHỈ THIÊN",
                                speaker: "Lời Dẫn",
                                text: "Tiếng súng nổ chỉ thiên chát chúa vang lên xé tan không khí quảng trường! Sự kích động bất ngờ khiến hàng vạn người hoảng hốt dạt ra hai bên trong cảnh hỗn loạn.",
                                sfx: "tension",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_chaos_barricade.jpg",
                                title: "LÍNH NHẬT BỐ PHÒNG PHONG TỎA",
                                speaker: "Lời Dẫn",
                                text: "Lính Nhật đóng quanh quảng trường lập tức nạp đạn súng máy, kéo rào thép gai phong tỏa các tuyến phố lân cận, đẩy phong trào vào tình thế căng thẳng bị động.",
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
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Từ ban công Nhà hát Lớn, lá cờ đỏ sao vàng phần phật tung bay trước gió thu! Chiến sĩ Đội Tuyên truyền Xung phong nhanh như cắt tước lấy micro: 'Đồng bào! Phát xít Nhật đã đầu hàng! Hãy đi theo Mặt trận Việt Minh đứng lên giành lại non sông!'.",
            sfx: "fanfare",
            flash: true,
            next: "act2_hijack_2"
        },
        "act2_hijack_2": {
            id: "act2_hijack_2",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo",
            avatar: "assets/images/char_thao.jpg",
            text: "Hàng vạn cánh tay giơ cao như rừng! Bài hát 'Tiến Quân Ca' bùng lên vang động cả góc trời Tràng Tiền - Hàng Khay! Cảnh sát bù nhìn ngơ ngác buông dùi cui, hòa vào dòng người tuần hành!",
            sfx: "unlock",
            unlockCodex: "doc_tien_quan_ca",
            next: "act3_intro"
        },

        "act2_choice_subtle": {
            id: "act2_choice_subtle",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Ta đã bảo toàn được lực lượng, nhưng đã bỏ lỡ mất một cơ hội quý báu để kích hoạt ngọn lửa yêu nước trong lòng hàng vạn đồng bào Thủ đô...",
            sfx: "tension",
            next: "act3_intro"
        },

        "act2_choice_violent": {
            id: "act2_choice_violent",
            chapter: "Hồi 2: Biến Cuộc Mít Tinh 17/8 Thành Biểu Dương Lực Lượng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Tiếng súng nổ chát chúa làm vỡ toang đám đông! Quần chúng dạt ra trong cảnh hỗn loạn, lính Nhật ở khách sạn Metropole lập tức kéo rào thép gai và chĩa nòng súng máy. Tự vệ của ta phải vất vả rút lui trong thế bị động.",
            sfx: "tension",
            next: "act3_intro"
        },

        // ==========================================
        // HỒI 3: ĐÊM 18/08/1945 - ĐẤU TRÍ BINH VẬN TẠI TRẠI BẢO AN BINH
        // PHỐ HÀNG BÀI, HÀ NỘI
        // ==========================================
        "act3_intro": {
            id: "act3_intro",
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            date: "Đêm 18 tháng 8 năm 1945",
            location: "Trước cổng Trại Bảo an binh, phố Hàng Bài",
            background: "assets/images/bg_garrison.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Đêm 18 tháng 8 năm 1945. Khí thế khởi nghĩa đã sôi sục khắp các phố phường ngoại ô và nội thành. Tuy nhiên, Trại Bảo an binh tại phố Hàng Bài vẫn là một trọng điểm đầy hiểm họa.",
            sfx: "typewriter",
            next: "act3_1"
        },
        "act3_1": {
            id: "act3_1",
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Bên trong trại có hơn 1.000 lính bảo an được trang bị súng đạn hiện đại. Nếu họ nổ súng chống cự vào sáng mai, quân đội Nhật cách đó vài trăm mét sẽ có cớ xua xe tăng ra can thiệp, gây đổ máu cho nhân dân.",
            sfx: "typewriter",
            next: "act3_2"
        },
        "act3_2": {
            id: "act3_2",
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Vũ Minh! Hơn một ngàn binh lính trong trại đều là người Việt bị ép cầm súng. Ta không thể đối đầu vũ trang làm đổ máu đồng bào, mà phải thực hiện công tác binh vận ngay trong đêm. Cậu và tôi sẽ vào thẳng phòng chỉ huy gặp Đội trưởng Bảo an binh!",
            sfx: "typewriter",
            next: "act3_3"
        },
        "act3_3": {
            id: "act3_3",
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh là người của Việt Minh?! Các anh to gan lắm! Có biết chỉ cần một tiếng còi báo động của tôi, một ngàn tay súng sẽ lập tức bao vây các anh không?",
            sfx: "tension",
            choices: [
                {
                    text: "Lấy đại nghĩa dân tộc và tình cảm đồng bào thuyết phục: 'Chúng ta đều là con Lạc cháu Hồng! Phát xít Nhật đã quỳ gối, chính phủ bù nhìn đã tan rã. Hãy quay súng về với nhân dân để lập công với non sông!'",
                    statChanges: { garrison: 35, morale: 15, alert: -10 },
                    unlockCodex: "fig_bao_an_binh",
                    cutscene: {
                        tag: "NGHỆ THUẬT BINH VẬN",
                        title: "TIẾNG GỌI CỦA NON SÔNG",
                        frames: [
                            {
                                image: "assets/images/bg_garrison.jpg",
                                title: "TIẾN VÀO TRẠI BẢO AN BINH",
                                speaker: "Lời Dẫn",
                                text: "Chiến sĩ cách mạng tay không vũ khí, đĩnh đạc bước qua hàng lính gác lưỡi lê phố Hàng Bài, tiến thẳng vào phòng chỉ huy để đối thoại trực tiếp bằng chính nghĩa non sông.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/cutscene_talk_commander.jpg",
                                title: "ĐẤU TRÍ THỨC TỈNH LƯƠNG TÂM",
                                speaker: "Lời Dẫn",
                                text: "Tại bàn chỉ huy, những lời phân tích chân tình về nguồn cội Lạc Hồng và tiền đồ dân tộc đã đánh trúng lương tri người lính, thức tỉnh tinh thần yêu nước quật khởi.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/char_bao_an.jpg",
                                title: "QUY THUẬN CÁCH MẠNG",
                                speaker: "Lời Dẫn",
                                text: "Viên chỉ huy xúc động buông bút, cam kết: Sáng mai khi cờ đỏ sao vàng tiến tới, toàn thể binh lính Trại Hàng Bài sẽ mở toang cổng trại, giao nộp toàn bộ kho vũ khí cho nhân dân.",
                                sfx: "unlock"
                            }
                        ]
                    },
                    next: "act3_choice_reason"
                },
                {
                    text: "Đưa ra tối hậu thư thép: 'Hà Nội ngày mai có hai mươi vạn đồng bào sẵn sàng san phẳng nơi này. Các anh buông súng thì được bảo toàn tính mạng, chống cự sẽ là kẻ thù của non sông!'",
                    statChanges: { garrison: 10, morale: 10, alert: 10 },
                    cutscene: {
                        tag: "ĐỐI ĐẦU NGHẸT THỞ",
                        title: "LẰN RANH NGUY HIỂM",
                        frames: [
                            {
                                image: "assets/images/cutscene_threat_dialogue.jpg",
                                title: "TUYÊN BỐ TỐI HẬU THƯ",
                                speaker: "Lời Dẫn",
                                text: "Đại diện Việt Minh đanh thép đưa tối hậu thư trước sự bối rối, tái mặt của viên sĩ quan chỉ huy tại phòng làm việc.",
                                sfx: "tension"
                            },
                            {
                                image: "assets/images/cutscene_barracks_tension.jpg",
                                title: "GHÌM SÚNG TRONG BÓNG TỐI TRẠI LÍNH",
                                speaker: "Lời Dẫn",
                                text: "Tối hậu thư đanh thép vang lên giữa bóng tối trại lính. Tiếng lên đạn lách cách căng thẳng từ các góc tối, bầu không khí đối đầu kéo dài trong sự giằng co thận trọng.",
                                sfx: "tension"
                            }
                        ]
                    },
                    next: "act3_choice_threat"
                },
                {
                    text: "Đề nghị trung lập: 'Các anh không cần đi theo chúng tôi, chỉ cần đóng chặt cổng trại và cam kết không nổ súng vào đoàn người biểu tình sáng mai.'",
                    statChanges: { garrison: 5, readiness: -10, alert: 0 },
                    cutscene: {
                        tag: "CỔNG ĐỒN ĐÓNG KÍN",
                        title: "KHO SÚNG BỊ KHÓA CHẶT",
                        frames: [
                            {
                                image: "assets/images/cutscene_iron_gate.jpg",
                                title: "CỔNG SẮT KHÉP CHẶT",
                                speaker: "Lời Dẫn",
                                text: "Cánh cổng sắt to lớn kiên cố của Trại Bảo an binh khép chặt, then đồng cài kín sau lưng tổ liên lạc.",
                                sfx: "typewriter"
                            },
                            {
                                image: "assets/images/cutscene_armory_locked.jpg",
                                title: "KHO VŨ KHÍ BỊ NIÊM PHONG",
                                speaker: "Lời Dẫn",
                                text: "Trại bảo an giữ thế trung lập không nổ súng, nhưng kho vũ khí hơn một ngàn khẩu vẫn bị khóa kín sau những chấn song sắt ngoài tầm tay tự vệ.",
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
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh... nói đúng lắm. Chúng tôi làm lính đánh thuê, trong lòng luôn hổ thẹn với tổ tiên. Tôi xin hứa: Sáng mai khi cờ đỏ sao vàng tiến tới, toàn thể binh lính Trại Hàng Bài sẽ mở cổng và trao nộp toàn bộ kho vũ khí cho cách mạng!",
            sfx: "unlock",
            next: "act4_intro"
        },

        "act3_choice_threat": {
            id: "act3_choice_threat",
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh đừng dọa tôi! Chúng tôi có súng, có đạn! Sáng mai nếu các anh thực sự có cả vạn quần chúng, tôi mới cân nhắc có nên buông súng hay không!",
            sfx: "tension",
            next: "act4_intro"
        },

        "act3_choice_neutral": {
            id: "act3_choice_neutral",
            chapter: "Hồi 3: Đấu Trí Binh Vận Tại Trại Bảo An Binh",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Được, nước sông không phạm nước giếng. Đêm nay các anh rời khỏi đây an toàn. Sáng mai chúng tôi khóa cổng trại, không can dự vào chuyện các anh chiếm công sở.",
            sfx: "typewriter",
            next: "act4_intro"
        },

        // ==========================================
        // HỒI 4: NGÀY 19/08/1945 - TỔNG KHỞI NGHĨA TOÀN THẮNG
        // NGHỆ THUẬT NGOẠI GIAO QUÂN SỰ TRƯỚC HỌNG SÚNG QUÂN NHẬT
        // ==========================================
        "act4_intro": {
            id: "act4_intro",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng",
            date: "Sáng 19 tháng 8 năm 1945",
            location: "Quảng trường Nhà hát Lớn & Bắc Bộ Phủ",
            background: "assets/images/bg_revolution.jpg",
            bgm: "gameplay",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Sáng 19 tháng 8 năm 1945! Cả Hà Nội bừng tỉnh trong rừng cờ đỏ sao vàng rực rỡ! Hơn 20 vạn nhân dân từ khắp các cửa ô: Đống Đa, Bưởi, Cầu Giấy, Bạch Mai cuồn cuộn đổ về Quảng trường Nhà hát Lớn!",
            sfx: "fanfare",
            flash: true,
            next: "act4_1"
        },
        "act4_1": {
            id: "act4_1",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo",
            avatar: "assets/images/char_thao.jpg",
            text: "Anh Minh ơi! Quần chúng đã chia thành các cánh tràn vào chiếm Phủ Khâm sai Bắc Bộ, Tòa Đốc lý và Trại Bảo an binh! Nhưng nhìn đằng kia xem!",
            sfx: "tension",
            shake: true,
            next: "act4_2"
        },
        "act4_2": {
            id: "act4_2",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Tiếng xích sắt nghiến gầm rú trên mặt đường đá Tràng Tiền! Bốn xe bọc thép hạng nặng cùng hai tiểu đoàn lính Nhật từ Phủ Toàn quyền ập đến, dàn trận chĩa nòng súng máy vào Bắc Bộ Phủ và Trại Bảo an binh!",
            sfx: "tension",
            shake: true,
            next: "act4_3"
        },
        "act4_3": {
            id: "act4_3",
            chapter: "Hồi 4: Ngày 19/8/1945 - Tổng Khởi Nghĩa Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Tình thế ngàn cân treo sợi tóc! Quân Nhật đang ngón tay đặt trên cò súng. Nếu một phát súng nổ ra lúc này, xe tăng của chúng sẽ gây đổ máu khôn lường. Ta phải dùng áp lực chính trị kết hợp đàm phán ngoại giao quân sự buộc chúng án binh bất động! Vũ Minh, chúng ta xử trí ra sao?",
            sfx: "typewriter",
            choices: [
                {
                    text: "Đĩnh đạc tiến ra đàm phán ngoại giao quân sự: Cùng phái đoàn cách mạng gặp chỉ huy Nhật, khẳng định nhân dân Việt Nam chỉ phế truất chính phủ bù nhìn, cam đoan bảo đảm an toàn cho quân Nhật chờ hồi hương và yêu cầu Nhật án binh bất động.",
                    statChanges: { morale: 20, garrison: 20, alert: -25 },
                    unlockCodex: "evt_19_august",
                    cutscene: {
                        tag: "BẢN LĨNH NGOẠI GIAO",
                        title: "ĐỐI MẶT HỌNG SÚNG XE TĂNG",
                        frames: [
                            {
                                image: "assets/images/cutscene_negotiation.jpg",
                                title: "CHẶN ĐẦU ĐOÀN THIẾT GIÁP",
                                speaker: "Lời Dẫn",
                                text: "Dù nòng pháo đại bác của xe bọc thép Nhật chĩa thẳng về phía đoàn biểu tình, phái đoàn cách mạng vẫn đĩnh đạc tiến lên đứng sừng sững trước cổng Bắc Bộ Phủ.",
                                sfx: "tension",
                                shake: true
                            },
                            {
                                image: "assets/images/cutscene_negotiation_face.jpg",
                                title: "LẬP LUẬN THÉP CỦA CÁCH MẠNG",
                                speaker: "Lời Dẫn",
                                text: "Tại cuộc đàm phán mặt đối mặt, lập luận thép khẳng định tính chính nghĩa của quyền tự quyết dân tộc, cam đoan bảo toàn tính mạng cho binh lính Nhật chờ ngày hồi hương nếu họ án binh bất động.",
                                sfx: "unlock"
                            },
                            {
                                image: "assets/images/cutscene_tanks_withdraw.jpg",
                                title: "XE TĂNG RÚT LUI - TOÀN THẮNG!",
                                speaker: "Lời Dẫn",
                                text: "Trước bản lĩnh kiên cường của cách mạng và sức mạnh của biển người bao vây, tiếng xích sắt ken két vang lên: Những cỗ xe tăng phát xít Nhật lùi dần vào doanh trại! Cờ đỏ sao vàng ngạo nghễ tung bay!",
                                sfx: "fanfare",
                                flash: true
                            }
                        ]
                    },
                    evalEnding: true
                },
                {
                    text: "Hô hào toàn thể biển người biển gậy xông lên bao vây xe bọc thép Nhật bằng tinh thần quyết tử.",
                    statChanges: { morale: 10, readiness: -20, alert: 40 },
                    shake: true,
                    cutscene: {
                        tag: "XUNG ĐỘT KHỐC LIỆT",
                        title: "BÃO LỬA TRƯỚC BẮC BỘ PHỦ",
                        frames: [
                            {
                                image: "assets/images/cutscene_clash_tanks.jpg",
                                title: "BÃO LỬA TRƯỚC BẮC BỘ PHỦ",
                                speaker: "Lời Dẫn",
                                text: "Tiếng hô xung phong vang dội, biển người ào lên giằng súng và xích xe tăng! Súng máy đối phương rền vang xé toạc bầu trời trưa, các chiến sĩ tự vệ kiên cường ngã xuống trên mặt đường đá Tràng Tiền để bảo vệ quyền làm chủ chính quyền.",
                                sfx: "tension",
                                shake: true
                            }
                        ]
                    },
                    evalEnding: true
                },
                {
                    text: "Rút lui khỏi Bắc Bộ Phủ để tránh thương vong, chờ quân Nhật tự rút đi.",
                    statChanges: { morale: -35, readiness: -25, alert: 0 },
                    cutscene: {
                        tag: "THỜI KHẮC ĐÁNH MẤT",
                        title: "KHOẢNG TRỐNG NGUY HẠI",
                        frames: [
                            {
                                image: "assets/images/cutscene_retreat_fog.jpg",
                                title: "NGẬM NGÙI LÙI BƯỚC",
                                speaker: "Lời Dẫn",
                                text: "Đoàn biểu tình buộc phải tạm lùi bước trong màn sương ảm đạm. Khoảng trống quyền lực xuất hiện khi quân Nhật phong tỏa công sở, đe dọa biến thắng lợi trong tầm tay thành một cuộc đối đầu giằng co kéo dài đầy bất trắc.",
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
    // CÁC KẾT THÚC (ENDINGS) - ĐÚC KẾT BÀI HỌC KINH NGHIỆM LỊCH SỬ CỦA ĐẢNG
    // ==========================================
    endings: {
        "true_ending": {
            id: "true_ending",
            title: "CÁCH MẠNG THÁNG TÁM TOÀN THẮNG - HÀ NỘI ĐỘC LẬP",
            badge: "Kết Thúc Lịch Sử Toàn Thắng",
            background: "assets/images/ending_victory_badinh.jpg",
            bgm: "victory",
            sfx: "fanfare",
            text: `
                <p><strong>Ngày 19 tháng 8 năm 1945 đã đi vào trang sử vàng chói lọi của dân tộc Việt Nam!</strong></p>
                <p>Dưới sự lãnh đạo sáng suốt của Đảng và Mặt trận Việt Minh, cuộc khởi nghĩa giành chính quyền tại Thủ đô đã toàn thắng rực rỡ mà hầu như không đổ một giọt máu.</p>
                <p>Lực lượng cách mạng đã làm chủ Phủ Khâm sai Bắc Bộ, Trại Bảo an binh, Tòa Đốc lý và Sở Mật thám; cô lập và buộc toàn bộ quân đội viễn chinh phát xít Nhật phải án binh bất động trong doanh trại. Thắng lợi ở Hà Nội đóng vai trò phát pháo lệnh giục giã cả nước đứng lên, tạo tiền đề quyết định để Chủ tịch Hồ Chí Minh đọc bản <em>Tuyên ngôn Độc lập</em> ngày 2/9/1945 tại Quảng trường Ba Đình lịch sử, khai sinh nước Việt Nam Dân chủ Cộng hòa!</p>
                <hr style="border: 0; border-top: 1px solid rgba(229,169,59,0.3); margin: 15px 0;">
                <p><strong>BỐN BÀI HỌC KINH NGHIỆM LỊCH SỬ CỦA ĐẢNG TỪ CÁCH MẠNG THÁNG TÁM 1945:</strong></p>
                <p>1. <strong>Giương cao ngọn cờ độc lập dân tộc:</strong> Đặt quyền lợi tối cao của Tổ quốc lên trên hết, kết hợp chặt chẽ hai nhiệm vụ chống đế quốc và phong kiến.</p>
                <p>2. <strong>Khối đại đoàn kết toàn dân:</strong> Lấy liên minh công nông làm nền tảng vững chắc, tập hợp mọi giai tầng yêu nước trong Mặt trận Việt Minh rộng rãi.</p>
                <p>3. <strong>Nghệ thuật chớp thời cơ và phân hóa kẻ thù:</strong> Nhạy bén chớp thời cơ nghìn năm có một; kết hợp sức mạnh chính trị với ngoại giao quân sự mềm dẻo nhưng kiên quyết.</p>
                <p>4. <strong>Xây dựng Đảng vững mạnh:</strong> Đảng có đường lối cứu nước đúng đắn, tổ chức Đảng các cấp chủ động, linh hoạt, dám nghĩ, dám làm và dám chịu trách nhiệm trước lịch sử.</p>
            `
        },

        "costly_victory": {
            id: "costly_victory",
            title: "CHIẾN THẮNG TRONG BÃO LỬA",
            badge: "Kết Thúc Thắng Lợi Cam Go",
            background: "assets/images/ending_standoff.jpg",
            bgm: "gameplay",
            sfx: "tension",
            text: `
                <p>Trước sức mạnh vũ bão của hàng vạn đồng bào dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh, chính quyền bù nhìn tay sai buộc phải sụp đổ. Nhân dân ta đã làm chủ hoàn toàn các công sở trọng yếu tại Hà Nội trước khi quân Đồng minh kịp tiến vào.</p>
                <p>Tuy nhiên, do những xung đột vũ trang cục bộ bộc phát tại Trại Bảo an binh và trước hàng xe tăng Nhật, một số chiến sĩ tự vệ trung kiên và đồng bào yêu nước đã ngã xuống ngay trước giờ khải hoàn.</p>
                <p>Hà Nội giành được độc lập, nhưng bài học xương máu về nghệ thuật phân hóa kẻ thù và kết hợp đấu tranh chính trị với ngoại giao quân sự sẽ còn được khắc ghi mãi mãi.</p>
            `
        },

        "missed_opportunity": {
            id: "missed_opportunity",
            title: "NGẬM NGÙI TRỄ BƯỚC",
            badge: "Kết Thúc Bỏ Lỡ Thời Cơ Vàng",
            background: "assets/images/ending_defeat.jpg",
            bgm: "gameplay",
            sfx: "tension",
            text: `
                <p>Sự do dự, chần chừ và việc thiếu những quyết sách chủ động quyết liệt đã khiến thời cơ 'nghìn năm có một' trôi tuột khỏi tầm tay.</p>
                <p>Cuộc biểu tình không đủ sức răn đe, các công sở đầu não chưa kịp tiếp quản thì quân đoàn Tưởng Giới Thạch từ biên giới phía Bắc và tàn dư thực dân Pháp đã ồ ạt kéo vào Hà Nội.</p>
                <p>Cách mạng Việt Nam rơi vào tình thế hiểm nghèo, khắc sâu bài học lịch sử của Chủ tịch Hồ Chí Minh: Trong thời khắc quyết định vận mệnh dân tộc, phải thần tốc, táo bạo chớp thời cơ; chần chừ là có tội với non sông.</p>
            `
        },

        "heroic_sacrifice": {
            id: "heroic_sacrifice",
            title: "TẤM KHIÊN BẤT TỬ",
            badge: "Kết Thúc Hy Sinh Vị Quốc",
            background: "assets/images/cutscene_rush_alley.jpg",
            bgm: "gameplay",
            sfx: "tension",
            text: `
                <p>Trong khoảnh khắc sinh tử khi kẻ địch nổ súng tấn công vào cơ sở mật của Thành ủy, bạn đã dũng cảm ở lại cản hậu, tiêu hủy toàn bộ tài liệu danh sách tự vệ và thu hút hỏa lực địch về phía mình để các đồng chí lãnh đạo kịp thời rút lui an toàn.</p>
                <p>Sự hy sinh anh dũng của bạn đã bảo vệ trọn vẹn bộ não lãnh đạo của cuộc khởi nghĩa. Ngày 19 tháng 8, Hà Nội rực đỏ cờ hoa đón mừng chiến thắng, và tấm gương của bạn mãi mãi được khắc ghi trong trái tim của đồng bào Thủ đô như một biểu tượng của lòng quả cảm trung trinh vì độc lập tự do.</p>
            `
        }
    }
};

window.SCENARIO_DATA = SCENARIO_DATA;
