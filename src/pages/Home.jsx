export default function Home() {
  return (
    <div className="home-page center-page bg-primary text-white">
      <header className="text-center mb-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-accent">Bine ai revenit!</h1>
        <p className="text-lg mt-4 text-[#e9c703]">
          Aplicația ta de fitness pentru a urmări progresul zilnic și obiectivele personale.
        </p>
      </header>

      {/* Preview Vizual */}
      <section className="flex flex-col md:flex-row items-start justify-center gap-12 mb-20 max-w-6xl">
        <img
          src="/preview-dashboard.png"
          alt="Preview aplicație"
          className="rounded-xl shadow-lg w-full md:w-[40%] object-cover"
        />

        <div className="text-[#e9c703] w-full md:w-[55%]">
          <h2 className="text-2xl font-semibold mb-4">Ce poți face cu aplicația?</h2>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Adaugă rapid antrenamente noi</li>
            <li>Vizualizează progresul sub formă de grafice</li>
            <li>Gestionează obiectivele personale</li>
            <li>Personalizează experiența din setări</li>
          </ul>
        </div>
      </section>

      {/* Instrucțiuni */}
      <section className="text-[#e9c703] max-w-3xl">
        <h2 className="text-2xl font-semibold text-accent mb-4 text-center">Cum funcționează?</h2>
        <div className="space-y-4 text-left px-4">
          <p>
            <span className="text-accent font-semibold">1.</span> Mergi în secțiunea <strong>Adaugă Workout</strong> din meniu pentru a introduce un nou antrenament.
          </p>
          <p>
            <span className="text-accent font-semibold">2.</span> Accesează <strong>Vezi Progresul</strong> pentru a urmări datele tale și a vedea graficele.
          </p>
          <p>
            <span className="text-accent font-semibold">3.</span> Personalizează setările aplicației din <strong>Setări</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
