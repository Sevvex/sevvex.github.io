# Alt:V Rich Presence Integration

### Installation

1. **Set up the project**
   * Ensure you have Node.js and npm installed.
   * Create a new Alt:V project or navigate to your existing project directory.
2.  **Install dependencies**

    ```bash
    npm install discord-rich-presence
    ```
3. **Add the script**
   * Create a file named `discordRichPresence.ts` (or another desired name) in the `client` directory of your Alt:V project and add the Rich Presence code.
4. **Discord Client ID**
   * Replace `YOUR_CLIENT_ID` in the script with your actual Discord application client ID.
5.  **Add the script to server.cfg**

    ```plaintext
    start discordRichPresence
    ```

### Usage

The script automatically updates the Rich Presence status based on the player's status. It is attached to various player events:

* Player connects and disconnects
* Game start and end

### Functions

* **updatePresence()**: Updates the Rich Presence status based on the current player status.
* **playerConnect**: Reacts to a player connecting, updates the status and player count.
* **playerDisconnect**: Reacts to a player disconnecting and updates the status accordingly.
* **gameStart**: Sets the status when a game starts.
* **gameEnd**: Sets the status when a game ends.

### Types

The script defines an interface for player states:

```typescript
interface PlayerState {
    isPlaying: boolean;       // Indicates whether the player is currently playing.
    currentGame: string;      // The name of the current game.
    partySize: number;        // The number of active players in the group.
    maxPartySize: number;     // The maximum number of players in the group.
    startTime: number | null; // The timestamp when the game started (null if not playing).
}
```

### License

This script is intended for use in Alt:V projects. Be sure to follow Discord's guidelines for Rich Presence API usage. This script is Licensed under the MIT License.
