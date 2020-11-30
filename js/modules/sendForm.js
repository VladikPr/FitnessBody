'use strict';
const sendForm = () => {
        const getAllForms = (form) => {
            const elementsForm = [...form.elements].filter(item => {
                return item.tagName.toLowerCase() !== 'button' &&
                item.type !=="button";
            });
        
            return elementsForm;
        };
        
        const formValidate = formData => {
                const invalidFields = [];
                const inputs = getAllForms(formData);

                inputs.forEach(element => {
                    // check if type tel
                    if(element.value && element.type === 'tel'){
                        const boolean = /^\+?\d{10}$/g.test(element.value);
                        invalidFields.push(boolean);
                        if(!boolean){
                            alert('Введите правильный номер!');
                        }
                    }

                    if(element.value && element.name === 'name'){
                        const boolean = element.value.trim()?true:false;
                        invalidFields.push(boolean);
                        if(!boolean){
                            alert('Поле не может быть пустым!');
                            element.value = "";
                        }
                    }


                    // check if type checkbox
                    if(element.type === 'checkbox'){
                        invalidFields.push(element.checked);
                        if(!element.checked){
                            alert('Необходимо дать соглашение на обработку данных!');
                        }
                    }
                });

                return !invalidFields.some(item => item === false);
        };

        const sendData = formData => {
            const thanks = document.getElementById('thanks');
            const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = `margin-top: 100px;
                                           font-size: 18px;
                                           color: white;`;

            const postData = (body) => {
                return fetch('server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            };

            const resetInputFields = (form) =>{
                getAllForms(form).forEach(element => {
                    if(element.type === "tel" || element.name === "name"){
                        element.value = "";
                    }
                    if(element.type === "checkbox"){
                        element.checked = false; 
                    }
                });
            };

            const checkForm = (form, status, message, zero) =>{
                if(form.id === 'form1' || form.id === 'form2'){
                    formData.parentNode.style.height = "200px";
                    form.innerHTML = "";
                    status.textContent = message;
                    form.append(status);
                }else if(zero === 0){
                    thanks.style.display = "block";
                }
                thanks.querySelector('p').textContent = message;
            };

            if(formValidate(formData)){

                formData.appendChild(statusMessage);
                    checkForm(formData, statusMessage, loadMessage, 0);
                    const data = new FormData(formData);
                    let body = {};
    
                    for (let val of data.entries()){
                        body[val[0]] = val[1];
                    }
    
                    postData(body)
                        .then((response) => {
                            if(response.status !== 200){
                                throw new Error('Not Found');
                            }
                            checkForm(formData, statusMessage, successMessage, 1);
                        })
                        .catch((error) => {
                            checkForm(formData, statusMessage, errorMessage);
                            console.error(error);
                        })
                        .finally(()=>{
                            resetInputFields(formData);
                            setTimeout(()=>{thanks.style.display = "none";},3000);
                        });
            }
        };

        const body = document.querySelector('body');
        body.addEventListener('submit', (e) => {
            e.preventDefault();
            const { target } = e;
            sendData(target);
        });
    
};

export default sendForm;