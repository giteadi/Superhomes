import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedListing, setSelectedListing] = useState(null);

  const handleEdit = (listing) => {
    setSelectedListing(listing); // Set the listing data to the form fields in Editing Area
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white text-center font-bold text-2xl">
        <h1>Admin Dashboard</h1>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-blue-700 text-white flex justify-around py-2">
        <a href="#" className="hover:underline">Upcoming Bookings</a>
        <a href="#" className="hover:underline">Today's Bookings</a>
        <a href="#" className="hover:underline">Calendar</a>
        <a href="#" className="hover:underline">Listings</a>
      </nav>

      <main className="p-6 space-y-12">
        {/* Listings Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Listings</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg p-4 space-y-2"
              >
                <div className="h-32 bg-gray-200 rounded-md"></div>
                <h3 className="font-bold">Title</h3>
                <p className="text-sm">Address: Some Place</p>
                <button 
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() => handleEdit({ title: 'Title', address: 'Some Place', price: 30, area: 50, bedrooms: 2 })}
                >
                  Edit
                </button>
              </div>
            ))}
            {/* Add New Listing Button */}
            <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center">
              <button className="text-4xl text-gray-400">+</button>
            </div>
          </div>
        </section>

        {/* Editing Area */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Editing Area</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Title"
              value={selectedListing ? selectedListing.title : ''}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Address"
              value={selectedListing ? selectedListing.address : ''}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="number"
              placeholder="Price"
              value={selectedListing ? selectedListing.price : ''}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="number"
              placeholder="Area"
              value={selectedListing ? selectedListing.area : ''}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="number"
              placeholder="Bedrooms"
              value={selectedListing ? selectedListing.bedrooms : ''}
              className="p-2 border rounded-md w-full"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md">
            Publish
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4">
        <p>© 2024 Admin Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
