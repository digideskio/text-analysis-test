var ts = require('text-statistics')(),
    fs = require('fs')

var files = fs.readdirSync('./samples/')

files.forEach(function(file){
  console.log(file)
  var text = fs.readFileSync('./samples/'+file).toString()

  console.log('==================')
  console.log('Name: '+ file.split('.')[0])
  var syllables = ts.syllableCount(text)
  var grade = ts.fleschKincaidGradeLevel(text)
  console.log('grade: '+grade)
})
