//Cosas del phonegap
var app = {
    initialize: function () {
        this.bind();
    },
    bind: function () {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function () {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function (id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};


$(document).ready(function () {

    // $(".botonVotar").on('tap', tapHandler);
    $('#cab').on('tap', tapHandler1);


});


//Funcion para probar añadirlinea
function tapHandler1() {
    anadirCancion("asdgasdgasdg", "Siemasasdgasdgpre Fuertes", "dsdg", Math.floor(Math.random() * 100), "1:30", 0, 0);
};

//Funcion votar
function tapHandler() {
    alert('adfas');
    cambiarIconoVotada(this.id);

};

function anadirCancion(nombre, artista, album, id, duracion, votado, sonado) {

    var textoAnadir = "<li id=\"" + id + "\" data-icon=\"star\">" +
				"<a href=\"#\"onclick=\"return false;\" class=\"leftLink\">" +
					"<span class=\"ui-link-inherit\">" +
						"<h1>" + nombre + "</h1><p>" + artista + "</p><p>" + album + "</p>" +
					"</span>" +
				"</a>" +
				"<a href=\"#\" data-theme=\"a\" class=\"botonVotar\"></a>" +
			"</li>";

    $('#espera').remove();
    $('#lista').append(textoAnadir);
    $('#lista').listview('refresh');
    arreglarEstiloLineas();

    var idhash = "#" + id ;

    $(idhash).on("tap", function () {
        if (votado == 0) {
            cambiarIconoVotada(this.id);
            votado = 1;
        } else {
            cambiarIconoDesvotada(this.id);
            votado = 0;
        }

    });

};

function arreglarEstiloLineas() {
    //Codigo para quitar el link izquierdo de los split button de las listview
    $('.leftLink').parent().parent().parent().removeClass('ui-btn');
    $('.leftLink').contents().unwrap();
}

//Funcion para cambiar el icono a una cancion votada. Recibe el id de la cancion y la transforma al selector jquery.
function cambiarIconoVotada(id) {
    var selector = "#" + id + " .ui-btn-inner .ui-btn .ui-icon";
    var idalmo = "#" + id + " .botonVotar";
    //$(selector).addClass("ui-icon-check").removeClass("ui-icon-star");
    var theme = 'e';
    $(idalmo).find('.ui-btn')
                       .removeClass('ui-btn-up-a ui-btn-hover-a')
                       .addClass('ui-btn-up-' + theme)
                       .attr('data-theme', theme);
}

//Funcion para cambiar el icono a una cancion no votada. Recibe el id de la cancion y la transforma al selector jquery.
function cambiarIconoDesvotada(id) {
    var selector = "#" + id + " .ui-btn-inner .ui-btn .ui-icon";
    var idalmo = "#" + id + " .botonVotar";
    //$(selector).addClass("ui-icon-star").removeClass("ui-icon-check");
     var theme = 'a';
    $(idalmo).find('.ui-btn')
                       .removeClass('ui-btn-up-e ui-btn-hover-e')
                       .addClass('ui-btn-up-' + theme)
                       .attr('data-theme', theme);
}
