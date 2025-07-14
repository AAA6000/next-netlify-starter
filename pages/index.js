import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>راية المزادات - Rayat Almazadat</title>
        <meta name="description" content="شركة راية المزادات" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HEADER with logo and dark background */}
      <header style={{
        backgroundColor: '#1f4354',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <img
          src="/logo.png"
          alt="راية المزادات"
          style={{ maxWidth: '180px', height: 'auto' }}
        />
      </header>

      {/* MAIN CONTENT */}
      <main style={{
        textAlign: 'center',
        fontFamily: 'Tahoma',
        padding: '2rem',
        backgroundColor: '#f5f5f5'
      }}>
        <h1>راية المزادات</h1>
        <h2>Rayat Almazadat</h2>

        {/* CR info (top) */}
        <div style={{ marginTop: '20px', fontSize: '16px', color: '#333' }}>
          <strong>شهادة السجل التجاري</strong><br />
          الرقم الوطني الموحد: 7050707897
        </div>

        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '30px auto 0' }}>
          شركة مزادات سعودية مُرخَّصة متخصصة في مزادات العقارات والمنقولات والمركبات وكافة الأصول الأخرى.
        </p>

        <a
          href="https://wa.me/966530508091"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0a9396',
            color: 'white',
            borderRadius: '8px',
            marginTop: '30px',
            textDecoration: 'none',
            fontSize: '16px'
          }}
        >
          تواصل معنا على واتساب
        </a>

        {/* CR info (bottom) */}
        <div style={{ marginTop: '60px', fontSize: '16px', color: '#333' }}>
          <strong>شهادة السجل التجاري</strong><br />
          الرقم الوطني الموحد: 7050707897
        </div>

        <footer style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
          © 2025 راية المزادات - Rayat Almazadat<br />
          الدمام، شارع الملك عبدالعزيز، السعودية<br />
          +966 530 508 091
        </footer>
      </main>
    </>
  );
}
