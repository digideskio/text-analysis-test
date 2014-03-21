var ts = require('text-statistics')(),
    fs = require('fs'),
    analyze = require('Sentimental').analyze

var files = fs.readdirSync('./samples/')

files.forEach(function(file){
  var text = fs.readFileSync('./samples/'+file).toString()

  console.log('==================')
  console.log('Name: '+ file.split('.')[0])
  var grade = ts.fleschKincaidGradeLevel(text)
  var sentiment = analyze(text).score
  console.log('grade: '+grade)
  console.log('sentiment: '+sentiment)
})
