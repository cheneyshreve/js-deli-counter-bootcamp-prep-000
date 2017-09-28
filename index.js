



var katzDeliLine = []

function takeANumber(katzDeliLine, name){

   katzDeliLine.push(name);
   var length = katzDeliLine.length;
   var position = katzDeliLine.indexOf(`${name}`)
   console.log(`Welcome, ${name}. You are number ${position + 1} in line.`);
   var katzDeli = katzDeliLine
 return katzDeliLine
}

function nowServing(katzDeliLine){
 var i = 0;
 for (i = 0; i < katzDeliLine.length; i++){
    if (katzDeliLine.length > 0 )  {
     console.log(`Now serving ${katzDeliLine[i]}`)
     katzDeliLine.shift()
   } else if (katzDeliLine.length = 0) {
     console.log(`There is nobody waiting to be served!`)
   }
   return katzDeliLine
 }
}


function currentLine(katzDeliLine){
  var i = 0;
  var array = [];

   if (katzDeliLine.length > 0 ){

    while (i < katzDeliLine.length){
      array.push(` ${i+1}` + `. ` + `${katzDeliLine[i]}`)
      i++;
    }
    array.join()
    var str = 'The line is currently:'
    var myString = str.concat(array.toString())
    return myString
  }

    if ( katzDeliLine.length < 1 ){
      console.log(`The line is currently empty.`)
    } else if (katzDeliLine.length > 0) {
     console.log(myString)
    }

 return katzDeliLine
}
