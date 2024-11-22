# APP-CRUD-con-NodeJS-y-ExpressJS
Aplicación tipo CRUD para mantener un repertorio de canciones de los estudiantes de una escuela de musica. 
El sitio web del frontend puede realizar consultas a nuestra API REST local.  El backend proporciona las rutas para lo siguiente:
● POST /canciones : Recibe los datos correspondientes a una canción y la agrega al repertorio.
● GET /canciones : Devuelve un JSON con las canciones registradas en el repertorio
● PUT /canciones/:id : Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local.
● DELETE /canciones/:id : Recibe por queryString el id de una canción y la elimina del repertorio.

