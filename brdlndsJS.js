/*jslint white: true, browser: true, plusplus: true, newcap: true*/

//Ok so I have to read what's being input then check it against my records which is in local storage and then output what isn't in the records

//planned feature scrape orcz page for keys and compare it to what's in storage and tell you the keys to use for both PC, xbox and PS3.

function keysHandler() {
    
    var shiftInput, results, temporaryKeys, unusedKeys, usedKeys, completeKeys, i, j, k, l;
    
    this.clearHyphens = function() {
        
        shiftInput = document.getElementById('shiftInput').value;
        shiftInput = shiftInput.toUpperCase();
        shiftInput = shiftInput.replace(/-/gi, "");
        
        return shiftInput;

    }
    
    this.generateTempKeys = function(shiftInput) {
        
        shiftInput = shiftInput.split('\n');
        
        return shiftInput;
    }
    
    this.retrieveKeys = function() {
        
        usedKeys = JSON.parse(localStorage.completeKeys);
        
        if (typeof usedKeys[i] !== 'undefined' && usedKeys[i] !== null) {
            this.storeKeys(temporaryKeys);
        }
        return usedKeys;
    }
    
    this.compareKeys = function(temporaryKeys, usedKeys) {
        
        for (k = 0; k < temporaryKeys.length; k++) {
            for (j = 0; j < usedKeys.length; j++) {
                if (temporaryKeys[i].Id !== usedKeys[j].Id ) {
                    
                    unusedKeys.push = temporaryKeys[i];
                    completeKeys.push(temporaryKeys[i]);
                    
                    return unusedKeys;
                }
            }
        }
        
        return 1;
    }
    
    this.storeKeys = function(completeKeys) {
        
        localStorage.completeKeys = JSON.stringify(completeKeys);
        
        return 1;
    }
    
    this.outputKeys = function(unusedKeys) {
        
        results = document.getElementById("results");
        
        for (l = 0; l < unusedKeys; l++) {
            
            results.innerHTML = unusedKeys[l];  
        }
        
        return 1;
    }

}

var keysHandler = new keysHandler();

setInterval(function() {
    
    var shiftInput, temporaryKeys, usedKeys, unusedKeys, comparitiveArray, i;
    
    shiftInput = keysHandler.clearHyphens();
    temporaryKeys = keysHandler.generateTempKeys(shiftInput);
    
    while(temporaryKeys[i]-- !== temporaryKeys[i]) {
        
        usedKeys = keysHandler.retrieveKeys();
        unusedKeys = keysHandler.compareKeys(temporaryKeys, usedKeys);
        keysHandler.outputKeys(unusedKeys);
    }
    
    
    
}, 150);