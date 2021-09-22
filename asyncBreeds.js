const fs = require('fs');


const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data);
    
  });
  
};



breedDetailsFromFile('bombay', bombay => {
  console.log('Return value:', bombay);
});

breedDetailsFromFile('balinese', balinese => {
  console.log(`Return Value:`, balinese)
}) 


