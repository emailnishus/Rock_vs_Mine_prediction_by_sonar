document.addEventListener('DOMContentLoaded', function () {
    const sonarDataInput = document.getElementById('sonarData');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    predictButton.addEventListener('click', function () {
        const sonarData = sonarDataInput.value;

        // Disable the button and show a loading message
        predictButton.disabled = true;
        predictButton.textContent = 'Predicting...';

        // Send a POST request to your server with sonarData for prediction
        // Example using Axios:
        axios.post('/predict', { sonarData })
            .then(function (response) {
                const result = response.data.result;

                // Display the prediction result
                predictionResult.textContent = `Prediction: ${result}`;

                // Re-enable the button and restore its original text
                predictButton.disabled = false;
                predictButton.textContent = 'Predict';
            })
            .catch(function (error) {
                console.error(error);

                // Display an error message to the user
                predictionResult.textContent = 'An error occurred during prediction. Please try again.';

                // Re-enable the button and restore its original text
                predictButton.disabled = false;
                predictButton.textContent = 'Predict';
            });
    });
});

