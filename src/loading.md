# Sevvex-Loading Screen (V1-Open-Sourced)

A custom loading screen developed by CaydenDev and PeleonDev.

## Installation Instructions

### Step 1: Clone or Download
Download the entire project folder and place it into your `resources` folder within your FiveM server directory.

### Step 2: Update `server.cfg`
Add the following line to your `server.cfg` to ensure the loading screen resource starts:
```plaintext
start sevvex-loadingscreen-v1
```

### Step 3: File Structure
Ensure your file structure looks like this:
```
resources
└── sevvex-loadingscreen-v1
    ├── client.lua
    ├── server.lua
    ├── fxmanifest.lua
    ├── index.html
    └── song.mp3
```

### Step 5: Launch the Server
Start your server, and the loading screen should be displayed when players connect.

## Dependencies
- [mysql-async](https://github.com/brouznouf/fivem-mysql-async)

## Notes
- **Autoplay Volume**: By default, the volume is set to 20% and can be adjusted using the slider.
- **Team Display**: To change team member details, edit the team sections in `index.html`.
