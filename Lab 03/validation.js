const registrationForm = document.getElementById("registration-form");
const studentCard = document.getElementById("student-card");

const displayCard = (data) => {

    studentCard.innerHTML = `

    <div class="bg-white rounded-xl shadow-lg p-8">

        <h2 class="text-3xl font-bold text-blue-600 mb-6">
            Registration Details
        </h2>

        <div class="grid md:grid-cols-2 gap-4 text-gray-700">

            <p><strong>Name:</strong> ${data.fullName}</p>

            <p><strong>Email:</strong> ${data.email}</p>

            <p><strong>Password:</strong> ${data.password}</p>

            <p><strong>Mobile:</strong> ${data.mobile}</p>

            <p><strong>Age:</strong> ${data.age}</p>

            <p><strong>Date of Birth:</strong> ${data.dob}</p>

            <p><strong>Gender:</strong> ${data.gender}</p>

            <p><strong>Course:</strong> ${data.course}</p>

            <p class="md:col-span-2">
                <strong>Skills:</strong> ${data.skills.join(", ")}
            </p>

            <p class="md:col-span-2">
                <strong>Address:</strong> ${data.address}</p>

            <p class="md:col-span-2">
                <strong>Uploaded File:</strong> ${data.photoName}
            </p>

        </div>

    </div>

    `;
};

window.addEventListener("load", () => {
    const savedData = localStorage.getItem("studentData");
    if (savedData) {
        displayCard(JSON.parse(savedData));
    }
});

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const mobile = document.getElementById("mobile").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const phonePattern = /^[6-9]\d{9}$/;
    if (!passwordPattern.test(password)) {
        alert("Invalid Password!\n\nPassword must contain:\n• Minimum 8 characters\n• One uppercase letter\n• One lowercase letter\n• One number\n• One special character");
        return;
    }
    if (!phonePattern.test(mobile)) {
        alert("Invalid Phone Number!\nPlease enter a valid 10-digit mobile number.");
        return;
    }
    const gender = document.querySelector('input[name="gender"]:checked');
    const selectedSkills = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((skill) => {
        selectedSkills.push(skill.value);
    });
    const photo = document.getElementById("photo").files[0];
    const studentData = {
        fullName,
        email,
        password,
        mobile,
        age,
        dob,
        gender: gender ? gender.value : "Not Selected",
        course,
        skills: selectedSkills,
        address,
        photoName: photo ? photo.name : "No File Selected"

    };
    localStorage.setItem("studentData", JSON.stringify(studentData));
    displayCard(studentData);

});