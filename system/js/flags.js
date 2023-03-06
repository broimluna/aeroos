// Flags URL begins here

	// Loads the flag into RAM.
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

		// Loads startup value into RAM.
	function getStartValByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var paRameter = getParameterByName('flag');
	var startup = getStartValByName('startup');


 // Enables flag when page loads
	 $(document).ready(function() {

		if (paRameter == 'ThisIsTheSecretDevMode!') {
		   $("<style type='text/css'> @import url(system/css/themes/dev.css);</style>").appendTo("#desktop");
		}

		if (paRameter == 'NoStartup') {
			$("<style type='text/css'> #startup {  display:none !important; }</style>").appendTo("#desktop");
		  }

		  if (paRameter == 'DisableTheming') {
			$("<style type='text/css'> .themes {  display:none !important; }</style>").appendTo("div");
			}

		  if (startup == 'no') {
			$('#startup').css('display','none');
		}



		// No code inserted, does nothing.
		else {
		}
	});
	var search_htm_url = "index.html?startup=no&?flag=";
	function enableFlag() {
		if ((document.searchpage.keyword.value.length == 0)
		|| (document.searchpage.keyword.value == " ")) {
		alert("Please enter a flag!");
		} else {
		sel = document.searchpage.and_or.selectedIndex;
		location.href = search_htm_url
		+ escape(document.searchpage.keyword.value)

		}
		return false;
		}
// Flag code ends here