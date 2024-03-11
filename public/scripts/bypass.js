"use strict";

/**
 * DISCLAIMER
 * This code stand for bypassing the Anti-DDoS verification by parsing and
 * calculating the javascript puzzle.
 * Do not use this code for any other usage.
*/

/** injected anonymous code inside the page */
(() => {
    /** AUTOPLAY: if in the Anti-DDoS pae */
    if (!document.title.includes("Anti-DDoS")) return;

    const decode = function() {
        /** Find the script */
        const script = document.querySelector('script[data-cfasync=false]');
        if (!script) return; /** If the script cannot be found, leave */

        /** variables for storing the decoding */
        let decoded;

        /** find the variables containing the encoded text */
        const parseVariable = function() {
            const splitted = decoded.split('"');
                /** saving the variables in the structure */
                var variables = [];
                for (let i = 0; i < splitted.length; i++) {
                    if (splitted[i].includes("var")) {
                        variables.push({
                            k: splitted[i]
                                .split(' ')[1]
                                .split('=')[0],
                            v: splitted[i + 1]
                        })
                        i++;
                    }
                }
                /** parsing the operation order */
                const operation = splitted[splitted.length - 1]
                    .replace(';eval(decodeURIComponent(escape(window.atob(', '')
                    .replace('))));', '')
                    .split(" + ");
                /** replacing the operation by the value of the variables */
                var final = "";
                for (let op of operation) {
                    for (let obj of variables) {
                        if (obj.k !== op) continue;
                        final += obj.v
                        break;
                    }
                }
                /** finally decode the string */
                decoded = decodeURIComponent(escape(window.atob(final)));
        }

        /** If they using variables to encode the function */
        if (script.innerHTML.includes("var ")) {
            decoded = script.innerHTML;
            parseVariable();
        } /** If not find the line */ else {
            /** if the code is not in hexadecimal */
            if (script.innerHTML.includes("window.atob")) {
                /** if the code is in hexadecimal, just take the text and decode */
                const raw = script.innerHTML
                    .replace("eval(decodeURIComponent(escape(window.atob('", '')
                    .replace("'))))", '');
                decoded = decodeURIComponent(escape(window.atob(raw)));
            } else {
                /** Find the raw non evaluated string and decode it */
                const raw = script.innerHTML
                    .replace("eval(decodeURIComponent(escape('", '')
                    .replace("')));", '');
                decoded = decodeURIComponent(raw.replace(/\\x/g, '%'));
            }

            /** if there's multiple layers of protection */
            if (decoded.includes("eval")) parseVariable();
        }

        decoded = String(decoded).split('\n');
        return (decoded);
    }

    let decoded = decode();

    /** parse the cookie line */
    var cookie  = decoded.find(l =>
        String(l).includes("document.cookie ="))
            .split('\'');
    /** parse the magic numbers line */
    var magic   = decoded.find(l =>
        String(l).includes("parseInt"))
            .split('\"');
    /** parse the header line */
    var header  = decoded.find(l =>
        String(l).includes(String(magic[0].split(' ')[1].split('=')[0])) &&
        String(l).includes("xhttp"))
            .split('\'')[1];

    /** solving the javascript maze */
    var result  = parseInt(magic[1], 10) + parseInt(magic[3], 10);
    var now     = new Date();
    var time    = now.getTime() + 300e3;
    now.setTime(time);

    /** putting the cookie */
    document.cookie = cookie[1] + cookie[3] + cookie[5] + cookie[7];

    /** sending the request */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4) {
            document.getElementById("status").innerHTML = "Refresh your page.";
            location.reload(true);
        }
    };
    xhttp.open("POST", "/?format=json", true);
    xhttp.setRequestHeader(header, result);
    xhttp.setRequestHeader('X-Requested-with', 'XMLHttpRequest');
    xhttp.setRequestHeader('X-Requested-TimeStamp', '');
    xhttp.setRequestHeader('X-Requested-TimeStamp-Expire', '');
    xhttp.setRequestHeader('X-Requested-TimeStamp-Combination', '');
    xhttp.setRequestHeader('X-Requested-Type', 'GET');
    xhttp.setRequestHeader('X-Requested-Type-Combination', 'GET');
    xhttp.withCredentials = true;
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name1=Henry&name2=Ford");
})();
