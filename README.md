# N_HideIdleMouse
Automatically hides the mouse cursor if it hasn't been moved for a while. Useful when playing in fullscreen mode.

| Project         | Latest release      |
| --------------- | ------------------- |
| N_HideIdleMouse | [Download][release] |

[All RPG Maker plugins by Nolonar][hub]

## Compatibility
Since this plugin doesn't actually modify any RPG Maker-related code, it is very likely compatible to any JavaScript-based RPG Maker.

Tested and confirmed working:
- RPG Maker MV
- RPG Maker MZ

## Terms of Use
According to [LICENSE](LICENSE).

## Known issues
On desktop standalone builds (NWJS), the mouse won't hide automatically when near the top or left window border. This affects MV and MZ, but not browsers.

Workaround: Maximize the game window, or switch to fullscreen mode.

Plugin to launch game in fullscreen mode: [N_StartFullscreen][N_StartFullscreen]

  [hub]: https://github.com/Nolonar/RM_Plugins
  [release]: https://github.com/Nolonar/RM_Plugins-HideIdleMouse/releases/latest/download/N_HideIdleMouse.js
  [N_StartFullscreen]: https://github.com/Nolonar/RM_Plugins-StartFullscreen
