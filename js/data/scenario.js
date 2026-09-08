/**
 * Scenario & Branching Script for "Bình Minh Tháng Tám - Hà Nội 1945"
 * Kịch bản Visual Novel lịch sử chi tiết từ 14/08 đến 19/08/1945
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
        // HỒI 1: ĐÊM 14/08/1945 - CĂN GÁC PHỐ HÀNG BÔNG
        // ==========================================
        "start": {
            id: "start",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            date: "Đêm 14 tháng 8 năm 1945",
            location: "Căn gác bí mật phố Hàng Bông, Hà Nội",
            background: "assets/images/bg_safehouse.jpg",
            bgm: "tense",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Hà Nội về đêm chìm trong không khí ngột ngạt đến nghẹt thở. Mùi khói dầu hỏa từ chiếc đèn bão hòa lẫn với mùi mực in sắc lẻm từ chiếc máy in roneo đặt ở góc phòng.",
            sfx: "typewriter",
            next: "act1_1"
        },
        "act1_1": {
            id: "act1_1",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Bạn là Vũ Minh - chiến sĩ Đội Tuyên truyền Xung phong Thành Hoàng Diệu kiêm liên lạc viên cho Thường vụ Xứ ủy Bắc Kỳ. Vừa bước chân qua khung cửa sổ gác mái, đồng chí Lâm đã kéo bạn vào trong.",
            sfx: "typewriter",
            next: "act1_2"
        },
        "act1_2": {
            id: "act1_2",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Vũ Minh! Tin tối mật từ đài phát thanh ngoại quốc vừa xác nhận: Hai quả bom nguyên tử đã ném xuống Hiroshima và Nagasaki. Nhật hoàng Hirohito đã tuyên bố đầu hàng Đồng minh không điều kiện!",
            sfx: "tension",
            shake: true,
            next: "act1_3"
        },
        "act1_3": {
            id: "act1_3",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Thảo (Nữ sinh Cứu Quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Thật sao anh Lâm?! Vậy là lũ phát xít đã ngã quỵ! Quân đội viễn chinh Nhật ở Hà Nội đang hoang mang tột độ, chính phủ bù nhìn Trần Trọng Kim như rắn mất đầu!",
            sfx: "typewriter",
            next: "act1_4"
        },
        "act1_4": {
            id: "act1_4",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Đúng! Nhưng nguy cơ cũng lớn chưa từng thấy: Quân Tưởng Giới Thạch từ phương Bắc và quân viễn chinh Pháp nấp sau lưng quân Anh đang lăm le tràn vào nước ta với danh nghĩa giải giáp quân Nhật. Ta phải giành lấy chính quyền trước khi chúng đặt chân tới!",
            sfx: "typewriter",
            next: "act1_5"
        },
        "act1_5": {
            id: "act1_5",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Ủy ban Khởi nghĩa toàn quốc tại Tân Trào đã phát Quân lệnh số 1. Nhưng giao thông liên lạc đứt đoạn, mệnh lệnh chính thức chưa thể về tới Hà Nội trong đêm nay. Chúng ta phải hành động thế nào đây, Vũ Minh?",
            sfx: "typewriter",
            choices: [
                {
                    text: "Táo bạo chủ động: In ngay một vạn truyền đơn cách mạng, cấp tốc chuyển giao cho mạng lưới công nhân xe lửa Gia Lâm và nhà máy điện Yên Phụ chuẩn bị biểu tình.",
                    statChanges: { morale: 20, readiness: 15, alert: 5 },
                    unlockCodex: "doc_quan_lenh_1",
                    next: "act1_choice_bold"
                },
                {
                    text: "Thận trọng củng cố: Tạm thời tuyên truyền miệng, tập trung toàn lực trinh sát hệ thống bố phòng doanh trại Nhật và Trại Bảo an binh.",
                    statChanges: { readiness: 10, garrison: 15, alert: -5 },
                    next: "act1_choice_cautious"
                },
                {
                    text: "Chờ đợi an toàn: Án binh bất động, kiên quyết chờ công văn hỏa tốc chính thức có chữ ký từ Tân Trào mới dám phát động phong trào.",
                    statChanges: { morale: -20, readiness: -15, alert: -10 },
                    next: "act1_choice_hesitant"
                }
            ]
        },

        "act1_choice_bold": {
            id: "act1_choice_bold",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Thảo (Nữ sinh Cứu Quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Anh Minh nói rất đúng! Cơ hội nghìn năm có một, chần chừ là có tội với non sông! Em sẽ lập tức cùng các bạn nữ sinh giấu truyền đơn trong quai giỏ hoa và vạt áo dài để tỏa đi các ngả chợ Đồng Xuân, chợ Hôm!",
            sfx: "choice",
            next: "act2_intro"
        },

        "act1_choice_cautious": {
            id: "act1_choice_cautious",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Phán đoán rất chắc chắn! Biết mình biết người, trăm trận không nguy. Nắm chắc lực lượng Bảo an binh sẽ là chìa khóa để chiếm kho súng mà không làm kinh động tới xe bọc thép của quân Nhật.",
            sfx: "choice",
            next: "act2_intro"
        },

        "act1_choice_hesitant": {
            id: "act1_choice_hesitant",
            chapter: "Hồi 1: Ngọn Lửa Tiền Khởi Nghĩa",
            background: "assets/images/bg_safehouse.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Vũ Minh! Cách mạng là nghệ thuật chớp thời cơ! Nếu cứ máy móc ngồi chờ văn bản đóng dấu giữa lúc liên lạc nghẽn mạch, quân thù sẽ kịp trấn tĩnh và thời cơ ngàn năm sẽ trôi qua kẽ tay!",
            sfx: "tension",
            next: "act2_intro"
        },

        // ==========================================
        // HỒI 2: CHIỀU 17/08/1945 - QUẢNG TRƯỜNG NHÀ HÁT LỚN
        // ==========================================
        "act2_intro": {
            id: "act2_intro",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            date: "Chiều 17 tháng 8 năm 1945",
            location: "Quảng trường Nhà hát Lớn Hà Nội",
            background: "assets/images/bg_revolution.jpg",
            bgm: "epic",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Chiều 17 tháng 8 năm 1945. Tổng hội Viên chức thân chính phủ Trần Trọng Kim tổ chức một cuộc đại mít tinh trước Nhà hát Lớn Hà Nội để cổ súy cho chính quyền bù nhìn do Nhật dựng lên.",
            sfx: "typewriter",
            next: "act2_1"
        },
        "act2_1": {
            id: "act2_1",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Hàng vạn công chức, học sinh và dân chúng tụ tập chật kín quảng trường. Bầu không khí đầy phân vân, chao đảo. Cảnh sát bù nhìn dàn hàng quanh lễ đài, còn lính Nhật lăm lăm súng đứng từ xa theo dõi.",
            sfx: "typewriter",
            next: "act2_2"
        },
        "act2_2": {
            id: "act2_2",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo (Nữ sinh Cứu Quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Anh Minh! Em và các bạn tự vệ đã lọt được lên ban công tầng hai của Nhà hát Lớn! Trong bọc áo em giấu một lá cờ đỏ sao vàng bằng lụa đỏ rộng bốn mét. Chúng sắp sửa cử bài ca chính phủ bù nhìn rồi!",
            sfx: "typewriter",
            next: "act2_3"
        },
        "act2_3": {
            id: "act2_3",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Một viên chức chính phủ bù nhìn bước lên micro chuẩn bị đọc diễn văn. Mọi ánh mắt dưới quảng trường đang đổ dồn về khán đài. Đây chính là ngã rẽ quyết định phong trào Hà Nội!",
            sfx: "tension",
            choices: [
                {
                    text: "Táo bạo cướp diễn đàn: Buông lá cờ đỏ sao vàng khổng lồ từ tầng hai, tước lấy micro đọc Lời Hiệu Triệu Việt Minh và biến cuộc mít tinh thành tuần hành cách mạng.",
                    statChanges: { morale: 25, readiness: 15, alert: 5 },
                    unlockCodex: "evt_17_august",
                    next: "act2_choice_hijack"
                },
                {
                    text: "Phát truyền đơn bí mật: Chỉ đứng trong đám đông tán phát truyền đơn và hô vang khẩu hiệu ủng hộ Việt Minh rồi lặng lẽ rút lui.",
                    statChanges: { morale: 5, readiness: 5, alert: -5 },
                    next: "act2_choice_subtle"
                },
                {
                    text: "Nổ súng thị uy: Ra lệnh cho tổ tự vệ nổ súng chỉ thiên để giải tán ngay lập tức cuộc mít tinh thân Nhật.",
                    statChanges: { morale: -15, readiness: -10, alert: 35 },
                    shake: true,
                    next: "act2_choice_violent"
                }
            ]
        },

        "act2_choice_hijack": {
            id: "act2_choice_hijack",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Từ ban công Nhà hát Lớn, lá cờ đỏ sao vàng bay phần phật trước gió thu! Đồng chí của Đội Thành Hoàng Diệu nhanh như cắt tước lấy micro: 'Đồng bào! Phát xít Nhật đã sụp đổ! Hãy đi theo Mặt trận Việt Minh đứng lên giành lại non sông!'.",
            sfx: "fanfare",
            flash: true,
            next: "act2_hijack_2"
        },
        "act2_hijack_2": {
            id: "act2_hijack_2",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo (Nữ sinh Cứu Quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Hàng vạn cánh tay giơ cao như rừng! Bài hát 'Tiến Quân Ca' bùng lên vang động cả góc trời Tràng Tiền - Hàng Khay! Cảnh sát bù nhìn ngơ ngác buông dùi cui, hòa vào dòng người tuần hành!",
            sfx: "unlock",
            unlockCodex: "doc_tien_quan_ca",
            next: "act3_intro"
        },

        "act2_choice_subtle": {
            id: "act2_choice_subtle",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Ta đã bảo toàn được lực lượng, nhưng đã bỏ lỡ mất một thời cơ quý báu để kích hoạt ngọn lửa yêu nước trong lòng hàng vạn đồng bào Thủ đô...",
            sfx: "tension",
            next: "act3_intro"
        },

        "act2_choice_violent": {
            id: "act2_choice_violent",
            chapter: "Hồi 2: Bão Táp Ngày 17 Tháng Tám",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Tiếng súng nổ chát chúa làm vỡ toang đám đông! Tiếng la hét hỗn loạn, lính Nhật ở khách sạn Metropole lập tức kéo rào thép gai và chĩa nòng súng máy hạng nặng. Tự vệ của ta phải vất vả rút lui trong hiểm nguy.",
            sfx: "tension",
            next: "act3_intro"
        },

        // ==========================================
        // HỒI 3: ĐÊM 18/08/1945 - ĐỘT KÍCH TRẠI BẢO AN BINH
        // ==========================================
        "act3_intro": {
            id: "act3_intro",
            chapter: "Hồi 3: Cân Não Đêm Trước Giờ G",
            date: "Đêm 18 tháng 8 năm 1945",
            location: "Trước cổng Trại Bảo an binh phố Hàng Bài",
            background: "assets/images/bg_garrison.jpg",
            bgm: "tense",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Đêm 18 tháng 8 năm 1945. Khí thế khởi nghĩa đã sôi sục khắp các phố phường ngoại ô và nội thành. Tuy nhiên, Trại Bảo an binh tại phố Hàng Bài vẫn là cái gai nhức nhối nhất.",
            sfx: "typewriter",
            next: "act3_1"
        },
        "act3_1": {
            id: "act3_1",
            chapter: "Hồi 3: Cân Não Đêm Trước Giờ G",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Bên trong trại có hơn 1.000 lính bảo an được trang bị súng trường hiện đại và kho đạn dược khổng lồ. Nếu họ ngoan cố bắn trả vào sáng mai, quân đội Nhật cách đó vài trăm mét sẽ có cớ xua xe tăng ra can thiệp!",
            sfx: "typewriter",
            next: "act3_2"
        },
        "act3_2": {
            id: "act3_2",
            chapter: "Hồi 3: Cân Nảo Đêm Trước Giờ G",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Vũ Minh! Ta không thể dùng vũ trang thô sơ để công phá một đồn trại kiên cố như thế này. Ta phải thực hiện công tác binh vận ngay trong đêm. Cậu và tôi sẽ vào thẳng phòng chỉ huy gặp Đội trưởng Bảo an binh!",
            sfx: "typewriter",
            next: "act3_3"
        },
        "act3_3": {
            id: "act3_3",
            chapter: "Hồi 3: Cân Não Đêm Trước Giờ G",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh là người của Việt Minh?! Các anh to gan lắm! Các anh có biết chỉ cần một tiếng còi báo động của tôi, một ngàn tay súng sẽ lập tức bao vây các anh không?",
            sfx: "tension",
            choices: [
                {
                    text: "Lấy đại nghĩa dân tộc và tình cảm đồng bào thuyết phục: 'Chúng ta đều là con Lạc cháu Hồng! Phát xít Nhật đã quỳ gối, chính quyền bù nhìn đã cáo chung. Hãy quay súng về với nhân dân để lập công với Tổ quốc!'",
                    statChanges: { garrison: 35, morale: 15, alert: -10 },
                    unlockCodex: "fig_bao_an_binh",
                    next: "act3_choice_reason"
                },
                {
                    text: "Đưa ra tối hậu thư thép: 'Hà Nội ngày mai có hai mươi vạn đồng bào sẵn sàng san phẳng nơi này. Các anh buông súng thì được bảo toàn tính mạng, chống cự sẽ là kẻ thù của non sông!'",
                    statChanges: { garrison: 10, morale: 10, alert: 10 },
                    next: "act3_choice_threat"
                },
                {
                    text: "Đề nghị trung lập: 'Các anh không cần đi theo chúng tôi, chỉ cần đóng chặt cổng trại và cam kết không nổ súng vào đoàn người biểu tình sáng mai.'",
                    statChanges: { garrison: 5, readiness: -10, alert: 0 },
                    next: "act3_choice_neutral"
                }
            ]
        },

        "act3_choice_reason": {
            id: "act3_choice_reason",
            chapter: "Hồi 3: Cân Não Đêm Trước Giờ G",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh... nói đúng lắm. Chúng tôi làm lính đánh thuê cho Pháp rồi cho Nhật, trong lòng luôn hổ thẹn với tổ tiên. Tôi xin hứa: Sáng mai khi cờ đỏ sao vàng tiến tới, toàn thể binh lính Trại Hàng Bài sẽ mở cổng và trao nộp kho vũ khí cho cách mạng!",
            sfx: "unlock",
            next: "act4_intro"
        },

        "act3_choice_threat": {
            id: "act3_choice_threat",
            chapter: "Hồi 3: Cân Não Đêm Trước Giờ G",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Các anh đừng dọa tôi! Chúng tôi có súng, có đạn! Sáng mai nếu các anh thực sự có cả vạn quần chúng, tôi mới cân nhắc có nên buông súng hay không!",
            sfx: "tension",
            next: "act4_intro"
        },

        "act3_choice_neutral": {
            id: "act3_choice_neutral",
            chapter: "Hồi 3: Cân Não Đêm Trước Giờ G",
            background: "assets/images/bg_garrison.jpg",
            speaker: "Chỉ Huy Bảo An Binh",
            avatar: "assets/images/char_bao_an.jpg",
            text: "Được, nước sông không phạm nước giếng. Đêm nay các anh rời khỏi đây an toàn. Sáng mai chúng tôi khóa cổng trại, không can dự vào chuyện các anh chiếm công sở.",
            sfx: "typewriter",
            next: "act4_intro"
        },

        // ==========================================
        // HỒI 4: NGÀY 19/08/1945 - ĐỐI ĐẦU TẠI BẮC BỘ PHỦ
        // ==========================================
        "act4_intro": {
            id: "act4_intro",
            chapter: "Hồi 4: Giờ Quyết Định - Khởi Nghĩa Toàn Thắng",
            date: "Sáng 19 tháng 8 năm 1945",
            location: "Quảng trường Nhà hát Lớn & Bắc Bộ Phủ",
            background: "assets/images/bg_revolution.jpg",
            bgm: "epic",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Sáng 19 tháng 8 năm 1945! Cả Hà Nội bừng tỉnh trong rừng cờ đỏ sao vàng rực rỡ! Hơn 20 vạn nhân dân từ khắp các cửa ô: Đống Đa, Bưởi, Cầu Giấy, Bạch Mai cuồn cuộn đổ về Nhà hát Lớn!",
            sfx: "fanfare",
            flash: true,
            next: "act4_1"
        },
        "act4_1": {
            id: "act4_1",
            chapter: "Hồi 4: Giờ Quyết Định - Khởi Nghĩa Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Thảo (Nữ sinh Cứu Quốc)",
            avatar: "assets/images/char_thao.jpg",
            text: "Anh Minh ơi! Quần chúng đã tràn vào chiếm Phủ Khâm sai Bắc Bộ! Nhưng nhìn đằng kia xem!",
            sfx: "tension",
            shake: true,
            next: "act4_2"
        },
        "act4_2": {
            id: "act4_2",
            chapter: "Hồi 4: Giờ Quyết Định - Khởi Nghĩa Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Lời Dẫn",
            avatar: null,
            text: "Tiếng xích sắt nghiến gầm rú trên mặt đường đá! Bốn xe bọc thép hạng nặng cùng hai tiểu đoàn lính Nhật từ Phủ Toàn quyền ập đến, dàn trận chĩa súng máy vào Bắc Bộ Phủ và Trại Bảo an binh!",
            sfx: "tension",
            shake: true,
            next: "act4_3"
        },
        "act4_3": {
            id: "act4_3",
            chapter: "Hồi 4: Giờ Quyết Định - Khởi Nghĩa Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            speaker: "Đồng chí Lâm",
            avatar: "assets/images/char_lam.jpg",
            text: "Quân Nhật đang cực kỳ căng thẳng. Nếu một phát súng nổ ra lúc này, xe tăng và pháo của chúng sẽ gây đổ máu khôn lường cho hàng vạn đồng bào ta! Vũ Minh, chúng ta phải xử trí ra sao trước họng súng của quân Nhật?",
            sfx: "typewriter",
            choices: [
                {
                    text: "Hiên ngang tiến ra đàm phán ngoại giao quân sự: Khẳng định cách mạng chỉ phế truất chính phủ bù nhìn, cam đoan an toàn cho quân Nhật chờ hồi hương, yêu cầu Nhật tôn trọng nguyện vọng độc lập của người Việt và án binh bất động.",
                    statChanges: { morale: 20, garrison: 20, alert: -25 },
                    unlockCodex: "evt_19_august",
                    evalEnding: true
                },
                {
                    text: "Hô hào toàn thể biển người biển gậy xông lên bao vây xe bọc thép Nhật bằng tinh thần quyết tử.",
                    statChanges: { morale: 10, readiness: -20, alert: 40 },
                    shake: true,
                    evalEnding: true
                },
                {
                    text: "Rút lui khỏi Bắc Bộ Phủ để tránh thương vong, chờ quân Nhật tự rút đi.",
                    statChanges: { morale: -35, readiness: -25, alert: 0 },
                    evalEnding: true
                }
            ]
        }
    },

    // ==========================================
    // CÁC KẾT THÚC (ENDINGS)
    // ==========================================
    endings: {
        "true_ending": {
            id: "true_ending",
            title: "ĐẠI THẮNG THÁNG TÁM - HÀ NỘI ĐỘC LẬP",
            badge: "Kết Thúc Lịch Sử Toàn Thắng",
            background: "assets/images/bg_revolution.jpg",
            bgm: "epic",
            sfx: "fanfare",
            text: `
                <p><strong>Ngày 19 tháng 8 năm 1945 đã đi vào trang sử vàng chói lọi của dân tộc Việt Nam!</strong></p>
                <p>Nhờ những quyết sách quả cảm, sáng suốt và tài ngoại giao kiệt xuất của bạn cùng các đồng chí Việt Minh, ngọn cờ đỏ sao vàng đã ngạo nghễ tung bay trên nóc Phủ Khâm sai Bắc Bộ, Trại Bảo an binh, Tòa Đốc lý và Sở Cảnh sát Hà Nội.</p>
                <p>Toàn bộ 1.000 lính Bảo an binh quy phục trao nộp kho vũ khí; quân đội phát xít Nhật chấp nhận án binh bất động trong doanh trại. Cuộc khởi nghĩa giành chính quyền tại Thủ đô toàn thắng vang dội mà hầu như không đổ một giọt máu!</p>
                <p>Thắng lợi ở Hà Nội như phát pháo lệnh giục giã cả nước đứng lên, tạo tiền đề quyết định để Chủ tịch Hồ Chí Minh đọc bản <em>Tuyên ngôn Độc lập</em> khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào ngày 2/9/1945 tại Quảng trường Ba Đình lịch sử!</p>
            `,
            historicalNote: "Bạn đã tái hiện xuất sắc chiến lược tài tình của Đảng bộ Hà Nội và Xứ ủy Bắc Kỳ trong những ngày Cách mạng Tháng Tám lịch sử."
        },

        "costly_victory": {
            id: "costly_victory",
            title: "CHIẾN THẮNG TRONG BÃO LỬA",
            badge: "Kết Thúc Thắng Lợi Cam Go",
            background: "assets/images/bg_garrison.jpg",
            bgm: "tense",
            sfx: "tension",
            text: `
                <p>Trước sức mạnh vũ bão của hàng vạn đồng bào, chính quyền bù nhìn tay sai buộc phải sụp đổ. Việt Minh đã làm chủ hoàn toàn các công sở trọng yếu tại Hà Nội trước khi quân Đồng minh kịp tiến vào.</p>
                <p>Tuy nhiên, do những xung đột vũ trang cục bộ bộc phát tại Trại Bảo an binh và trước hàng xe tăng Nhật, một số chiến sĩ tự vệ trung kiên và đồng bào yêu nước đã ngã xuống ngay trước giờ khải hoàn.</p>
                <p>Hà Nội giành được độc lập, nhưng bài học xương máu về nghệ thuật chớp thời cơ và đấu tranh chính trị kết hợp ngoại giao sẽ còn được khắc ghi mãi mãi.</p>
            `,
            historicalNote: "Dù trải qua thử thách cam go, tinh thần quật cường của nhân dân Hà Nội vẫn làm nên kỳ tích lịch sử."
        },

        "missed_opportunity": {
            id: "missed_opportunity",
            title: "NGẬM NGÙI TRỄ BƯỚC",
            badge: "Kết Thúc Bỏ Lỡ Thời Cơ Vàng",
            background: "assets/images/bg_safehouse.jpg",
            bgm: "tense",
            sfx: "tension",
            text: `
                <p>Sự do dự, chần chừ và việc thiếu những quyết sách quyết liệt đã khiến thời cơ 'nghìn năm có một' trôi tuột khỏi tầm tay.</p>
                <p>Cuộc biểu tình không đủ sức răn đe, các công sở đầu não chưa kịp tiếp quản thì quân đoàn Tưởng Giới Thạch từ biên giới phía Bắc và tàn dư thực dân Pháp đã ồ ạt kéo vào Hà Nội.</p>
                <p>Cách mạng Việt Nam rơi vào tình thế hiểm nghèo chưa từng có, buộc phong trào cứu quốc phải bước vào một giai đoạn trường kỳ gian khổ mới để tìm kiếm cơ hội giành lại nền độc lập.</p>
            `,
            historicalNote: "Đúng như Chủ tịch Hồ Chí Minh từng căn dặn: 'Lúc này thời cơ thuận lợi đã tới, dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!'"
        },

        "heroic_sacrifice": {
            id: "heroic_sacrifice",
            title: "TẤM KHIÊN BẤT TỬ",
            badge: "Kết Thúc Hy Sinh Vị Quốc",
            background: "assets/images/bg_safehouse.jpg",
            bgm: "tense",
            sfx: "tension",
            text: `
                <p>Trong khoảnh khắc sinh tử khi kẻ địch nổ súng tấn công vào cơ sở mật của Thành ủy, bạn đã dũng cảm ở lại cản hậu, tiêu hủy toàn bộ tài liệu danh sách tự vệ và thu hút hỏa lực địch về phía mình để đồng chí Lâm và Thảo kịp thời rút lui an toàn.</p>
                <p>Sự hy sinh anh dũng của bạn đã bảo vệ trọn vẹn bộ não lãnh đạo của cuộc khởi nghĩa. Ngày 19 tháng 8, Hà Nội rực đỏ cờ hoa đón mừng chiến thắng, và tên của bạn mãi mãi được khắc ghi trong trái tim của đồng bào Thủ đô như một biểu tượng của lòng quả cảm trung trinh.</p>
            `,
            historicalNote: "Sự hy sinh của các chiến sĩ vô danh là nền tảng vững chắc cho độc lập tự do của Tổ quốc hôm nay."
        }
    }
};

window.SCENARIO_DATA = SCENARIO_DATA;
