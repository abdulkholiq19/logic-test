
var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

var anagrams = {};

const dataDom= []

function sortData(wordsData) {
  for (var j = 0; j < wordsData.length - 1; j++) {
      for (var i = 0, swapping; i < wordsData.length - 1; i++) {
        if (wordsData[i]> wordsData[i + 1]) {
          swapping = wordsData[i + 1];
          wordsData[i + 1] = wordsData[i];
          wordsData[i] = swapping;
          }; 
      }; 
  };
}

const dataString4 = []
const data4 = []
const dataString3 = []
const dataString5 = []
const dataString6 = []
const dataString = []


words.forEach(myFunction);
function myFunction(item, index) {
  if(item.length === 4){
    dataString4.push(item)
  } else if(item.length === 3){
    dataString3.push(item)
  } else if(item.length === 5){
    dataString5.push(item)
  } 
}
dataString.push(dataString4)
dataString.push(dataString3)
dataString.push(dataString5)
dataString.push(dataString6)
dataString6.push(dataString3['1'])
for( var i = 0; i < dataString3.length; i++){ 
  if ( dataString3[i] === 'kia') { 
     dataString3.splice(i, 1); 
  }
}
console.log(dataString)
