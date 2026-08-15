# Telemedicine Registration Platform

A patient registration system developed from nurses’ requirements using **Clinical Terminology**, integrated with LINE Notifications and **Google Sheets**. The system improves patient registration workflows and communication efficiency.


---

## Features

- Register new patients through a web application
- Send LINE notifications to patients and healthcare staff
- Automatically store registration data in Google Sheets
- SQL scripts for reports such as `hosxp-opd-income-report.sql`
- Customizable UI (background colors, text styles)

---

## Requirements

- **Database**: Google Sheets
- **Backend/Frontend**: Node.js + Google Apps Script
- **Integration**: LINE Messaging API, Google Sheets API
- **Tools**: [VS Code](https://code.visualstudio.com/)

---

## How to Use

1. Clone the repository

```bash
git clone https://github.com/ratchanon-noknoy2318/registration.git
npm install
npm run dev
```
2. Open http://localhost:3000 to access the registration system.
3. Create a .env file in the project root and configure the following variables:
```bash
   APPS_SCRIPT_WEB_APP_URL=your_google_apps_script_url
   GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
```
---
## Author

Ratchanon Noknoy

- GitHub: [ratchanon-noknoy2318](https://github.com/ratchanon-noknoy2318)
- LinkedIn: [linkedin.com/in/ratchanon-noknoy](https://www.linkedin.com/in/ratchanon-noknoy/)
- Role: Solo Software Engineer

  ---
## Usage Policy

- This system is developed for use within healthcare organizations.
- Commercial use or usage outside the intended healthcare context is prohibited.
- Modification and extension are allowed within related organizations.
- Users must comply with personal data protection regulations, including **Thailand PDPA** and **HIPAA-aligned practices**.
- The developer is not responsible for misuse or unauthorized usage of this system.

---

## Real-world Usage

- Successfully deployed for real-world use by Kamphaeng Phet Municipality.
- The project was featured through official municipality news and social media channels.

### References

- Official News: https://www.kppmu.go.th/news-detail?hd=1&id=124000
- TikTok: https://www.tiktok.com/@kpp.pr/video/7506431498870902037
