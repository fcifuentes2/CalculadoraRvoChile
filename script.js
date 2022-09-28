
// carga la funcion despues de que se cargue por completo el documento
window.onload = function(){
    addEventListener('change', obtenerTotal);
    addEventListener('change', Total);
}
// buscar el <form> y guardarlo en una variable
const form = document.querySelector('form');

// decir que en el evento enviar se sume el total
addEventListener('change', obtenerTotal);


function obtenerTotal(event) {

// evitar enviar el formulario que ocasiona que se refresque la pagina
event.preventDefault();

// obtener todos los input radio y checkbox
const planRadio = document.querySelector('input[name=plan]:checked')
const rvoRadio = document.querySelector('input[name=rvo]:checked')
const equiposRadio = document.querySelector('input[name=equipos]:checked')
const premium1Check = document.querySelector('input[name=tnt]:checked')
const premium2Check = document.querySelector('input[name=Tnt]:checked')
const premium3Check = document.querySelector('input[name=premium3]:checked')
const premium4Check = document.querySelector('input[name=premium4]:checked')
const premium5Check = document.querySelector('input[name=premium5]:checked')
const premium6Check = document.querySelector('input[name=premium6]:checked')
const premium7Check = document.querySelector('input[name=premium7]:checked')
const premium8Check = document.querySelector('input[name=premium8]:checked')
const premium9Check = document.querySelector('input[name=premium9]:checked')
const premium10Check = document.querySelector('input[name=premium10]:checked')
const premium11Check = document.querySelector('input[name=premium11]:checked')
const premium12Check = document.querySelector('input[name=premium12]:checked')
const premium13Check = document.querySelector('input[name=premium13]:checked')
const premium14Check = document.querySelector('input[name=premium14]:checked')
const premium15Check = document.querySelector('input[name=premium15]:checked')
const recargoCheck = document.querySelector('input[name=recargo]:checked')
const tntCheck = document.querySelector('input[name=tntflex]:checked')
const cambioCheck = document.querySelector('input[name=cambio]:checked')
const recableadoCheck = document.querySelector('input[name=recableado]:checked')
const decoCheck = document.querySelector('input[name=deco]:checked')
const rvp1Check = document.querySelector('input[name=rvp1]:checked')
const rvp2Check = document.querySelector('input[name=rvp2]:checked')
const rvp3Check = document.querySelector('input[name=rvp3]:checked')
const rvp4Check = document.querySelector('input[name=rvp4]:checked')
const rvp5Check = document.querySelector('input[name=rvp5]:checked')
const rvp6Check = document.querySelector('input[name=rvp6]:checked')
const rvp7Check = document.querySelector('input[name=rvp7]:checked')
const rvp9Check = document.querySelector('input[name=rvp9]:checked')
const rvp10Check = document.querySelector('input[name=rvp10]:checked')
const rvp11Check = document.querySelector('input[name=rvp11]:checked')
const rvp12Check = document.querySelector('input[name=rvp12]:checked')
const rvp13Check = document.querySelector('input[name=rvp13]:checked')
const rvoCheck = document.querySelector('input[name=rvoEquipo]:checked')
const rvoCheck1 = document.querySelector('input[name=rvoEquipoFree]:checked')
const rvoText = document.querySelector('input[name=rvoExtra]')
const estraText = document.querySelector('input[name=Extra]')          

// convertir los valores a String, o colocar un 0 si no elegieron algo//
const plan = planRadio ?  Number(planRadio.value): 0
const rvo = rvoRadio ?  Number(rvoRadio.value): 0
const equipos = equiposRadio ?  Number(equiposRadio.value): 0
const premium1 = premium1Check ?  Number(premium1Check.value): 0
const premium2 = premium2Check ?  Number(premium2Check.value): 0
const premium3 = premium3Check ?  Number(premium3Check.value): 0
const premium4 = premium4Check ?  Number(premium4Check.value): 0
const premium5 = premium5Check ?  Number(premium5Check.value): 0
const premium6 = premium6Check ?  Number(premium6Check.value): 0
const premium7 = premium7Check ?  Number(premium7Check.value): 0
const premium8 = premium8Check ?  Number(premium8Check.value): 0
const premium9 = premium9Check ?  Number(premium9Check.value): 0
const premium10 = premium10Check ?  Number(premium10Check.value): 0
const premium11 = premium11Check ?  Number(premium11Check.value): 0
const premium12 = premium12Check ?  Number(premium12Check.value): 0
const premium13 = premium13Check ?  Number(premium13Check.value): 0
const premium14 = premium14Check ?  Number(premium14Check.value): 0
const premium15 = premium15Check ?  Number(premium15Check.value): 0
const recargo = recargoCheck ?  Number(recargoCheck.value): 0
const tntflex = tntCheck ?  Number(tntCheck.value): 0
const cambio = cambioCheck ?  Number(cambioCheck.value): 0
const recableado = recableadoCheck ?  Number(recableadoCheck.value): 0
const deco = decoCheck ?  Number(decoCheck.value): 0 
const rvp1 = rvp1Check ?  Number(rvp1Check.value): 0
const rvp2 = rvp2Check ?  Number(rvp2Check.value): 0
const rvp3 = rvp3Check ?  Number(rvp3Check.value): 0
const rvp4 = rvp4Check ?  Number(rvp4Check.value): 0
const rvp5 = rvp5Check ?  Number(rvp5Check.value): 0
const rvp6 = rvp6Check ?  Number(rvp6Check.value): 0
const rvp7 = rvp7Check ?  Number(rvp7Check.value): 0
const rvp9 = rvp9Check ?  Number(rvp9Check.value): 0
const rvp10 = rvp10Check ?  Number(rvp10Check.value): 0
const rvp11 = rvp11Check ?  Number(rvp11Check.value): 0
const rvp12 = rvp12Check ?  Number(rvp12Check.value): 0
const rvp13 = rvp13Check ?  Number(rvp13Check.value): 0
const rvoEquipo = rvoCheck ?  Number(rvoCheck.value): 0
const rvoEquipoFree = rvoCheck1 ?  Number(rvoCheck1.value): 0
const rvoExtra = rvoText ?  Number(rvoText.value): 0
const Extra = estraText ?  Number(estraText.value): 0
//Toma el id del elemento para asignar un valor y poder mostrar resulado en textarea
if(document.getElementById('pplatahd').checked){ var platahd = "Plan Plata hd, "}else{ platahd = ""}
if(document.getElementById('porohd').checked){ var orohd = "Plan Oro hd, "}else{ orohd = ""}
if(document.getElementById('poroplus').checked){ var oroplus = "Plan Oro Plus hd, "}else{ oroplus = ""}
if(document.getElementById('oro4k').checked){ var oro4k = "Plan Oro 4k, "}else{ oro4k = ""}
if(document.getElementById('broncelite').checked){ var broncelite = "Plan Bronce Lite, "}else{ broncelite = ""}
if(document.getElementById('broncehdn').checked){ var broncehdn = "Plan Bronce hd, "}else{ broncehdn = ""}
if(document.getElementById('directvgo').checked){ var directvgo = "migracion a Directv Go, "}else{ directvgo = ""}
if(document.getElementById('bronce').checked){ var bronce = "Pack Bronce, "}else{ bronce = ""}
if(document.getElementById('broncehd').checked){ var broncehd = "Pack Bronce hd, "}else{ broncehd = ""}
if(document.getElementById('plata').checked){ var plata = "Pack Plata, "}else{ plata = ""}
if(document.getElementById('platahd').checked){ var pplatahd = "Pack Plata hd, "}else{ pplatahd = ""}
if(document.getElementById('orosd').checked){ var orosd = "Pack Oro,  "}else{ orosd = ""}
if(document.getElementById('orohd').checked){ var porohd = "Pack Oro hd, "}else{ porohd = ""}
if(document.getElementById('oroplus').checked){ var poroplus = "Pack Oro Plus, "}else{ poroplus = ""}
if(document.getElementById('oroplushd').checked){ var oroplushd = "Pack Oro Plus hd, "}else{ oroplushd = ""}
if(document.getElementById('tnt').checked){ var tnt = "Tnt "}else{ tnt = ""}
if(document.getElementById('tntv').checked){ var tntv = "Tnt "}else{ tntv = ""}
if(document.getElementById('tnthd').checked){ var tnthd = "TntHd "}else{ tnthd = ""}
if(document.getElementById('hbo').checked){ var hbo = "Hbo "}else{ hbo = ""}
if(document.getElementById('universal').checked){ var universal = "Universal "}else{ universal = ""}
if(document.getElementById('combo2').checked){ var combo = "Combo+, "}else{ combo = ""}
if(document.getElementById('star+').checked){ var star = "Star+, "}else{ star = ""}
if(document.getElementById('disney').checked){ var disney = "Disney, "}else{ disney = ""}
if(document.getElementById('foxsport').checked){ var foxsport = "FoxSport "}else{ foxsport = ""}
if(document.getElementById('hotpack').checked){ var hotpack = "HotPack "}else{ hotpack = ""}
if(document.getElementById('exxotico').checked){ var exxotico = "Exxotico "}else{ exxotico = ""}
if(document.getElementById('full').checked){ var full = "Full Service, "}else{ full = ""}
if(document.getElementById('rvp1').checked){ var rvp_1 = "50% x 4 meses, "}else{ rvp_1 = ""}
if(document.getElementById('rvp2').checked){ var rvp_2 = "50% x 4 meses, "}else{ rvp_2 = ""}
if(document.getElementById('rvp3').checked){ var rvp_3 = "50% x 4 meses, "}else{ rvp_3 = ""}
if(document.getElementById('rvp4').checked){ var rvp_4 = "free x 3 meses en HD, "}else{ rvp_4 = ""}
if(document.getElementById('rvp5').checked){ var rvp_5 = "free x 3 meses en HD de tnt flexible, "}else{ rvp_5 = ""}
if(document.getElementById('rvp6').checked){ var rvp_6 = "50% x 4 meses, "}else{ rvp_6 = ""}
if(document.getElementById('rvp7').checked){ var rvp_7 = "50% x 6 meses, "}else{ rvp_7 = ""}
if(document.getElementById('rvp9').checked){ var rvp_9 = "50% x 6 meses, "}else{ rvp_9 = ""}
if(document.getElementById('rvp10').checked){ var rvp_10 = "free x 3 meses, "}else{ rvp_10 = ""}
if(document.getElementById('rvp11').checked){ var rvp_11 = "50% x 4 meses, "}else{ rvp_11 = ""}
if(document.getElementById('rvp12').checked){ var rvp_12 = "50% x 4 meses, "}else{ rvp_12 = ""}
if(document.getElementById('rvo2').checked){ var rvo2 = "con descuento en basico de $2.000 "}else{ rvo2 = ""}
if(document.getElementById('rvo3').checked){ var rvo3 = "con descuento en basico de $4.000 "}else{ rvo3 = ""}
if(document.getElementById('rvo4').checked){ var rvo4 = "con descuento en basico de $5.000 "}else{ rvo4 = ""}
if(document.getElementById('rvo5').checked){ var rvo5 = "con descuento en basico de $6.000 "}else{ rvo5 = ""}
if(document.getElementById('rvo6').checked){ var rvo6 = "con descuento en basico de $7.000 "}else{ rvo6 = ""}
if(document.getElementById('rvo7').checked){ var rvo7 = "con descuento en basico de $8.000 "}else{ rvo7 = ""}
if(document.getElementById('rvo8').checked){ var rvo8 = "con descuento en basico de $9.000 "}else{ rvo8 = ""}
if(document.getElementById('rvo9').checked){ var rvo9 = "con descuento en basico de $10.000 "}else{ rvo9 = ""}
if(document.getElementById('rvo10').checked){ var rvo10 = "con descuento en basico de $11.000 "}else{ rvo10 = ""}
if(document.getElementById('rvo11').checked){ var rvo11 = "con descuento en basico de $12.000 "}else{ rvo11 = ""}
if(document.getElementById('rvo12').checked){ var rvo12 = "con descuento en basico de $14.000 "}else{ rvo12 = ""}
if(document.getElementById('rvo14').checked){ var rvo14 = "50% deco Adicional x 3 meses, "}else{ rvo14 = ""}
if(document.getElementById('rvo15').checked){ var rvo15 = "Deco Free x 3 meses, "}else{ rvo15 = ""}
if(document.getElementById('mes2').checked){ var mes2 = "por 2 meses, "}else{ mes2 = ""}
if(document.getElementById('mes4').checked){ var mes4 = "por 4 meses, "}else{ mes4 = ""}
if(document.getElementById('mes6').checked){ var mes6 = "por 6 meses, "}else{ mes6 = ""}
if(document.getElementById('mes8').checked){ var mes8 = "por 8 meses, "}else{ mes8 = ""}
if(document.getElementById('mes12').checked){ var mes12 = "por 12 meses, "}else{ mes12 = ""}
if(document.getElementById('mes0').checked){ var mes0 = ""}else{ mes0 = ""}
if(document.getElementById('ini1').checked){ var ini1 = "desde enero "}else{ ini1 = ""}
if(document.getElementById('ini2').checked){ var ini2 = "desde febrero "}else{ ini2 = ""}
if(document.getElementById('ini3').checked){ var ini3 = "desde marzo "}else{ ini3 = ""}
if(document.getElementById('ini4').checked){ var ini4 = "desde abril "}else{ ini4 = ""}
if(document.getElementById('ini5').checked){ var ini5 = "desde mayo "}else{ ini5 = ""}
if(document.getElementById('ini6').checked){ var ini6 = "desde junio "}else{ ini6 = ""}
if(document.getElementById('ini7').checked){ var ini7 = "desde julio "}else{ ini7 = ""}
if(document.getElementById('ini8').checked){ var ini8 = "desde agosto "}else{ ini8 = ""}
if(document.getElementById('ini9').checked){ var ini9 = "desde septiembre "}else{ ini9 = ""}
if(document.getElementById('ini10').checked){ var ini10 = "desde octubre "}else{ ini10 = ""}
if(document.getElementById('ini11').checked){ var ini11 = "desde noviembre "}else{ ini11 = ""}
if(document.getElementById('ini12').checked){ var ini12 = "desde diciembre "}else{ ini12 = ""}
if(document.getElementById('ini13').checked){ var ini13 = ""}else{ ini13 = ""}
if(document.getElementById('fin1').checked){ var fin1 = "hasta enero, "}else{ fin1 = ""}
if(document.getElementById('fin2').checked){ var fin2 = "hasta febrero, "}else{ fin2 = ""}
if(document.getElementById('fin3').checked){ var fin3 = "hasta marzo, "}else{ fin3 = ""}
if(document.getElementById('fin4').checked){ var fin4 = "hasta abril, "}else{ fin4 = ""}
if(document.getElementById('fin5').checked){ var fin5 = "hasta mayo, "}else{ fin5 = ""}
if(document.getElementById('fin6').checked){ var fin6 = "hasta junio, "}else{ fin6 = ""}
if(document.getElementById('fin7').checked){ var fin7 = "hasta julio, "}else{ fin7 = ""}
if(document.getElementById('fin8').checked){ var fin8 = "hasta agosto, "}else{ fin8 = ""}
if(document.getElementById('fin9').checked){ var fin9 = "hasta septiembre, "}else{ fin9 = ""}
if(document.getElementById('fin10').checked){ var fin10 = "hasta octubre, "}else{ fin10 = ""}
if(document.getElementById('fin11').checked){ var fin11 = "hasta noviembre, "}else{ fin11 = ""}
if(document.getElementById('fin12').checked){ var fin12 = "hasta diciembre, "}else{ fin12 = ""}
if(document.getElementById('fin13').checked){ var fin13 = ""}else{ fin13 = ""}
//suma total se le asigna a variable result

const result = plan + rvo + equipos + premium1 + premium2 + premium3 + premium4 + 
premium5 + premium6 + premium7 + premium8 + premium9 + premium10 + premium11 +
premium12 + premium13 + premium14 + premium15 + rvp1 + rvp2 + rvp3 + rvp4 + rvp5 + 
rvp6 + rvp7 + rvp9 + rvp10 + rvp11 + rvp12 + rvp13 + rvoEquipo - rvoExtra + Extra + 
recargo + tntflex + deco + cambio + recableado + rvoEquipoFree;

const total = plan + equipos + premium1 + premium2 + premium3 + premium4 + 
premium5 + premium6 + premium7 + premium8 + premium9 + premium10 + premium11 +
premium12 + premium13 + premium14 + premium15 + Extra + recargo + tntflex + deco + cambio + recableado;

const ofert = rvo + rvp1 + rvp2 + rvp3 + rvp4 + rvp5 + rvp6 + rvp7 + rvp9 + rvp10 + rvp11 + rvp12 + 
rvp13 + rvoEquipo - rvoExtra + rvoEquipoFree;


final = "total a pagar $" + result;
acepta = "Cliente acepta continuar con: "

const suma = acepta + platahd + orohd + oroplus + oro4k + broncelite + broncehdn + directvgo + bronce + broncehd + 
plata + pplatahd + orosd + porohd + poroplus + oroplushd +  rvo14 + rvo15 + tnt + rvp_1 + tntv + rvp_2 + tnthd + 
rvp_3 + rvp_4 + rvp_5 + hbo + rvp_6 + universal + rvp_7 + combo + star + disney + foxsport + rvp_9 + rvp_10 + hotpack + rvp_11 + 
exxotico + rvp_12 + full + rvo2 + rvo3 + rvo4 + rvo5 + rvo6 + rvo7 + rvo8 + rvo9 + rvo10 + rvo11 + rvo12 + mes2 + mes4 + 
mes6 + mes8 + mes12 + mes0 + ini1 + ini2 + ini3 + ini4 + ini5 + ini6 + ini7 + ini8 + ini9 + ini10 + ini11 + ini12 + ini13 + fin1 + 
fin2 + fin3 + fin4 + fin5 + fin6 + fin7 + fin8 + fin9 + fin10 + fin11 + fin12 + fin13 + final;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('resultado').innerHTML = result;
document.getElementById('texto').innerHTML = suma;
document.getElementById('total').innerHTML = total;
document.getElementById('ofert').innerHTML = ofert;
}

        