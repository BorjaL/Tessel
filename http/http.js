var router = require('tiny-router'),
	tessel = require('tessel'),
    ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

var lights = {
	green: tessel.led[0],
	blue: tessel.led[1],
	red: tessel.led[2],
	amber: tessel.led[3]
};

router
	.get('/', function(req, res) {
        res.send('Simple light web API');
    })
    .get('/lights', function(req, res){
        res.send(lights);
    })
    .get('/green', function(req, res){
        var state = lights.green.read();
        lights.green.write(state);
        res.send({status: state});
    })
    .get('/green/{state}', function(req, res){
        var state = parseInt(req.body.state);
        lights.green.write(state);
        res.send({status: state});
    })
    .get('/ambiente', function(req, res){
        ambient.getLightLevel( function(err, ldata) {
            if (err) res.send({status: err});
            ambient.getSoundLevel( function(err, sdata) {
                if (err) res.send({status: err});
                res.send("<html><head><head><body><h1>Hola Pichotas</h1><ul><li>Luz: " + ldata.toFixed(8) + "</li><li>Ruido: " + sdata.toFixed(8) + "</li></ul></body></html>");
            })
        })
    });


setTimeout(function(){ 
	router.listen(8000); 
	lights.blue.write(1);
}, 10000);


  