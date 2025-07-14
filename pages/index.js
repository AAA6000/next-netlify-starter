/* pages/index.tsx */
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* PAGE-META */}
      <Head>
        <title>راية المزادات | Rayat Almazadat</title>
        <meta name="description" content="Saudi Arabia’s leading licensed auction house for property, vehicles and assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ========== HEADER ========== */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo.png" alt="Rayat Almazadat Logo" />
          </div>
          <nav className="lang">
            <span>العربية | EN</span>
          </nav>
        </div>
      </header>

      {/* ========== HERO / INTRO ========== */}
      <section className="hero">
        <div className="overlay">
          <h1>Rayat Almazadat</h1>
          <p>Saudi Arabia’s premier licensed auction company for real-estate, vehicles &amp; high-value assets.</p>
          <a className="cta" href="https://wa.me/966530508091">Chat on WhatsApp</a>
        </div>
      </section>

      {/* ========== KEY DATA ========== */}
      <section className="stats container">
        <div className="stat-box">
          <h3>25+</h3>
          <p>Years in Saudi auction market</p>
        </div>
        <div className="stat-box">
          <h3>12K</h3>
          <p>Successful lots sold</p>
        </div>
        <div className="stat-box">
          <h3>7 B SAR</h3>
          <p>Total auctioned value</p>
        </div>
      </section>

      {/* ========== VISION & MISSION ========== */}
      <section className="vision container">
        <div className="box">
          <h2>Our Vision</h2>
          <p>To be the most trusted digital-first auction house in MENA, setting standards for
             transparency, compliance and service excellence.</p>
        </div>
        <div className="box">
          <h2>Our Mission</h2>
          <p>Empower buyers and sellers through innovative auction technology, rigorous valuation,
             and end-to-end advisory—delivering maximum value for every asset.</p>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="services">
        <div className="container">
          <h2>Core Services</h2>
          <ul className="cards">
            <li>
              <h3>Real-Estate Auctions</h3>
              <p>Residential, commercial &amp; land plots across the Kingdom.</p>
            </li>
            <li>
              <h3>Movables & Vehicles</h3>
              <p>Fleet cars, heavy equipment, luxury goods &amp; bankruptcy assets.</p>
            </li>
            <li>
              <h3>Advisory &amp; Valuation</h3>
              <p>Independent asset appraisal backed by certified professionals.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ========== CR SECTION ========== */}
      <section className="cr container">
        <div>
          <strong>شهادة السجل التجاري</strong><br />
          Unified National Number: 7050707897
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Rayat Almazadat | راية المزادات</p>
          <p>Dammam, King Abdulaziz St · +966 530 508 091</p>
        </div>
      </footer>

      {/* ========== STYLE ========== */}
      <style jsx>{`
        :root {
          --brand:#193c50;
          --accent:#0a9396;
          --light:#f9f9f9;
          --dark:#0e1b28;
          --radius:12px;
        }
        *,*:before,*:after{box-sizing:border-box}
        body{margin:0;font-family:'Tahoma',sans-serif;color:var(--dark);background:var(--light)}
        .container{width:90%;max-width:1100px;margin:0 auto}
        /* HEADER */
        .site-header{background:var(--brand);color:#fff}
        .header-inner{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
        .brand img{max-width:180px;height:auto}
        .lang{font-size:14px;color:#d7e0e5}
        /* HERO */
        .hero{background:url('/hero.jpg') center/cover no-repeat;height:340px;position:relative}
        .overlay{position:absolute;inset:0;background:rgba(25,60,80,.7);display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;text-align:center;padding:0 1rem}
        .overlay h1{margin:0;font-size:2.4rem}
        .overlay p{max-width:620px;margin:1rem auto 2rem;font-size:1rem;line-height:1.6}
        .cta{background:var(--accent);color:#fff;padding:0.8rem 2rem;border-radius:var(--radius);text-decoration:none;font-weight:600;transition:.3s}
        .cta:hover{background:#087f81}
        /* STATS */
        .stats{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap;margin:3rem auto 2rem}
        .stat-box{text-align:center;padding:1rem 1.5rem;background:#fff;border-radius:var(--radius);box-shadow:0 2px 8px rgba(0,0,0,.05)}
        .stat-box h3{margin:0;font-size:2rem;color:var(--brand)}
        .stat-box p{margin:.5rem 0 0;font-size:.9rem;color:#555}
        /* VISION & MISSION */
        .vision{display:flex;gap:2rem;flex-wrap:wrap;margin:2rem auto}
        .vision .box{flex:1 1 260px;background:#fff;padding:2rem;border-radius:var(--radius);box-shadow:0 2px 8px rgba(0,0,0,.05)}
        .vision h2{margin-top:0;color:var(--brand)}
        /* SERVICES */
        .services{background:#fff;padding:3rem 0}
        .services h2{text-align:center;color:var(--brand)}
        .cards{list-style:none;padding:0;margin:2rem 0 0;display:flex;gap:1.5rem;flex-wrap:wrap;justify-content:center}
        .cards li{flex:1 1 240px;background:var(--light);padding:1.5rem;border-radius:var(--radius);box-shadow:0 2px 8px rgba(0,0,0,.05)}
        .cards h3{margin:0 0 .6rem;color:var(--dark)}
        .cards p{margin:0;color:#555;font-size:.9rem;line-height:1.4}
        /* CR BOX */
        .cr{margin:3rem auto 4rem;font-size:1rem;text-align:center}
        .cr div{display:inline-block;padding:1rem 2rem;background:#fff;border-radius:var(--radius);box-shadow:0 2px 8px rgba(0,0,0,.05)}
        /* FOOTER */
        .site-footer{background:var(--brand);color:#d7e0e5;text-align:center;padding:1.5rem 0;font-size:.8rem}
        @media(max-width:600px){
          .overlay h1{font-size:1.8rem}
          .overlay p{font-size:.9rem}
        }
      `}</style>
    </>
  );
}
