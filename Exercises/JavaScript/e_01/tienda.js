function productos(venta)
{
	do{
		var eligio = prompt('Productos en tienda \n 1. Leche Lala deslactosada 1.5l $30.00 \n 2. Nescafe Clasico 120g $64.66 \n 3. Atun Dorado 140g agua o aceite $10.90 \n 3. Atun Dorado 140g agua o aceite $10.90 \n 4. Arroz Verde Valle $25.14 \n 5. Frijol Verde Valle $25.57 \n 6. Papel higienico  Suavel 4 rollos $26.14 \n 7. Pasta dental Colgate 100ml $29.43 \n 8. Jabon en barra Zest $13.71 \n 9. Limpiador Cloralex Original 950ml $13.90 \n 10. Getorade variedad de sabores 600ml $20.50 \n Para regresar al menu principal, digite 0... <br> ');
		eligio = parseInt(eligio);
		switch(eligio)
		{
			case 1:
				document.write('Vendiendo Leche Lala deslactosada 1.5l $30.00 <br>');
				venta = venta + 30.00;
				break;
			case 2:
				document.write('Vendiendo Nescafe Clasico 120g $64.66 <br>');
				venta = venta + 64.66;
				break;
			case 3:
				document.write('Vendiendo Atun Dorado 140g agua o aceite $10.90 <br>');
				venta = venta + 10.90;
				break;
			case 4:
				document.write('Vendiendo Arroz Verde Valle $25.14 <br>');
				venta = venta + 25.14;
				break;
			case 5:
				document.write('Vendiendo Frijol Verde Valle $25.57 <br>');
				venta = venta + 25.57;
				break;
			case 6:
				document.write('Vendiendo Papel higienico Suavel 4 rollos $26.14 <br>');
				venta = venta + 26.14;
				break;
			case 7:
				document.write('Vendiendo Pasta dental Colgate 100ml $29.43 <br>');
				venta = venta + 29.43;
				break;
			case 8:
				document.write('Vendiendo Jabón en barra Zest $13.71 <br>');
				venta = venta + 13.71;
				break;
			case 9:
				document.write('Vendiendo Limpiador Cloralex Original 950ml $13.90 <br>');
				venta = venta + 13.71;
				break;
			case 10:
				document.write('Getorade variedad de sabores 600ml $20.50 <br>');
				venta = venta + 20.50;
				break;
			case 0:
				document.write('Regresando al sistema... <br>');
				break;
			default:
				document.write('NO es un producto en stock, ingrese de nuevo');
				break;
		} 
	} while(eligio != 0);
	return venta;
}

function calculaIVA(venta)
{
	var iva = 0;
	iva = (venta*0.15);
	return iva;
}

function menuPrincipal()
{
	var venta = 0, pago = 0, piva = 0, cambio = 0;
	var total = 0, totalVenta = 0;
	venta = parseFloat(venta); pago = parseFloat(pago);
	piva = parseFloat(piva);
	cambio = parseFloat(cambio);
	total = parseFloat(total); totalVenta = parseFloat(totalVenta);
	do{
		var opcion = prompt('Tienda de abarrotes "El mayorista" Bienvenido! \n 1. Registrar cliente \n 2. Calcular IVA \n 3. Mostrar total a pagar \n 4. Leer cantidad de pago \n 5. Mostrar cambio \n 6. Corte  de caja \n Para salir del sistema, digite 0 <br>');
		opcion = parseInt(opcion);
		switch(opcion)
		{
			case 1:
				venta = productos(venta);
				break;
			case 2:
				document.write('El IVA de su compra es de: $');
				piva = calculaIVA(venta);
				document.write(piva + '<br>');
				break;
			case 3:
				total = venta + piva;
				document.write('El subtotal de su compra es de: $' + venta + '<br>');
				document.write('El total de su compra es de: $' + total + '<br>');
				break;
			case 4:
				pago = prompt('Ingrese la cantidad con la que pagara su compra <br>');
				pago = parseFloat(pago);
				break;
			case 5:
				cambio = pago-(venta + piva);
				document.write('Su cambio es de: $' + cambio + '<br>');
				break;
			case 6:
				totalVenta = totalVenta + (venta + piva);
				document.write('En la caja hay: $' + totalVenta + '<br>');
				break;
				case 0:
				document.write('Cerrando sistema... <br>');
				break;
			default:
				document.write('No es una opcion en el sistema, ingrese de nuevo.');
				break;
		}
	} while(opcion != 0);
}
menuPrincipal();

