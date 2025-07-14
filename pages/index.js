import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>راية المزادات | Rayat Almazadat</title>
        <meta name="description" content="Saudi Arabia’s leading licensed auction house for property, vehicles and assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-wrapper">
        {/* HEADER */}
        <header className="site-header">
          <div className="container header-inner">
            <img src="/logo.png" alt="Rayat Almazadat Logo" className="logo" />
            <div className="lang">العربية | EN</div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="overlay">
            <h1>Rayat Almazadat</h1>
            <p>Saudi Arabia’s premier licensed auction company for real-estate, vehicles & high-value assets.</p>
            <a className="cta" href="https://wa.me/966530508091">Chat on WhatsApp</a>
          </div>
        </section>

        {/* STATS */}
        <section className="stats container">
          <div className="stat-box">
            <h3>25+</h3>
            <p>Years in the Saudi Auction Market</p>
          </div>
          <div className="stat-box">
            <h3>12K</h3>
            <p>Lots Sold Successfully</p>
          </div>
          <div className="stat-box">
            <h3>7 B SAR</h3>
            <p>Value Auctioned</p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="vision container">
          <div className="box">
            <h2>Our Vision</h2>
            <p>To be the most trusted digital-first auction house in MENA, setting standards for transparency, compliance, and excellence.</p>
          </div>
          <div className="box">
            <h2>Our Mission</h2>
            <p>Empowering clients with cutting-edge auction technology, certified valuation, and seamless advisory services.</p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          <div className="container">
            <h2>Our Services</h2>
            <ul className="cards">
              <li>
                <h3>Real Estate Auctions</h3>
                <p>Residential, commercial, and land auctions across KSA.</p>
              </li>
              <li>
                <h3>Movable Assets</h3>
                <p>Vehicles, machinery, collectibles, and liquidations.</p>
              </li>
              <li>
                <h3>Valuation & Consulting</h3>
                <p>Independent certified appraisal and strategic advisory.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* CR INFO */}
        <section className="cr container">
          <div>
            <strong>Commercial Registration</strong><br />
            Unified National Number: 7050707897
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container">
            <p>© 2025 Rayat Almazadat | راية المزادات</p>
            <p>Dammam, King Abdulaziz St · +966 530 508 091</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        :root {
          --brand: #193c50;
          --accent: #0a9396;
          --light: #f9f9f9;
          --radius: 10px;
        }
        body {
          margin: 0;
          font-family: 'Tahoma', sans-serif;
          background-color: var(--light);
          color: #0e1b28;
        }
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }
        .site-header {
          background-color: var(--brand);
          padding: 1rem 0;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          max-height: 60px;
        }
        .lang {
          color: #cfd8dc;
          font-size: 14px;
        }
        .hero {
          background: url('/hero.jpg') center/cover no-repeat;
          height: 350px;
          position: relative;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(25, 60, 80, 0.75);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
          padding: 1rem;
        }
        .overlay h1 {
          font-size: 2.5rem;
          margin: 0 0 1rem;
        }
        .overlay p {
          font-size: 1.1rem;
          max-width: 600px;
          line-height: 1.6;
        }
        .cta {
          margin-top: 1.5rem;
          background: var(--accent);
          color: white;
          padding: 0.75rem 2rem;
          text-decoration: none;
          border-radius: var(--radius);
          font-weight: bold;
        }
        .stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin: 3rem 0;
        }
        .stat-box {
          background: #fff;
          padding: 1.5rem;
          border-radius: var(--radius);
          text-align: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .stat-box h3 {
          margin: 0;
          font-size: 2rem;
          color: var(--brand);
        }
        .stat-box p {
          margin-top: 0.5rem;
          font-size: 0.95rem;
        }
        .vision {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin: 2rem 0;
        }
        .vision .box {
          flex: 1;
          background: #fff;
          padding: 2rem;
          border-radius: var(--radius);
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .vision h2 {
          margin-top: 0;
          color: var(--brand);
        }
        .services {
          background: #fff;
          padding: 3rem 0;
        }
        .services h2 {
          text-align: center;
          color: var(--brand);
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          list-style: none;
          padding: 0;
        }
        .cards li {
          flex: 1 1 250px;
          background: var(--light);
          padding: 1.5rem;
          border-radius: var(--radius);
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .cards h3 {
          margin-top: 0;
        }
        .cr {
          text-align: center;
          margin: 3rem 0;
          font-size: 1rem;
        }
        .cr div {
          display: inline-block;
          background: #fff;
          padding: 1rem 2rem;
          border-radius: var(--radius);
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .site-footer {
          background-color: var(--brand);
          color: #fff;
          text-align: center;
          padding: 2rem 1rem;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
