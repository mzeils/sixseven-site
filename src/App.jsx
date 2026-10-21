import GradientASCII from './components/GradientASCII.jsx';
import ClickSpark from './components/ClickSpark.jsx';
import DecryptedText from './components/DecryptedText.jsx';
import ShinyText from './components/ShinyText.jsx';

const EMAIL = 'info@67sixseven.xyz';

const FEATURES = [
  {
    n: '01',
    title: 'Earn points at matches',
    body: 'Fans check in on match day and play along during the game to pick up points.'
  },
  {
    n: '02',
    title: 'Collect digital player cards',
    body: 'Players become cards to collect, from common to rare.'
  },
  {
    n: '03',
    title: 'Redeem rewards',
    body: 'Points are spent on rewards the club and its partners offer.'
  }
];

export default function App() {
  return (
    <ClickSpark sparkColor={['#7cf7d4', '#b49cff', '#ffffff']} sparkSize={10} sparkRadius={22} sparkCount={9}>
      <div className="page">
        <header className="topbar">
          <a className="mark" href="#top" aria-label="Six Seven, back to top">
            67
          </a>
          <a className="toplink" href={`mailto:${EMAIL}`}>
            Contact
          </a>
        </header>

        <main id="top">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-bg" aria-hidden="true">
              <GradientASCII
                colors={['#3a1cff', '#9b5cff', '#2fe6b8', '#f6f8ff']}
                shape="horizon"
                characters=" =+xX0S8#@67"
                cellSize={18}
                density={0.8}
              />
            </div>
            <div className="hero-inner">
              <p className="eyebrow">
                <ShinyText text="Fan rewards apps · New Zealand" color="#b8bdd0" shineColor="#ffffff" speed={3} />
              </p>
              <h1 id="hero-title" className="wordmark">
                <span className="wordmark-num" aria-hidden="true">
                  67
                </span>
                <span className="wordmark-words">
                  <DecryptedText
                    text="six seven"
                    animateOn="view"
                    sequential
                    revealDirection="start"
                    speed={55}
                    characters="0123456789sixeven67"
                    encryptedClassName="scrambled"
                  />
                </span>
              </h1>
              <p className="lede">We build fan rewards apps for sports clubs.</p>
              <div className="ctas">
                <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
                  Talk to us
                </a>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="what-title">
            <h2 id="what-title" className="section-title">
              What a fan rewards app does
            </h2>
            <ol className="features">
              {FEATURES.map(f => (
                <li key={f.n} className="feature">
                  <span className="feature-n">{f.n}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="section afc" aria-labelledby="afc-title">
            <div className="afc-card">
              <p className="kicker">Our first app</p>
              <h2 id="afc-title">AFC Rewards</h2>
              <p>
                A rewards app for Auckland FC supporters, coming soon to iPhone.
              </p>
            </div>
          </section>

          <section className="section clubs" aria-labelledby="clubs-title">
            <h2 id="clubs-title" className="section-title">
              Run a club?
            </h2>
            <p className="clubs-copy">
              We would like to hear from clubs that want a rewards app of their own.
            </p>
            <a className="email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </section>
        </main>

        <footer className="footer">
          <p>Six Seven Ltd, New Zealand</p>
          <nav aria-label="Legal and support">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="/privacy/">Privacy</a>
            <a href="/terms/">Terms</a>
            <a href="/support/">Support</a>
          </nav>
        </footer>
      </div>
    </ClickSpark>
  );
}
