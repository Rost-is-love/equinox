const anchor = document.querySelector('.to-projects')

  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    let blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

/* const scrollTo = (element) => {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop // - document.querySelector('.nav').clientHeight,
	});
}


// usage

anchors.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		let id = e.currentTarget.getAttribute('href');

		scrollTo(document.querySelector(id))
	});
}); */
