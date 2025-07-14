import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>راية المزادات | Rayat Almazadat</title>
        <meta name="description" content="Licensed Saudi auction company for real estate, vehicles, and assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">

        {/* HEADER */}
        <header className="header">
          <div className="container header-inner">
            <img src="/logo.png" alt="Logo" className="logo" />
            <div className="company-name">
              <h1>راية المزادات</h1>
              <p>Rayat Almazadat</p>
            </div>
          </div>
        </header>

        {/* COMPACT GRID */}
        <main className="container grid">
          <section className="block ar">
            <h3>من نحن</h3>
            <p>
              شركة سعودية مرخّصة تقدم خدمات المزادات للعقارات والمركبات والمنقولات بأعلى درجات الشفافية.
            </p>
          </section>

          <section className="block en">
            <h3>About Us</h3>
            <p>
              Licensed auction house specializing in real estate, vehicle, and asset sales across Saudi Arabia.
            </p>
          </section>

          <section className="block stats">
            <div>
              <h4>25+</h4>
              <p>Years</p>
            </div>
            <div>
              <h4>12K</h4>
              <p>Lots Sold</p>
            </div>
            <div>
              <h4>7B SAR</h4>
              <p>Value</p>
            </div>
          </section>

          <section className="block cr">
            <p><strong>شهادة السجل التجاري</strong></p>
            <p>الرقم الوطني الموحد: 7050707897</p>
          </section>

          <section className="block action">
            <a href="https://wa.me/966530508091">تواصل معنا على واتساب</a>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <p>© 2025 راية المزادات | Rayat Almazadat</p>
            <p>Dammam · +966 530 508 091</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        body, html {
          margin: 0;
          font-family: Tahoma, sans-serif;
          background: #f5f5f5;
          color: #1e1e1e;
        }
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }
        .header {
          background: #193c50;
          color: white;
          padding: 0.5rem 0;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          height: 45px;
        }
        .company-name h1 {
          margin: 0;
          font-size: 1.3rem;
        }
        .company-name p {
          margin: 0;
          font-size: 0.9rem;
          color: #cbd8df;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
          padding: 1rem 0.5rem;
        }
        .block {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          text-align: center;
        }
        .block h3, .block h4 {
          margin: 0 0 0.5rem;
          color: #193c50;
        }
        .block p {
          margin: 0;
          font-size: 0.9rem;
        }
        .stats {
          display: flex;
          justify-content: space-around;
          gap: 0.5rem;
        }
        .stats div h4 {
          font-size: 1.3rem;
          margin: 0;
        }
        .stats div p {
          margin: 0;
          font-size: 0.8rem;
        }
        .action a {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 8px 16px;
          background: #0a9396;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        }
        .footer {
          background: #193c50;
          color: white;
          text-align: center;
          font-size: 0.85rem;
          padding: 1rem 0.5rem;
          margin-top: auto;
        }

        @media (max-height: 800px) {
          .block, .header, .footer {
            padding: 0.5rem !important;
          }
          .action a {
            font-size: 0.85rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </>
  );
}
