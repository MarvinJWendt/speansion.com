particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

$(".btn-primary").each(function (index) {
    if (getCookie($(this).html()) == 'yes') {
        $(this).addClass('active')
    }
})

if($('.active').length <= 0) {
  $('#google').addClass('active')
}
const engine_google = 'https://google.com/search?q='
const engine_duckduckgo = 'https://duckduckgo.com?q='
const engine_bing = 'https://www.bing.com/search?q='
const engine_ecosia = 'https://www.ecosia.org/search?q='

const engine_image_google = 'https://www.google.com/search?tbm=isch&q='
const engine_image_duckduckgo = 'https://duckduckgo.com/?ia=images&iax=images&q='
const engine_image_bing = 'https://www.bing.com/images/search?q='
const engine_image_ecosia = 'https://www.ecosia.org/images?q='

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus()
}

$(".btn-primary").each(function (index) {
    $(this).click(function () {
        $(this).toggleClass('active')
        setCookie($(this).html(), $(this).hasClass('active') ? 'yes' : 'no')
        console.log($(this))
    })
})

/**$('#query').on('keypress', function (e) {
    if (e.keyCode == 13) {
        $("#search").click()
    }
});**/

$("#search").click(() => {
    console.log('SEARCH')
    $(".active").each(function (index) {
        let engine = $(this).html()
        let url = 'ERROR'
        let query = $('#query').val()
        console.log(`Query: ${query}`)
        console.log(engine)

        switch (engine) {
            case "Google":
                url = engine_google + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "DuckDuckGo":
                url = engine_duckduckgo + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "Bing":
                url = engine_bing + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "Ecosia":
                url = engine_ecosia + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "Google Images":
                url = engine_image_google + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "DuckDuckGo Images":
                url = engine_image_duckduckgo + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "Bing Images":
                url = engine_image_bing + query;
                console.log(url)
                openInNewTab(url)
                break;
            case "Ecosia Images":
                url = engine_image_ecosia + query;
                console.log(url)
                openInNewTab(url)
                break;

            default:
                break;
        }


    })
})
$(document).ready(function(){
	$('[data-bs-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });
});
window.params = function(){
    var params = {};
    var param_array = window.location.href.split('?')[1].split('&');
    for(var i in param_array){
        x = param_array[i].split('=');
        params[x[0]] = x[1];
    }
    return params;
}();
if(decodeURI(window.params.q) != "undefined")
  $('#query').val(decodeURI(window.params.q))
if (typeof window.orientation !== 'undefined') { 

  $('#particles-js').hide()

} else {
  $('#particles-js').show()
}
