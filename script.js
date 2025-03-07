
const contactForm = document.getElementById('main-form');
const submit = document.getElementById('submit-form');
const success = document.querySelector('div.success');

// Form containers
const firstNameCont = document.querySelector('div.first-name');
const lastNameCont = document.querySelector('div.last-name');
const emailCont = document.querySelector('div.email');
const queryTypeCont = document.querySelector('div.query-type');
const messageCont = document.querySelector('div.message');
const contactConsentCont = document.querySelector('div.contact-consent-container');

submit.addEventListener('click', event => {
    let validFields = [];
    const contactFormData = new FormData(contactForm);
    for(const ele of contactFormData) {
        const key = ele[0];
        const value = ele[1];

        // Check each of the different form input types
        if(key == 'first-name') {
            if(!value) {
                firstNameCont.classList.add('error');
            } else {
                firstNameCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'last-name') {
            if(!value) {
                lastNameCont.classList.add('error');
            } else {
                lastNameCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'email') {
            // NOTE: regex from ChatGPT
            if(!value || !value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')) {
                emailCont.classList.add('error');
            } else {
                emailCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'query-type') {
            queryTypeCont.classList.remove('error');
            validFields.push(key);
        }
        if(key == 'message') {
            if(!value) {
                messageCont.classList.add('error');
            } else {
                messageCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'contact-consent') {
            contactConsentCont.classList.remove('error');
            validFields.push(key);
        }
    }

    // Add checks for the query type and contact consent inputs
    if(!validFields.find((val) => val == 'query-type')) {
        queryTypeCont.classList.add('error');
    }
    if(!validFields.find((val) => val == 'contact-consent')) {
        contactConsentCont.classList.add('error');
    }

    // Check for success
    if(validFields.length == 6) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(() => {
            let fisrtName = document.getElementById("first-name").value;
            let lastName = document.getElementById("last-name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            
            let successMessage = document.getElementById("success");
            successMessage.innerHTML = `<strong>Message Sent!</strong>
            <br>
            Name: ${fisrtName} ${lastName}
            <br>
            Email: ${email}
            <br>
            Message: ${message}`;
            
            successMessage.style.display = "block";
            success.classList.add('submitted');
        }, 300);


        setTimeout(() => {
            let fisrtName = document.getElementById("first-name").value;
            let lastName = document.getElementById("last-name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            
            let successMessage = document.getElementById("success");
            successMessage.innerHTML = `<strong>Message Sent!</strong>
            <br>
            Name: ${fisrtName} ${lastName}
            <br>
            Email: ${email}
            <br>
            Message: ${message}`;
            
            successMessage.style.display = "block";
            success.classList.remove('submitted');
        }, 5000);
    }


    // document.getElementById("main-form").addEventListener("submit-form", function(event) {
    //     event.preventDefault();
    //     let fisrtName = document.getElementById("first-name").value;
    //     let lastName = document.getElementById("last-name").value;
    //     let email = document.getElementById("email").value;
    //     let message = document.getElementById("message").value;

    //     let successMessage = document.getElementById("success");
    //     successMessage.innerHTML = `<strong>Message Sent!</strong>
    //     <br>
    //     Name: ${fisrtName} ${lastName}
    //     <br>
    //     Email: ${email}
    //     <br>
    //     Message: ${message}`;

    //     successMessage.style.display = "block";
    // });
    // contactForm.submit();
    // event.preventDefault();
});
