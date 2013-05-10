var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
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

//Codigo para quitar el link izquierdo de los split button de las listview
$(document).ready(function(){
$('.leftLink').parent().parent().parent().removeClass('ui-btn');
$('.leftLink').contents().unwrap();
});

$(function() {
        	// Bind the tapHandler callback function to the tap event on div.box
            $( ".botonVotar" ).on( 'tap', tapHandler );
 
            // Callback function references the event target and adds the 'tap' class to it
            function tapHandler( event ) {
        			$(event.target).addClass( "tap" );
					$(event.target).buttonMarkup( "refresh" );
        		}
      });

function anadirLista(){
$('#contenido').replaceWith("<ul id=\"lista \" data-role=\"listview\"></ul>");
};

function anadirCancion(nombre,artista,album,id,duracion,votado,sonado){

var pulsado;
if(votado==1){
pulsado
}

$('#lista').html("<li id=\""+id+"\" data-icon=\"star\" >" +
				"<a href=\"#\" onclick=\"return false;\" class=\"leftLink\" >" + 
					"<span class=\"ui-link-inherit\" >" + 
						"<h1>"+nombre+"</h1><p>"+artista+"</p><p>"+album+"</p>" + 
					"</span>" +
				"</a>" +
				"<a href=\"#\" data-theme=\"a\"</a>" +
			"</li>")

}