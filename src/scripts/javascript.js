jQuery(document).ready(function($){

	jQuery('.blog-listing-holder .blog-listing-title').matchHeight();
	jQuery('.blog-listing-holder .blog-listing-text').matchHeight();

	var currentUrl = ' (' + window.location.href + ')';
	if($("#websiteSource")) {
    // Append the current URL to the hidden field 'notes'
    $('#websiteSource').val(function(index, value) {
        return value + currentUrl;
    })};

	/*['.painting', '.window'].forEach((selector) => {
		if ( !$(`${selector}-select-row select`).length ) return;
		$(`${selector}-select-row select`).select2({
			placeholder: "Select your region",
			minimumResultsForSearch: -1,
			dropdownParent: $(`${selector}-select-row-inner > form`),
		});
	});*/

	$('.service-select').each(function() {
		$(this).select2({
			placeholder: "Select your region",
			minimumResultsForSearch: -1,
			dropdownParent: $(this).closest('form'),
		});
	});

	$('.footer-btns form select').select2({
		placeholder: "Select your region",
		minimumResultsForSearch: -1,
		dropdownParent: $('.footer-btns form'),
	});

	$('.estimate-btn-menu > li > a').click(function() {
		$('.estimate-btn-menu').toggleClass('open');
		$('.estimate-btn-sub-menu').toggleClass('active');
	    $('.estimate-btn-sub-menu').slideToggle();
	});
	/*$('.estimate-select-row form select').on('change', function(){
	   window.location = $(this).val();
	});*/

	// For button click
	$('.remodal-masonry-row button').click(function() {
	    var value = $(this).attr('value');
	    handleRedirection(value);
	});

	// For select change
	$('.service-select').change(function() {
	    var value = $(this).val();
	    var site_id = $(this).data('siteid');
	    handleRedirection(value, site_id);
	});

	$(window).on('pageshow', function(event) {
	    $('.service-select, .footer-btns form select').each(function() {
	        // Reset the selected option to the first one or any specific one
	        this.selectedIndex = 0; // This will reset it to the first option

	        // If you want to keep the 'selected' attribute of your <option> respected, do this:
	        $(this).find('option[selected]').prop('selected', true);
	    });
	});

	$('.select-row form .dist-btn').click(function(e){
	    e.preventDefault();

	    var selectElement = $(this).closest('form').find('select.service-select');

	    // Trigger a change event on the select element
	    selectElement.trigger('change');
	});

	var fingerprintingBrowserData = JSON.stringify({
        //userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        //timeZoneOffset: new Date().getTimezoneOffset(),
        platform: navigator.platform,
        cpuClass: navigator.cpuClass,
        numberOfPlugins: navigator.plugins.length,
        isCookiesEnabled: navigator.cookieEnabled
    });
    setCookie("fingerprintingBrowserData", hashCode(fingerprintingBrowserData), 99);


    var fingerprintingCanvas = document.getElementById("fingerprintingCanvas");
    var fingerprintingCanvasCTX = fingerprintingCanvas.getContext("2d");

    fingerprintingCanvasCTX.fillStyle = "rgb(255,0,255)";
    fingerprintingCanvasCTX.beginPath();
    fingerprintingCanvasCTX.rect(20, 20, 150, 100);
    fingerprintingCanvasCTX.fill();
    fingerprintingCanvasCTX.stroke();
    fingerprintingCanvasCTX.closePath();
    fingerprintingCanvasCTX.beginPath();
    fingerprintingCanvasCTX.fillStyle = "rgb(0,255,255)";
    fingerprintingCanvasCTX.arc(50, 50, 50, 0, Math.PI * 2, true);
    fingerprintingCanvasCTX.fill();
    fingerprintingCanvasCTX.stroke();   
    fingerprintingCanvasCTX.closePath();

    var fingerprintingCanvasTXT = 'abz190#$%^@£éú';
    fingerprintingCanvasCTX.textBaseline = "top";
    fingerprintingCanvasCTX.font = '17px "Arial 17"';
    fingerprintingCanvasCTX.textBaseline = "alphabetic";
    fingerprintingCanvasCTX.fillStyle = "rgb(255,5,5)";
    fingerprintingCanvasCTX.rotate(.03);
    fingerprintingCanvasCTX.fillText(fingerprintingCanvasTXT, 4, 17);
    fingerprintingCanvasCTX.fillStyle = "rgb(155,255,5)";
    fingerprintingCanvasCTX.shadowBlur=8;
    fingerprintingCanvasCTX.shadowColor="red";
    fingerprintingCanvasCTX.fillRect(20,12,100,5);

    // hashing function
    var fingerprintingCanvasDataURL = fingerprintingCanvas.toDataURL();
    setCookie("fingerprintingCanvasDataURL", hashCode(fingerprintingCanvasDataURL), 99);



    /*console.log("sw_region: " + getCookie("sw_region"));
    if (getCookie("sw_region")) {
		// Array of domains to check against
		const targetDomains = [
			'studentworks.com', 
			'peintresetudiants.ca', 
			'studentworkswindowcleaning.com', 
			'vitresetudiants.ca'
		]; 

		// Function to get the domain from a URL
		function getDomain(url) {
		    try {
		        return new URL(url).hostname;
		    } catch (error) {
		        console.error('Invalid URL:', url);
		        return null;
		    }
		}

		// Current page domain
		const currentDomain = window.location.hostname;

		// Get all anchor elements
		const links = document.querySelectorAll('a');

		// Loop through each link
		links.forEach(link => {
		    const href = link.getAttribute('href');
		    if (href) {
		        const domain = getDomain(href);
		        if (!domain) return;

		        // Check if the domain is in the target list and not the current domain
		        if (targetDomains.includes(domain) && domain !== currentDomain) {
		            // Append the parameter
		            const newHref = href.includes('?') ? (href + '&sw_region=' + getCookie("sw_region")) : (href + '?sw_region=' + getCookie("sw_region"));
		            link.setAttribute('href', newHref);
		        }
		    }
		});
	}*/





	
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('input[type="tel"]').forEach(function (input) {
    input.addEventListener('keypress', function (event) {
      if (event.key === '+') {
        event.preventDefault();
      }
    });
  });
});

// Reusable function
var isRedirecting = false;
function handleRedirection(value, site_id = false) {
    if (isRedirecting) {
        console.log("Redirection or page reload is already in process. Further calls are ignored.");
        return;
    }
    
    // If not, set the flag to true to indicate that we're starting the process
    isRedirecting = true;

    value = value.replace(/[^a-zA-Z]/g, '');
    setCookie("sw_region", value, 99);
    //window.location.href = window.location.origin + '/' + value;

    // Pass the redirect logic as a callback to setRegionCookie
    setRegionCookie(value, function() {
        // This part gets executed after all AJAX requests have completed
        if (site_id) {
            window.location.href = handleMultisiteRedirection(site_id);
        } else {
	        if (window.location.hash === "#regions") {
	            var currentURLWithoutHash = window.location.href.replace("#regions", "");
	            window.location.replace(currentURLWithoutHash);
	        } else {
	            location.reload();
	        }
        }
    });
}

// Cookies
var _setCookie = (key, data, date) => document.cookie = `${key}=${data};expires=${date.toUTCString()};path=/`;

function setRegionCookie(data, onCompleted) {

	console.log("setRegionCookie");

	// JavaScript to trigger on cookie change
	var cookieValue = {
	  'value': data, // set your new cookie value here
	};

	// The domainList contains all domains in your multisite that need the cookie
	/*var domainList = [
		'https://studentworks.wordpresssrv.prosomo.hosting', 
		'https://peintresetudiants.wordpresssrv.prosomo.hosting', 
		'https://studentworkswindowcleaning.wordpresssrv.prosomo.hosting', 
		'https://vitresetudiants.wordpresssrv.prosomo.hosting', 
		'https://management.studentworks.wordpresssrv.prosomo.hosting', 
		'https://gestion.studentworks.wordpresssrv.prosomo.hosting'
	]; */
	var domainList = [
		'https://studentworks.com', 
		'https://peintresetudiants.ca', 
		'https://studentworkswindowcleaning.com', 
		'https://vitresetudiants.ca'
	]; 

	var requestsCompleted = 0;
    var totalRequests = domainList.length;

    domainList.forEach(function(domain) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                requestsCompleted++;
                if (xhr.status === 200) {
                    console.log('Success:', xhr.responseText);
                } else {
                    console.error('Error:', xhr.status, xhr.statusText);
                    console.error('Response:', xhr.responseText);
                }

                // Check if all requests are completed
                if (requestsCompleted === totalRequests) {
                    if (typeof onCompleted === 'function') {
                        onCompleted(); // all requests are completed, execute the callback
                    }
                }
            }
        };

        xhr.open('POST', domain + '/wp-json/sw/v1/set-region/', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.withCredentials = true; // important for handling cookies in CORS
        xhr.send('value=' + encodeURIComponent(data));
    });
}

function setCookie(key, data, day) {
	const d = new Date();
	d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
	_setCookie(key, data, d);
	return true;
}

function getCookie(key) {
	key += "=";
	let all_cookies = decodeURIComponent(document.cookie).split(';');
	for (let cookie of all_cookies) {
		while (cookie.charAt(0) == ' ')
			cookie = cookie.substring(1);
		if (cookie.indexOf(key) == 0)
			return cookie.substring(key.length, cookie.length);
	}
	return "";
}

function getAllCookie() {
	let all_cookies = decodeURIComponent(document.cookie).split(';').filter(cookie => cookie.length);
	return all_cookies.reduce((acc, cookie) => {
		let tmp = cookie.split(/^([^=]+)\={1}/g).filter(value => value.length)
			, key = tmp[0].trim()
			, value = this._parse(tmp[1]);
		acc[key] = value;
		return acc;
	}, {});
}

function deleteCookie(key) {
	_setCookie(key, '', new Date('1970-01-01T00:00:00.0000Z'));
	return true;
}

function clearCookie() {
	let all_cookies = decodeURIComponent(document.cookie).split(';');
	for (let cookie of all_cookies)
		deleteCookie((cookie.substr(0, cookie.search('='))).trim());
	this._updateData();
}

var length = () => decodeURIComponent(document.cookie).split(';').length;

function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}