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

function anadirLista(){
$('#contenido').replaceWith("<ul id=\"lista \" data-role=\"listview\"></ul>");
};

function anadirCancion(nombre,artista,album,id,duracion,votado,sonado){



$('#lista').html("")

}