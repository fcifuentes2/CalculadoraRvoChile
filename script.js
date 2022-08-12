
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
const rvp8Check = document.querySelector('input[name=rvp8]:checked')
const rvp9Check = document.querySelector('input[name=rvp9]:checked')
const rvp10Check = document.querySelector('input[name=rvp10]:checked')
const rvoCheck = document.querySelector('input[name=rvoEquipo]:checked')
const rvoCheck1 = document.querySelector('input[name=rvoEquipoFree]:checked')
const rvoText = document.querySelector('input[name=rvoExtra]')
const estraText = document.querySelector('input[name=Extra]')          

// convertir los valores a String, o colocar un 0 si no elegieron algo//
const plan = planRadio ?  Number(planRadio.value): 0
const rvo = rvoRadio ?  Number(rvoRadio.value): 0
const equipos = equiposRadio ?  Number(equiposRadio.value): 0
const premium1 = premium1Check ?  Number(premium1Check.value): 0
//const tnt = premium1Check ?  String(premium1Check.name): ""
const premium2 = premium2Check ?  Number(premium2Check.value): 0
//const tntv = premium2Check ?  String(premium2Check.name): ""
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
//const rvp1_1 = rvp1Check ?  String(rvp1Check.name): ""
const rvp2 = rvp2Check ?  Number(rvp2Check.value): 0
//const rvp2_2 = rvp2Check ?  String(rvp2Check.name): 0
const rvp3 = rvp3Check ?  Number(rvp3Check.value): 0
const rvp4 = rvp4Check ?  Number(rvp4Check.value): 0
const rvp5 = rvp5Check ?  Number(rvp5Check.value): 0
const rvp6 = rvp6Check ?  Number(rvp6Check.value): 0
const rvp7 = rvp7Check ?  Number(rvp7Check.value): 0
const rvp8 = rvp8Check ?  Number(rvp8Check.value): 0
const rvp9 = rvp9Check ?  Number(rvp9Check.value): 0
const rvp10 = rvp10Check ?  Number(rvp10Check.value): 0
const rvoEquipo = rvoCheck ?  Number(rvoCheck.value): 0
const rvoEquipoFree = rvoCheck1 ?  Number(rvoCheck1.value): 0
const rvoExtra = rvoText ?  Number(rvoText.value): 0
const Extra = estraText ?  Number(estraText.value): 0
if(document.getElementById('pplatahd').checked){ var platahd = "Plan Plata hd "}else{ platahd = ""}
if(document.getElementById('porohd').checked){ var orohd = "Plan Oro hd "}else{ orohd = ""}
if(document.getElementById('poroplus').checked){ var oroplus = "Plan Oro Plus hd "}else{ oroplus = ""}
if(document.getElementById('oro4k').checked){ var oro4k = "Plan Oro 4k "}else{ oro4k = ""}
if(document.getElementById('broncelite').checked){ var broncelite = "Plan Bronce Lite "}else{ broncelite = ""}
if(document.getElementById('bronce').checked){ var bronce = "Pack Bronce "}else{ bronce = ""}
if(document.getElementById('broncehd').checked){ var broncehd = "Pack Bronce hd "}else{ broncehd = ""}
if(document.getElementById('plata').checked){ var plata = "Pack Plata "}else{ plata = ""}
if(document.getElementById('platahd').checked){ var pplatahd = "Pack Plata hd "}else{ pplatahd = ""}
if(document.getElementById('orosd').checked){ var orosd = "Pack Oro  "}else{ orosd = ""}
if(document.getElementById('orohd').checked){ var porohd = "Pack Oro hd "}else{ porohd = ""}
if(document.getElementById('oroplus').checked){ var poroplus = "Pack Oro Plus "}else{ poroplus = ""}
if(document.getElementById('oroplushd').checked){ var oroplushd = "Pack Oro Plus hd "}else{ oroplushd = ""}
if(document.getElementById('tnt').checked){ var tnt = "Tnt "}else{ tnt = ""}
if(document.getElementById('tntv').checked){ var tntv = "Tnt "}else{ tntv = ""}
if(document.getElementById('tnthd').checked){ var tnthd = "TntHd "}else{ tnthd = ""}
if(document.getElementById('hbo').checked){ var hbo = "Hbo "}else{ hbo = ""}
if(document.getElementById('universal').checked){ var universal = "Universal "}else{ universal = ""}
if(document.getElementById('combo2').checked){ var combo = "Combo "}else{ combo = ""}
if(document.getElementById('star+').checked){ var star = "Star+ "}else{ star = ""}
if(document.getElementById('disney').checked){ var disney = "Disney "}else{ disney = ""}
if(document.getElementById('foxsport').checked){ var foxsport = "FoxSport "}else{ foxsport = ""}
if(document.getElementById('hotpack').checked){ var hotpack = "HotPack "}else{ hotpack = ""}
if(document.getElementById('exxotico').checked){ var exxotico = "Exxotico "}else{ exxotico = ""}
if(document.getElementById('full').checked){ var full = "Full Service "}else{ full = ""}
if(document.getElementById('rvp1').checked){ var rvp_1 = "50% x 4; "}else{ rvp_1 = ""}
if(document.getElementById('rvp2').checked){ var rvp_2 = "50% x 4; "}else{ rvp_2 = ""}
if(document.getElementById('rvp3').checked){ var rvp_3 = "50% x 4; "}else{ rvp_3 = ""}
if(document.getElementById('rvp4').checked){ var rvp_4 = "50% x 4; "}else{ rvp_4 = ""}
if(document.getElementById('rvp5').checked){ var rvp_5 = "50% x 4; "}else{ rvp_5 = ""}
if(document.getElementById('rvp6').checked){ var rvp_6 = "50% x 4; "}else{ rvp_6 = ""}
if(document.getElementById('rvp7').checked){ var rvp_7 = "50% x 4; "}else{ rvp_7 = ""}
if(document.getElementById('rvp8').checked){ var rvp_8 = "50% x 4; "}else{ rvp_8 = ""}
if(document.getElementById('rvo2').checked){ var rvo2 = "$2.000 "}else{ rvo2 = ""}
if(document.getElementById('rvo3').checked){ var rvo3 = "$4.000 "}else{ rvo3 = ""}
if(document.getElementById('rvo4').checked){ var rvo4 = "$5.000 "}else{ rvo4 = ""}
if(document.getElementById('rvo5').checked){ var rvo5 = "$6.000 "}else{ rvo5 = ""}
if(document.getElementById('rvo6').checked){ var rvo6 = "$7.000 "}else{ rvo6 = ""}
if(document.getElementById('rvo7').checked){ var rvo7 = "$8.000 "}else{ rvo7 = ""}
if(document.getElementById('rvo8').checked){ var rvo8 = "$9.000 "}else{ rvo8 = ""}
if(document.getElementById('rvo9').checked){ var rvo9 = "$10.000 "}else{ rvo9 = ""}
if(document.getElementById('rvo10').checked){ var rvo10 = "$11.000 "}else{ rvo10 = ""}
if(document.getElementById('rvo11').checked){ var rvo11 = "$12.000 "}else{ rvo11 = ""}
if(document.getElementById('rvo12').checked){ var rvo12 = "$14.000 "}else{ rvo12 = ""}
if(document.getElementById('rvo13').checked){ var rvo13 = "$16.000 "}else{ rvo13 = ""}
if(document.getElementById('rvo14').checked){ var rvo14 = "50% deco Adicional x 6 meses "}else{ rvo14 = ""}
if(document.getElementById('rvo15').checked){ var rvo15 = "Deco Free x 6 meses "}else{ rvo15 = ""}
if(document.getElementById('mes2').checked){ var mes2 = "por 2 meses "}else{ mes2 = ""}
if(document.getElementById('mes4').checked){ var mes4 = "por 4 meses "}else{ mes4 = ""}
if(document.getElementById('mes6').checked){ var mes6 = "por 6 meses "}else{ mes6 = ""}
if(document.getElementById('mes8').checked){ var mes8 = "por 8 meses "}else{ mes8 = ""}
if(document.getElementById('mes12').checked){ var mes12 = "por 12 meses "}else{ mes12 = ""}
if(document.getElementById('mes0').checked){ var mes0 = ""}else{ mes0 = ""}
//suma total se le asigna a variable result
const suma = platahd + orohd + oroplus + oro4k + broncelite + bronce + broncehd + plata + pplatahd + orosd + porohd + poroplus + oroplushd + tnt + rvp_1 +
 tntv + rvp_2 + tnthd + rvp_3 + hbo + rvp_4 + universal + rvp_5 + combo + star + disney + foxsport + rvp_6 + hotpack + rvp_7 + exxotico + rvp_8 + full + rvo2 
 + rvo3 + rvo4 + rvo5 + rvo6 + rvo7 + rvo8 + rvo9 + rvo10 + rvo11 + rvo12 + rvo13 + rvo14 + rvo15 + mes2 + mes4 + mes6 + mes8 + mes12 + mes0;
const result = plan + rvo + equipos + premium1 + premium2 + premium3 + premium4 + 
premium5 + premium6 + premium7 + premium8 + premium9 + premium10 + premium11 +
premium12 + premium13 + premium14 + premium15 + rvp1 + rvp2 + rvp3 + rvp4 + rvp5 + 
rvp6 + rvp7 + rvp8 + rvp9 + rvp10 + rvoEquipo - rvoExtra + Extra + recargo + tntflex + deco + cambio + recableado + rvoEquipoFree;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('resultado').innerHTML = result;
document.getElementById('suma').innerHTML = suma;
// document.querySelector('.resultado2').innerHTML = result;

}
console.log(resultado)
addEventListener('change', Total);

function Total() {

// obtener todos los input radio y checkbox
const rvo0Check = document.querySelector('input[name=rvo0]:checked')
const rvo01Check = document.querySelector('input[name=rvo01]:checked')
const rvo02Check = document.querySelector('input[name=rvo02]:checked')
const rvo03Check = document.querySelector('input[name=rvo03]:checked')
const rvo04Check = document.querySelector('input[name=rvo04]:checked')
const rvp0Check = document.querySelector('input[name=rvp0]:checked')
const rvp01Check = document.querySelector('input[name=rvp01]:checked') 
const rvp02Check = document.querySelector('input[name=rvp02]:checked') 
const rvp03Check = document.querySelector('input[name=rvp03]:checked') 
const rvp04Check = document.querySelector('input[name=rvp04]:checked') 
const rvp05Check = document.querySelector('input[name=rvp05]:checked') 
const rvp06Check = document.querySelector('input[name=rvp06]:checked') 
const rvp07Check = document.querySelector('input[name=rvp07]:checked') 
const facCheck = document.querySelector('input[name=fac]:checked')
const fac1Check = document.querySelector('input[name=fac1]:checked')
const fac2Check = document.querySelector('input[name=fac2]:checked')
const fac3Check = document.querySelector('input[name=fac3]:checked')
const fac4Check = document.querySelector('input[name=fac4]:checked')
const fac5Check = document.querySelector('input[name=fac5]:checked')
const fac6Check = document.querySelector('input[name=fac6]:checked')
const proCheck = document.querySelector('input[name=pro]:checked')
const pro1Check = document.querySelector('input[name=pro1]:checked')
const pro2Check = document.querySelector('input[name=pro2]:checked')
const pro3Check = document.querySelector('input[name=pro3]:checked')
const pro4Check = document.querySelector('input[name=pro4]:checked')
const pro5Check = document.querySelector('input[name=pro5]:checked')
const pro6Check = document.querySelector('input[name=pro6]:checked')
const pro7Check = document.querySelector('input[name=pro7]:checked')
const pro8Check = document.querySelector('input[name=pro8]:checked')
const pro9Check = document.querySelector('input[name=pro9]:checked')
const tstCheck = document.querySelector('input[name=tst]:checked')
const tst1Check = document.querySelector('input[name=tst1]:checked')
const tst2Check = document.querySelector('input[name=tst2]:checked')
const tst3Check = document.querySelector('input[name=tst3]:checked')
const tst4Check = document.querySelector('input[name=tst4]:checked')
const tst5Check = document.querySelector('input[name=tst5]:checked')
const tst6Check = document.querySelector('input[name=tst6]:checked')
const tst7Check = document.querySelector('input[name=tst7]:checked')
const tst8Check = document.querySelector('input[name=tst8]:checked')
const tst9Check = document.querySelector('input[name=tst9]:checked')
const tst10Check = document.querySelector('input[name=tst10]:checked')
const tst11Check = document.querySelector('input[name=tst11]:checked')
const cobCheck = document.querySelector('input[name=cob]:checked')
const cob1Check = document.querySelector('input[name=cob1]:checked')
const extCheck = document.querySelector('input[name=ext]:checked')
const ext1Check = document.querySelector('input[name=ext1]:checked')

// convertir los valores a String, o colocar un 0 si no elegieron algo//
const rvo0 = rvo0Check ?  rvo0Check.value: ""
const rvo01 = rvo01Check ?  rvo01Check.value: ""
const rvo02 = rvo02Check ?  rvo02Check.value: ""
const rvo03 = rvo03Check ?  rvo03Check.value: ""
const rvo04 = rvo04Check ?  rvo04Check.value: ""
const rvp0 = rvp0Check ?  rvp0Check.value: "" 
const rvp01 = rvp01Check ?  rvp01Check.value: ""
const rvp02 = rvp02Check ?  rvp02Check.value: ""
const rvp03 = rvp03Check ?  rvp03Check.value: ""
const rvp04 = rvp04Check ?  rvp04Check.value: ""
const rvp05 = rvp05Check ?  rvp05Check.value: ""
const rvp06 = rvp06Check ?  rvp06Check.value: ""
const rvp07 = rvp07Check ?  rvp07Check.value: ""
const fac = facCheck ?  facCheck.value: ""
const fac1 = fac1Check ?  fac1Check.value: ""
const fac2 = fac2Check ?  fac2Check.value: ""
const fac3 = fac3Check ?  fac3Check.value: ""
const fac4 = fac4Check ?  fac4Check.value: ""
const fac5 = fac5Check ?  fac5Check.value: ""
const fac6 = fac6Check ?  fac6Check.value: ""
const pro = proCheck ?  proCheck.value: ""
const pro1 = pro1Check ?  pro1Check.value: ""
const pro2 = pro2Check ?  pro2Check.value: ""
const pro3 = pro3Check ?  pro3Check.value: ""
const pro4 = pro4Check ?  pro4Check.value: ""
const pro5 = pro5Check ?  pro5Check.value: ""
const pro6 = pro6Check ?  pro6Check.value: ""
const pro7 = pro7Check ?  pro7Check.value: ""
const pro8 = pro8Check ?  pro8Check.value: ""
const pro9 = pro9Check ?  pro9Check.value: ""
const tst = tstCheck ?  tstCheck.value: ""
const tst1 = tst1Check ?  tst1Check.value: ""
const tst2 = tst2Check ?  tst2Check.value: ""
const tst3 = tst3Check ?  tst3Check.value: ""
const tst4 = tst4Check ?  tst4Check.value: ""
const tst5 = tst5Check ?  tst5Check.value: ""
const tst6 = tst6Check ?  tst6Check.value: ""
const tst7 = tst7Check ?  tst7Check.value: ""
const tst8 = tst8Check ?  tst8Check.value: ""
const tst9 = tst9Check ?  tst9Check.value: ""
const tst10 = tst10Check ?  tst10Check.value: ""
const tst11 = tst11Check ?  tst11Check.value: ""
const cob = cobCheck ?  cobCheck.value: ""
const cob1 = cob1Check ?  cob1Check.value: ""
const ext = extCheck ?  extCheck.value: ""
const ext1 = ext1Check ?  ext1Check.value: ""


//suma total se le asigna a variable result
const resultado = rvo0 + rvo01 + rvo02 + rvo03+ rvo04 + rvp0 + rvp01 + rvp02 + rvp03 + rvp04 + rvp05 + rvp06 +
rvp07 + fac + fac1 + fac2 + fac3 + fac4 + fac5 + fac6 + pro + pro1 +  pro8 + pro9 + tst + tst1 + tst2 + tst3 + tst4 + 
tst5 + tst6 + tst7 + tst8 + tst9 + tst10 + tst11 + cob + cob1 + ext + ext1 + pro7 + pro2 + pro3 + pro4 + pro5 + pro6 ;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('texto').innerHTML = resultado;
}



        