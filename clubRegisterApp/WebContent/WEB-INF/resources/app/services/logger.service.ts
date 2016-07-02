import { Injectable }     from '@angular/core';

@Injectable()
export class LoggerService {
	loghdr:string; // The header for this instance, to be used in each log message

	trace(msg: any) { console.log(this.loghdr + msg); }
	log(msg: any)   { console.log(this.loghdr + msg); }
	error(msg: any) { console.error(this.loghdr + msg); }
	warn(msg: any)  { console.warn(this.loghdr + msg); }
	
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
		console.log("** [Logger Service] Setting log header for [" + moduleName +"]");
		let i = 0;
		let depth = logdepth * 4;
		let moduleSpace = 25;
		let hdr:string = "## " +  moduleName;
		
		// Make sure the field width is the standard, pad if necessary
		if( hdr.length < moduleSpace )
		{
			let diff = moduleSpace - hdr.length;
			let i = 0;
			for( i=0; i<diff; i++ )
				hdr += ' ';
		}
	
		// (1) Set the indentation according to the depth
		for( i=0; i<depth; i++ )
		{
			hdr += " ";
		}
		
		// (2) Add on call stack indicator
		hdr += "|-";
		
		this.loghdr = hdr;
	}
}