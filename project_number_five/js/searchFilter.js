
const searchBar = document.getElementById('search');
const items = document.querySelectorAll('.gallery-item');

search.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();

    items.forEach(item => {
        const link = item.querySelector('a');
        const caption = link?.dataset.caption?.toLowerCase() || "";

        if (caption.includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    })
})