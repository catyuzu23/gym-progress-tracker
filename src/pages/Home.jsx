export default function Home() {
  return (
    <div className="home-page font-sans">
      {/* Header */}
      <header className="home-header">
        <h1 className="home-title">Bine ai revenit!</h1>
        <p className="home-subtitle">
          Aplicația ta de fitness pentru a urmări progresul zilnic și obiectivele personale.
        </p>
      </header>

      {/* Preview Vizual */}
      <section className="home-preview">
        <img
          src="/preview-dashboard.png"
          alt="Preview aplicație"
          className="preview-img"
        />

        <div className="preview-text">
          <h2><strong>Ce poți face cu aplicația?</strong></h2>
          <ul>
            <li>Adaugă rapid antrenamente noi</li>
            <li>Vizualizează progresul sub formă de grafice</li>
            <li>Gestionează obiectivele personale</li>
            <li>Personalizează experiența din setări</li>
          </ul>
        </div>
      </section>

      {/* Instrucțiuni */}
      <section className="home-howto">
        <h2><strong>Cum funcționează?</strong></h2>
        <p><strong>1.</strong> Adaugă Workout din meniu.</p>
        <p><strong>2.</strong> Vezi Progresul cu statistici.</p>
        <p><strong>3.</strong> Folosește Setările pentru personalizare.</p>
      </section>
    </div>
  );
}
