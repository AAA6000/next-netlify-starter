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
        backgroundColor: '#193c50',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        flexWrap: 'wrap'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', direction: 'rtl' }}>
          راية المزادات<br />
          <span style={{ fontSize: '14px', color: '#ccc' }}>Rayat Almazadat</span>
        </div>
        <img
          src="/logo.png"
          alt="راية المزادات Logo"
          style={{ maxWidth: '160px', height: 'auto' }}
        />
      </header>

      {/* MAIN CONTENT */}
      <main style={{
        fontFamily: 'Tahoma, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>

        {/* CR Info (Top) */}
        <div style={{
          backgroundColor: '#ffffff',
          display: 'inline-block',
          padding: '1rem 2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          fontSize: '16px',
          marginBottom: '30px'
        }}>
          <strong>شهادة السجل التجاري</strong><br />
          الرقم الوطني الموحد: 7050707897
        </div>

        {/* Two Columns (AR + EN) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4rem',
          marginTop: '2rem',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>

          {/* Arabic Section */}
          <div style={{
            width: '300px',
            textAlign: 'right',
            direction: 'rtl',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h2>عن الشركة</h2>
            <p>
              شركة راية المزادات هي شركة سعودية مُرخَّصة تقدم خدمات المزادات للعقارات، والمركبات، والمنقولات، وجميع الأصول الأخرى.
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
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h2>About Us</h2>
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
            marginTop: '2.5rem',
            padding: '12px 30px',
            backgroundColor: '#0a9396',
            color: 'white',
            fontSize: '16px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#087f81'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0a9396'}
        >
          تواصل معنا على واتساب
        </a>

        {/* CR Info (Bottom) */}
        <div style={{
          backgroundColor: '#ffffff',
          display: 'inline-block',
          padding: '1rem 2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          fontSize: '16px',
          marginTop: '60px'
        }}>
          <strong>شهادة السجل التجاري</strong><br />
          الرقم الوطني الموحد: 7050707897
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#193c50',
        color: '#ffffff',
        textAlign: 'center',
        padding: '1.2rem',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        © 2025 راية المزادات - Rayat Almazadat<br />
        الدمام، شارع الملك عبدالعزيز، السعودية | Dammam, King Abdulaziz St, Saudi Arabia<br />
        +966 530 508 091
      </footer>
    </>
  );
}
