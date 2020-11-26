'use strict';
const dropDown = () => {
    const selectList = document.querySelector('.club-select');
    const clubList = document.querySelector('.clubs-list ul');


    selectList.addEventListener('click', (e) => {
        const {target} = e;

        if (target.closest('.club-select')) {
            clubList.classList.toggle('deactiveted');
        }

        if (target.closest('li')){
            clubList.classList.add('deactiveted');
        }
    });

};

export default dropDown;