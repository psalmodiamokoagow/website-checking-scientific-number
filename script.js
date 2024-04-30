document.getElementById('scientific-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var input = document.getElementById('scientific-number').value;
    var result = document.getElementById('result');

    // Check if input is a valid scientific number
    var scientificRegex = /^(\d+(\.\d+)?|\.\d+)(e[-+]?\d+)?$/i;
    if (scientificRegex.test(input)) {
        result.innerHTML = 'Scientific number: ' + input;
        // You can add more detailed checking and information here
    } else {
        result.innerHTML = 'Invalid scientific number';
    }
});
