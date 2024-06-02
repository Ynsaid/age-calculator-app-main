document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector(".btn");

    btn.addEventListener('click', () => {
        // Get value of inputs 
        const dayInput = document.querySelector(".getDayValue");
        const monthInput = document.querySelector(".getMonthValue");
        const yearInput = document.querySelector(".getYearValue");

        const dayValue = parseInt(dayInput.value);
        const monthValue = parseInt(monthInput.value);
        const yearValue = parseInt(yearInput.value);

        // Check if any input is empty
        if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
            // Add red border to empty inputs
            if (isNaN(dayValue)) dayInput.classList.add('error');
            if (isNaN(monthValue)) monthInput.classList.add('error');
            if (isNaN(yearValue)) yearInput.classList.add('error');
            
            // Display error message
            const errorMessage = document.querySelector('.error-message');
            const errorMessage2 = document.querySelector('.error-message2');
            const errorMessage3 = document.querySelector('.error-message3');
            
            errorMessage.textContent = "This field is required";
            errorMessage.style.color = 'red';
            errorMessage2.textContent = "This field is required";
            errorMessage2.style.color = 'red';
            errorMessage3.textContent = "This field is required";
            errorMessage3.style.color = 'red';
            return; // Stop further execution
        }

        // Remove error styles if inputs are not empty
        dayInput.classList.remove('error');
        monthInput.classList.remove('error');
        yearInput.classList.remove('error');

        // get current date
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1;

        // get age details 
        let ageYear = currentYear - yearValue;
        let ageMonth = currentMonth - monthValue;
        let ageDay = currentDay - dayValue;

        // Adjust if day or month is negative
        if (ageDay < 0) {
            ageMonth -= 1;
            ageDay += new Date(currentYear, currentMonth - 1, 0).getDate();
        }

        if (ageMonth < 0) {
            ageYear -= 1;
            ageMonth += 12;
        }

        // set h3 to display the age 
        const day = document.querySelector(".ageDay");
        const month = document.querySelector(".ageMonth");
        const year = document.querySelector(".ageYear");

        day.innerHTML = ageDay;
        month.innerHTML = ageMonth;
        year.innerHTML = ageYear;

        // Clear error message if inputs are valid
        const errorMessage = document.querySelector('.error-message');
        errorMessage.textContent = "";
        const errorMessage2 = document.querySelector('.error-message2');
        errorMessage2.textContent = "";
        const errorMessage3 = document.querySelector('.error-message3');
        errorMessage3.textContent = "";
    });
});
