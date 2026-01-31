import React from 'react';

function App() {
  // MODERN COLOR PALETTE
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#0f172a', // Dark Slate
      color: '#e2e8f0', // Light Gray text
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    hero: {
      padding: '120px 20px 80px 20px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, #1e293b, #0f172a)', // Subtle glow
    },
    gradientText: {
      background: 'linear-gradient(to right, #6366f1, #ec4899)', // Indigo to Pink
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '3.5rem',
      marginBottom: '10px',
    },
    button: {
      padding: '12px 30px',
      background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '20px',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '40px',
      borderBottom: '2px solid #6366f1',
      display: 'inline-block',
      paddingBottom: '10px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.7)', // Semi-transparent
      backdropFilter: 'blur(10px)', // Glass effect
      padding: '25px',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    tag: {
      display: 'inline-block',
      padding: '5px 10px',
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      color: '#818cf8',
      borderRadius: '20px',
      fontSize: '0.8rem',
      marginRight: '8px',
      marginTop: '10px',
    },
    stackSection: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#1e293b',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    },
    stackPill: {
      display: 'inline-block',
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#0f172a',
      border: '1px solid #6366f1',
      borderRadius: '8px',
      color: '#cbd5e1',
      fontWeight: 'bold',
    },
    spaceLink: {
      display: 'block',
      padding: '15px',
      margin: '10px auto',
      maxWidth: '600px',
      backgroundColor: 'rgba(29, 161, 242, 0.1)', // Twitter Blue tint
      border: '1px solid rgba(29, 161, 242, 0.3)',
      borderRadius: '10px',
      color: '#fff',
      textDecoration: 'none',
      textAlign: 'left',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* HERO SECTION */}
      <header style={styles.hero}>
        <h1 style={styles.gradientText}>Sophia Chiamaka.</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#94a3b8' }}>
          Building digital experiences that matter.
        </p>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px auto', color: '#cbd5e1' }}>
          Certified Full-Stack Developer & Community Manager. 
          I engineer solutions that live at the intersection of creativity and functionality. 
          From pixel-perfect frontends to robust backend logic, I bring ideas to life.
        </p>
        <a href="#projects" style={styles.button}>View My Projects ↓</a>
      </header>

      {/* NEW: TECH STACK SECTION */}
      <section style={styles.stackSection}>
        <h3 style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '20px' }}>
          ⚡ THE ARSENAL (MY TECH STACK)
        </h3>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px auto', color: '#cbd5e1' }}>
          I choose the best tools for the job. Here is what I use to build scalable, high-performance applications.
        </p>
        <div>
          <span style={styles.stackPill}>React.js</span>
          <span style={styles.stackPill}>JavaScript (ES6+)</span>
          <span style={styles.stackPill}>Tailwind CSS</span>
          <span style={styles.stackPill}>Node.js</span>
          <span style={styles.stackPill}>Git & GitHub</span>
          <span style={styles.stackPill}>HTML5 & CSS3</span>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ padding: '80px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
        </div>
        
        <div style={styles.grid}>
          
          {/* Project 1: TaskFlow */}
          <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✅ TaskFlow App</h3>
              <p style={{ color: '#94a3b8' }}>A comprehensive productivity tool featuring a Todo list, Life Progress tracker, Quiz engine, and CGPA calculator.Yet to be pushed to GitHub because it's a school project</p>
              <div>
                <span style={styles.tag}>React</span>
                <span style={styles.tag}>State Management</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://github.com/sophia0-dev" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>

          {/* Project 2: Romantic Website */}
          <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🏘️ Roamtic Website</h3>
              <p style={{ color: '#94a3b8' }}>A modern real-estate and lifestyle landing page system designed for high conversion and visual appeal.</p>
              <div>
                <span style={styles.tag}>CSS Grid</span>
                <span style={styles.tag}>Responsive Design</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://github.com/sophia0-dev" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>

          {/* Project 3: Signature Generator */}
          <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✍️ Signature Generator</h3>
              <p style={{ color: '#94a3b8' }}>An interactive tool allowing users to create, customize, and download digital signatures dynamically.</p>
              <div>
                <span style={styles.tag}>Canvas API</span>
                <span style={styles.tag}>JavaScript</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://github.com/sophia0-dev" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>

          {/* Project 3: Image to Base64 to QR code*/}
          <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Image to Base64 to QR code📸</h3>
              <p style={{ color: '#94a3b8' }}>An interactive tool allowing users to create, customize your pictures in ti links and into QR code.</p>
              <div>
                <span style={styles.tag}>HTML</span>
                <span style={styles.tag}>css</span>
                <span style={styles.tag}>JavaScript</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://github.com/sophia0-dev" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>

          {/* Project 4: Blog Platform */}
          <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📝 Personal Blog</h3>
              <p style={{ color: '#94a3b8' }}>A custom-built blogging platform to share technical insights and tutorials with the developer community.</p>
              <div>
                <span style={styles.tag}>React</span>
                <span style={styles.tag}>Markdown</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://sophia0-dev.github.io/fetch-blog/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>

          {/* Project 5: Rock Paper Scissors */}
          <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🎮 Rock Paper Scissors</h3>
              <p style={{ color: '#94a3b8' }}>An interactive game with score tracking and DOM-based animations. A fun showcase of game logic.</p>
              <div>
                <span style={styles.tag}>Game Logic</span>
                <span style={styles.tag}>JavaScript</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://github.com/sophia0-dev" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>

           {/* Project 6: Input Validation */}
           <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🔒 Input Validation System</h3>
              <p style={{ color: '#94a3b8' }}>A security-focused form handling system that ensures data integrity and user feedback in real-time.</p>
              <div>
                <span style={styles.tag}>RegEx</span>
                <span style={styles.tag}>Security</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://github.com/sophia0-dev" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>
           {/* Project 7: Multi-Mode calculator */}
           <div style={styles.card}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🧮Multi-Mode calculator </h3>
              <p style={{ color: '#94a3b8' }}>A calculator that has the normal calculator, weight and temperature calculator.</p>
              <div>
                <span style={styles.tag}>RegEx</span>
                <span style={styles.tag}>Security</span>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a href="https://sophia0-dev.github.io/multi-mode-calc/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>View Code →</a>
            </div>
          </div>
        </div>


      </section>

      {/* NEW: TWITTER SPACES SECTION */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={styles.sectionTitle}>🎙️ On The Air: Tech Spaces</h2>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
           Discussions on X (Twitter) about Web Development, Career Growth, and Open Source.
        </p>
        
        {/* Space Link 1 */}
        <a href="https://x.com/sophia0_dev" style={styles.spaceLink}>
          <strong>🎧 Connection tech, WEB 3, Marketing & Creating skills for success</strong> <br/>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Hosted on Jan 15 • 500+ Listeners</span>
        </a>

        {/* Space Link 2 */}
        <a href="https://x.com/sophia0_dev" style={styles.spaceLink}>
          <strong>🎧 The Campus Guide</strong> <br/>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Hosted on Feb 02 • with Guest Speakers</span>
        </a>

        {/* Space Link 3 */}
        <a href="https://x.com/sophia0_dev" style={styles.spaceLink}>
          <strong>🎧 So much more...</strong> <br/>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Hosted on Feb 02 • with Guest Speakers</span>
        </a>
      </section>

      {/* LEADERSHIP SECTION */}
      <section style={{ backgroundColor: '#1e293b', padding: '80px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={styles.sectionTitle}>Leadership & Impact</h2>
        </div>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={{color: '#fff'}}>👨‍🏫 Assistant Team Lead</h3>
            <p style={{color: '#94a3b8'}}>Roar Nigeria Hub</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px'}}>Coordinated dev workflows and mentored peers.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#fff'}}>🎤 Certified Speaker</h3>
            <p style={{color: '#94a3b8'}}>Public Speaking Certification</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px'}}>Specialized in technical communication.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#fff'}}>🚀 Ambassador</h3>
            <p style={{color: '#94a3b8'}}>ICSC</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px'}}>Promoting CS education for students.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#fff'}}>💰 Ambassador</h3>
            <p style={{color: '#94a3b8'}}>Cowrywise</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px'}}>Driving financial literacy on campus.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
        <p>Built with React by Sophia .C. Ononogbu © 2026</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://x.com/sophia0_dev" style={{ color: '#94a3b8', margin: '0 10px' }}>Twitter</a>
          <a href="https://github.com/sophia0-dev" style={{ color: '#94a3b8', margin: '0 10px' }}>GitHub</a>
          <a href="https://linkedin.com/in/sophia-ononogbu-013983334" style={{ color: '#94a3b8', margin: '0 10px' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;