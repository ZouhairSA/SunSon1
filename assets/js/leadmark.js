/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var titleText = document.getElementById('animated-text').innerText;
    var characters = titleText.split('');

    document.getElementById('animated-text').innerText = '';

    function animateCharacters(index) {
        if (index < characters.length) {
            var charSpan = document.createElement('span');
            charSpan.innerText = characters[index];
            charSpan.style.animation = 'fadeIn 0.5s ease-in-out forwards';
            document.getElementById('animated-text').appendChild(charSpan);

            index++;
            setTimeout(function () {
                animateCharacters(index);
            }, 150); // Répétez toutes les deux secondes
        }
    }

    animateCharacters(0);
});

// Ajoutez la règle d'animation CSS
var style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #animated-text span {
        display: inline-block;
        opacity: 0;
    }
`;

document.head.appendChild(style);

