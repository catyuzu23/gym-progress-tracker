export default function Home() {
  return (
    <div className="home-page p-6 text-white min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#e9c703]">Bine ai revenit!</h1>
        <p className="text-lg mt-4 text-[#2a2a36]">Ține evidența progresului tău de fitness și atinge-ți obiectivele!</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-[#2a2a36] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#e9c703] mb-2">Adaugă Workout</h2>
          <p className="text-gray-400">Înregistrează rapid un antrenament nou.</p>
        </div>

        <div className="bg-[#2a2a36] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#e9c703] mb-2">Vezi Progresul</h2>
          <p className="text-gray-400">Analizează statistici și grafice.</p>
        </div>

        <div className="bg-[#2a2a36] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#e9c703] mb-2">Setări</h2>
          <p className="text-gray-400">Personalizează experiența ta.</p>
        </div>
      </section>
    </div>
  );
}
