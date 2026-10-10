# -*- coding: utf-8 -*-
import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def create_student_report():
    doc = Document()

    # 1. Căn lề trang chuẩn (Trái 3.0cm, Phải 2.0cm, Trên 2.0cm, Dưới 2.0cm)
    for section in doc.sections:
        section.top_margin = Inches(0.79)     # 2.0 cm
        section.bottom_margin = Inches(0.79)  # 2.0 cm
        section.left_margin = Inches(1.18)    # 3.0 cm
        section.right_margin = Inches(0.79)   # 2.0 cm

    # 2. Kiểu mặc định: Times New Roman, 13pt, Màu đen (#000000)
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Times New Roman'
    normal_style.font.size = Pt(13)
    normal_style.font.color.rgb = RGBColor(0, 0, 0)
    rPr = normal_style._element.get_or_add_rPr()
    rFonts = OxmlElement('w:rFonts')
    rFonts.set(qn('w:ascii'), 'Times New Roman')
    rFonts.set(qn('w:hAnsi'), 'Times New Roman')
    rFonts.set(qn('w:eastAsia'), 'Times New Roman')
    rFonts.set(qn('w:cs'), 'Times New Roman')
    rPr.append(rFonts)

    def add_p(text="", align=WD_ALIGN_PARAGRAPH.LEFT, bold=False, italic=False, size=13, space_before=0, space_after=3, line_spacing=1.15):
        p = doc.add_paragraph()
        p.alignment = align
        p.paragraph_format.space_before = Pt(space_before)
        p.paragraph_format.space_after = Pt(space_after)
        p.paragraph_format.line_spacing = line_spacing
        if text:
            run = p.add_run(text)
            run.font.name = 'Times New Roman'
            run.font.size = Pt(size)
            run.font.bold = bold
            run.font.italic = italic
            run.font.color.rgb = RGBColor(0, 0, 0)
            rPr = run._element.get_or_add_rPr()
            rFonts = OxmlElement('w:rFonts')
            rFonts.set(qn('w:ascii'), 'Times New Roman')
            rFonts.set(qn('w:hAnsi'), 'Times New Roman')
            rFonts.set(qn('w:eastAsia'), 'Times New Roman')
            rFonts.set(qn('w:cs'), 'Times New Roman')
            rPr.append(rFonts)
        return p

    def add_run(p, text, bold=False, italic=False, size=13):
        run = p.add_run(text)
        run.font.name = 'Times New Roman'
        run.font.size = Pt(size)
        run.font.bold = bold
        run.font.italic = italic
        run.font.color.rgb = RGBColor(0, 0, 0)
        rPr = run._element.get_or_add_rPr()
        rFonts = OxmlElement('w:rFonts')
        rFonts.set(qn('w:ascii'), 'Times New Roman')
        rFonts.set(qn('w:hAnsi'), 'Times New Roman')
        rFonts.set(qn('w:eastAsia'), 'Times New Roman')
        rFonts.set(qn('w:cs'), 'Times New Roman')
        rPr.append(rFonts)
        return run

    def set_cell_borders(cell):
        tcPr = cell._element.get_or_add_tcPr()
        tcBorders = parse_xml(r'''
            <w:tcBorders {} >
                <w:top w:val="single" w:sz="4" w:space="0" w:color="000000"/>
                <w:left w:val="single" w:sz="4" w:space="0" w:color="000000"/>
                <w:bottom w:val="single" w:sz="4" w:space="0" w:color="000000"/>
                <w:right w:val="single" w:sz="4" w:space="0" w:color="000000"/>
            </w:tcBorders>
        '''.format(nsdecls('w')))
        tcPr.append(tcBorders)

    # ==========================================
    # TIÊU ĐỀ BÁO CÁO NHÓM SINH VIÊN
    # ==========================================
    add_p("HỌC PHẦN: LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM", align=WD_ALIGN_PARAGRAPH.CENTER, bold=True, size=13, space_after=2)
    add_p("BÁO CÁO DỰ ÁN HỌC TẬP (BÀI TẬP LỚN NHÓM)", align=WD_ALIGN_PARAGRAPH.CENTER, bold=True, size=14, space_after=10)

    add_p("ĐỀ TÀI: CÁCH MẠNG THÁNG TÁM NĂM 1945 DƯỚI SỰ LÃNH ĐẠO CỦA ĐẢNG", align=WD_ALIGN_PARAGRAPH.CENTER, bold=True, size=15, space_before=4, space_after=2)
    add_p("Trọng tâm: Cuộc khởi nghĩa giành chính quyền tại Hà Nội", align=WD_ALIGN_PARAGRAPH.CENTER, italic=True, bold=True, size=13, space_after=14)

    # ==========================================
    # PHẦN 1: THÔNG TIN NHÓM & LINK SẢN PHẨM
    # ==========================================
    add_p("1. THÔNG TIN NHÓM VÀ ĐƯỜNG DẪN SẢN PHẨM", bold=True, size=14, space_before=6, space_after=4)

    p_info = add_p()
    add_run(p_info, "• Nhóm thực hiện: ", bold=True, size=13)
    add_run(p_info, "Nhóm 09   |   ", bold=True, size=13)
    add_run(p_info, "Lớp học phần: ", bold=True, size=13)
    add_run(p_info, "[Điền mã lớp / tên lớp]", italic=True, size=13)

    p_form = add_p()
    add_run(p_form, "• Thể loại sản phẩm: ", bold=True, size=13)
    add_run(p_form, "Trang web tương tác dạng Visual Novel (tiểu thuyết trực quan) kết hợp tra cứu hồ sơ văn kiện lịch sử và trắc nghiệm ôn tập.", size=13)

    p_link_game = add_p()
    add_run(p_link_game, "• Link trải nghiệm trực tiếp (Web Game): ", bold=True, size=13)
    add_run(p_link_game, "https://shinn1603.github.io/LSD/", bold=True, size=13)

    p_link_git = add_p()
    add_run(p_link_git, "• Link mã nguồn (GitHub Repo): ", bold=True, size=13)
    add_run(p_link_git, "https://github.com/shinn1603/LSD", size=13)

    # Bảng thành viên
    add_p("Bảng phân công nhiệm vụ thành viên Nhóm 09:", bold=True, italic=True, size=13, space_before=6, space_after=3)

    table = doc.add_table(rows=6, cols=5)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False

    col_widths = [Inches(0.6), Inches(2.1), Inches(1.2), Inches(1.3), Inches(2.4)]
    headers = ["STT", "Họ và Tên", "MSSV", "Vai trò", "Nhiệm vụ đảm nhiệm"]

    # Header Row
    hdr_cells = table.rows[0].cells
    for i, title in enumerate(headers):
        hdr_cells[i].width = col_widths[i]
        set_cell_borders(hdr_cells[i])
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(2)
        add_run(p, title, bold=True, size=12)

    # Data Rows
    team_data = [
        ("1", "Nguyễn Phước Minh Triết", "24110357", "Nhóm trưởng", "Nghiên cứu tài liệu, xây dựng sườn đề cương môn học"),
        ("2", "Nguyễn Phước Thọ", "24110343", "Thành viên", "Viết kịch bản hội thoại, tổng hợp văn kiện tư liệu (Codex)"),
        ("3", "Trần Tiến Đạt", "24110198", "Thành viên", "Sưu tầm và xử lý hình ảnh tư liệu bối cảnh lịch sử 1945"),
        ("4", "Lương Xuân Phúc", "24142302", "Thành viên", "Lập trình giao diện web, hiệu ứng chuyển cảnh và rẽ nhánh"),
        ("5", "Đinh Thiên Bảo", "24162009", "Thành viên", "Lồng ghép âm thanh, biên soạn câu hỏi trắc nghiệm & kiểm thử")
    ]

    for row_idx, row_data in enumerate(team_data, start=1):
        row_cells = table.rows[row_idx].cells
        for col_idx, text in enumerate(row_data):
            row_cells[col_idx].width = col_widths[col_idx]
            set_cell_borders(row_cells[col_idx])
            p = row_cells[col_idx].paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            align = WD_ALIGN_PARAGRAPH.CENTER if col_idx in [0, 2, 3] else WD_ALIGN_PARAGRAPH.LEFT
            p.alignment = align
            is_bold = (col_idx == 1 or (col_idx == 3 and row_idx == 1))
            add_run(p, text, bold=is_bold, size=12)

    add_p("", space_after=4)

    # ==========================================
    # PHẦN 2: TÓM TẮT NỘI DUNG 4 PHẦN THEO ĐỀ MẪU
    # ==========================================
    add_p("2. TÓM TẮT NỘI DUNG ĐỀ TÀI THEO ĐỀ MẪU CỦA MÔN HỌC", bold=True, size=14, space_before=8, space_after=4)

    add_p(
        "Nhóm bám sát đúng Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Chương I - Mục III), không dùng từ ngữ mỹ miều hay văn phong do AI phóng tác, tập trung làm rõ vai trò lãnh đạo và nghệ thuật chớp thời cơ của Đảng qua 4 ý cốt lõi:",
        size=13, space_after=4
    )

    # 2.1. Hoàn cảnh lịch sử
    p_hc = add_p()
    add_run(p_hc, "2.1. Hoàn cảnh lịch sử (Tháng 8/1945):", bold=True, size=13)
    add_p(
        "• Quốc tế: Phát xít Nhật đầu hàng Đồng minh không điều kiện sau 2 quả bom nguyên tử (14-15/8/1945). Quân đội Nhật ở Đông Dương tê liệt ý chí, mất hết tinh thần chiến đấu.\n"
        "• Trong nước: Chính quyền tay sai Trần Trọng Kim tan rã; quần chúng sục sôi khí thế sau cao trào kháng Nhật cứu nước. Thời cơ 'nghìn năm có một' xuất hiện, nhưng cần giành chính quyền trước khi quân Đồng minh kéo vào.",
        size=13, space_after=4
    )

    # 2.2. Chủ trương của Đảng
    p_ct = add_p()
    add_run(p_ct, "2.2. Chủ trương của Đảng:", bold=True, size=13)
    add_p(
        "• Dự báo thời cơ từ sớm: Chỉ thị ngày 12/3/1945 'Nhật - Pháp bắn nhau và hành động của chúng ta' của Ban Thường vụ Trung ương Đảng (Tổng Bí thư Trường Chinh chủ trì) đã vạch rõ phát xít Nhật là kẻ thù trước mắt, phát động cao trào tiền khởi nghĩa.\n"
        "• Phát lệnh Tổng khởi nghĩa: Đêm 13/8/1945, Ủy ban Khởi nghĩa toàn quốc ban bố Quân lệnh số 1. Hội nghị toàn quốc của Đảng tại Tân Trào (14-15/8) quyết định Tổng khởi nghĩa cả nước.\n"
        "• Sáng tạo của Đảng bộ địa phương: Tại Hội nghị Vạn Phúc (chiều 15/8), trước tình cảnh mất liên lạc với Tân Trào, Ban Thường vụ Xứ ủy Bắc Kỳ (đồng chí Nguyễn Khang chủ trì) đã nhạy bén chớp thời cơ, tự quyết định phát lệnh khởi nghĩa Hà Nội vào ngày 19/8/1945.",
        size=13, space_after=4
    )

    # 2.3. Diễn biến dưới sự lãnh đạo của Đảng
    p_db = add_p()
    add_run(p_db, "2.3. Diễn biến dưới sự lãnh đạo của Đảng tại Hà Nội:", bold=True, size=13)
    add_p(
        "• Chiều 17/8/1945: Thành ủy chỉ đạo Đội Tuyên truyền Xung phong phá cuộc mít tinh của địch tại Nhà hát Lớn, buông cờ đỏ sao vàng, hát Tiến Quân Ca và biến thành cuộc biểu tình cách mạng thị uy rầm rộ.\n"
        "• Đêm 18/8/1945: Cán bộ Thành ủy tiến hành công tác binh vận ngay trong lòng Trại Bảo an binh Hàng Bài, giác ngộ chỉ huy và hơn 1.000 lính bảo an giao nộp kho vũ khí cho cách mạng, tránh đổ máu đồng bào.\n"
        "• Ngày 19/8/1945: Hơn 20 vạn quần chúng chiếm lĩnh Phủ Khâm sai, Tòa Đốc lý, Sở Mật thám. Đỉnh cao là đàm phán chính trị - quân sự trước họng súng 4 xe bọc thép Nhật, cam kết an toàn cho lính Nhật chờ hồi hương, buộc chúng án binh bất động. Hà Nội toàn thắng hầu như không đổ máu.",
        size=13, space_after=4
    )

    # 2.4. Kết quả và ý nghĩa
    p_kq = add_p()
    add_run(p_kq, "2.4. Kết quả, Ý nghĩa và Bài học kinh nghiệm của Đảng:", bold=True, size=13)
    add_p(
        "• Kết quả & Ý nghĩa: Thắng lợi tại Hà Nội tạo xung lực quyết định giục giã cả nước đứng lên, dẫn tới ngày 2/9/1945 Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập. Khẳng định đường lối lãnh đạo duy nhất, đúng đắn của Đảng.\n"
        "• 4 bài học lớn của Đảng: (1) Giương cao ngọn cờ độc lập dân tộc; (2) Xây dựng khối đại đoàn kết toàn dân trên nền tảng liên minh công nông; (3) Nghệ thuật chớp thời cơ và kết hợp chính trị - ngoại giao - quân sự; (4) Xây dựng Đảng vững mạnh, dám nghĩ, dám làm và dám chịu trách nhiệm trước lịch sử.",
        size=13, space_after=6
    )

    # ==========================================
    # PHẦN 3: HÌNH ẢNH CHỤP MINH CHỨNG TỔNG THỂ DỰ ÁN (CHỤP TRỰC TIẾP TỪ GOOGLE CHROME)
    # ==========================================
    add_p("3. HÌNH ẢNH CHỤP MINH CHỨNG TỔNG THỂ DỰ ÁN", bold=True, size=14, space_before=8, space_after=4)

    add_p(
        "Dưới đây là hình ảnh chụp màn hình thực tế mới nhất từ trình duyệt Google Chrome trên trang web của nhóm (https://shinn1603.github.io/LSD/), minh chứng cho toàn bộ các phân hệ đã hoàn thiện:",
        size=13, space_after=6
    )

    screenshots = [
        {
            "path": r"docs\screenshots\1_title_screen.png",
            "caption": "Hình 1: Màn hình chính dự án - Tiêu đề chuẩn mực, danh sách thành viên Nhóm 09 và thanh điều hướng chức năng.",
            "desc": "Giao diện trang chủ cho phép bắt đầu cốt truyện Visual Novel, tra cứu đề cương, mở kho hồ sơ văn kiện (Codex) hoặc làm trắc nghiệm ôn tập."
        },
        {
            "path": r"docs\screenshots\2_syllabus_modal.png",
            "caption": "Hình 2: Bảng đề cương môn học - Chuẩn cấu trúc 4 phần theo đề mẫu của giảng viên.",
            "desc": "Hệ thống hóa toàn bộ kiến thức: Hoàn cảnh lịch sử, Chủ trương của Đảng, Diễn biến cuộc khởi nghĩa tại Hà Nội và Kết quả - Ý nghĩa."
        },
        {
            "path": r"docs\screenshots\3_codex_modal.png",
            "caption": "Hình 3: Hồ sơ tư liệu lịch sử (Codex) - Số hóa văn kiện Đảng và nhân chứng lịch sử.",
            "desc": "Người chơi có thể tra cứu toàn văn Chỉ thị 12/3/1945, Quân lệnh số 1 Tân Trào, tiểu sử Tổng Bí thư Trường Chinh, đồng chí Nguyễn Khang..."
        },
        {
            "path": r"docs\screenshots\4_quiz_modal.png",
            "caption": "Hình 4: Phân hệ trắc nghiệm kiến thức - 6 câu hỏi ôn tập củng cố bài học.",
            "desc": "Bộ câu hỏi trắc nghiệm kiểm tra khả năng ghi nhớ các mốc sự kiện, văn kiện Đảng và ý nghĩa lịch sử của Cách mạng Tháng Tám."
        },
        {
            "path": r"docs\screenshots\5_gameplay_vn.png",
            "caption": "Hình 5: Giao diện Visual Novel - Không gian căn gác bí mật phố Hàng Bông đêm 14/8/1945.",
            "desc": "Người chơi tiếp nhận chỉ đạo trực tiếp từ cán bộ Thành ủy (đồng chí Lâm) và nữ sinh cứu quốc trong bối cảnh chuẩn bị khởi nghĩa."
        },
        {
            "path": r"docs\screenshots\6_choices_system.png",
            "caption": "Hình 6: Hệ thống lựa chọn rẽ nhánh - Thử thách chớp thời cơ và ra quyết định chiến lược.",
            "desc": "Các lựa chọn phản ánh đúng sự giằng co lịch sử: chủ động phát động quần chúng hay thụ động chờ văn bản chính thức."
        },
        {
            "path": r"docs\screenshots\7_cutscene_opera.png",
            "caption": "Hình 7: Phân cảnh điện ảnh Nhà hát Lớn chiều 17/8/1945 - Cờ đỏ sao vàng buông phủ trên diễn đàn mít tinh.",
            "desc": "Tái hiện thời khắc Đội Tuyên truyền Xung phong chiếm diễn đàn, buông lá cờ đỏ sao vàng khổng lồ và hô vang khẩu hiệu cách mạng."
        },
        {
            "path": r"docs\screenshots\8_ending_true.png",
            "caption": "Hình 8: Màn hình kết thúc toàn thắng (True Ending) - Tổng kết 4 bài học lịch sử của Đảng.",
            "desc": "Tái hiện thắng lợi ngày 2/9/1945 tại Quảng trường Ba Đình và đúc kết trọn vẹn 4 bài học kinh nghiệm trong Giáo trình Lịch sử Đảng."
        }
    ]

    for item in screenshots:
        img_path = item["path"]
        if not os.path.isabs(img_path):
            img_path = os.path.join(os.getcwd(), img_path)

        if os.path.exists(img_path):
            p_img = doc.add_paragraph()
            p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_img.paragraph_format.space_before = Pt(6)
            p_img.paragraph_format.space_after = Pt(2)
            run_img = p_img.add_run()
            run_img.add_picture(img_path, width=Inches(5.7))

            p_cap = doc.add_paragraph()
            p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_cap.paragraph_format.space_before = Pt(1)
            p_cap.paragraph_format.space_after = Pt(1)
            add_run(p_cap, item["caption"], bold=True, italic=True, size=11)

            p_desc = doc.add_paragraph()
            p_desc.alignment = WD_ALIGN_PARAGRAPH.LEFT
            p_desc.paragraph_format.space_before = Pt(0)
            p_desc.paragraph_format.space_after = Pt(8)
            add_run(p_desc, item["desc"], italic=True, size=12)

    # ==========================================
    # PHẦN 4: HƯỚNG DẪN TRẢI NGHIỆM & LỜI KẾT
    # ==========================================
    add_p("4. HƯỚNG DẪN TRẢI NGHIỆM VÀ LỜI CẢM ƠN", bold=True, size=14, space_before=8, space_after=4)

    add_p(
        "• Cách chơi: Mở trình duyệt vào link https://shinn1603.github.io/LSD/, bấm chuột hoặc phím Space / Enter để đọc thoại. Bấm phím 'A' để bật chế độ tự động chạy thoại.\n"
        "• Mã kiểm tra nhanh dành cho thầy/cô (Cheat code): Vào phần Cài đặt nhập mã 'yain' (hoặc gõ liên tiếp các phím y-a-i-n bất cứ lúc nào) để mở khóa toàn bộ hồ sơ tư liệu và các nhánh kết thúc phục vụ chấm bài.\n"
        "• Lời cảm ơn: Nhóm 09 xin chân thành cảm ơn thầy/cô giảng viên bộ môn Lịch sử Đảng Cộng sản Việt Nam đã định hướng và góp ý đề tài. Dự án là sản phẩm tâm huyết của nhóm nhằm ứng dụng hình thức tương tác trực quan giúp bài học lịch sử trở nên gần gũi, sinh động và dễ ghi nhớ hơn.",
        size=13, space_after=14
    )

    # Chữ ký nhóm trưởng
    p_sign_date = add_p("Hà Nội, ngày 10 tháng 10 năm 2026", align=WD_ALIGN_PARAGRAPH.RIGHT, italic=True, size=13, space_after=2)
    p_sign_lead = add_p("Đại diện Nhóm 09 (Nhóm trưởng)", align=WD_ALIGN_PARAGRAPH.RIGHT, bold=True, size=13, space_after=35)
    p_sign_name = add_p("Nguyễn Phước Minh Triết", align=WD_ALIGN_PARAGRAPH.RIGHT, bold=True, size=13, space_after=0)

    # Lưu file
    output_filename = "Bao_Cao_De_Tai_Nhom_09_Lich_Su_Dang.docx"
    doc.save(output_filename)
    print(f"SUCCESS: Student report docx generated at {output_filename}")

if __name__ == "__main__":
    create_student_report()
