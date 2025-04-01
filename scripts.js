// Modal for Events Page
function openModal(eventId) {
    const modal = document.getElementById(`modal-${eventId}`);
    modal.style.display = "block";
  }
  
  function closeModal(eventId) {
    const modal = document.getElementById(`modal-${eventId}`);
    modal.style.display = "none";
  }
  
  // Booking Form Validation
  function validateBooking() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
  
    if (!name || !email || !date || !guests) {
      alert("Please fill out all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return false;
    }
    if (guests < 1) {
      alert("Number of guests must be at least 1.");
      return false;
    }
  
    alert("Booking request sent! (No backend yet)");
    return true;
  }