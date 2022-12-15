
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor: 

1.Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.
2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).

```javascript
x = 1;   
var a = 5; 
var b = 10; 
var c = function(a, b, c) { 
  var x = 10; 
  console.log(x); Resultado: 10
  console.log(a); Resultado: 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); Resultado: 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); Resultado: 9
}
c(8,9,10);
console.log(b); Resultado: 10
console.log(x); Resultado: 1
```

```javascript
console.log(bar); Resultado: undefined
console.log(baz); Resultado: no esta declarado
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); Resultado: 'Franco'
```

```javascript
var instructor = "Tony";
console.log(instructor); Resultado: 'Tony' 
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); Resultado: 'Franco'
   }
})();
console.log(instructor); Resultado: 'Tony'
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); Resultado: 'The flash'
    console.log(pm); Resultado: 'Reverse Flash'
}
console.log(instructor); Resultado: 'The flash'
console.log(pm); Resultado: 'Franco'
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" Resultado: 2
"2" * "3" Resultado: 6
4 + 5 + "px" Resultado: 9px
"$" + 4 + 5 Resultado: $45
"4" - 2 Resultado: 2
"4px" - 2 Resultado: NaN
7 / 0 Resultado: Infinito
{}[0] Resultado: undefined
parseInt("09") Resultado: 9
5 && 2 Resultado: 2 
2 && 5 Resultado: 5
5 || 0 Resultado: 5 
0 || 5 Resultado: 5
[3]+[3]-[10] Resultado: 23
3>2>1 Resultado: false
[] == ![] Resultado: true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); Resultado: undefined, pues la variable 'a' al ser declarada con var, Javascript lo ejecuta primero (Hace Hoisting, las eleva), pero solo eleva la variable, el valor no se pasa, por lo que es una variable vacía o undefined.
   console.log(foo()); Resultado: 2, pues Javascript siempre ejecuta las funciones al principio (Hace Hoisting, las eleva) sin importar en que lugar estén, la función foo retorna el valor 2. 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); Resultado: undefined, pues a la funcion getFood se le pasa el paramatero (false) lo que cancela el if, y retorna la variable snack, dicha variable no esta declarada dentro de la funcion, pero si globalmente, por lo que la funcion encuentra la variable snack, pero no su valor y retorna undefined. 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); Resultado: 'Aurelio de Rosa'

var test = obj.prop.getFullname;

console.log(test()); Resultado: 'Juan Perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
Resultado: El orden sería,
1: Primera línea de ejecución de la función, imprime 1 
4: Al mandar tiempo de espera en las 2 líneas previas, salta e imprime 4
3: Es el primero que termina el tiempo de espera e imprime 3 
2: Es el último que termina el tiempo de espera e imprime 2