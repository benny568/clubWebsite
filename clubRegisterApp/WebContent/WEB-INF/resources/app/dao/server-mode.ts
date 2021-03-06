export /**
 * ServerMode
 */
class ServerMode {
    modes = { LOCAL:0, REMOTE:1};
    currentMode:number;
    
    constructor() {    
        this.currentMode = this.modes.LOCAL;
    }
    
    getServerMode()
    {
        return this.currentMode;
    }
}