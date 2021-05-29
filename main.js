const seasons = document.querySelectorAll('.season');
console.log(seasons)
seasons.forEach(season => season.addEventListener('click', addOpen))

function addOpen() {
    this.classList.toggle('open');
}