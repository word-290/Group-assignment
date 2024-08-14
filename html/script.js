window.onload = function() {
    let greeting = "Good ";
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting += "Morning!";
    } else if (hour < 18) {
        greeting += "Afternoon!";
    } else {
        greeting += "Evening!";
    }

    alert(greeting);
};
