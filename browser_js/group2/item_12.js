// spell:words lbry_chase
function lbry_chase() {
	if(location.href.match(/.+\/address\//)) {
		let tbody=document.querySelector('tbody');
		if(!tbody) return;
		/** @type {Element[]} */
		let tmp=[];
		for(let i=0;i<tbody.children.length;i++) {
			tmp.push(tbody.children[i]);
		}
		console.log(tmp.map(e => e.innerHTML.replaceAll("\n","\\n")).join("\n"))
		for(let i=0;i<tmp.length;i++) {
			let cur_child=tmp[i].children[6];
			if(!(cur_child instanceof HTMLElement)) continue;
			let str=cur_child.innerText.split(" LBC",1)
			if(parseFloat(str[0])<=0) {
				continue
			}
			let element=tmp[i].children[1].children[0].children[0];
			if(element instanceof HTMLInputElement) {
				element.click();
			}
			break
		}
	}
	let document_query_result=document.querySelectorAll(".inputs .input")
	if(document_query_result.length===1) {
		let element=document_query_result[0].children[2].children[0];
		if(element instanceof HTMLInputElement) {
			element.click();
		}
	}

}