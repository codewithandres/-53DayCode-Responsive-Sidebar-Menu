
window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.icon-menu').addEventListener('click', () => {

        document.querySelector('.sidebar').classList.toggle('active');

        document.querySelectorAll('.sidebar-links a').forEach(btn => {

            btn.addEventListener('click', event => {

                event.preventDefault();
                document.querySelector('.selected').classList.remove('selected');
                btn.classList.add('selected')
            });
        });
    });
});

