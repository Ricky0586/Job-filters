// Updated job and internship listings data
var listingsData = [
    { title: "Software Engineer", location: "San Francisco" },
    { title: "Marketing Intern", location: "New York" },
    { title: "Data Analyst", location: "Chicago" },
    { title: "Product Manager", location: "Seattle" },
    { title: "Graphic Designer", location: "Los Angeles" },
    { title: "Business Analyst", location: "Boston" },
    { title: "Web Developer", location: "Austin" },
    { title: "HR Coordinator", location: "Denver" },
    { title: "Content Writer", location: "Portland" },
    { title: "Sales Representative", location: "Miami" },
    { title: "UX/UI Designer", location: "Atlanta" },
    // Add more listings as needed
];

// Function to generate HTML for listings based on provided data
function generateListingsHTML(listings) {
    var listingsHTML = "";
    listings.forEach(function(listing) {
        listingsHTML += "<div><strong>" + listing.title + "</strong> - " + listing.location + "</div>";
    });
    return listingsHTML;
}

// Function to display listings based on applied filters
function displayListings(listings) {
    var listingsDiv = document.getElementById("listings");
    listingsDiv.innerHTML = generateListingsHTML(listings);
}

// Function to filter listings based on user input
function filterListings() {
    var jobTitleFilter = document.getElementById("jobTitleFilter").value.toLowerCase();
    var locationFilter = document.getElementById("locationFilter").value.toLowerCase();

    var filteredListings = listingsData.filter(function(listing) {
        return listing.title.toLowerCase().includes(jobTitleFilter) && listing.location.toLowerCase().includes(locationFilter);
    });

    displayListings(filteredListings);
}

// Initial display of listings when the page loads
displayListings(listingsData);

