

var katzDeli = []

function takeANumber(katzDeliLine, name){

 if (katzDeli){
   katzDeli.push(name);
   var line_number = katzDeli.length;
   var hereAlready = katzDeli.indexOf(`{name}`)

   if (hereAlready >= 0 ){
    console.log(`Welcome, ${name}. You are number ${hereAlready} in line.`);
    console.log(`in condition one`)
   } else if (hereAlready < 0 ){
     console.log(`Welcome, ${name}. You are number ${line_number} in line.`)
     console.log(`in condition two`)
   }

 } else if (otherDeli){
   otherDeli.push(name);
   var line_num = otherDeli.length;
   console.log(`Welcome, ${name}. You are number ${line_num} in line.`)
   console.log(`in condition three`)
 }

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
