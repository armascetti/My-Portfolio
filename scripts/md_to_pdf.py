from fpdf import FPDF
import re

INPUT = 'public/ArmascettiResume.md'
OUTPUT = 'src/Documents/ArmascettiResume.pdf'

def normalize_line(line):
    line = line.rstrip('\n')
    # headings
    if line.startswith('#'):
        # strip leading hashes and surrounding whitespace
        return ('H', line.lstrip('#').strip())
    # bullets
    if re.match(r'^[-*+]\s+', line):
        return ('BUL', re.sub(r'^[-*+]\s+', '• ', line))
    return ('P', line)

class PDF(FPDF):
    pass

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=12)
pdf.add_page()

# set base font
pdf.set_font('Arial', size=11)
line_height = 6

with open(INPUT, 'r', encoding='utf-8') as f:
    for raw in f:
        kind, text = normalize_line(raw)
        if kind == 'H':
            pdf.ln(2)
            pdf.set_font('Arial', 'B', 13)
            pdf.multi_cell(0, line_height + 1.5, text)
            pdf.set_font('Arial', size=11)
            pdf.ln(1)
        elif kind == 'BUL':
            pdf.multi_cell(0, line_height, text)
        else:
            if text.strip() == '':
                pdf.ln(2)
            else:
                pdf.multi_cell(0, line_height, text)

pdf.output(OUTPUT)
print(f'Wrote {OUTPUT}')
