function logout() {
    // Optional: Clear any frontend state (e.g., localStorage)
    localStorage.removeItem('authToken'); // Example

    // Redirect to the login page
    window.location.href = '/login.html'; // Adjust the path as needed
}
