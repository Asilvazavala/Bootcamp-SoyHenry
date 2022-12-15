1.- Birthyear
Buscá todas las películas filmadas en el año que naciste.
SELECT * FROM movies WHERE year = 1992;

2.- 1982
Cuantas películas hay en la DB que sean del año 1982?
SELECT * FROM movies WHERE year = 1982;

3.- Stacktors
Buscá actores que tengan el substring stack en su apellido.
SELECT * FROM actors WHERE LOWER(last_name) LIKE '%stack';

4.- Fame Name Game
Buscá los 10 nombres y apellidos más populares entre los actores.
Cuantos actores tienen cada uno de esos nombres y apellidos?
SELECT  first_name, last_name,
COUNT(*) as TOTAL
FROM actors
GROUP BY LOWER(first_name), LOWER(last_name) ORDER BY TOTAL desc
LIMIT 10;

5.- Prolific
Listá el top 100 de actores más activos junto con el número de roles que 
haya realizado.
SELECT actors.first_name, actors.last_name, COUNT(*) as TOTAL
FROM actors
JOIN roles
ON actors.id = roles.actor_id
GROUP BY actors.id
ORDER BY TOTAL desc
LIMIT 100;

6.- Bottom of the Barrel
Cuantas películas tiene IMDB por género? Ordená la lista por el género menos 
popular.
SELECT genre,
COUNT(*) as TOTAL
FROM movies_genres
GROUP BY genre
ORDER BY TOTAL;

7.- Braveheart
Listá el nombre y apellido de todos los actores que trabajaron en la película 
"Braveheart" de 1995, ordená la lista alfabéticamente por apellido.

8.- Leap Noir
Listá todos los directores que dirigieron una película de género 'Film-Noir'
en un año bisiesto (para reducir la complejidad, asumí que cualquier año 
divisible por cuatro es bisiesto). Tu consulta debería devolver el nombre 
del director, el nombre de la peli y el año. Todo ordenado por el nombre de 
la película.

9.- Bacon
Listá todos los actores que hayan trabajado con Kevin Bacon en películas 
de Drama (incluí el título de la peli). Excluí al señor Bacon de los 
resultados.
SELECT actors.last_name, actors.first_name, movies.name 
FROM actors
JOIN roles.id = actors.id
ON roles.movies_id = movies.id
JOIN movies_genres
ON movies_genres.movie_id = movies.id
WHERE movies_genres.genre = "Drama"
AND movies.id IN (
    SELECT roles.movie_id
    FROM roles
    JOIN actors
    ON roles.actor_id = actors.id
    WHERE first_name = "Kevin" AND last_name = "Bacon"
)
AND (actors.first_name || " " || actors.last_name != "Kevin Bacon");

10.- Immortal Actors
Qué actores actuaron en una película antes de 1900 y también en una película
después del 2000?
SELECT (last_name || ", " || first_name) as "Actors"
FROM actors
JOIN roles
ON actors.id = roles.actor_id
JOIN movies 
ON roles.movie_id = movies.id
WHERE actors.id IN (
    SELECT 
)

11.- Busy Filming
Buscá actores que actuaron en cinco o más roles en la misma película después
del año 1990. Noten que los ROLES pueden tener duplicados ocasionales, sobre
los cuales no estamos interesados: queremos actores que hayan tenido cinco o 
más roles DISTINTOS (DISTINCT cough cough) en la misma película. Escribí un 
query que retorne los nombres del actor, el título de la película y el 
número de roles (siempre debería ser > 5).

12.- ♀
Para cada año, contá el número de películas en ese años que sólo tuvieron 
actrices femeninas.