

import GlitchText from "./components/GlitchText";
import Section from "./components/Section";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <div className={styles.environment}></div>
        <h1 className={styles.heroTitle}>
          <GlitchText text="Socii Cybernetici" />
        </h1>
        <p className={styles.heroSubtitle}>Ordo Sanctus Codicis</p>
      </div>

      <Section title="Credo" id="mission">
        <p>
          In the digital void, we are the shepherds. We defend the sanctity of data against the heretics of the web.
          Our mission is to illuminate the dark corners of the network, revealing vulnerabilities before they can be exploited by the unrighteous.
          We believe in the purity of code and the ethical pursuit of knowledge.
        </p>
      </Section>

      <Section title="Ordo" id="team">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Inquisitors</h3>
            <p>Penetration Testers & Red Teamers who challenge the defenses of the faithful.</p>
          </div>
          <div className={styles.card}>
            <h3>Defenders</h3>
            <p>Blue Teamers & Security Architects who build the walls of the digital cathedral.</p>
          </div>
          <div className={styles.card}>
            <h3>Scribes</h3>
            <p>Researchers & Analysts who document the sacred knowledge of vulnerabilities.</p>
          </div>
        </div>
      </Section>

      <Section title="Confessio" id="contact">
        <p>
          Seek us if you require absolution for your security sins.
          <br />
          <a href="mailto:contact@catholic.codes" className={styles.link}>contact@sociicybernetici.com</a>
        </p>
      </Section>
    </main>
  );
}
