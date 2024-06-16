document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
    activePage.classList.remove('hidden');
}