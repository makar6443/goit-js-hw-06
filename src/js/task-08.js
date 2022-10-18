const formLog = document.querySelector('.login-form');

formLog.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please, fill this form correctly')
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
    }
    event.currentTarget.reset();
}
