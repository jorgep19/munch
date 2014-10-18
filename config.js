module.exports = {
	"debug": {
		"mongo": "mongodb://heroku_app30755824:ifd2gbbdndl8gds4kc39qcoorn@ds045970.mongolab.com:45970/heroku_app30755824"
	},
	"live": {
		"mongo": process.env.MONGOLAB_URI
	}
}