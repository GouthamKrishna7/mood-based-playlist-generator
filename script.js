const playlists = {
  happy: ["Happy – Pharrell Williams", "Good Life – OneRepublic", "Can't Stop the Feeling – Justin Timberlake"],
  sad: ["Someone Like You – Adele", "Fix You – Coldplay", "Jealous – Labrinth"],
  chill: ["Weightless – Marconi Union", "Sunset Lover – Petit Biscuit", "Night Owl – Galimatias"],
  energetic: ["Stronger – Kanye West", "Believer – Imagine Dragons", "Eye of the Tiger – Survivor"]
};

function generatePlaylist() {
  const mood = document.getElementById("moodInput").value.trim().toLowerCase();
  const list = playlists[mood];
  const output = document.getElementById("playlist");
  if (list) {
    output.innerHTML = "<h3>Your Playlist:</h3><ul>" +
      list.map(song => `<li>${song}</li>`).join("") +
      "</ul>";
  } else {
    output.innerHTML = "<p>Sorry, no playlist found for that mood. Try happy, sad, chill, or energetic.</p>";
  }
}
