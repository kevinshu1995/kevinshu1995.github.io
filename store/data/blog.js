import convert from 'xml-js'
import dayjs from 'dayjs'

export const state = () => ({
	blogPosts: [],
})

export const getters = {
	blogPosts: (state) => {
		try {
			return state.blogPosts.rss.channel.item
		} catch (e) {
			return []
		}
	},
	blogPosts_noAbout: (state) => {
		try {
			const regex = /about-me/
			return state.blogPosts.rss.channel.item
				.filter((post) => !regex.test(post.link._text))
				.sort((a, b) => {
					return (
						dayjs(b.pubDate._text).valueOf() -
						dayjs(a.pubDate._text).valueOf()
					)
				})
		} catch (e) {
			return []
		}
	},
}

export const mutations = {
	SET_BLOG(state, data) {
		state.blogPosts = data
	},
}

export const actions = {
	async getPosts({ commit }) {
		try {
			const blogXml = await this.$axios.$get(
				'https://kevinshu1995.github.io/blog/rss2.xml'
			)
			const blogDataJson = JSON.parse(
				convert.xml2json(blogXml, { compact: true })
			)
			commit('SET_BLOG', blogDataJson)
		} catch (e) {
			console.error(
				'Blog Post not found - actions => data/blog/getPosts',
				e
			)
			commit('SET_BLOG', [])
		}
	},
}
