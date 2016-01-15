var lrcode = '401807537';

if( window[ "numCodeSnippets" ] == undefined )
{
	window[ "numCodeSnippets" ] = 1;
} 
else 
{
	window[ "numCodeSnippets" ]++;
};

if( window["numCodeSnippets"] <= 12 )
{
	var randno = Math[ "random" ]();
	var el = document[ "createElement" ]( "script" );
	el["src"] = "http://api.leaguerepublic.com/l/js/cs1.html?cs=" + lrcode + "&random=" + randno;
	el["type"] = "text/javascript";
	document["getElementsByTagName"]("head")[0]["appendChild"](el);
};