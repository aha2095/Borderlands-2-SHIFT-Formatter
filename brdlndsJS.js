/*jslint white: true, browser: true, plusplus: true, newcap: true*/

//Ok so I have to read what's being input then check it against my records which is in local storage and then output what isn't in the records

//planned feature scrape orcz page for keys and compare it to what's in storage and tell you the keys to use for both PC, xbox and PS3.

//----------------------------------------------------

//So I've screwed around, I shouldn't have changed my code style mid way through the project so instead I'm going to throw all of this away and redo this in dart since it seems to suit me better, I may come back to this at some point but it's doubtfull, look at my other repos to see this in dart assuming it gets done.

//----------------------------------------------------

var keysHandler = {
    
    shiftInput: "", 
    results: "", 
    temporaryKeys: [], 
    unusedKeys: [], 
    usedKeys: [],
    
    prevVisit: function() {
        
        if(localStorage.prevVisit === 0) {
            
            usedKeys.push("a");
            localStorage.prevVisit++;
        }
        
        return localStorage.prevVisit;
    },
    
    clearHyphens: function() {
        
        shiftInput: document.getElementById('shiftInput').value;
        shiftInput: shiftInput.toUpperCase();
        shiftInput: shiftInput.replace(/-/gi, "");
        
        return shiftInput;
    },
    
    generateTempKeys: function(shiftInput) {
        
        shiftInput: shiftInput.split('\n');
        
        return shiftInput;
    },
    
    retrieveKeys: function() {
        
        usedKeys = JSON.parse(localStorage.usedKeys);
        
        return usedKeys;
    },
    
    compareKeys: function(temporaryKeys, usedKeys) {
        
        var i, j;
        
        for (i = 0; i < temporaryKeys.length; i++) {
            for (j = 0; j < usedKeys.length; j++) {
                if (temporaryKeys[i].Id !== usedKeys[j].Id ) {
                    
                    unusedKeys.push = temporaryKeys[i];
                    usedKeys.push(temporaryKeys[i]);
                    
                    return unusedKeys;
                }
            }
        }
        
        return 1;
    },
    
    storeKeys: function(usedKeys) {
        
        localStorage.usedKeys = JSON.stringify(usedKeys);
        
        return 1;
    },
    
    outputKeys: function(unusedKeys) {
        
        var i;
        
        results = document.getElementById("results");
        
        for (i = 0; i < unusedKeys; i++) {
            
            results.innerHTML = unusedKeys[l];  
        }
        
        return 1;
    }

}

setInterval(function() {
    
    var shiftInput, temporaryKeys, prevVisit, usedKeys, unusedKeys, comparitiveArray, i;
    
    shiftInput = keysHandler.clearHyphens();
    temporaryKeys = keysHandler.generateTempKeys(shiftInput);
    
    while(temporaryKeys[i]-- !== temporaryKeys[i]) {
        
        prevVisit = keysHandler.prevVisit();
        usedKeys = keysHandler.retrieveKeys();
        unusedKeys = keysHandler.compareKeys(temporaryKeys, usedKeys);
        keysHandler.outputKeys(unusedKeys);
    }
    
    
    
}, 150);