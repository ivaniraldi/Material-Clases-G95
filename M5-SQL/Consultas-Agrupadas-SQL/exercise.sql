SELECT count(DISTINCT(nombre)) FROM monedas;

 SELECT COUNT(*) FROM ventas;

 SELECT COUNT(DISTINCT(categoria)) FROM ventas;

 select count(distinct(monto)) from ventas;

 select count(*)
 from ventas 
 where categoria = 'Tools' 
 or categoria = 'Games';



 SELECT nombre, count(*)
 FROM monedas
 GROUP BY nombre;

SELECT categoria, COUNT(*)
FROM ventas
GROUP BY categoria;


SELECT * from ventas;


SELECT categoria, sum(monto)
FROM ventas
GROUP BY categoria;

SELECT categoria, sum(monto), avg(monto) as promedio
FROM ventas
GROUP BY categoria
ORDER BY promedio DESC;

SELECT categoria, SUM(monto) AS total 
FROM ventas
GROUP BY categoria 
ORDER BY total DESC 
LIMIT 3;


