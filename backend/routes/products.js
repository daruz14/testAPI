var express = require('express');
var router = express.Router();

/* POST search producto */
router.post('/list', function(req, res, next) {
  const { keyword } = req.query;

  const sqlQuery = `SELECT id, title FROM productos 
  WHERE title LIKE '%${keyword}%' LIMIT 50`;

  res.locals.connection.query(sqlQuery, function (error, results, fields) {
    if (error) throw error;
    // Query para registrar busqueda
    let sqlRegister = `INSERT INTO busquedas(id, producto_id, palabras) VALUES ?`;
    const valuesInsert = results.map(value => [null, value.id, keyword]);
    if (valuesInsert.length > 0 && keyword !== '') {
      res.locals.connection.query(sqlRegister, [valuesInsert], function (error, results, fields) {
        if (error) throw error;
      })
    }

    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

module.exports = router;