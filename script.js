function togglePlaylist() {
  const playlist = document.getElementById("playlist");
  if (playlist.style.display === "none") {
    playlist.style.display = "block";
  } else {
    playlist.style.display = "none";
  }
}

function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const shoutout = document.getElementById("shoutout").value.trim();

  if (!name || !contact || !email || !shoutout) {
    alert("Please fill in all fields.");
    return;
  }

  // This would normally send to a backend or email service
  console.log("Message Sent:", { name, contact, email, shoutout });

  alert("Thanks for your message!");
  
  // Clear fields after sending
  document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("email").value = "";
  document.getElementById("shoutout").value = "";
}
