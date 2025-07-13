// If using /app/page.tsx in Next.js 13+
export default function Home() {
  return (
    <main style={{ textAlign: 'center', fontFamily: 'Tahoma' }}>
      <h1>راية المزادات</h1>
      <h2>Rayat Almazadat</h2>
      <p>نقدّم خدمات المزاد العقاري في المملكة العربية السعودية، بما يشمل تسويق، وساطة، وإدارة المبيعات العقارية.</p>
      <a href="https://wa.me/966530508091" style={{
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#0a9396',
        color: 'white',
        borderRadius: '8px',
        marginTop: '20px',
        textDecoration: 'none'
      }}>تواصل معنا على واتساب</a>
      <footer style={{ marginTop: '40px', fontSize: '14px', color: '#555' }}>
        © 2025 راية المزادات - Rayat Almazadat<br />
        الدمام، شارع الملك عبدالعزيز، السعودية<br />
        +966 530 508 091
      </footer>
    </main>
  );
}
