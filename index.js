document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
	let joke
	let username

  form.addEventListener('submit', (event) => {
		event.preventDefault()
		fetchJoke()
		username = document.getElementById('name-input').value
    if(username === "") return;
		event.target.reset()
	})

	function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => renderJoke(jokeData))
	}
	
	function renderJoke(jokeData) {
		const newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `
    	<span class="username">${username} says: </span>${jokeData.joke}
    `
		jokeList.appendChild(newJokeLi)
	}
})