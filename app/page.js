import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      {/* ================= HERO SECTION (จัดกึ่งกลาง + ฟอนต์ใหญ่พิเศษ) ================= */}
       <section className="bg-white pt-6 pb-4 px-6 sm:pt-10 sm:pb-6 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* หัวข้อหลัก */}
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl leading-tight">
            ระบบลงทะเบียนผู้ป่วย
            <span className="block mt-2 text-[#2563EB]">บริการแพทย์ทางไกล (Telemedicine)</span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/PatientRegister"
              className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1D4ED8]"
            >
              ลงทะเบียนออนไลน์
            </Link>
            <a
              href="https://telemedscheduler.vercel.app/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#1E293B] shadow-sm ring-1 ring-inset ring-slate-300 transition-all hover:bg-slate-50"
           target='_blank'
           >
              ตรวจสอบวันนัดหมาย
            </a>
          </div>

        </div>
      </section>

      {/* ================= IMAGE SECTION (รูปภาพขอบเหลี่ยม ไม่มีมุมโค้ง) ================= */}
<section className="py-16 px-6 sm:px-12 bg-white">
  <div className="mx-auto max-w-4xl flex flex-col items-center justify-center">
    
    {/* ลบ rounded, shadow และ ring ออกทั้งหมดเพื่อให้ขอบเหลี่ยมคมชัด */}
    <div className="w-full overflow-hidden max-w-md">
      <img
        src="/Telemedicine/telemdiicine-zoom-2.png"
        alt="บริการแพทย์ทางไกลผ่านระบบหมอพร้อม โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร"
        className="w-full h-auto object-cover"
      />
    </div>
    
    {/* ข้อความกำกับภาพ */}
    <p className="mt-5 text-sm text-[#475569] text-center font-medium max-w-sm">
      พบแพทย์และรับคำปรึกษาผ่านระบบวิดีโอคอล สะดวก ปลอดภัย ไม่ต้องเดินทางมาโรงพยาบาล
    </p>
  </div>
</section>
 <section className="bg-white py-12 px-6 sm:py-20 sm:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* หัวข้อเซกชัน จัดกึ่งกลาง */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            3 ขั้นตอนง่ายๆ ในการรับบริการ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569]">
            สะดวก รวดเร็ว ทำได้เองจากที่บ้าน ไม่ต้องเดินทางมาโรงพยาบาล
          </p>
        </div>

        {/* กล่องขั้นตอนแบ่งเป็น 3 คอลัมน์ (ขอบเหลี่ยมมุมฉาก คลีนๆ เข้ากับสไตล์รูปภาพ) */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          
          {/* ขั้นตอนที่ 1 */}
          <div className="border border-slate-100 p-6 flex flex-col items-center text-center">
            {/* ตัวเลขวงกลมสีน้ำเงินเด่นชัด */}
            <div className="flex h-12 w-12 items-center justify-center bg-[#2563EB] text-lg font-bold text-white">
              1
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">ลงทะเบียนออนไลน์</h3>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              คลิกปุ่มลงทะเบียน แล้วกรอกข้อมูลส่วนตัว สิทธิ์การรักษา และอาการป่วยเบื้องต้นให้ครบถ้วน
            </p>
          </div>

          {/* ขั้นตอนที่ 2 */}
          <div className="border border-slate-100 p-6 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center bg-[#2563EB] text-lg font-bold text-white">
              2
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">เจ้าหน้าที่จัดคิวนัด</h3>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              พยาบาลจะตรวจสอบข้อมูลและสิทธิ์รักษา จากนั้นจะติดต่อกลับเพื่อแจ้งวัน-เวลาพบแพทย์
            </p>
          </div>

          {/* ขั้นตอนที่ 3 */}
          <div className="border border-slate-100 p-6 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center bg-[#2563EB] text-lg font-bold text-white">
              3
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">วิดีโอคอลพบแพทย์</h3>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              เมื่อถึงเวลานัดหมาย ให้กดลิงก์วิดีโอคอลเพื่อตรวจวินิจฉัยและรับคำแนะนำจากแพทย์ทันที
            </p>
          </div>

        </div>

      </div>
    </section>
    
    </main>
    
  );
}
