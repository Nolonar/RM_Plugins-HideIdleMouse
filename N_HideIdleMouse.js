//==============================================================================
// N_HideIdleMouse
//==============================================================================
/*:
 * @target MZ
 * @plugindesc Automatically hides mouse if it hasn't been moved for a while.
 * @author Nolonar
 * @url https://github.com/Nolonar/RM_Plugins-HideIdleMouse
 * 
 * @param timeout
 * @text Idle timeout
 * @desc How long the mouse can remain idle before it is hidden (in milliseconds).
 * @type number
 * @min 0
 * @default 3000
 * 
 * 
 * @help This plugin does not provide plugin commands.
 * 
 * Note:
 * The mouse cursor will only be hidden if it is hovering on top of the the game
 * window.
 */

(() => {
    let parameters = PluginManager.parameters('N_HideIdleMouse');
    let timeoutDelay = Number(parameters.timeout) || 3000;

    let mouseIdleTimeout = null;
    let defaultCursor = document.body.style.cursor;
    hideMouse(); // Hidden by default.

    let window_onmousemove = window.onmousemove;
    window.onmousemove = () => {
        if (window_onmousemove) window_onmousemove();

        showMouse();
        clearTimeout(mouseIdleTimeout);

        mouseIdleTimeout = setTimeout(hideMouse, timeoutDelay);
    };

    function showMouse() {
        document.body.style.cursor = defaultCursor;
    };
    function hideMouse() {
        document.body.style.cursor = 'none';
    };
})();
