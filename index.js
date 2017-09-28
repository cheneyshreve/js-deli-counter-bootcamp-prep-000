



var katzDeliLine = []

function takeANumber(katzDeliLine, name){

   katzDeliLine.push(name);
   var length = katzDeliLine.length;
   console.log(`Welcome, ${name}. You are number ${length} in line.`);

 return katzDeliLine
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0 )  {
     console.log(`Currently serving ${katzDeliLine[0]}.`)
     katzDeliLine.shift()
     return katzDeliLine
   } else if (katzDeliLine.length === 0 ) {
     console.log(`There is nobody waiting to be served!`)
   }

}


function currentLine(katzDeliLine){

  if ( katzDeliLine.length === 0 ) {
    console.log(`The line is currently empty.`)
    return katzDeliLine
  } else if (katzDeliLine.length > 0) {

  var i = 0;
  var array = [];
    while (i < katzDeliLine.length){
      array.push(` ${i+1}` + `. ` + `${katzDeliLine[i]}`)
      i++;
    }
    array.join()
    var str = 'The line is currently:'
    var myString = str.concat(array.toString())
    console.log(myString)
    return katzDeliLine
  }
 
}
