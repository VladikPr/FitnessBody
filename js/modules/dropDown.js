const dropDown = () => {
    const selectList = document.querySelector('.club-select');
    const clubList = document.querySelector('.clubs-list ul');

    selectList.addEventListener('click', (e) => {
        const {target} = e;

        if (target.closest('.club-select') && !target.matches('ul, li')) {
            clubList.classList.toggle('deactivated');
        }

        if (target.matches('a')){
            clubList.classList.add('deactivated');
        }
    });

};

export default dropDown;