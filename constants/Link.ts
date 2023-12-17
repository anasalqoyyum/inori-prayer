export const Routes = {
	index: '/',
	hadis: {
		index: '/hadis',
		detail: '/hadis/:slug',
	},
	wanitaInspiratif: {
		index: '/perempuan-pengkaji-hadis',
		detail: '/perempuan-pengkaji-hadis/:slug',
	},
	jurnal: {
		index: '/kajian',
		detail: '/kajian/:slug',
	},
	hakKewajiban: {
		index: '/hak-kewajiban',
		hak: '/hak-kewajiban/hak',
		hakIstri: '/hak-kewajiban/hak/hak-istri',
		hakSuami: '/hak-kewajiban/hak/hak-suami',
		kewajiban: '/hak-kewajiban/kewajiban',
		kewajibanIstri: '/hak-kewajiban/kewajiban/kewajiban-istri',
		kewajibanSuami: '/hak-kewajiban/kewajiban/kewajiban-suami',
		hakPublik: '/hak-kewajiban/hak-publik',
		kewajibanPublik: '/hak-kewajiban/kewajiban-publik',
	},
	quotes: '/quotes',
	about: {
		index: '/about',
		penulis: '/about/penulis',
		aplikasi: '/about/aplikasi',
		daftarPustaka: '/about/daftar-pustaka',
		bantuan: '/about/bantuan',
	},
	notes: '/notes',
}

export const Links = [
	{ label: 'Hadis Perempuan', href: Routes.hadis.index },
	{ label: 'Tentang Aplikasi', href: Routes.about.index },
]
