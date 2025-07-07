import Head from 'next/head'

const phrases = [
  "Activer les leviers d’innovation centrée usager.",
  "Optimiser les synergies intersectorielles proactives.",
  "Structurer une gouvernance efficiente et agile.",
  "Maximiser les retombées tangibles du savoir-être organisationnel.",
  "Décloisonner les silos informationnels en continu."
];

export default function Home() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Pipotron CCSC</title>
      </Head>
      <img src="/logo.png" alt="Logo CCSC" width={120} height={120} />
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Pipotron CCSC</h1>
      <p style={{ marginTop: 20, fontStyle: 'italic' }}>{phrase}</p>
    </div>
  );
}
