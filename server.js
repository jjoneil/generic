var express    = require('express')
var bodyParser = require('body-parser')
var app        = express()
var mongoose   = require('mongoose')
//var bcrypt     = require('bcrypt');
var port       = 8080

// -- connect to mongoose -- //
// mongoose.connect('mongodb://localhost:27017/stuff')

// var foodSchema = new mongoose.schema({
// 	name: {
// 		type: String.
// 		required: true,
// 		unique: true,
// 	},
// 	calories: {
// 		type: Number,
// 		required: true,
// 	},
// 	delicious: {
// 		type: Boolean,
// 		default: true
// 	}
// })



app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('./public'))

app.get('/', function(req,res){
  res.sendFile(__dirname + '/public/html/index.html')
})


// -- mongoose route -- //
// app.get('/', function(req, res){
// 	var newFood = new FoodModel({
// 		name: 'Cotton Candy',
// 		calories: 12
// 	})
// 	newFood.save(function(){
// 		res.send('saved the food yo')
// 	})
// })

app.listen(port, function(){
	console.log(`http://localhost:${port}`)
})
