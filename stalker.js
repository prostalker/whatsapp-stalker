var target = document.getElementById('main').parentElement
var observer = new MutationObserver(function(mutations) {console.log(mutations)
	if(target.children[0].children[1].children[1].children[1]){console.log(1)
		obs.observe(target.children[0].children[1].children[1].children[1].children[0], config)
	} {console.log(2)
		ob.observe(target.children[0].children[1].children[1], config)
	}
});
var ob = new MutationObserver(function(mutations) {
	console.log(target.children[0].children[1].children[1].children[0].children[0].children[0].innerText + (mutations[0].addedNodes[0] && ' is ' + mutations[0].addedNodes[0].children[0].innerText + ' since %c' + Date().slice(16,24) + '%c' || mutations[0].removedNodes[0] && ' was ' + mutations[0].removedNodes[0].children[0].innerText + ' till %c%c' + Date().slice(16,24)),'color: green', 'color: red')
	if(mutations[0].addedNodes[0]){
		obs.observe(target.children[0].children[1].children[1].children[1].children[0], config)
		if(window.showAlert){
			alert('!')
		}
	}
});
var obs = new MutationObserver(function(mutations) {
	console.log(target.children[0].children[1].children[1].children[0].children[0].children[0].innerText, mutations[0].target.innerText.length<10 && 'is' || ':', mutations[0].target.innerText, 'at', Date().slice(16,24))
});
var config = { attributes: true, childList: true, characterData: true }
observer.observe(target, config)
