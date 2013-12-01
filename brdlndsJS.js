//Ok so I have to read what's being input then check it against my records which is in local storage and then output what isn't in the records

//planned feature scrape orcz page for keys and compare it to what's in storage and tell you the keys to use for both PC, xbox and PS3.

function keysHandler() {
    
    var shiftInput, results, temporaryKeys, usedKeys, i, j, k, completeKeys;
    
    this.clearHyphens = function(shiftInput) {
        
        shiftInput = document.getElementById('shiftInput').value;
        console.log("Retrieved keys");
        
        shiftInput = shiftInput.toUpperCase();
        console.log("Input now in uppercase");
        
        shiftInput = shiftInput.replace(/-/gi, "");
        console.log("Removed hyphens");
        
        return shiftInput;

    }
    
    this.generateTempKeys = function(temporaryKeys) {
        
        temporaryKeys = shiftInput.split('\n');
        console.log("Temporary array generated");
        
        return temporaryKeys;
    }
    
    this.storeKeys = function(completeKeys) {
        
        localStorage["completeKeys"] = JSON.stringify(completeKeys);
        console.log("Keys stored");
        
        return 1;
    }
    
    this.retrieveKeys = function() {
        
        usedKeys = JSON.parse(localStorage["completeKeys"]);
        console.log("Keys retrieved");
        
        if (typeof usedKeys[i] !== 'undefined' && usedKeys[i] !== null) {
        this.storeKeys(temporaryKeys);
        }
        return usedKeys;
    }
    
    this.compareKeys = function(temporaryKeys, usedKeys) {
        for (k = 0; k < temporaryKeys.length; k++) {
            for (j = 0; j < usedKeys.length; j++) {
                if (temporaryKeys[i].Id !== usedKeys[j].Id ) {
                    completeKeys.push(temporaryKeys[i]);
                }
            }
        }
        
        return 1;
    }
    
    this.outputKeys = function(shiftInput) {
        
        results = document.getElementById("results");
        results.innerHTML = shiftInput;
        console.log("Keys output");
        
        return 1;
    }

}

var keysHandler = new keysHandler();

setInterval(function() {
    var shiftInput, temporaryKeys;
    shiftinput = keysHandler.clearHyphens();
    temporaryKeys = keysHandler.generateTempKeys(shiftInput);
    keysHandler.outputKeys();
}, 150);