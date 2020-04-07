import { Arbol, Producto } from '~/store/Arbol'

let busLineal = (valor, array) => {
  let res = {}
  const tInicio = Date.now() / 1000
  let encontrado = false
  let index = 0
  while (!encontrado && index < array.length) {
    if (array[index].nombre === valor) {
      encontrado = true
      res['index'] = index
    } else {
      index += 1
    }
  }

  if (res.index === undefined) {
    throw 'El dato no esta el la lista'
  }
  res['tiempo'] = Date.now() / 1000 - tInicio
  return res
}
let busBinaria = (valor, array) => {
  const tInicio = Date.now() / 1000
  let res = {}
  let inicio = 0
  let final = array.length - 1
  let encontrado = false
  let centro
  while (encontrado === false && inicio <= final) {
    centro = Math.floor((inicio + final) / 2)
    if (array[centro].nombre === valor) {
      encontrado = true
      res['index'] = centro
    } else if (array[centro].nombre > valor) {
      final = centro - 1
    } else {
      inicio = centro + 1
    }
  }
  if (res.index === undefined) {
    throw 'El dato no esta el la lista'
  }
  res['tiempo'] = Date.now() / 1000 - tInicio
  return res
}

let busBinariaRec = (valor, array, inicio, final) => {
  const tInicio = Date.now() / 1000
  let res = {}
  if (inicio > final) throw 'El dato no esta el la lista'
  let centro = Math.floor((inicio + final) / 2)
  if (array[centro].nombre === valor) {
    res['index'] = centro
    res['tiempo'] = Date.now() / 1000 - tInicio
    return res
  } else {
    if (valor > array[centro].nombre) {
      inicio = centro + 1
      return busBinariaRec(valor, array, inicio, final)
    } else {
      final = centro - 1
      return busBinariaRec(valor, array, inicio, final)
    }
  }
}

function data() {
  //se crea el arbol
  let t = new Arbol()
  //se agrega el nodo principal
  t.agregarNodo('abarrofarmacia')
  //se agrega el nodo de san marcos
  t.agregarNodo('san marcos', 'abarrofarmacia')
  //se agrega el nodo se malacatan
  t.agregarNodo('malacatan', 'san marcos')
  //se agrega el nodo de departamento de abarrotes
  t.agregarNodo('abarrotes', 'malacatan')
  //se agregan productos al nodo de abarrotes
  t.agregarNodo(new Producto('azucar', '5'), 'abarrotes')
  t.agregarNodo(new Producto('leche', '12'), 'abarrotes')
  t.agregarNodo(new Producto('papel', '12'), 'abarrotes')
  t.agregarNodo(new Producto('aceite', '10'), 'abarrotes')
  t.agregarNodo(new Producto('aderezos', '12'), 'abarrotes')
  t.agregarNodo(new Producto('cafe', '5'), 'abarrotes')
  t.agregarNodo(new Producto('avena', '7'), 'abarrotes')
  t.agregarNodo(new Producto('cereales', '25'), 'abarrotes')
  t.agregarNodo(new Producto('sal', '3'), 'abarrotes')
  t.agregarNodo(new Producto('miel', '20'), 'abarrotes')
  t.agregarNodo(new Producto('mayonesa', '15'), 'abarrotes')
  t.agregarNodo(new Producto('mermelada', '12'), 'abarrotes')
  t.agregarNodo(new Producto('te', '6'), 'abarrotes')
  t.agregarNodo(new Producto('vinagre', '10'), 'abarrotes')
  t.agregarNodo(new Producto('huevos', '25'), 'abarrotes')
  t.agregarNodo(new Producto('pastas', '3'), 'abarrotes')
  t.agregarNodo(new Producto('aceitunas', '8'), 'abarrotes')
  t.agregarNodo(new Producto('champinones', '10'), 'abarrotes')
  t.agregarNodo(new Producto('frijoles', '9'), 'abarrotes')
  t.agregarNodo(new Producto('sardina', '7'), 'abarrotes')
  t.agregarNodo(new Producto('atun', '15'), 'abarrotes')
  t.agregarNodo(new Producto('chile enlatado', '5'), 'abarrotes')
  t.agregarNodo(new Producto('ensalada enlatada', '20'), 'abarrotes')
  t.agregarNodo(new Producto('elote enlatado', '12'), 'abarrotes')
  t.agregarNodo(new Producto('sopa enlatada', '5'), 'abarrotes')
  t.agregarNodo(new Producto('fruta enlatada', '25'), 'abarrotes')
  t.agregarNodo(new Producto('crema', '10'), 'abarrotes')
  t.agregarNodo(new Producto('margarina', '7'), 'abarrotes')
  t.agregarNodo(new Producto('queso', '20'), 'abarrotes')
  t.agregarNodo(new Producto('papa', '5'), 'abarrotes')
  t.agregarNodo(new Producto('cacahuates', '10'), 'abarrotes')
  t.agregarNodo(new Producto('nueces', '15'), 'abarrotes')
  t.agregarNodo(new Producto('tortilla de harina', '20'), 'abarrotes')
  t.agregarNodo(new Producto('pan dulce', '2'), 'abarrotes')
  t.agregarNodo(new Producto('aguacate', '3'), 'abarrotes')
  t.agregarNodo(new Producto('ajo', '4'), 'abarrotes')
  t.agregarNodo(new Producto('cebolla', '6'), 'abarrotes')
  t.agregarNodo(new Producto('cilantro', '2'), 'abarrotes')
  t.agregarNodo(new Producto('tomate', '4'), 'abarrotes')
  t.agregarNodo(new Producto('limon', '8'), 'abarrotes')
  t.agregarNodo(new Producto('manzana', '10'), 'abarrotes')
  t.agregarNodo(new Producto('naranja', '12'), 'abarrotes')
  t.agregarNodo(new Producto('salchica', '10'), 'abarrotes')
  t.agregarNodo(new Producto('tocino', '20'), 'abarrotes')
  t.agregarNodo(new Producto('jamon', '5'), 'abarrotes')
  t.agregarNodo(new Producto('chorizo', '10'), 'abarrotes')
  t.agregarNodo(new Producto('suero', '10'), 'abarrotes')
  t.agregarNodo(new Producto('pasta dental', '10'), 'abarrotes')
  t.agregarNodo(new Producto('shampoo', '40'), 'abarrotes')
  t.agregarNodo(new Producto('servilletas', '5'), 'abarrotes')
  t.agregarNodo(new Producto('cloro', '20'), 'abarrotes')
  t.agregarNodo(new Producto('desinfectante', '15'), 'abarrotes')

  let result = t.buscarBFS('malacatan')
  return result
}
let Ordenar = (a, b) => {
  if (a.nombre > b.nombre) {
    return 1
  }
  if (a.nombre < b.nombre) {
    return -1
  }
  // a must be equal to b
  return 0
}
export { data, busLineal, busBinaria, Ordenar, busBinariaRec }
