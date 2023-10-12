document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("subjects").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            getSubjectCredits();
        }
    });

    document.getElementById("credit-inputs").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            calculateTGPA();
        }
    });
});

function getSubjectCredits() {
    var numSubjects = parseInt(document.getElementById("subjects").value);
    var creditsInput = "<div>";
    for (var i = 1; i <= numSubjects; i++) {
        creditsInput += `<label for="subject${i}Credits">Enter credits for Subject ${i}:</label>
        <input type="number" id="subject${i}Credits" class="input-field">
        <label for="subject${i}Grade">Enter grade for Subject ${i}:</label>
        <input type="number" id="subject${i}Grade" class="input-field"><br>`;
    }
    creditsInput += `<button onclick="calculateTGPA()" class="calculate-button">Calculate TGPA/CGPA</button></div>`;
    document.getElementById("credit-inputs").innerHTML = creditsInput;
}

function calculateTGPA() {
    var numSubjects = parseInt(document.getElementById("subjects").value);
    var totalCredits = 0;
    var totalGradePoints = 0;
    for (var i = 1; i <= numSubjects; i++) {
        var credits = parseInt(document.getElementById("subject" + i + "Credits").value);
        var grade = parseFloat(document.getElementById("subject" + i + "Grade").value);
        totalCredits += credits;
        totalGradePoints += credits * grade;
    }
    var tgpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerHTML = `<div class="result-text">Your TGPA/CGPA is: ${tgpa.toFixed(2)}</div>`;
}
