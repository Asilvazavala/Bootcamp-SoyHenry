const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - getBrandPrices 6️⃣:

   🟢 Debes retornar la suma del precio de todos los coches de la marca recibida por parámetro.
   🟢 Si recibes el parámetro "unused" con valor true, entonces retorna la suma de precios sólo de los coches 
   que sean nuevos.
   🟢 Si recibes el parámetro "unused" con valor false, entonces retorna la suma de precios sólo de los coches 
   que sean usados.
   🟢 Si la marca no existe, arrojar un error que diga: "Marca no encontrada".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1)El parámetro "unused" puede tener el valor null.
   2) Debes obtener los coches a partir de los IDs almacenados en su marca.
*/

const getBrandPrices = (brand, unused) => {
  const findBrand = utils.brands.find(b => b.name === brand);
  const sumaTodosPrecios = utils.cars.filter((c) => findBrand.cars.includes(c.id)).reduce((acc, b) => acc + b.price, 0); 
  const filterCarNew = utils.cars.filter((c) => findBrand.cars.includes(c.id)).filter(c => c.new === true).reduce((acc, b) => acc + b.price, 0); 
  const filterCarUsed = utils.cars.filter((c) => findBrand.cars.includes(c.id)).filter(c => c.new === false).reduce((acc, b) => acc + b.price, 0) ;


  if (!findBrand) { 
    throw ('Marca no encontrada'); 
  }
    else if (unused === true) {
      return filterCarNew; 
    }
      else if (unused === false) {
        return filterCarUsed;      
      }
      return sumaTodosPrecios;
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getBrandPrices;
