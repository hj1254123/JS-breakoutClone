var e = function(selector) {
    return document.querySelector(selector)
}

var es = function(selector) {
    return document.querySelectorAll(selector)
}
var bindEvent = function(element, event, callback) {
    element.addEventListener(event, callback)
}


var log = console.log.bind(console)
