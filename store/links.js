export const state = () => ({
	socialLinks: [
		{
			name: 'mail',
			title: '聯絡我',
			href: 'mailto:kevin.hsu.hws@gmail.com',
			socialName: 'kevin.hsu.hws@gmail.com',
			icon: 'mailOpenedIcon',
		},
		{
			name: 'github',
			title: 'Github',
			href: 'https://github.com/kevinshu1995',
			socialName: '@kevinshu1995',
			icon: 'brandGithubIcon',
		},
		{
			name: 'linkedin',
			title: 'Linkedin',
			href: 'https://www.linkedin.com/in/kevin-hws/',
			socialName: 'kevin-hws',
			icon: 'brandLinkedinIcon',
		},
		{
			name: 'blog',
			title: '部落格',
			href: 'https://kevinshu1995.github.io/blog',
			icon: 'rssIcon',
		},
	],
})

export const getters = {
	getLink: (state) => (name, key) => {
		return state.socialLinks.find((link) => link.name === name)[key]
	},
}
