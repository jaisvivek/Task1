// Sorting Functionality
function sortTable(columnIndex, order) {
    const sortedColleges = [...colleges];
    sortedColleges.sort((a, b) => {
        if (order === 'asc') {
            return a[columnIndex] - b[columnIndex];
        } else {
            return b[columnIndex] - a[columnIndex];
        }
    });
    populateTable(sortedColleges);
}

// Search Functionality
function searchColleges() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredColleges = colleges.filter(college => college.name.toLowerCase().includes(searchInput));
    populateTable(filteredColleges);
}

// Infinite Scroll Functionality
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Load more data and append it to the table
        // For demonstration purposes, you can add more dummy data here
        // Make sure to update the 'colleges' array with the new data
        populateTable(colleges);
    }
});