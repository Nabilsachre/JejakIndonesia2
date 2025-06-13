export default function KontribusiPage() {
  return (
    <form className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1">Nama</label>
        <input className="w-full p-2 bg-black/30 border border-gold/40 rounded focus:border-gold" />
      </div>
      <button type="submit" className="px-5 py-2 bg-gold text-black font-semibold rounded hover:opacity-90">
        Kirim
      </button>
    </form>
  )
}
