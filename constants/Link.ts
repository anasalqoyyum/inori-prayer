export const Routes = {
	hadis: {
		index: '/hadis',
		detail: '/hadis/:slug'
	},
	wanitaInspiratif: '/wanita-inspiratif',
	jurnal: '/jurnal',
	hakKewajiban: {
		index: '/hak-kewajiban',
		hak: '/hak-kewajiban/hak',
		kewajiban: '/hak-kewajiban/kewajiban'
	},
	quotes: '/quotes',
	about: {
		index: '/about',
		penulis: '/about/penulis',
		aplikasi: '/about/aplikasi',
		daftarPustaka: '/about/daftar-pustaka'
	},
	notes: '/notes'
}

export const Links = [
	{ label: 'Hadis Perempuan', href: Routes.hadis.index },
	{ label: 'Wanita Inspiratif', href: Routes.wanitaInspiratif }
]
