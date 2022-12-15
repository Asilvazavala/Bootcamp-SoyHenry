const { brands } = require('../utils');
const utils = require('../utils');
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 🚗 HENRY-CARS 🚗 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - addCars 1️⃣:
  🟢 Agregar un coche a utils.cars.
  🟢 Agregar el ID del mismo coche a la marca recibida por parámetros (brand).
  🟢 Si el coche ya existe en la base de datos, arrojar un Error('Este coche ya existe en la base de datos') 
  🟢 Si la marca ya existe en la base de datos, arrojar un Error('Esta marca ya existe en la base de datos')
  🟢 Retornar todos los coches si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los coches mediante *utils.cars*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si el coche que intentas agregar, ya existe en utils.cars.
  4) Investiga acerca de Throw Error() para devolver errores.
  */

const addCars = (car, brand) => {
  const [cars, brands] = [utils.cars, utils.brands];
  const findCar = cars.find((c) => c.id === car.id);
  const findBrand = brands.find((b) => b.name === brand.name);

  cars.map()
  if (findCar) {
    throw new Error ('Este coche ya existe en la base de datos');
  }
    else if (findBrand) {
      throw new Error('Esta marca ya existe en la base de datos');
    }
  cars.push(car);//agrego el coche a la base de datos
  brand.cars.push(car.id);//agrego el id del coche a la marca
  brands.push(brand);//agrego la marca a la base de datos


  return cars;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addCars;
