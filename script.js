document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector(".booking-form");
  const results = document.getElementById("results");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      results.innerHTML = `
        <h3>🎉 Low Budget Tickets Found!</h3>
        <p>Train: $50 | Airplane: $120</p>
        <p>Book now and start your adventure 🌍</p>
      `;
    });
  }
});