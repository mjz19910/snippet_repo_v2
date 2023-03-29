// ==UserScript==
// @name         nyan cat pause support
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.nyan.cat/*
// @match        http://www.nyan.cat
// @grant        none
// @run-at       document-start
// ==/UserScript==
// @ts-nocheck

(function() {
	'use strict';
	/* eslint-disable no-undef */
	var base2_src=`$(document).ready(function () {
    $('div.view2').hide();
    $('div.slide2').click(function helpMe() {
        $('#languages').toggle('fast');
    });

    $('#ach1').hide();
    $('#ach2').hide();
    $('#ach3').hide();
    $('#ach4').hide();
    $('#ach5').hide();
    $('#ach6').hide();
    $('#ach7').hide();
    $('#ach8').hide();
    $('#ach9').hide();
    $('#ach10').hide();

    if (catName == "404") {
        load404();
    }

    if (catName == "slomo") {
        animateStarsTimer = setInterval(animateStars2, 250);
    }
    else {
        animateStarsTimer = setInterval(animateStars, 150);
    }
    placeStarTimer = setInterval(placeStar, 60);
    //setTimeOnSite = setInterval(timeOnSite, 100);
});


//iphone settings
if ((navigator.userAgent.indexOf('iPhone') != -1) || (screen.width <= 699) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
    document.getElementById("muctr").style.visibility = "visible";
}

function closePlay() {
    soundManager.play('nyan');
    $('div.muctr').hide();
}

// language changer
function changeLanguage(language) {
    var values = languages[language];
    for (var key in values) {
        document.getElementById(key).innerHTML = values[key];
    }
    document.getElementById('flav').src = '/images/languages/' + language + '/button.png';
    $('#languages').toggle('fast');
}
function preReq() {
    var deflang = getValue('deflang');

    if (!(deflang in languages)) {
        deflang = 'eng';
        setValue('language', 'eng', 365);
    }

    changeLanguage(deflang);
    checkViews();
}


//hold that sliding glass navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("langchooser").style.marginLeft = "250px";

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("langchooser").style.marginLeft = "0";
}


//cookie stuff
function setValue(NameOfValue, value, expiredays) {
    var ExpireDate = new Date();
    ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
    document.cookie = NameOfValue + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}
function getValue(NameOfValue) {
    if (document.cookie.length > 0) {
        begin = document.cookie.indexOf(NameOfValue + "=");
        if (begin != -1) {
            begin += NameOfValue.length + 1;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(begin, end));
        }
    }
    return null;
}
function remValue(NameOfValue) {
    if (getValue(NameOfValue)) {
        document.cookie = NameOfValue + "=" +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}


//views
var score = eval(getValue('score_' + catName)) + 1;
setValue('score_' + catName, score, 365);
function checkViews() {
    var score_original = eval(getValue('score_original'));
    var score_gb = eval(getValue('score_gb'));
    var score_technyancolor = eval(getValue('score_technyancolor'));
    var score_jazz = eval(getValue('score_jazz'));
    var score_mexinyan = eval(getValue('score_mexinyan'));
    var score_j5 = eval(getValue('score_j5'));
    var score_porkanyan = eval(getValue('score_porkanyan'));
    var score_nyaninja = eval(getValue('score_nyaninja'));
    var score_elevator = eval(getValue('score_elevator'));
    var score_wtf = eval(getValue('score_wtf'));
    var score_jamaicnyan = eval(getValue('score_jamaicnyan'));
    var score_america = eval(getValue('score_america'));
    var score_retro = eval(getValue('score_retro'));
    var score_vday = eval(getValue('score_vday'));
    var score_snarf = eval(getValue('score_snarf'));
    var score_sad = eval(getValue('score_sad'));
    var score_tacnayn = eval(getValue('score_tacnayn'));
    var score_dub = eval(getValue('score_dub'));
    var score_slomo = eval(getValue('score_slomo'));
    var score_xmas = eval(getValue('score_xmas'));
    var score_newyear = eval(getValue('score_newyear'));
    var score_fiesta = eval(getValue('score_fiesta'));
    var score_easter = eval(getValue('score_easter'));
    var score_bday = eval(getValue('score_bday'));
    var score_paddy = eval(getValue('score_paddy'));
    var score_breakfast = eval(getValue('score_breakfast'));
    var score_melon = eval(getValue('score_melon'));
    var score_star = eval(getValue('score_star'));
    var score_balloon = eval(getValue('score_balloon'));
    var score_daft = eval(getValue('score_daft'));
    if (score_original >= 1) {
        if (score_gb >= 1) {
            if (score_technyancolor >= 1) {
                if (score_jazz >= 1) {
                    if (score_mexinyan >= 1) {
                        if (score_j5 >= 1) {
                            if (score_porkanyan >= 1) {
                                if (score_nyaninja >= 1) {
                                    if (score_elevator >= 1) {
                                        if (score_wtf >= 1) {
                                            if (score_jamaicnyan >= 1) {
                                                if (score_america >= 1) {
                                                    if (score_retro >= 1) {
                                                        if (score_vday >= 1) {
                                                            if (score_snarf >= 1) {
                                                                if (score_sad >= 1) {
                                                                    if (score_tacnayn >= 1) {
                                                                        if (score_dub >= 1) {
                                                                            if (score_slomo >= 1) {
                                                                                if (score_xmas >= 1) {
                                                                                    if (score_newyear >= 1) {
                                                                                        if (score_fiesta >= 1) {
                                                                                            if (score_easter >= 1) {
                                                                                                if (score_bday >= 1) {
                                                                                                    if (score_paddy >= 1) {
                                                                                                        if (score_breakfast >= 1) {
                                                                                                            if (score_melon >= 1) {
                                                                                                                if (score_star >= 1) {
                                                                                                                    if (score_balloon >= 1) {
                                                                                                                        if (score_daft >= 1) {
                                                                                                                            pushNyanfan()
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (score_original >= 100) {
        if (score_gb >= 100) {
            if (score_technyancolor >= 100) {
                if (score_jazz >= 100) {
                    if (score_mexinyan >= 100) {
                        if (score_j5 >= 100) {
                            if (score_porkanyan >= 100) {
                                if (score_nyaninja >= 100) {
                                    if (score_elevator >= 100) {
                                        if (score_wtf >= 100) {
                                            if (score_jamaicnyan >= 100) {
                                                if (score_america >= 100) {
                                                    if (score_retro >= 100) {
                                                        if (score_vday >= 100) {
                                                            if (score_snarf >= 100) {
                                                                if (score_sad >= 100) {
                                                                    if (score_tacnayn >= 100) {
                                                                        if (score_dub >= 100) {
                                                                            if (score_slomo >= 100) {
                                                                                if (score_xmas >= 100) {
                                                                                    if (score_newyear >= 100) {
                                                                                        if (score_fiesta >= 100) {
                                                                                            if (score_easter >= 100) {
                                                                                                if (score_bday >= 100) {
                                                                                                    if (score_paddy >= 100) {
                                                                                                        if (score_breakfast >= 100) {
                                                                                                            if (score_melon >= 100) {
                                                                                                                if (score_star >= 100) {
                                                                                                                    if (score_balloon >= 100) {
                                                                                                                        if (score_daft >= 100) {
                                                                                                                            pushNyanfan()
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}/*endviews*/


//star mess
var stars_mode=1,stars_str;
if(stars_mode == 1)stars_str=[".speed-1",".speed-2",".speed-3",".speed-4"].map(e=>e+".star");
if(stars_mode == 0)stars_str=[".speed-1",".speed-2",".speed-3",".speed-4"]
var stars_dom=stars_str.map(e=>$(e))
var opt=0;
var do_ani_mode=1;
function star_speed(spd){
    opt++
if(do_ani_mode == 2){
    setTimeout(e=>stars_dom[0].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd) });
    }));
    setTimeout(e=>stars_dom[1].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*2) });
    }));
    setTimeout(e=>stars_dom[2].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*3) });
    }));
    setTimeout(e=>stars_dom[3].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*4) });
    }));
}
if(do_ani_mode == 1){
    stars_dom[0].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd) });
    });
    stars_dom[1].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*2) });
    });
    stars_dom[2].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*3) });
    });
    stars_dom[3].each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*4) });
    });
}
if(do_ani_mode == 0){
    $(".speed-1").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd) });
    });
    $(".speed-2").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*2) });
    });
    $(".speed-3").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*3) });
    });
    $(".speed-4").each(function () {
        var l = $(this).offset();
        $(this).offset({ left: (l.left - spd*4) });
    });
}
}
function animateStars() {
    star_speed(10)
    var lost_stars=[]
    stararray.forEach(function (a) {
        star_class=a.attr('class');
        thisFrame = star_class
        thisFrame = thisFrame.split(' ');
        thisFrame = thisFrame[1].split('-');
        thisFrame = parseInt(thisFrame[1]);
        secFrame = star_class
        secFrame = secFrame.split(' ');
        secFrame = secFrame[2].split('-');
        secFrame = parseInt(secFrame[1]);
        thiFrame = star_class
        thiFrame = thiFrame.split(' ');
        thiFrame = thiFrame[3].split('-');
        thiFrame = parseInt(thiFrame[1]);
        var test = a.offset();
        if (test.left < -50) {
            a.remove();
            lost_stars.push(a)
            starcount--;
        }
        if (thiFrame == 7) {
            var l = a.offset();
            a.removeClass("repeat-" + String(secFrame)).addClass("repeat-" + String(parseInt(secFrame) + 1));
            a.removeClass("frame-" + String(thiFrame)).addClass("frame-1");
        } else {
            a.removeClass("frame-" + String(thiFrame)).addClass("frame-" + String(parseInt(thiFrame) + 1));
        }
    })
    if(lost_stars.length > 0){
        stararray=stararray.filter(item => lost_stars.indexOf(item) == -1)
    }
} //400
function animateStars2() {
    star_speed(1)
    var lost_stars=[]
    stararray.forEach(function (a) {
        a=$(a)
        star_class=a.attr('class');
        thisFrame = star_class
        thisFrame = thisFrame.split(' ');
        thisFrame = thisFrame[1].split('-');
        thisFrame = parseInt(thisFrame[1]);
        secFrame = star_class
        secFrame = secFrame.split(' ');
        secFrame = secFrame[2].split('-');
        secFrame = parseInt(secFrame[1]);
        thiFrame = star_class
        thiFrame = thiFrame.split(' ');
        thiFrame = thiFrame[3].split('-');
        thiFrame = parseInt(thiFrame[1]);
        var test = a.offset();
        if (test.left < -50) {
            a.remove();
            lost_stars.push(a)
            starcount--;
        }
        if (thiFrame == 7) {
            var l = a.offset();
            a.removeClass("repeat-" + String(secFrame)).addClass("repeat-" + String(parseInt(secFrame) + 1));
            a.removeClass("frame-" + String(thiFrame)).addClass("frame-1");
        } else {
            a.removeClass("frame-" + String(thiFrame)).addClass("frame-" + String(parseInt(thiFrame) + 1));
        }
    })
    if(lost_stars.length > 0){
        stararray=stararray.filter(item => lost_stars.indexOf(item) == -1)
    }
} //400
var starcount = 0;
var stararray=[]
function placeStar() {
    var rand = Math.floor(Math.random() * 4) + 1;
    var newStar = $("<div class='star speed-" + rand + " repeat-1 frame-1'> <div class='wrapper speed-"+rand+"'><div class='dot dot-1'></div><div class='dot dot-2'></div><div class='dot dot-3'></div><div class='dot dot-4'></div><div class='dot dot-5'></div><div class='dot dot-6'></div><div class='dot dot-7'></div><div class='dot dot-8'></div><div class='dot dot-9'></div></div></div > ");
    var minxframe = document.getElementById("containthecat").offsetLeft;
    var maxxframe = document.getElementById('containthecat').offsetWidth;
    var minyframe = document.getElementById("containthecat").offsetTop;
    var maxyframe = document.getElementById('containthecat').offsetHeight;
    newStar.css({ //1600
        top: Math.floor(Math.random() * (maxyframe)) - 18,
        left: Math.floor(Math.random() * (maxxframe+100)-215)+400
    }); //1200
    if (starcount < 30) {
        $('#containthecat').append(newStar);
        stararray.push(newStar)
        stars_dom[rand-1]=$(stars_str[rand-1])
        starcount++;
    }

} //100

//go go timer
var startTime = new Date;
var currentTime = new Date;
var seconds;
function timeOnSite() {
    currentTime = new Date;
    seconds = parseFloat((currentTime - startTime) / 1000).toFixed(1);
    $("#timer .seconds").text(seconds);

    if (seconds == "1000.0") {
        pushThousnyan();
    } /* 1000 Seconds */
    if (seconds == "9000.0") {
        nyanThousand();
    } /* 9001 Seconds */
    if (seconds == "100000.0") {
        oneHundred();
    } /* 100,000 Seconds */
    if (seconds == "500000.0") {
        fiveHundred();
    } /* 500,000 Seconds */
    if (seconds == "1000000.0") {
        oneMillinyan();
    } /* 1,000,000 Seconds */
    if (seconds == "5000000.0") {
        fiveMillinyan();
    } /* 5,000,000 Seconds */
}


//achievements
var ach_1 = eval(getValue('ach_1'));
var ach_2 = eval(getValue('ach_2'));
var ach_3 = eval(getValue('ach_3'));
var ach_4 = eval(getValue('ach_4'));
var ach_5 = eval(getValue('ach_5'));
var ach_6 = eval(getValue('ach_6'));
var ach_7 = eval(getValue('ach_7'));
var ach_8 = eval(getValue('ach_8'));
var ach_9 = eval(getValue('ach_9'));
var ach_10 = eval(getValue('ach_10'));

function popitup(url) {
    newwindow = window.open(url, 'Credits', 'height=600,width=800');
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}
function popitup500(url) {
    newwindow = window.open(url, 'Store', 'height=500,width=500');
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}

function load404() {
    checkViews();
    pushMissingnyan();
}

konami = new Konami();
konami.load("javascript:konamiNyan()");
function konamiNyan() {
    pushRainyan();
}

function pushThousnyan() {
    $('#ach1').show();
    setValue('ach_1', '1337', 365);
    $('#ach1').fadeOut(50000);
}
function nyanThousand() {
    $('#ach2').show();
    setValue('ach_2', '1337', 365);
    $('#ach2').fadeOut(50000);
}
function oneHundred() {
    $('#ach3').show();
    setValue('ach_3', '1337', 365);
    $('#ach3').fadeOut(50000);
}
function fiveHundred() {
    $('#ach4').show();
    setValue('ach_4', '1337', 365);
    $('#ach4').fadeOut(50000);
}
function oneMillinyan() {
    $('#ach5').show();
    setValue('ach_5', '1337', 365);
    $('#ach5').fadeOut(50000);
}
function fiveMillinyan() {
    $('#ach6').show();
    setValue('ach_6', '1337', 365);
    $('#ach6').fadeOut(50000);
}
function pushMissingnyan() {
    $('#ach7').show();
    setValue('ach_7', '1337', 365);
    $('#ach7').fadeOut(50000);
}
function pushRainyan() {
    $('#ach8').show();
    setValue('ach_8', '1337', 365);
    $('#ach8').fadeOut(50000);
}
function pushNyanfan() {
    $('#ach9').show();
    setValue('ach_9', '1337', 365);
    $('#ach9').fadeOut(50000);
}
function pushObsessed() {
    $('#ach10').show();
    setValue('ach_10', '1337', 365);
    $('#ach10').fadeOut(50000);
}
//@ sourceURL=http://www.nyan.cat/scripts/base2.js`
    var scripts_base2=new Blob([base2_src],{type:'application/javascript'});
	var config={attributes:false,childList:true,subtree:true}
	var dco=e=>e;
	var load_cb=function(url){return function(){URL.revokeObjectURL(url)}}
	var observer=new MutationObserver(function(mutationsList, observer) {
		var url;
		for(var mutation of mutationsList) {
			if (mutation.type == 'childList') {
				//console.log("childList event:",mutation)
				for (let i=0;i<mutation.addedNodes.length;i++){
					let cur=mutation.addedNodes[i]
					if (cur.tagName == "SCRIPT"){
						if (cur.getAttribute("src") == "/scripts/base2.js"){
							url=URL.createObjectURL(scripts_base2)
							cur.src=url
							cur.onload=load_cb(url);
						}
					}
				}
				for (let i=0;i<mutation.removedNodes.length;i++){
					let cur=mutation.removedNodes[i]
					// if (cur.tagName == "IFRAME"){
					//     //console.log("-",cur)
					// }
					}
			}
			else if (mutation.type == 'attributes') {
				console.log('The ' + mutation.attributeName + ' attribute was modified.');
			}
		}
	});
	observer.observe(document, config);
	function pause_play_fn(){
		window.ae=document.querySelector("audio")
		if (window.ae != null){
			window.ae.onpause=function(){clearInterval(window.setTimeOnSite);pTime=new Date}
			window.ae.onplay=function(){
				var tdate=new Date
				var val=(tdate-pTime)/1000;
				console.log(Math.floor(val/60%60)+":"+(val%60).toFixed(2));
				var secdif=val+window.startTime.getSeconds()+(window.startTime.getMilliseconds()/1000)
				console.log(Math.floor(secdif/60%60)+":"+(secdif%60).toFixed(2))
				window.startTime.setSeconds(secdif>>>0,(secdif%1)*1000);
				window.setTimeOnSite = setInterval(window.timeOnSite, 100);
				var tiny=(+new Date)-(+tdate)
				window.startTime.setMilliseconds(window.startTime.getMilliseconds()+tiny)
				window.timeOnSite();
			}
			pTime=new Date
		}
	}
	dco=function(){
		observer.disconnect()
		pause_play_fn()
	}
	window.addEventListener("DOMContentLoaded",dco)
	// Your code here...
})();