// Event listener for the button
document.getElementById('fetchBtn').addEventListener('click', fetchData);

// Async function to fetch data from the API
async function fetchData() {
    try {
        // Indicate that data fetching is happening
        document.getElementById('result').innerHTML = "Fetching data...";

        // Fetch the data from the external API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Parse the data as JSON
        const data = await response.json();

        // Display the fetched data in the result div
        document.getElementById('result').innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `;
    } catch (error) {
        // Display error message if something goes wrong
        document.getElementById('result').innerHTML = "Error fetching data.";
        console.error('Error:', error);
    }
}

