const sendForm = () => {

    const allForms = document.querySelectorAll('form');

    const postData = (body) => {
        return fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;