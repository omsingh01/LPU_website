function calculateAttendance() {
    var totalClasses = parseInt(document.getElementById("totalClasses").value);
    var attendedClasses = parseInt(document.getElementById("attendedClasses").value);
    var remainingClasses = parseInt(document.getElementById("remainingClasses").value);

    var totalAttendedClasses = attendedClasses + remainingClasses;
    var attendancePercentage = (totalAttendedClasses / totalClasses) * 100;

    var resultMessage = `Your attendance percentage is ${attendancePercentage.toFixed(2)}%.`;

    document.getElementById("result").textContent = resultMessage;
}
