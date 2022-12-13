function relocate () {
	const paths = new URL(document.URL).pathname
		.split('/')
		.filter(_=>_)
	if (paths.at(0) == "shorts") {
		location.replace(`https://youtube.com/watch?v=${paths.at(1)}`)
	}
}

chrome.tabs.onUpdated.addListener(tabId => 
	chrome.scripting.executeScript({
		target: { tabId },
		func: relocate,
	})
)
