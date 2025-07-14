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
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
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

        {/* CR Info Top */}
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

        <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>شركة راية المزادات</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', color: '#444' }}>
          شركة مزادات سعودية مُرخَّصة متخصصة في مزادات العقارات والمنقولات والمركبات وكافة الأصول الأخرى.
        </p>

        <a
          href="https://wa.me/966530508091"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
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

        {/* CR Info Bottom */}
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
        backgroundColor: '#1f4354',
        color: '#ffffff',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '14px'
      }}>
        © 2025 راية المزادات - Rayat Almazadat<br />
        الدمام، شارع الملك عبدالعزيز، السعودية<br />
        +966 530 508 091
      </footer>
    </>
  );
}
