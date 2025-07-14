import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>راية المزادات - Rayat Almazadat</title>
        <meta name="description" content="شركة راية المزادات" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HEADER */}
      <header style={{
        backgroundColor: '#1f4354',
        padding: '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        flexWrap: 'wrap',
        minHeight: '80px'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', direction: 'rtl', lineHeight: '1.4' }}>
          راية المزادات<br />
          <span style={{ fontSize: '14px', color: '#ccc' }}>Rayat Almazadat</span>
        </div>
        <img
          src="/logo.png"
          alt="راية المزادات Logo"
          style={{ maxWidth: '140px', height: 'auto' }}
        />
      </header>

      {/* MAIN CONTENT */}
      <main style={{
        fontFamily: 'Tahoma, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>

        {/* CR Box (Top) */}
        <div style={{
          backgroundColor: '#ffffff',
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          fontSize: '15px',
          marginBottom: '20px'
        }}>
          <strong>شهادة السجل التجاري</strong><br />
          الرقم الوطني الموحد: 7050707897
        </div>

        {/* TWO COLUMNS */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1rem',
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>

          {/* Arabic Section */}
          <div style={{
            width: '300px',
            textAlign: 'right',
            direction: 'rtl',
            backgroundColor: '#fff',
            padding: '1.2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            fontSize: '14.5px'
          }}>
            <h2 style={{ fontSize: '1.2rem', color: '#1f4354' }}>عن الشركة</h2>
            <p>
              راية المزادات شركة سعودية مُرخَّصة تقدم خدمات المزادات للعقارات، والمركبات، والمنقولات، وجميع الأصول الأخرى.
            </p>
            <p>
              نلتزم بالشفافية والمصداقية ونوفّر بيئة آمنة للمشترين والبائعين في المملكة.
            </p>
          </div>

          {/* English Section */}
          <div style={{
            width: '300px',
            textAlign: 'left',
            direction: 'ltr',
            backgroundColor: '#fff',
            padding: '1.2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            fontSize: '14.5px'
          }}>
            <h2 style={{ fontSize: '1.2rem', color: '#1f4354' }}>About Us</h2>
            <p>
              Rayat Almazadat is a licensed Saudi auction company offering property, vehicle, and asset auction services.
            </p>
            <p>
              We are committed to transparency, trust, and providing a secure marketplace for both buyers and sellers across the Kingdom.
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/966530508091"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '10px 24px',
            backgroundColor: '#0a9396',
            color: 'white',
            fontSize: '15px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          تواصل معنا على واتساب
        </a>

        {/* Bottom CR Info */}
        <div style={{
          backgroundColor: '#ffffff',
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          fontSize: '15px',
          marginTop: '40px'
        }}>
          <strong>شهادة السجل التجاري</strong><br />
          الرقم الوطني الموحد: 7050707897
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#1f4354',
        color: '#ffffff',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '13px',
        lineHeight: '1.6'
      }}>
        © 2025 راية المزادات - Rayat Almazadat<br />
        الدمام، شارع الملك عبدالعزيز، السعودية | Dammam, King Abdulaziz St, Saudi Arabia<br />
        +966 530 508 091
      </footer>
    </>
  );
}
