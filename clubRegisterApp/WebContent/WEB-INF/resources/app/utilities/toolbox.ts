export /**
 * ToolBox
 */
class ToolBox {
    constructor() {
        
    }
    
	/**********************************************************
     * Name:		setLogHdr()
     * Description:	Sets up the correct indentation and header
     * 				information for the log messages.
     * Scope:		Internal
     * Params in:	
     * Return:		 
     **********************************************************/
	setLogHdr(logdepth, moduleName)
	{
		console.log("** Setting log header for [" + moduleName +"]");
		let i = 0;
		let depth = logdepth * 4;
		let hdr:string = "## " +  moduleName;
	
		// (1) Set the indentation according to the depth
		for( i=0; i<depth; i++ )
		{
			hdr += " ";
		}
		
		// (2) Add on call stack indicator
		hdr += "|-";
		
		return hdr;
	}
}