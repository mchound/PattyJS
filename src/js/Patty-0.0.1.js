(function (document, window, undefined) {

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- classList ------------------------------------------ */
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
    /* ------------------------------------------------------------------------------------- */
    ; if (!("classList" in document.createElement("_"))) { (function (j) { "use strict"; if (!("Element" in j)) { return } var a = "classList", f = "prototype", m = j.Element[f], b = Object, k = String[f].trim || function () { return this.replace(/^\s+|\s+$/g, "") }, c = Array[f].indexOf || function (q) { var p = 0, o = this.length; for (; p < o; p++) { if (p in this && this[p] === q) { return p } } return -1 }, n = function (o, p) { this.name = o; this.code = DOMException[o]; this.message = p }, g = function (p, o) { if (o === "") { throw new n("SYNTAX_ERR", "An invalid or illegal string was specified") } if (/\s/.test(o)) { throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character") } return c.call(p, o) }, d = function (s) { var r = k.call(s.getAttribute("class") || ""), q = r ? r.split(/\s+/) : [], p = 0, o = q.length; for (; p < o; p++) { this.push(q[p]) } this._updateClassName = function () { s.setAttribute("class", this.toString()) } }, e = d[f] = [], i = function () { return new d(this) }; n[f] = Error[f]; e.item = function (o) { return this[o] || null }; e.contains = function (o) { o += ""; return g(this, o) !== -1 }; e.add = function () { var s = arguments, r = 0, p = s.length, q, o = false; do { q = s[r] + ""; if (g(this, q) === -1) { this.push(q); o = true } } while (++r < p); if (o) { this._updateClassName() } }; e.remove = function () { var t = arguments, s = 0, p = t.length, r, o = false; do { r = t[s] + ""; var q = g(this, r); if (q !== -1) { this.splice(q, 1); o = true } } while (++s < p); if (o) { this._updateClassName() } }; e.toggle = function (p, q) { p += ""; var o = this.contains(p), r = o ? q !== true && "remove" : q !== false && "add"; if (r) { this[r](p) } return !o }; e.toString = function () { return this.join(" ") }; if (b.defineProperty) { var l = { get: i, enumerable: true, configurable: true }; try { b.defineProperty(m, a, l) } catch (h) { if (h.number === -2146823252) { l.enumerable = false; b.defineProperty(m, a, l) } } } else { if (b[f].__defineGetter__) { m.__defineGetter__(a, i) } } }(self)) };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Element.insertAfter -------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ; if (!Element.prototype.insertAfter){
        Element.prototype.insertAfter = function(el){

            var nextSibling = this.nextSibling;

            while(!!nextSibling && nextSibling.nodeType != 1) {
                nextSibling = nextSibling.nextSibling
            }

            if(!nextSibling) this.parentNode.appendChild(el);

            if(!!nextSibling) this.parentNode.insertBefore(el, nextSibling);

        }
    };    

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Element.remove ------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (Element.prototype.remove){
        Element.prototype.remove = function(){

            !!this.parentNode ? this.parentNode.removeChild(this) : null;

        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Element.prependChild ------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!Element.prototype.prependChild){
        Element.prototype.prependChild = function(el){

            for(var i = 0; i < this.children.length; i++){
                if(this.children[i].nodeType === 1){
                    this.insertBefore(el, this.children[i]);
                    return;
                }
            }

        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Array.indexOf -------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                 ? Math.ceil(from)
                 : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Array.exist ---------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!Array.prototype.exists) {
        Array.prototype.exist = function (obj) {
            for(var i = 0; i < this.length; i++) if(this[i] === obj) return true;
            return false;
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Array.forEach -------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback) {
            for(var i = 0; i < this.length; i++) callback.call(window, this[i], i, this);
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Array.map ------------------------------------------ */
    /* ------------------------------------------------------------------------------------- */
    ;if (!Array.prototype.map) {
        Array.prototype.map = function (callback) {
            var arr = [];
            for(var i = 0; i < this.length; i++) arr.push(callback.call(window, this[i], i, this));
                return arr;
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Array.remove --------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!Array.prototype.remove) {
        Array.prototype.remove = function (callback) {
            var arr = []
            for(var i = 0; i < this.length; i++) {
                if(!callback.call(window, this[i], i, this)) arr.push(this[i]);
            }
            return arr;
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- String.trim ---------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- String.format -------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!String.prototype.format) {
        String.prototype.format = function () {
            var s = this;
            for(var i = 0; i < arguments.length; i++){
                s = s.replace('{' + i + '}', arguments[i]);
            }
            return s;
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- String.startsWith ---------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if (!String.prototype.startsWith) {
      Object.defineProperty(String.prototype, 'startsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(searchString, position) {
          position = position || 0;
          return this.lastIndexOf(searchString, position) === position;
        }
      });
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- Math.toRad ----------------------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if(!Number.prototype.toRad){
        Number.prototype.toRad = function(degrees){
            return degrees * Math.PI / 180;
        }
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- HTMLCollection.toArray ----------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if(!HTMLCollection.prototype.toArray){
        HTMLCollection.prototype.toArray = function(){
            return Array.prototype.slice.apply(this);
        };
    };

    /* ------------------------------------------------------------------------------------- */
    /* -------------------------------- NamedNodeMap.toArray ----------------------------- */
    /* ------------------------------------------------------------------------------------- */
    ;if(!NamedNodeMap.prototype.toArray){
        NamedNodeMap.prototype.toArray = function(){
            return Array.prototype.slice.apply(this);
        };
    };


    var

    self = this,

    patty = function (selector, context) {
        return new polyfiller.fn.init(selector, context);
    };

    patty.fn = patty.prototype = {

        event: function (eventName, eventHandler) {

            var

            _event = function (context, eventName, eventHandler) {

                if (window.addEventListener) {
                    context.addEventListener(eventName, eventHandler, false);
                } else {
                    context.attachEvent('on' + eventName, eventHandler, false);
                }

            }

            if (this.length > 1) {

                for (var i = 0; i < this.length; i++) {
                    _event(this[i], eventName, eventHandler);
                    return this;
                }

            }

            _event(this[0], eventName, eventHandler);
            return this;

        },

        index: function () {
            var
            index = 0,
            node = this[0];
            while ((node = node.previousSibling)) {
                if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
                    index++;
                }
            }
            return index;
        }

    };

    var init = patty.fn.init = function (selector, context) {

        if (!selector)
            return this;

        this.context = context || document;
        this.selector = selector;

        if (typeof selector === 'string') {

            var
            elements = this.context.querySelectorAll(selector);

            this.length = 0;

            for (var i = 0; i < elements.length; i++) {
                this[i] = elements[i];
                this.length++;
            }

        } else if (selector.nodeType) {

            this.context = this[0] = selector;
            this.length = 1;
            return this;

        } else if (typeof selector !== undefined) {
            this[0] = selector;
            this.length = 1;
        }

        return this;

    };

    patty.ajax = function (url, method, data, successCallback, errorCallback) {

        var json = JSON.stringify(data);
        var xmlhttp;
        // compatible with IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText)
                    successCallback(JSON.parse(xmlhttp.responseText));
                else
                    successCallback({});
            }
            else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                if (errorCallback)
                    errorCallback.call(xmlhttp, xmlhttp.status, xmlhttp.statusText, xmlhttp.responseText);
            }
        }
        xmlhttp.open(method, url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.setRequestHeader('Accept', 'application/json');

        if (data)
            xmlhttp.send(json);
        else
            xmlhttp.send();
    };

    patty.merge = function (obj1, obj2) {

        var obj3 = {};

        for (var attrname in obj1) {

            if (true) {
                obj3[attrname] = obj1[attrname];
            }

        }

        for (attrname in obj2) {

            if (obj3[attrname] && Object.prototype.toString.call(obj2[attrname]) === '[object Object]' && Object.prototype.toString.call(obj3[attrname]) === '[object Object]') {

                obj3[attrname] = patty.merge(obj3[attrname], obj2[attrname]);

            } else {

                obj3[attrname] = obj2[attrname];

            }

        }

        return obj3;
    };

    init.prototype = patty.fn;

    window.patty = window.p$ = patty;


})(document, window);