(function (factory, window) {
    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet', 'd3'], factory);

    // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'), require('d3'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L && window.d3) {
        window.L.FreeDraw = factory(L, d3);
        window.L.freeDraw = function(opts) {
            return new window.L.FreeDraw(opts);
        }
    }
}(function (L, d3) {
    var FreeDraw = require('./free-draw')(L, d3);
    FreeDraw.Hull = require('./hull')(L);
    FreeDraw.Memory = require('./memory');
    FreeDraw.Options = require('./options');
    FreeDraw.Utilities = require('./utilities');

    return FreeDraw;
}, window));
