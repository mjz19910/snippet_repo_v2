try {
	let res=await fetch("https://code.jquery.com/jquery-3.6.0.min.js")
	window.code=await res.text()
} catch(e) {
	console.log(e)
}
