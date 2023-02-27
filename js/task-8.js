const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if(email === '' || password === '') {
        alert('Все поля должны быть заполнены');
        return;
    }

    const formData = {email, password};

    console.log(formData);

    formEl.reset();
});

