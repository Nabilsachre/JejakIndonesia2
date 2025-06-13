export interface CardItem {
  id: string
  level: 1 | 2 | 3 | 4
  parentId: string | null
  name: string
  deskripsi: string
  kategori: string
}

const cardsData: CardItem[] = [
  // Region
  { id: 'reg_jawa', level: 1, parentId: null, name: 'Jawa', deskripsi: 'Pulau Jawa', kategori: 'Region' },
  { id: 'reg_bali', level: 1, parentId: null, name: 'Bali', deskripsi: 'Pulau Bali', kategori: 'Region' },
  { id: 'reg_sumatra', level: 1, parentId: null, name: 'Sumatra', deskripsi: 'Pulau Sumatra', kategori: 'Region' },

  // Province
  { id: 'prov_jatim', level: 2, parentId: 'reg_jawa', name: 'Jawa Timur', deskripsi: 'Provinsi', kategori: 'Provinsi' },
  { id: 'prov_bali', level: 2, parentId: 'reg_bali', name: 'Bali', deskripsi: 'Provinsi', kategori: 'Provinsi' },
  { id: 'prov_sumbar', level: 2, parentId: 'reg_sumatra', name: 'Sumatera Barat', deskripsi: 'Provinsi', kategori: 'Provinsi' },

  // City
  { id: 'city_surabaya', level: 3, parentId: 'prov_jatim', name: 'Surabaya', deskripsi: 'Kota', kategori: 'Kota' },
  { id: 'city_denpasar', level: 3, parentId: 'prov_bali', name: 'Denpasar', deskripsi: 'Kota', kategori: 'Kota' },
  { id: 'city_padang', level: 3, parentId: 'prov_sumbar', name: 'Padang', deskripsi: 'Kota', kategori: 'Kota' },

  // Culture
  { id: 'cult_lontong', level: 4, parentId: 'city_surabaya', name: 'Lontong Balap', deskripsi: 'Kuliner khas Surabaya', kategori: 'Kuliner' },
  { id: 'cult_kecak', level: 4, parentId: 'city_denpasar', name: 'Tari Kecak', deskripsi: 'Tari tradisional Bali', kategori: 'Tari' },
  { id: 'cult_rendang', level: 4, parentId: 'city_padang', name: 'Rendang', deskripsi: 'Kuliner khas Padang', kategori: 'Kuliner' },
]

export default cardsData
