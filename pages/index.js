import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>راية المزادات | Rayat Almazadat</title>
        <meta name="description" content="Licensed Saudi auction company for real estate, vehicles, and high-value assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">

        {/* Header */}
        <header className="header">
          <div className="container header-inner">
            <img src="/logo.png" alt="Logo" className="logo" />
            <div className="company-name">
              <h1>راية المزادات</h1>
              <p>Rayat Almazadat</p>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h2>Leading Licensed Auction House in Saudi Arabia</h2>
            <p>Specializing in real estate, vehicles, and commercial asset auctions — built on trust, transparency, and excellence.</p>
            <a href="https://wa.me/966530508091" className="whatsapp-button">Contact us on WhatsApp</a>
          </div>
        </section>

        {/* About Section */}
        <section className="about container">
          <div className="about-box ar">
            <h3>من نحن</h3>
            <p>
              راية المزادات شركة سعودية مرخّصة متخصصة في تنظيم المزادات العقارية والمنقولات والمركبات والمزادات القضائية. نلتزم بالنزاهة والاحترافية وخدمة جميع العملاء بجودة عالية.
            </p>
          </div>
          <div className="about-box en">
            <h3>About Us</h3>
            <p>
              Rayat Almazadat is a licensed Saudi auction house offering trusted and compliant auctions across real estate, vehicles, and court-supervised asset liquidation. We serve clients with integrity and excellence.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="stats container">
          <div>
            <h4>25+</h4>
            <p>Years of Experience</p>
          </div>
          <div>
            <h4>12,000+</h4>
            <p>Lots Successfully Sold</p>
          </div>
          <div>
            <h4>7 Billion SAR</h4>
            <p>Total Auctioned Value</p>
          </div>
        </section>

        {/* Services */}
        <section className="services container">
          <h2>Our Services</h2>
          <ul>
            <li>
              <h4>Real Estate Auctions</h4>
              <p>Land, residential, and commercial properties across the Kingdom.</p>
            </li>
            <li>
              <h4>Vehicle & Equipment Sales</h4>
              <p>Fleet vehicles, construction machinery, and movable assets.</p>
            </li>
            <li>
              <h4>Consulting & Valuation</h4>
              <p>Certified valuation, bankruptcy sales, and court-supervised auctions.</p>
            </li>
          </ul>
        </section>

        {/* Commercial Registration */}
        <section className="cr container">
          <p><strong>شهادة السجل التجاري</strong></p>
          <p>الرقم الوطني الموحد: 7050707897</p>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© 2025 راية المزادات | Rayat Almazadat</p>
            <p>الدمام، شارع الملك عبدالعزيز · Dammam, KSA</p>
            <p>+966 530 508 091</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .page {
          font-family: Tahoma, sans-serif;
          background: #f5f5f5;
          color: #1e1e1e;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        .header {
          background: #193c50;
          color: white;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          max-height: 60px;
        }
        .company-name h1 {
          margin: 0;
          font-size: 1.8rem;
        }
        .company-name p {
          margin: 0;
          font-size: 0.95rem;
          color: #d3e3ea;
        }
        .hero {
          background: linear-gradient(to right, #193c50, #0a9396);
          color: white;
          text-align: center;
          padding: 4rem 2rem;
        }
        .hero-content h2 {
          margin-bottom: 1rem;
        }
        .hero-content p {
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        .whatsapp-button {
          background: #25d366;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          font-weight: bold;
          border-radius: 6px;
        }
        .about {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
        }
        .about-box {
          flex: 1 1 48%;
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .about-box h3 {
          margin-top: 0;
          color: #193c50;
        }
        .stats {
          display: flex;
          justify-content: space-around;
          text-align: center;
          margin: 3rem 0;
        }
        .stats div h4 {
          margin: 0;
          font-size: 2rem;
          color: #193c50;
        }
        .services ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .services li {
          background: white;
          flex: 1 1 30%;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .services h2 {
          text-align: center;
          color: #193c50;
        }
        .cr {
          text-align: center;
          margin: 2rem 0;
          background: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .footer {
          background: #193c50;
          color: white;
          text-align: center;
          padding: 2rem 1rem;
        }

        @media (max-width: 768px) {
          .about {
            flex-direction: column;
          }
          .services ul {
            flex-direction: column;
          }
          .stats {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
