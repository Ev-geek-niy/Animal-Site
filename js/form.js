const createAnimalForm = document.getElementById("animal-form");
createAnimalForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    if (validateForm(createAnimalForm))
        this.innerHTML = "Успешно добавлен в базу!"
}

function validateForm(formNode) {
    const { elements } = formNode;
    Array.from(elements)
        .filter(x => x.type !== 'submit')
        .forEach(element => validateField(element))

    if (document.querySelectorAll('.show-error ').length > 0)
        return false;

    return true;
}

function validateField(element) {
    switch (element.type) {
        case 'text':
            if (!validateTextField(element.value))
                element.parentElement.querySelector('.error').classList.add('show-error')
            else
                element.parentElement.querySelector('.error').classList.remove('show-error')
            break;
        case 'date':
            if (!validateDate(element.value))
                element.parentElement.querySelector('.error').classList.add('show-error')
            else
                element.parentElement.querySelector('.error').classList.remove('show-error')
            break;
    }
}

function validateTextField(value) {
    if (value === '' || value == null)
        return false;

    return true;
}

function validateDate(value) {
    if (value === '' || value == null)
        return false;

    const date = new Date(value);

    if (date > new Date())
        return false;

    return true;
}