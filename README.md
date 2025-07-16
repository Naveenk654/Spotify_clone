#  Spotify_Clone

A fully responsive music player app that lets users play classic Yo Yo Honey Singh tracks. Built with HTML, CSS, and JavaScript.

---

## 🚀 Features

- 🔥 Play/Pause, Forward, Backward controls
- 🎵 List of songs with custom thumbnails and names
- 🎧 Auto-next song playback on finish
- 🎚️ Live progress bar
- 🎇 Playing animation (GIF)
- 📱 Responsive UI

---

## 📁 Project Structure

```
music-player/
├── index.html              # HTML structure
├── style.css               # Styling
├── script.js               # Core functionality
├── covers/                 # Album covers and artist images
│   ├── logo.png
│   ├── photo.png
│   ├── image1.jpg ... 6.jpg
│   └── ICU.gif             # Playing GIF animation
├── songs/                  # Song audio files (not included in GitHub)
│   ├── 1.mp3
│   └── 2.mp3 ... 6.mp3
```

---

## 🌐 Deployment Notes

Due to GitHub's file size limit (100 MB/file), the `.mp3` files are **not included** in the repository.

To make this app work on Render or any hosting platform:

1. Host your audio files externally (e.g., Cloudinary, Firebase, Dropbox)
2. Update the `filePath` values in `script.js` with the hosted URLs
3. Deploy the codebase (excluding large media) from GitHub

---

## 🔮 Future Plans

- 🌍 Auto-detect user's location to show region-based music
- 🎛 Add shuffle/repeat functionality
- 🌙 Dark mode toggle
- 🎨 Improve visuals using TailwindCSS
- 📥 Convert to PWA (installable on phones)
- 📈 Playback time indicator

---

## 👨‍💻 Author

Made with ❤️ by **Naveen Kumawat**

---

## 📝 License

This project is licensed for learning and personal use. Commercial reuse without permission is not allowed.
