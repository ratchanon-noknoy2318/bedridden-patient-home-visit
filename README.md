# Registration Website

ระบบลงทะเบียนผู้ป่วยที่เชื่อมต่อกับ **LINE Notifications** และ **Google Sheets**  
ช่วยให้การลงทะเบียนผู้ป่วยสะดวกขึ้น พร้อม SQL scripts สำหรับรายงาน OPD income และข้อมูลอื่น ๆ

---

## Features
- ลงทะเบียนผู้ป่วยใหม่ผ่าน web app  
- ส่ง LINE แจ้งเตือนผู้ป่วย/เจ้าหน้าที่  
- บันทึกข้อมูลลง Google Sheets อัตโนมัติ  
- SQL scripts สำหรับรายงาน เช่น `hosxp-opd-income-report.sql`  
- UI ปรับแต่งได้ (background colors, text styles)

---

## 🛠 Requirements
- **Database**: Google Sheets 
- **Backend/Frontend**: Node.js + Google Apps Script  
- **Integration**: LINE Messaging API, Google Sheets API  
- **Tools**: VSCode, SSMS  

---

## How to Use

1. Install  
   ```bash
   git clone https://github.com/ratchanon-noknoy2318/registration.git
   npm install
   npm run dev
   
2. เปิดเว็บที่ http://localhost:3000 เพื่อใช้งานระบบลงทะเบียน
3. ตั้งค่า สร้างไฟล์ `.env` ที่ root ของโปรเจกต์ และใส่ค่าตามนี้
   ```bash
    APPS_SCRIPT_WEB_APP_URL=your_google__apps_scrupt
    GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
---
## Author

**Ratchanon Noknoy**  
- GitHub: [ratchanon-noknoy2318](https://github.com/ratchanon-noknoy2318)  
- LinkedIn: [linkedin.com/in/ratchanon-noknoy](https://linkedin.com/in/ratchanon-noknoy)  
- Role: Solo Software Engineer

---
## Usage Policy

- ระบบนี้จัดทำขึ้นเพื่อใช้ใน **โรงพยาบาลทั่วไป (รพท.) เท่านั้น**  
- ห้ามนำไปใช้เพื่อการค้า หรือใช้งานนอกเหนือจากบริบทโรงพยาบาล  
- สามารถนำไปปรับปรุง/ต่อยอดได้ภายในหน่วยงานที่เกี่ยวข้อง  
- การใช้งานต้องเคารพกฎหมายและข้อบังคับด้าน **ข้อมูลส่วนบุคคล (PDPA/HIPAA)**  
- ผู้พัฒนาขอสงวนสิทธิ์ไม่รับผิดชอบต่อการใช้งานที่ผิดวัตถุประสงค์



