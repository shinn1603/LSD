# -*- coding: utf-8 -*-
"""
Tự động xuất file Báo cáo Word (.docx) chuẩn theo mẫu template:
261LLCT220514_06MOOC_Web_Nhom09.docx
Áp dụng cho đề tài Lịch sử Đảng: Game tương tác Visual Novel - Cách mạng Tháng Tám 1945 tại Hà Nội.
"""

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

    # 1. Căn lề chuẩn A4 (Trên: 2.0cm, Dưới: 2.0cm, Trái: 3.0cm, Phải: 2.0cm)
    for section in doc.sections:
        section.top_margin = Inches(0.79)     # 2.0 cm (56.7 pt)
        section.bottom_margin = Inches(0.79)  # 2.0 cm (56.7 pt)
        section.left_margin = Inches(1.18)    # 3.0 cm (85.05 pt)
        section.right_margin = Inches(0.79)   # 2.0 cm (56.7 pt)

    # 2. Font & Style mặc định: Times New Roman, 13pt
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

    def add_p(text="", align=None, bold=False, italic=False, color=None, space_before=None, space_after=None, line_spacing=1.5):
        p = doc.add_paragraph()
        if align is not None:
            p.alignment = align
        if space_before is not None:
            p.paragraph_format.space_before = Pt(space_before)
        if space_after is not None:
            p.paragraph_format.space_after = Pt(space_after)
        if line_spacing is not None:
            p.paragraph_format.line_spacing = line_spacing

        if text:
            run = p.add_run(text)
            run.font.name = 'Times New Roman'
            if bold:
                run.font.bold = True
            if italic:
                run.font.italic = True
            if color:
                run.font.color.rgb = color
            else:
                run.font.color.rgb = RGBColor(0, 0, 0)
            rPr_run = run._element.get_or_add_rPr()
            rFonts_run = OxmlElement('w:rFonts')
            rFonts_run.set(qn('w:ascii'), 'Times New Roman')
            rFonts_run.set(qn('w:hAnsi'), 'Times New Roman')
            rFonts_run.set(qn('w:eastAsia'), 'Times New Roman')
            rFonts_run.set(qn('w:cs'), 'Times New Roman')
            rPr_run.append(rFonts_run)
        return p

    def add_run(p, text, bold=False, italic=False, color=None):
        run = p.add_run(text)
        run.font.name = 'Times New Roman'
        if bold:
            run.font.bold = True
        if italic:
            run.font.italic = True
        if color:
            run.font.color.rgb = color
        else:
            run.font.color.rgb = RGBColor(0, 0, 0)
        rPr_run = run._element.get_or_add_rPr()
        rFonts_run = OxmlElement('w:rFonts')
        rFonts_run.set(qn('w:ascii'), 'Times New Roman')
        rFonts_run.set(qn('w:hAnsi'), 'Times New Roman')
        rFonts_run.set(qn('w:eastAsia'), 'Times New Roman')
        rFonts_run.set(qn('w:cs'), 'Times New Roman')
        rPr_run.append(rFonts_run)
        return run

    def set_cell_properties(cell, is_header=False):
        tcPr = cell._element.get_or_add_tcPr()
        # Đường viền viền màu be nhạt #D0C8B8 đồng bộ mẫu template
        tcBorders = parse_xml(r'''
            <w:tcBorders {} >
                <w:top w:val="single" w:sz="4" w:space="0" w:color="D0C8B8"/>
                <w:left w:val="single" w:sz="4" w:space="0" w:color="D0C8B8"/>
                <w:bottom w:val="single" w:sz="4" w:space="0" w:color="D0C8B8"/>
                <w:right w:val="single" w:sz="4" w:space="0" w:color="D0C8B8"/>
            </w:tcBorders>
        '''.format(nsdecls('w')))
        tcPr.append(tcBorders)

        # Header đổ nền màu kem #F2ECE1 đúng mẫu
        if is_header:
            shd = parse_xml(r'<w:shd {} w:val="clear" w:color="auto" w:fill="F2ECE1"/>'.format(nsdecls('w')))
            tcPr.append(shd)

        # Căn giữa theo chiều dọc
        vAlign = parse_xml(r'<w:vAlign {} w:val="center"/>'.format(nsdecls('w')))
        tcPr.append(vAlign)

    # ==========================================
    # P00 & P01: TIÊU ĐỀ BÁO CÁO (ĐÚNG THEO MẪU _WEB)
    # ==========================================
    # Màu đỏ sẫm đặc trưng Lịch sử Đảng: #9E302B (RGB: 158, 48, 43)
    add_p("ĐỀ TÀI: CÁCH MẠNG THÁNG TÁM NĂM 1945 DƯỚI SỰ LÃNH ĐẠO CỦA ĐẢNG",
          align=WD_ALIGN_PARAGRAPH.CENTER, bold=True, color=RGBColor(158, 48, 43), space_after=2, line_spacing=1.5)

    add_p("Trọng tâm: Cuộc khởi nghĩa giành chính quyền tại Hà Nội",
          align=WD_ALIGN_PARAGRAPH.CENTER, bold=True, italic=True, space_after=14, line_spacing=1.5)

    # ==========================================
    # PHẦN 1: THÔNG TIN NHÓM VÀ ĐƯỜNG DẪN SẢN PHẨM
    # ==========================================
    add_p("1. THÔNG TIN NHÓM VÀ ĐƯỜNG DẪN SẢN PHẨM", bold=True, space_before=8, space_after=6, line_spacing=1.5)

    # Mục 1: Nhóm thực hiện
    p_group = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3, line_spacing=1.5)
    add_run(p_group, "• Nhóm thực hiện: ", bold=True)
    add_run(p_group, "Nhóm 09")

    # Mục 2: Lớp học phần
    p_class = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=6, line_spacing=1.5)
    add_run(p_class, "• Lớp học phần: ", bold=True)
    add_run(p_class, "LLCT220514_06UTExMC")

    # Mục 3: Giảng viên hướng dẫn
    p_teacher = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3, line_spacing=1.5)
    add_run(p_teacher, "• Giảng viên hướng dẫn: ", bold=True)
    add_run(p_teacher, "ThS. Lê Quang Chung")

    # Mục 4: Tài liệu tham khảo chính
    p_ref = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3, line_spacing=1.5)
    add_run(p_ref, "• Tài liệu tham khảo chính: ", bold=True)
    add_run(p_ref, "Lịch sử Đảng Cộng sản Việt Nam (Sách tham khảo), NXB ĐHQG-HCM, 2025. Đồng tác giả: ThS. Lê Quang Chung (Chương III: tr.156–214).")

    # Mục 5: Thể loại sản phẩm
    p_genre = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3, line_spacing=1.5)
    add_run(p_genre, "• Thể loại sản phẩm: ", bold=True)
    add_run(p_genre, "Game tương tác dạng Visual Novel (Tiểu thuyết trực quan kết hợp Hồ sơ tư liệu & Trắc nghiệm ôn tập)")

    # Mục 6: Link trải nghiệm trực tiếp
    p_link = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=6, line_spacing=1.5)
    add_run(p_link, "• Link trải nghiệm trực tiếp: ", bold=True)
    add_run(p_link, "https://shinn1603.github.io/LSD/")

    # Mục 7: Link mã nguồn
    p_repo = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3, line_spacing=1.5)
    add_run(p_repo, "• Link mã nguồn: ", bold=True)
    add_run(p_repo, "https://github.com/shinn1603/LSD")

    # Tiêu đề bảng thành viên
    add_p("Bảng thành viên Nhóm 09:", bold=True, space_before=6, line_spacing=1.5)

    # Bảng thành viên 3 cột (Đúng kích thước & tỷ lệ của mẫu template)
    table = doc.add_table(rows=6, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False

    col_widths = [Inches(1.34), Inches(3.04), Inches(1.57)]
    headers = ["STT", "Họ và Tên", "MSSV"]

    # Header Row
    hdr_cells = table.rows[0].cells
    for i, title in enumerate(headers):
        hdr_cells[i].width = col_widths[i]
        set_cell_properties(hdr_cells[i], is_header=True)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.line_spacing = 1.5
        add_run(p, title, bold=True)

    # Data Rows
    team_data = [
        ("1", "Nguyễn Phước Minh Triết", "24110357"),
        ("2", "Nguyễn Phước Thọ", "24110343"),
        ("3", "Trần Tiến Đạt", "24110198"),
        ("4", "Lương Xuân Phúc", "24142302"),
        ("5", "Đinh Thiên Bảo", "24162009")
    ]

    for row_idx, row_data in enumerate(team_data, start=1):
        row_cells = table.rows[row_idx].cells
        for col_idx, text in enumerate(row_data):
            row_cells[col_idx].width = col_widths[col_idx]
            set_cell_properties(row_cells[col_idx], is_header=False)
            p = row_cells[col_idx].paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.line_spacing = 1.5
            add_run(p, text, bold=False)

    # Đoạn trống sau bảng
    doc.add_paragraph()

    # ==========================================
    # PHẦN 2: HÌNH ẢNH TỔNG THỂ DỰ ÁN
    # ==========================================
    add_p("2. HÌNH ẢNH TỔNG THỂ DỰ ÁN", bold=True, space_before=16, space_after=8, line_spacing=1.5)

    screenshots = [
        ("docs/screenshots/1_title_screen.png",
         "Hình 1: Màn hình chính — Giao diện khởi động Visual Novel và hệ thống điều hướng chuyên đề"),
        ("docs/screenshots/2_syllabus_modal.png",
         "Hình 2: Đề cương học phần — Chuẩn đầu ra và phân bổ nội dung Lịch sử Đảng Cộng sản Việt Nam"),
        ("docs/screenshots/3_codex_modal.png",
         "Hình 3: Hồ sơ tư liệu lịch sử — Hệ thống tư liệu đa phương tiện về Tổng khởi nghĩa Hà Nội 1945"),
        ("docs/screenshots/4_quiz_modal.png",
         "Hình 4: Phân hệ trắc nghiệm kiến thức — Bộ câu hỏi ôn tập và phản hồi giải thích trích dẫn giáo trình"),
        ("docs/screenshots/5_gameplay_vn.png",
         "Hình 5: Giao diện tương tác kịch bản — Nhập vai chiến sĩ Việt Minh tại căn gác bí mật phố Hàng Bông"),
        ("docs/screenshots/6_choices_system.png",
         "Hình 6: Hệ thống quyết định rẽ nhánh — Tương tác trực tiếp với các thời khắc lịch sử then chốt"),
        ("docs/screenshots/7_cutscene_opera.png",
         "Hình 7: Phân cảnh Nhà hát Lớn chiều 17/8/1945 — Biến cuộc biểu tình của địch thành tuần hành cách mạng"),
        ("docs/screenshots/8_ending_true.png",
         "Hình 8: Màn hình kết thúc toàn thắng (True Ending) — Bốn bài học lịch sử lớn của Đảng lãnh đạo")
    ]

    for img_rel_path, caption in screenshots:
        full_img_path = os.path.join(os.getcwd(), img_rel_path)
        if os.path.exists(full_img_path):
            # Ảnh căn giữa, chiều rộng 6.29 inches lấp đầy khung viền trang A4
            p_img = doc.add_paragraph()
            p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_img.paragraph_format.space_before = Pt(8)
            p_img.paragraph_format.line_spacing = 1.5
            run_img = p_img.add_run()
            run_img.add_picture(full_img_path, width=Inches(6.29))

            # Chú thích ảnh căn giữa, In đậm + In nghiêng, cách dưới 12pt
            p_cap = doc.add_paragraph()
            p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_cap.paragraph_format.space_after = Pt(12)
            p_cap.paragraph_format.line_spacing = 1.5
            add_run(p_cap, caption, bold=True, italic=True)

    # Đoạn trống phân tách
    doc.add_paragraph()

    # ==========================================
    # PHẦN 3: HƯỚNG DẪN TRẢI NGHIỆM VÀ LỜI CẢM ƠN
    # ==========================================
    add_p("3. HƯỚNG DẪN TRẢI NGHIỆM VÀ LỜI CẢM ƠN", bold=True, space_before=16, space_after=8, line_spacing=1.5)

    # Cách trải nghiệm
    p_guide = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, line_spacing=1.5)
    add_run(p_guide, "• Cách trải nghiệm game: ", bold=True)
    add_run(p_guide, "Mở trình duyệt truy cập vào đường link sản phẩm https://shinn1603.github.io/LSD/, bấm chuột hoặc phím Space / Enter để đọc lời thoại và theo dõi diễn tiến lịch sử. Bấm phím 'A' để kích hoạt chế độ tự động chạy thoại (Auto Play), phím 'L' để mở nhanh Nhật ký hội thoại (Log). Người chơi sẽ đóng vai chiến sĩ Đội Tuyên truyền xung phong Việt Minh, trực tiếp đưa ra các quyết định hành động tại các thời khắc lịch sử then chốt của Hà Nội tháng 8/1945 để mở khóa các nhánh rẽ và kết cục khác nhau.")

    # Mã kiểm tra nhanh
    p_cheat = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, line_spacing=1.5)
    add_run(p_cheat, "• Tính năng đặc biệt (Cheat code kiểm tra nhanh): ", bold=True)
    add_run(p_cheat, "Để hỗ trợ thầy cô và bạn đọc kiểm tra nhanh toàn bộ các nhánh rẽ và kho tư liệu mà không cần chơi tuần tự từng bước, game tích hợp sẵn mã kiểm tra: Tại màn hình chính hoặc trong lúc chơi, nhấp vào biểu tượng Cài đặt rồi nhập mã \"yain\" (hoặc có thể gõ liên tiếp cụm phím y-a-i-n bất cứ lúc nào trong game) để mở khóa lập tức toàn bộ Hồ sơ tư liệu (Codex) và tất cả các phân cảnh kết thúc (Endings).")

    # Lời cảm ơn
    p_thanks = add_p(align=WD_ALIGN_PARAGRAPH.JUSTIFY, line_spacing=1.5)
    add_run(p_thanks, "• Lời cảm ơn: ", bold=True)
    add_run(p_thanks, "Nhóm 09 xin trân trọng gửi lời cảm ơn chân thành đến Thầy ThS. Lê Quang Chung và Khoa Chính trị và Luật đã cung cấp hệ thống tài liệu, video bài giảng và các bài tập trắc nghiệm, tạo điều kiện để nhóm chủ động tiếp cận, tìm hiểu và củng cố kiến thức của môn học. Những nội dung học tập này là cơ sở quan trọng giúp nhóm vận dụng kiến thức vào quá trình nghiên cứu và hoàn thành bài tập dự án một cách nghiêm túc, chỉn chu và phù hợp với yêu cầu của môn học.")

    # Lưu cả 2 tên file để người dùng và giảng viên tiện nộp theo bất kỳ định dạng quy ước nào
    file_primary = "261LLCT220514_06MOOC_GameLichSuDang_Nhom09.docx"
    file_alt = "261LLCT220514_06MOOC_Game_Nhom09.docx"

    doc.save(file_primary)
    doc.save(file_alt)
    print(f"SUCCESS: Generated {file_primary} and {file_alt}")

if __name__ == "__main__":
    create_student_report()
