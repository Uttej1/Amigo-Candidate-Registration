document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const form = document.querySelector("form");
const sections = [
    {
        nextBtn: form.querySelector(".nextBtn"),
        backBtn: form.querySelector(".backBtn"),
        classToAdd: "SecActive"
    },
    {
        nextBtn: form.querySelector(".nextBtn1"),
        backBtn: form.querySelector(".backBtn1"),
        classToAdd: "SecActive1"
    },
    {
        nextBtn: form.querySelector(".nextBtn2"),
        backBtn: form.querySelector(".backBtn2"),
        classToAdd: "SecActive2"
    },
    {
        nextBtn: form.querySelector(".nextBtn3"),
        backBtn: form.querySelector(".backBtn3"),
        classToAdd: "SecActive3"
    },
    {
        nextBtn: form.querySelector(".nextBtn4"),
        backBtn: form.querySelector(".backBtn4"),
        classToAdd: "SecActive4"
    }
];

sections.forEach((section, index) => {
    section.nextBtn.addEventListener("click", () => {
        form.classList.add(section.classToAdd);
    });

    section.backBtn.addEventListener("click", () => {
        form.classList.remove(section.classToAdd);
    });
});


document.getElementById("submit").addEventListener("click",()=>{
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var father_name = document.getElementById('father_name').value;
    var dob = document.getElementById('dob').value;

    // Perform client-side validation
 /*   if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
*/
    // Create JSON object with form data
    var formData = {
        'name': name,
        'email': email,
        'phone': phone,
        "father_name": father_name,
        "dob": dob,
    };

    // Send AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Registration successful
            alert('Registration successful!');
            document.getElementById('registrationForm').reset();
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
            // Registration failed
            alert('Registration failed. Please try again.');
        }
    };
    xhr.send(JSON.stringify(formData));
});

});
