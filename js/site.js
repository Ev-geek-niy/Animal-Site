const pageTitle = localStorage.getItem('header-title') ?? "Главная";
const selectedTitleIndex = +localStorage.getItem('selected-title-index') ?? 0;
const headerTitlesElement = document.querySelectorAll('.header-title');
const pageTitleElement = document.querySelector('.page-title')

pageTitleElement.innerText = pageTitle

headerTitlesElement.forEach((headerTitle, index) => {
    if (index === selectedTitleIndex) {
        headerTitle.classList.add('header-title-selected');
    }
    headerTitle.addEventListener('click', (e) => {
        headerTitlesElement.forEach(x => x.classList.remove('header-title-selected'));
        headerTitle.classList.add('header-title-selected');

        const text = headerTitle.innerText;
        localStorage.setItem('header-title', text);
        localStorage.setItem('selected-title-index', index)

        pageTitleElement.innerText = text
    })
})