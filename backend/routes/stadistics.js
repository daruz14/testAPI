var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    
  const mostSearchQuery = `
    SELECT
    producto_id,
    title,
    substring_index(group_concat(distinct pal order by contador1 desc), ',', 5) as keywords,
    show_up
    from (
        SELECT producto_id, productos.title as title, count(palabras) as show_up, test.contador1, test.pal
        FROM busquedas
        LEFT JOIN productos
        ON producto_id = productos.id
        LEFT JOIN (
            SELECT producto_id as id, palabras as pal, count(palabras) as contador1
            FROM busquedas
            GROUP BY producto_id, palabras
            ORDER BY contador1 DESC
        ) as test
        on producto_id = test.id
        group by producto_id, productos.title, test.contador1, test.pal
    ) as aaa
    group by producto_id, show_up, title
    order by show_up desc
    limit 20;
  `;

  res.locals.connection.query(mostSearchQuery, function (error, results, fields) {
    if (error) throw error;

		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

module.exports = router;