const puppeteer = require('puppeteer')
const { pages, imageDetails } = require('./screenshots')

;(async () => {
	const browser = await puppeteer.launch()
	await Promise.all(
		pages.map(async (website) => {
			const path = `${imageDetails.imageBasePath}/${imageDetails.folderName}/${website.nickname}${imageDetails.imageFileExtension}`
			const page = await browser.newPage()
			await page.setViewport({
				width: 1366,
				height: 768,
			})
			page.on('dialog', async (dialog) => {
				console.log(
					`${website.nickname} Dialog message: ${dialog.message()}`
				)
				await dialog.dismiss()
			})
			await page.goto(website.url, {
				waitUntil: 'load',
				timeout: 0,
			})

			if (website.nickname === 'maskMap') {
				console.log('maskmap')
				page.waitForSelector('.loader', {
					hidden: true,
					timeout: 10000,
				}).then(async () => {
					await page.screenshot({
						path,
					})
				})
			} else {
				await page.screenshot({
					path,
				})
			}

			console.log(`website: "${website.nickname}" done`)
		})
	)

	await browser.close()
})()
