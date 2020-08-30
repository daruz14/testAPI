var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  const { keyword } = req.query;

  console.log(`Esta es la busqueda ${keyword}`);

  const sqlQuery = `SELECT id, title FROM productos 
  WHERE title LIKE '%${keyword}%' LIMIT 50`;

  res.locals.connection.query(sqlQuery, function (error, results, fields) {
    if (error) throw error;
    // Query para registrar busqueda
    let sqlRegister = `INSERT INTO busquedas(id, producto_id, palabras) VALUES ?`;
    const valuesInsert = results.map(value => [null, value.id, keyword]);

    res.locals.connection.query(sqlRegister, [valuesInsert], function (error, results, fields) {
      if (error) throw error;
      console.log("Se insertaron los elementos");
    })

		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

module.exports = router;