export const Routes = {
	index: '/',
	hadis: {
		index: '/hadis',
		detail: '/hadis/:slug'
	},
	wanitaInspiratif: {
		index: '/wanita-inspiratif',
		detail: '/wanita-inspiratif/:slug'
	},
	jurnal: {
		index: '/jurnal',
		detail: '/jurnal/:slug'
	},
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
	{ label: 'Tentang Aplikasi', href: Routes.about.index }
]
