var urlgeneral="http://129.151.123.61:8080/api";
var frmInformes="<h1>Informe por Fecha</h1>"+
"<h3>porfavor seleccione la fecha de inicio y finalizacion de la consulta</h3>"+
"<form id='frmInforme' action='javascript:informe()'>"+
"  <div class='form-group'>"+
     
"  <div class='row'>"+
"    <div class='col'>"+
"      <div class='form-group'>"+
"        <label for='fechainicial'>Fecha Inicial</label>"+
"        <input type='date' class='form-control' name='fechainicial' id='fechainicial' required>"+
"      </div>"+
"    </div>"+
"    <div class='col'>"+
"      <div class='form-group'>"+
"        <label for='fechainicial'>Fecha Final</label>"+
"        <input type='date' class='form-control' name='fechafinal' id='fechafinal' required>"+
"      </div>"+
"    </div>"+
"  </div><br><br>"+

"  <button type='submit' class='btn btn-primary form-cotrol'>Consultar</button>"+
  
"  </div>"+
"</form><br><br>"+

"<div class='row'>"+
"  <div class='col'>"+
"    <label for=''>Reservas por estado</label><br>"+
"    <button onclick='informeStatus()' class='btn btn-success form-cotrol'>Consultar</button>"+
"  </div>"+
"  <div class='col'>"+
"    <label for=''>Top 3 de clietes</label><br>"+
"    <button onclick='informeCliente()' class='btn btn-success form-cotrol'>Consultar</button>"+
"  </div>"+
"</div>";

var frmMotos="<h1 class='mt-4'>Registrar Motocicleta</h1>"+
                "<form id='regMoto' action='javascript:restAdd(\"regMoto\",\"moto\")'>"+
                /*  
                "<div class='form-group row'>"+
                        "<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
                        "<div class='col-sm-10'>"+
                        "      <input type='text' class='form-control' id='id' name='id' placeholder='ID' readonly required>"+
                        "</div>"+
                  "</div>"+
                  */
                  "<div class='form-group row'>"+
                  "    <label for='brand' class='col-sm-2 col-form-label'>Marca</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='text' class='form-control' id='brand' name='brand' placeholder='Marca'  required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='model' class='col-sm-2 col-form-label'>Modelo</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='number' maxlength='4' class='form-control' id='year' name='year' placeholder='Modelo' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='category_id' class='col-sm-2 col-form-label'>Categoria</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <select class='form-control' name='category' id='categoryin'></select>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='name' class='col-sm-2 col-form-label'>Nombre</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='text' class='form-control' id='name' name='name' placeholder='Nombre' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='model' class='col-sm-2 col-form-label'>Descripción</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <textarea class='form-control' name='description' id='description' onkeypress='contar(\"#contador\",\"#description\")' maxlength='250' cols='30' rows='2' required></textarea>"+
                  "      <br> <label id='contador' for='' class='col-sm-2 col-form-label'></label> "+
                  "    </div>"+
                  "</div>"+
                  "<br>"+
                  "<button type='submit' id='btn' name='btnmodal' class='btn btn-primary'>Registrar</button>"+
                  "</form><br><br><br>"+
                  "<div id='tabla'></div>";

var frmMensaje="<h1 class='mt-4'>Registrar Mensaje</h1>"+
                "<form id='regMensaje' action='javascript:restAdd(\"regMensaje\",\"message\")'>"+
                "<div class='form-group row'>"+
                "    <label for='mwssagetext' class='col-sm-2 col-form-label'>Mensaje</label>"+
                "    <div class='col-sm-10'>"+
                "      <textarea class='form-control' name='messageText' id='messagetext' placeholder='Escribe tu mensaje' maxlength='4000' required></textarea>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                  "    <label for='category_id' class='col-sm-2 col-form-label'>Categoria</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <select class='form-control' name='client' id='msgclient'></select>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='category_id' class='col-sm-2 col-form-label'>Categoria</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <select class='form-control' name='motorbike' id='msgmoto'></select>"+
                  "    </div>"+
                  "</div>"+
                "<br><br>"+
                "<button type='submit' id='btn' class='btn btn-primary'>Registrar</button>"+
                "</form><br><br>"+
                "<div id='tabla'></div>";

let frmCliente="<h1 class='mt-4'>Registrar Cliente</h1>"+
                "<form id='regCliente' action='javascript:restAdd(\"regCliente\",\"client\")'>"+
                /*
                  "<div class='form-group row'>"+
                        "<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
                        "<div class='col-sm-10'>"+
                        "      <input type='text' class='form-control' id='id' name='id' placeholder='ID' readonly required>"+
                        "</div>"+
                  "</div>"+
                  */
                  "<div class='form-group row'>"+
                  "    <label for='name' class='col-sm-2 col-form-label'>Nombre</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='text' class='form-control' id='name' name='name' maxlength='250' placeholder='Nombre' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='email' class='col-sm-2 col-form-label'>Correo</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='email' class='form-control' id='email' name='email' placeholder='Email' maxlength='45' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='password' class='col-sm-2 col-form-label'>Password</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='password' class='form-control' id='password' name='password' placeholder='Password' maxlength='45' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='age' class='col-sm-2 col-form-label'>Edad</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='number' class='form-control' id='age' name='age' placeholder='Edad' required>"+
                  "    </div>"+
                  "</div><br><br>"+
                  "<button type='submit' id='btn' class='btn btn-primary'>Registrar</button>"+
                  "</form><br><br>"+
                  "<div id='tabla'></div>";

let frmAdmin="<h1 class='mt-4'>Registrar Usuario</h1>"+
                  "<form id='regUsuario' action='javascript:restAdd(\"regUsuario\",\"admin\")'>"+
                  /*
                    "<div class='form-group row'>"+
                          "<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
                          "<div class='col-sm-10'>"+
                          "      <input type='text' class='form-control' id='id' name='id' placeholder='ID' readonly required>"+
                          "</div>"+
                    "</div>"+
                    */
                    "<div class='form-group row'>"+
                    "    <label for='email' class='col-sm-2 col-form-label'>Correo</label>"+
                    "    <div class='col-sm-10'>"+
                    "      <input type='email' class='form-control' id='email' name='email' placeholder='Email' maxlength='45' required>"+
                    "    </div>"+
                    "</div>"+
                    "<div class='form-group row'>"+
                    "    <label for='password' class='col-sm-2 col-form-label'>Password</label>"+
                    "    <div class='col-sm-10'>"+
                    "      <input type='password' class='form-control' id='password' name='password' placeholder='Password' maxlength='45' required>"+
                    "    </div>"+
                    "</div>"+
                    "<div class='form-group row'>"+
                    "    <label for='name' class='col-sm-2 col-form-label'>Nombre</label>"+
                    "    <div class='col-sm-10'>"+
                    "      <input type='text' class='form-control' id='name' name='name' maxlength='250' placeholder='Nombre' required>"+
                    "    </div>"+
                    "</div>"+
                    "</div><br><br>"+
                    "<button type='submit' id='btn' class='btn btn-primary'>Registrar</button>"+
                    "</form><br><br>"+
                    "<div id='tabla'></div>";

var frmCategory="<h1 class='mt-4'>Registrar Categoria</h1>"+
"<form id='frmcategory' action='javascript:restAdd(\"frmcategory\",\"category\")' >"+
"<div class='form-group'>"+
  "<label for='noncategory'>Nombre Categoria</label>"+
  "<input type='text' class='form-control' id='noncategory' name='name' required>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='descategory'>Descripcion</label>"+
"  <textarea class='form-control' onkeypress='contar(\"#contador\",\"#descategory\")' maxlength='250' name='description' id='descategory' cols='30' rows='3' required></textarea>"+
"  <label id='contador' for='descategory'></label>"+
"</div>"+
"<br>"+
"<button type='submit' class='btn btn-primary'>Registrar</button>"+
"</form>"+
"<br><br>"+
"<div id='tabla'></div>";


var frmReserva="<h1 class='mt-4'>Agregar Reserva</h1>"+
"                    <form id='frmreservation' action='javascript:restAdd(\"frmreservation\",\"reservation\")'>"+
"<div class='form-group'>"+
"  <label for='starDate'>Fecha inicial</label>"+
"  <input type='date' class='form-control' name='startDate' id='startDate' required>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Fecha Final</label>"+
"  <input type='date' class='form-control' name='devolutionDate' id='devolutionDate' required>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Clinte</label>"+
"  <select class='form-control' name='client' id='client' reuired></select>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Motocicleta a Reservar</label>"+
"  <select class='form-control' name='motorbike' id='motorbike' required></select>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Estado de la Reserva</label>"+
"  <select  class='form-control'name='status' id='status' required>"+
"    <option value='complete'>Realizado</option>"+
"    <option value='canceled'>Cancelado</option>"+
"    <option value='programed'>Programado</option>"+
"  </select>"+
"</div>"+
"<br>"+
"<button type='submit' class='btn btn-primary'>Reservar</button>"+
"</form>"+
"<div id='tabla'></div>"; 


var frmReservamod="<h1 class='mt-4'>Editar Reserva</h1>"+
"                    <form id='frmreservationmod' action='javascript:restUpd(\"frmreservationmod\",\"reservation\")'>"+
"<div class='form-group'>"+
"  <label for='starDate'>Fecha inicial</label>"+
"  <input type='date' class='form-control' name='startDate' id='startDate' required>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Fecha Final</label>"+
"  <input type='date' class='form-control' name='devolutionDate' id='devolutionDate' required>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Clinte</label>"+
"  <select class='form-control' name='client' id='client'></select>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Motocicleta a Reservar</label>"+
"  <select class='form-control' name='motorbike' id='motorbike'></select>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='starDate'>Estado de la Reserva</label>"+
"  <select  class='form-control'name='status' id='status'>"+
"    <option value='complete'>Realizado</option>"+
"    <option value='canceled'>Cancelado</option>"+
"    <option value='programed'>Programado</option>"+
"  </select>"+
"</div>"+
"<br>"+
"<button type='submit' class='btn btn-primary'>Reservar</button>"+
"</form>"+
"<div id='tabla'></div>"; 





//variables modal
var frmMotosMod="<h1 class='mt-4'>Actualizar Motocicleta</h1>"+
                "<form id='regMotoMod' action='javascript:restUpd(\"regMotoMod\",\"moto\")'>"+
                "<div class='form-group row'>"+
                        "<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
                        "<div class='col-sm-10'>"+
                        "      <input type='text' class='form-control' id='idmod' name='id' placeholder='ID' readonly required>"+
                        "</div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='brand' class='col-sm-2 col-form-label'>Marca</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='text' class='form-control' id='brandmod' name='brand' placeholder='Marca'  required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='model' class='col-sm-2 col-form-label'>Modelo</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='number' maxlength='4' class='form-control' id='yearmod' name='year' placeholder='Modelo' required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='category_id' class='col-sm-2 col-form-label'>Categoria</label>"+
                "    <div class='col-sm-10'>"+
                "       <input type='text' class='form-control' id='categorymod' name='category' placeholder='Marca' readonly required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='name' class='col-sm-2 col-form-label'>Nombre</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='text' class='form-control' id='namemod' name='name' placeholder='Nombre' required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='model' class='col-sm-2 col-form-label'>Descripción</label>"+
                "    <div class='col-sm-10'>"+
                "      <textarea class='form-control' name='description' id='descriptionmod' onkeypress='contar(\"#contador\",\"#description\")' maxlength='250' cols='30' rows='2' required></textarea>"+
                "      <br> <label id='contador' for='' class='col-sm-2 col-form-label'></label> "+
                "    </div>"+
                "</div>"+
                "<br>"+
                "<button type='submit' id='btn' name='btnmodal' class='btn btn-primary'>Registrar</button>"+
                "</form><br><br><br>"+
                "<div id='tabla'></div>";
/*{
    "idMessage": 2,
    "messageText": "Si todos los caminos conducen a roma, como se sale de roma?",
    "motorbike": {
        "id": 6,
    },
    "client": {
        "idClient": 6,
}*/
var frmMensajeMod="<h1 class='mt-4'>Actualizar Mensaje</h1>"+
"<form id='regMensajeMod' action='javascript:restUpd(\"regMensajeMod\",\"message\")'>"+
"<div class='form-group row'>"+
"<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
"<div class='col-sm-10'>"+
"      <input type='text' class='form-control' id='idmod' name='idMessage' placeholder='ID' readonly required>"+
"</div>"+
"</div>"+
"<div class='form-group row'>"+
"    <label for='mwssagetext' class='col-sm-2 col-form-label'>Mensaje</label>"+
"    <div class='col-sm-10'>"+
"      <textarea class='form-control' name='messageText' id='messagetextmod' placeholder='Escribe tu mensaje' maxlength='4000' required></textarea>"+
"    </div>"+
"</div>"+
  "<div class='form-group row'>"+
  //"    <label for='category_id' class='col-sm-2 col-form-label'>Categoria</label>"+
  "    <div class='col-sm-10'>"+
  //"      <select class='form-control' name='motorbike' id='msgmotomod'></select>"+
  "      <input type='hidden' class='form-control' name='motorbike' id='msgmotomod' placeholder='ID' readonly required>"+
  "    </div>"+
  "</div>"+
  "<div class='form-group row'>"+
  //"    <label for='category_id' class='col-sm-2 col-form-label'>Categoria</label>"+
  "    <div class='col-sm-10'>"+
  //"      <select class='form-control' name='client' id='msgclientmod'></select>"+
  "      <input type='hidden' class='form-control' name='client' id='msgclientmod' placeholder='ID' readonly required>"+
  "    </div>"+
  "</div>"+
"<br><br>"+
"<button type='submit' id='btn' class='btn btn-primary'>Registrar</button>"+
"</form><br><br>"+
"<div id='tabla'></div>";;

var frmCategoryMod="<h1 class='mt-4'>Editar Categoria</h1>"+
"<form id='frmcategorymod' action='javascript:restUpd(\"frmcategorymod\",\"category\")' >"+
"<div class='form-group'>"+
  //"<label for='noncategory'>Nombre Categoria</label>"+
  "<input type='hidden' class='form-control' id='idmod' name='id' required>"+
"</div>"+
"<div class='form-group'>"+
  "<label for='noncategory'>Nombre Categoria</label>"+
  "<input type='text' class='form-control' id='noncategorymod' name='name' required>"+
"</div>"+
"<div class='form-group'>"+
"  <label for='descategory'>Descripcion</label>"+
"  <textarea class='form-control' onkeypress='contar(\"#contador\",\"#descategory\")' maxlength='250' name='description' id='descategorymod' cols='30' rows='3' required></textarea>"+
"  <label id='contador' for='descategory'></label>"+
"</div>"+
"<br>"+
"<button type='submit' class='btn btn-primary'>Registrar</button>"+
"</form>"+
"<br><br>";




let frmClienteMod="<h1 class='mt-4'>Registrar Cliente</h1>"+
                "<form id='regClienteMod' action='javascript:restUpd(\"regClienteMod\",\"client\")'>"+
                "<div class='form-group row'>"+
                        "<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
                        "<div class='col-sm-10'>"+
                        "      <input type='text' class='form-control' id='idmod' name='idClient' placeholder='ID' readonly required>"+
                        "</div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='name' class='col-sm-2 col-form-label'>Nombre</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='text' class='form-control' id='namemod' name='name' maxlength='250' placeholder='Nombre' required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='email' class='col-sm-2 col-form-label'>Correo</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='email' class='form-control' readonly id='emailmod' name='email' placeholder='Email' maxlength='20' required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='password' class='col-sm-2 col-form-label'>Password</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='password' class='form-control' id='passwordmod' name='password' placeholder='Password' maxlength='45' required>"+
                "    </div>"+
                "</div>"+
                "<div class='form-group row'>"+
                "    <label for='age' class='col-sm-2 col-form-label'>Edad</label>"+
                "    <div class='col-sm-10'>"+
                "      <input type='number' class='form-control' id='agemod' name='age' placeholder='Edad' required>"+
                "    </div>"+
                "</div><br><br>"+
                "<button type='submit' id='btn' class='btn btn-primary'>Registrar</button>"+
                "</form><br><br>"+
                "<div id='tabla'></div>";

let frmAdminmod="<h1 class='mt-4'>Registrar Usuario</h1>"+
                "<form id='regUsuariomod' action='javascript:restUpd(\"regUsuariomod\",\"admin\")'>"+
                
                  "<div class='form-group row'>"+
                        "<label for='id' class='col-sm-2 col-form-label'>ID</label>"+
                        "<div class='col-sm-10'>"+
                        "      <input type='text' class='form-control' id='idmod' name='idAdmin' placeholder='ID' readonly required>"+
                        "</div>"+
                  "</div>"+
                  
                  "<div class='form-group row'>"+
                  "    <label for='email' class='col-sm-2 col-form-label'>Correo</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='email' class='form-control' id='emailmod' name='email' placeholder='Email' maxlength='45' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='password' class='col-sm-2 col-form-label'>Password</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='password' class='form-control' id='passwordmod' name='password' placeholder='Password' maxlength='45' required>"+
                  "    </div>"+
                  "</div>"+
                  "<div class='form-group row'>"+
                  "    <label for='name' class='col-sm-2 col-form-label'>Nombre</label>"+
                  "    <div class='col-sm-10'>"+
                  "      <input type='text' class='form-control' id='namemod' name='name' maxlength='250' placeholder='Nombre' required>"+
                  "    </div>"+
                  "</div>"+
                  "</div><br><br>"+
                  "<button type='submit' id='btn' class='btn btn-primary'>Registrar</button>"+
                  "</form><br><br>"+
                  "<div id='tabla'></div>";




function mostrarEquipo(){
    let contenido="<h1 class='mt-4'>Grupo 34 Equipo 8</h1>"+
        "<table class='table table-dark'>"+
        "<thead>"+
        "    <tr>"+
        "       <th scope='col'>#</th>"+
        "       <th scope='col'>Rol</th>"+
        "       <th scope='col'>Nombre</th>"+
        "       <th scope='col'>Correo electrónico</th>"+
        "    </tr>"+
        "</thead>"+
        "<tbody>"+
            "<tr>"+
                "<th scope='row'>1</th>"+
                "<td>Normal</td>"+
                "<td>Raul Alexander Caicedo Cancelado</td>"+
                "<td>raul.caicedo.mt@correo.usa.edu.co</td>"+
            "</tr>"+
            "<tr>"+
                "<th scope='row'>2</th>"+
                "<td>Normal</td>"+
                "<td>Yinna Paola Avendano Gutierrez</td>"+
                "<td>yinna.avendano.mt@correo.usa.edu.co</td>"+
            "</tr>"+
            "<tr>"+
                "<th scope='row'>3</th>"+
                "<td>Normal</td>"+
                "<td>Angie Paola Almeida Ortiz</td>"+
                "<td>angie.almeida.mt@correo.usa.edu.co</td>"+
            "</tr>"+
            "<tr>"+
                "<th scope='row'>4</th>"+
                "<td>Normal</td>"+
                "<td>William Mahecha</td>"+
                "<td>william.mahecha.mt@correo.usa.edu.co</td>"+
            "</tr>"+
            "<tr>"+
                "<th scope='row'>5</th>"+
                "<td>Normal</td>"+
                "<td>Wilmar Esneyder Vega Forero</td>"+
                "<td>wilmar.vega.mt@correo.usa.edu.co</td>"+
            "</tr>"+
        "</tbody>"+
    "</table>";
    
    //document.getElementById("contenedor").innerHTML=contenido;
    $('#contenedor').html(contenido);
    }

function contar(control,conteo){
    $(control).html((250-parseInt($(conteo).val().length))+" de 250")
}
function agregarCategoria(){
    restGet("/Category/all");
    $('#contenedor').html(frmCategory);
}
function agregarMotos(){
                    restGet("/Motorbike/all");
                    document.getElementById("contenedor").innerHTML=frmMotos;
                    cargarcategorias();
}
function agregarMensajes(){
    
                  restGet("/Message/all");
                  document.getElementById("contenedor").innerHTML=frmMensaje;
                  window.setTimeout(500);
                  cargarselect("/Motorbike/all","msgmoto")
                  window.setTimeout(500);
                  cargarselect("/Client/all","msgclient")
}
function agregarClientes(){
                  restGet("/Client/all");
                  document.getElementById("contenedor").innerHTML=frmCliente;
}
function agregarInforme(){
    document.getElementById("contenedor").innerHTML=frmInformes;
}
function agregarReserva(){
    restGet("/Reservation/all");
    document.getElementById("contenedor").innerHTML=frmReserva;
    window.setTimeout(500);
    cargarselect("/Motorbike/all","motorbike")
    window.setTimeout(500);
    cargarselect("/Client/all","client")
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    var maxdate=now.getFullYear()+"-"+(month)+"-"+(parseInt(day)) ;
    $('#startDate').val(today);
    $('#startDate').attr('readonly',true)
    $('#devolutionDate').attr('min',maxdate)



}
//04/11/2021
function agregarInformes(){
$("#contenedor").html(
    "<form>"+
    "</form>"
)
}
function agregarAdmin(){
    restGet("/Admin/all");
    document.getElementById("contenedor").innerHTML=frmAdmin;
}
/*fin 04/11/2021*/
function restAdd(formulario,destino){
    let destinoRest="";
    let titulo;
    let mensajetxt;
    let icono;
    let datos = formToJSON('#'+formulario);
    switch(destino){
        case 'moto':
            destinoRest="/Motorbike/save";
            titulo='Motocicleta';
            mensajetxt='Agregada Correctamente';
            icono='success';
            break;
        case 'client':
            destinoRest="/Client/save";
            titulo='Cliente';
            mensajetxt='Agregado Correctamente';
            icono='success';
            break;
        case 'admin':
                destinoRest="/Admin/save";
                titulo='Usuario';
                mensajetxt='Agregado Correctamente';
                icono='success';
                break;
        case 'message':
            destinoRest="/Message/save";
            titulo='Mensaje';
            mensajetxt='Agregado Correctamente';
            icono='success';
            datos.client={'idClient':datos.client};
            datos.motorbike={'id':datos.motorbike};
            break;
        case 'category':
            destinoRest="/Category/save";
            titulo='Categoria';
            mensajetxt='Agregada Correctamente';
            icono='success';
            break;
        case "reservation":
            destinoRest="/Reservation/save";
            titulo='Reservacion';
            mensajetxt='Agregada Correctamente';
            icono='success';
            datos.client={'idClient':datos.client};
            datos.motorbike={'id':datos.motorbike};
            break;
            break;
    }

    console.log(datos)
    switch(destino){
        case 'moto':
            datos.category=JSON.parse(datos.category);
            break;
        case 'client':
            
            break;
        case 'message':
            
            break;
    }
    datos=JSON.stringify(datos)
    console.log(datos);    
    $.ajax({
        url:urlgeneral+destinoRest,
        type:"POST",
        data:datos,
        headers:{"Content-Type": "application/json"},
        success:function(respuesta){
            
            mensaje(titulo,mensajetxt,icono)
            switch(destino){
                            case 'moto':
                                agregarMotos();
                                break;
                            case 'client':
                                agregarClientes();
                                break;
                            case 'message':
                                agregarMensajes();
                                break;
                            case 'category':
                                agregarCategoria();
                                break;
                            case 'reservation':
                                agregarReserva();
                                break;
                            case 'admin':
                                agregarAdmin()
                                break;
                        }
            },error: function (jqXHR, exception) {
                console.log(jqXHR);
                console.log(exception)
            }
        });
}
function restUpd(formulario,destino){
    let destinoRest="";
    let titulo;
    let mensajetxt;
    let icono;
    let datos =formToJSON('#'+formulario);
    switch(destino){
        case 'moto':
            destinoRest="/Motorbike/update";
            titulo='Motocicleta';
            mensajetxt='Actualizada Correctamente';
            icono='success';
            if(datos.category=="No asignada"){
                let envioc='{"id":1}'
                datos.category=JSON.parse(envioc)
            }else{
                let separdos=datos.category.split(':');
                console.log('{"id":'+separdos[0]+'}');
                datos.category=JSON.parse('{"id":'+separdos[0]+'}')
            }

            break;
        case 'client':
            destinoRest="/Client/update";
            titulo='Cliente';
            mensajetxt='Actualizado Correctamente';
            icono='success';
            break;
        case 'admin':
            destinoRest="/Admin/update";
            titulo='Usurio';
            mensajetxt='Actualizado Correctamente';
            icono='success';
            break;
        case 'message':
            destinoRest="/Message/update";
            titulo='Mensaje';
            mensajetxt='Actualizado Correctamente';
            icono='success';
            datos.client={'idClient':datos.client};
            datos.motorbike={'id':datos.motorbike};
            break;
        case 'category':
            destinoRest="/Category/update";
            titulo='Categoria';
            mensajetxt='Actualizada Correctamente';
            icono='success';
//            datos.client={'idClient':datos.client};
//            datos.motorbike={'id':datos.motorbike};
            //break;
            break;
        case 'reservation':
            destinoRest="/Reservation/update";
            titulo='Reservacion';
            mensajetxt='Actualizada Correctamente';
            icono='success';
            break;
    }
    console.log(datos)
    let saliJSON=JSON.stringify(datos);
    console.log(saliJSON);
    //console.log(urlgeneral+destinoRest)
    $.ajax({
        url:urlgeneral+destinoRest,
        type:"PUT",
        data:saliJSON,
        headers:{"Content-Type": "application/json"},
        success:function(respuesta){
            console.log(respuesta)
                console.log(respuesta)
            mensaje(titulo,mensajetxt,icono)
            switch(destino){
                            case 'moto':
                                agregarMotos();
                                cerrarm();
                                break;
                            case 'client':
                                agregarClientes();
                                cerrarm();
                                break;
                            case 'admin':
                                    agregarAdmin();
                                    cerrarm();
                                    break;
                            case 'message':
                                agregarMensajes();
                                cerrarm();
                                break;
                            case 'category':
                                agregarCategoria();
                                cerrarm();
                        }
            }
        });
}
function mensaje(titulo,mensaje,icono){
    Swal.fire(
                titulo,
                mensaje,
                icono
                )
}
function restGet(origen,id){
    if(id==undefined){
        $.ajax({
        //url:"https://g758b74ad3866be-moto.adb.sa-saopaulo-1.oraclecloudapps.com"+origen,
        url:urlgeneral+origen,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta)
            let maximo=0;
            for(let val=0;val<respuesta.length;val++){
                if(parseInt(respuesta[val].id)>maximo){
                    maximo=parseInt(respuesta[val].id)
                }
            }
            if(origen=="/Motorbike/all"){
                document.getElementById("tabla").innerHTML=creartablamoto(respuesta);
                if(document.getElementById("id")){
                    document.getElementById("id").value=parseInt(maximo)+1;
                    
                }
            }
            if(origen=="/Client/all"){
                document.getElementById("tabla").innerHTML=creartablacliente(respuesta);
                if(document.getElementById("id")){
                    document.getElementById("id").value=parseInt(maximo)+1;
                }
            }
            if(origen=="/Admin/all"){
                document.getElementById("tabla").innerHTML=creartablaadmin(respuesta);
                if(document.getElementById("id")){
                    document.getElementById("id").value=parseInt(maximo)+1;
                }
            }
            if(origen=="/Message/all"){
                document.getElementById("tabla").innerHTML=creartablamensaje(respuesta);
                if(document.getElementById("id")){
                    document.getElementById("id").value=parseInt(maximo)+1;
                }
            }
            if(origen=="/Category/all"){
                document.getElementById("tabla").innerHTML=creartablacategory(respuesta);
                if(document.getElementById("id")){
                    document.getElementById("id").value=parseInt(maximo)+1;
                }
            }
            if(origen=="/Reservation/all"){
                //javascript
                //document.getElementById("tabla").innerHTML=creartablareserva(respuesta);
                //ajax
                $("#tabla").html(creartablareserva(respuesta))
                if(document.getElementById("id")){
                    document.getElementById("id").value=parseInt(maximo)+1;
                }
            }
            return respuesta.items;
        }
        });
    }else{
        /*
        let tempo;
        $.ajax({
        url:"https://g758b74ad3866be-moto.adb.sa-saopaulo-1.oraclecloudapps.com"+origen+"/"+id,
        type:"GET",
        async: false,
        datatype:"JSON",
        success:function(respuesta){
            tempo=respuesta.items;
            console.log(tempo)
            return tempo;
        }
        });
        */
    }
    
}
//actualizado reto 5
function creartablareserva(itemsC){
    let tabla="<table class='table table-bordered table-dark'>"+
    "<thead>"+
    "    <tr>";
    let cabeza=['ID','Fecha Inicio','Fecha Final','Estado','Moto Reservada','Id Cliente','Correo Cliente','Nombre','Score','ELIMINAR','EDITAR'];
    
    for(let i=0;i<cabeza.length;i++){
        tabla+="      <th scope='col'>"+cabeza[i]+"</th>";
        
    }
    tabla+="    </tr>";
    tabla+="</thead>";
    tabla+="<tbody>";
    for(let i=0;i<itemsC.length;i++){
        if(itemsC[i].score==null){
            itemsC[i].score=0}
        tabla+="<tr>"+
         "    <th scope='row'>"+itemsC[i].idReservation+"</th>"+
         "      <td>"+itemsC[i].startDate.replace("T00:00:00.000+00:00","")+"</td>"+
         "      <td>"+itemsC[i].devolutionDate.replace("T00:00:00.000+00:00","")+"</td>"+
         "      <td>"+itemsC[i].status+"</td>"+
         //"      <td>"+itemsC[i].description+"</td>"+
         "      <td>"+itemsC[i].motorbike.name+"</td>"+
         //"      <td>"+itemsC[i].motorbike.category.name+"</td>"+
         "      <td>"+itemsC[i].client.idClient+"</td>"+
         "      <td>"+itemsC[i].client.name+"</td>"+
         "      <td>"+itemsC[i].client.email+"</td>"+
         "      <td>"+itemsC[i].score+"</td>"+
         "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
         "        <span class=\"btn btn-danger btn-xs\" disabled onclick=\"eliminar("+itemsC[i].idReservation+",'/Reservation')\">"+
         "        <span class=\"fas fa-trash-alt\"></span>"+
         "        </span>"+
         "    </td>"+
         "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
         "        <span class=\"btn btn-info btn-xs\" disabled onclick=\"callModal("+itemsC[i].idReservation+",'reservation')\">"+
         "        <span class=\"fas fa-edit\"></span>"+
         "        </span>"+
         "    </td>"+
         "    </tr>";
    }
    tabla+="</tbody>"+
               "</table>";
               
return tabla;
}
function creartablamoto(itemsC){
    
    let tabla="<table class='table table-bordered table-dark'>"+
                        "<thead>"+
                        "    <tr>";
                        let cabeza=['MARCA','MODELO','CATEGORIA','DESCRIPCION','NOMBRE','ELIMINAR','EDITAR'];
                        
                        for(let i=0;i<cabeza.length;i++){
                            tabla+="      <th scope='col'>"+cabeza[i]+"</th>";
                            
                        }
                        tabla+="    </tr>";
                        tabla+="</thead>";
                        tabla+="<tbody>";
                        var categoria;
                        var catSalida;
                        var catIdSalida
        for(let i=0;i<itemsC.length;i++){
            // jsonObj.getJSONObject("user").getString("email"); 
            categoria=null;
            catSalida=null;
            catIdSalida=null
            if(itemsC[i].category!=null){
            categoria=itemsC[i].category;
            catIdSalida=categoria.id
            catSalida=catIdSalida + ": "+categoria.name;
            }else{
                catSalida="No asignada"
            }            
            tabla+="<tr>"+
                   // "      <th id='"+itemsC[i].id+"_idm' scope='row'>"+itemsC[i].id+"</th>"+
                    "      <td id='"+itemsC[i].id+"_mm'>"+itemsC[i].brand+"</td>"+
                    "      <td id='"+itemsC[i].id+"_modm'>"+itemsC[i].year+"</td>"+
                    "      <td id='"+itemsC[i].id+"_catm'>"+catSalida+"</td>"+
                    "      <td id='"+itemsC[i].id+"_desm'>"+itemsC[i].description+"</td>"+
                    "      <td id='"+itemsC[i].id+"_namem'>"+itemsC[i].name+"</td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-danger btn-xs\" disabled onclick=\"eliminar("+itemsC[i].id+",'/Motorbike')\">"+
                    "        <span class=\"fas fa-trash-alt\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-info btn-xs\" disabled onclick=\"callModal("+itemsC[i].id+",'moto')\">"+
                    "        <span class=\"fas fa-edit\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "    </tr>";
        };  
        tabla+="</tbody>"+
               "</table>";
               
return tabla;
}
function creartablacliente(itemsC){
    
    let tabla="<table class='table table-bordered table-dark'>"+
                        "<thead>"+
                        "    <tr>";
                        let cabeza=['NAME','EMAIL','AGE','ELIMINAR','EDITAR'];
                        
                        for(let i=0;i<cabeza.length;i++){
                            tabla+="      <th scope='col'>"+cabeza[i]+"</th>";
                            
                        }
                        tabla+="    </tr>";
                        tabla+="</thead>";
                        tabla+="<tbody>";
        for(let i=0;i<itemsC.length;i++){
            tabla+="<tr>"+
                    //"      <th scope='row'>"+itemsC[i].idClient+"</th>"+
                    "      <td>"+itemsC[i].name+"</td>"+
                    "      <td>"+itemsC[i].email+"</td>"+
                    "      <td>"+itemsC[i].age+"</td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-danger btn-xs\" disabled onclick=\"eliminar("+itemsC[i].idClient+",'/Client')\">"+
                    "        <span class=\"fas fa-trash-alt\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-info btn-xs\" disabled onclick=\"callModal("+itemsC[i].idClient+",'client')\">"+
                    "        <span class=\"fas fa-edit\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "    </tr>";
        };  
        tabla+="</tbody>"+
                "</table>";
return tabla;
}

function creartablaadmin(itemsC){
    
    let tabla="<table class='table table-bordered table-dark'>"+
                        "<thead>"+
                        "    <tr>";
                        let cabeza=['NAME','EMAIL','ELIMINAR','EDITAR'];
                        
                        for(let i=0;i<cabeza.length;i++){
                            tabla+="      <th scope='col'>"+cabeza[i]+"</th>";
                            
                        }
                        tabla+="    </tr>";
                        tabla+="</thead>";
                        tabla+="<tbody>";
        for(let i=0;i<itemsC.length;i++){
            tabla+="<tr>"+
                    //"      <th scope='row'>"+itemsC[i].idClient+"</th>"+
                    "      <td>"+itemsC[i].name+"</td>"+
                    "      <td>"+itemsC[i].email+"</td>"+
                   // "      <td>"+itemsC[i].name+"</td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-danger btn-xs\" disabled onclick=\"eliminar("+itemsC[i].idAdmin+",'/Admin')\">"+
                    "        <span class=\"fas fa-trash-alt\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-info btn-xs\" disabled onclick=\"callModal("+itemsC[i].idAdmin+",'admin')\">"+
                    "        <span class=\"fas fa-edit\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "    </tr>";
        };  
        tabla+="</tbody>"+
                "</table>";
return tabla;
}

function creartablamensaje(itemsC){
    
    let tabla="<table class='table table-bordered table-dark'>"+
                        "<thead>"+
                        "    <tr>";
                        let cabeza=['MENSAJE','ELIMINAR','EDITAR'];
                        
                        for(let i=0;i<cabeza.length;i++){
                            tabla+="      <th scope='col'>"+cabeza[i]+"</th>";
                            
                        }
                        tabla+="    </tr>";
                        tabla+="</thead>";
                        tabla+="<tbody>";
        for(let i=0;i<itemsC.length;i++){
            tabla+="<tr>"+
                   // "      <th scope='row'>"+itemsC[i].idMessage+"</th>"+
                    "      <td>"+itemsC[i].messageText+"</td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-danger btn-xs\" disabled onclick=\"eliminar("+itemsC[i].idMessage+",'/Message')\">"+
                    "        <span class=\"fas fa-trash-alt\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "      <td data-titulo=\"MOD: \" class=\"text-center\">"+
                    "        <span class=\"btn btn-info btn-xs\" disabled onclick=\"callModal("+itemsC[i].idMessage+",'message')\">"+
                    "        <span class=\"fas fa-edit\"></span>"+
                    "        </span>"+
                    "    </td>"+
                    "    </tr>";
        };  
        tabla+="</tbody>"+
               "</table>";
               
return tabla;
}
function creartablacategory(itemsC){
    let tabla="<table class='table table-bordered table-dark'>"+
    "<thead>"+
    "    <tr>";
    let cabeza=['Categoria','Descripcion','ELIMINAR','EDITAR'];
    
    for(let i=0;i<cabeza.length;i++){
        tabla+="      <th scope='col'>"+cabeza[i]+"</th>";
        
    }
    tabla+="    </tr>";
    tabla+="</thead>";
    tabla+="<tbody>";
for(let i=0;i<itemsC.length;i++){
tabla+="<tr>"+
// "      <th scope='row'>"+itemsC[i].idMessage+"</th>"+
"      <td>"+itemsC[i].name+"</td>"+
"      <td>"+itemsC[i].description+"</td>"+
"      <td data-titulo=\"MOD: \" class=\"text-center\">"+
"        <span class=\"btn btn-danger btn-xs\" disabled onclick=\"eliminar("+itemsC[i].id+",'/Category')\">"+
"        <span class=\"fas fa-trash-alt\"></span>"+
"        </span>"+
"    </td>"+
"      <td data-titulo=\"MOD: \" class=\"text-center\">"+
"        <span class=\"btn btn-info btn-xs\" disabled onclick=\"callModal("+itemsC[i].id+",'category')\">"+
"        <span class=\"fas fa-edit\"></span>"+
"        </span>"+
"    </td>"+
"    </tr>";
};  
tabla+="</tbody>"+
"</table>";

return tabla;

}
function formToJSON(f) {
    var fd = $(f).serializeArray();
    var d = {};
    $(fd).each(function() {
        if (d[this.name] !== undefined){
            if (!Array.isArray(d[this.name])) {
                d[this.name] = [d[this.name]];
            }
            d[this.name].push(this.value);
        }else{
            d[this.name] = this.value;
        }
    });
    return d;
}
function eliminar(ids,origen){
    //let envio={id:ids}
    //let salida = JSON.stringify(envio);
    console.log(origen)
    $.ajax({
        url:urlgeneral+origen+"/"+ids,
        type:"DELETE",
        //data:salida,
        //contentType:"application/JSON",
        //datatype:"JSON",
        success:function(r){
            mensaje("Delete","Registro eliminado","success");
            restGet(origen+"/all");
        }

    });
}
function cerrarm(){$('#exampleModal').modal('hide');}
function callModal(id,formulario){
    let forma;
    var datos;
    switch(formulario){
        case "moto":
            forma=frmMotosMod;
            origen="/Motorbike/get/";
            document.getElementById('actualizar').innerHTML=forma;
            $.ajax({
                url:urlgeneral+origen+id,
                type:"GET",
                async: false,
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta)
                    window.setTimeout(1000);//espera para cargar
                    console.log(document.getElementById("idmod"));
                    document.getElementById("idmod").value=respuesta.id;
                    document.getElementById("brandmod").value=respuesta.brand;
                    document.getElementById("yearmod").value=respuesta.year;
                    document.getElementById("categorymod").value=respuesta.category.id;
                    document.getElementById("namemod").value=respuesta.name;
                    document.getElementById("descriptionmod").value=respuesta.description;
                }
                });
            break;
        case "client":
            forma=frmClienteMod;
            origen="/Client/get/";
            document.getElementById('actualizar').innerHTML=forma;
            $.ajax({
                url:urlgeneral+origen+id,
                type:"GET",
                async: false,
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta)
                    console.log(document.getElementById("idmod"));
                    document.getElementById("idmod").value=respuesta.idClient;
                    document.getElementById("namemod").value=respuesta.name;
                    document.getElementById("emailmod").value=respuesta.email;
                    document.getElementById('passwordmod').value=respuesta.password;
                    document.getElementById("agemod").value=respuesta.age;
                }
                });
            break;
        case "message":
            forma=frmMensajeMod;
            origen="/Message/get/"; 
            document.getElementById('actualizar').innerHTML=forma;
            $.ajax({
                url:urlgeneral+origen+id,
                type:"GET",
                async: false,
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta);
                    document.getElementById("idmod").value=respuesta.idMessage;
                    document.getElementById("messagetextmod").value=respuesta.messageText;
                    document.getElementById("msgmotomod").value=respuesta.motorbike.id;
                    document.getElementById("msgclientmod").value=respuesta.client.idClient;
                }
                });
            break;
        case "category":
            forma=frmCategoryMod;
            origen="/Category/get/"; 
            document.getElementById('actualizar').innerHTML=forma;
            $.ajax({
                url:urlgeneral+origen+id,
                type:"GET",
                async: false,
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta);
                    document.getElementById("idmod").value=respuesta.id;
                    document.getElementById("noncategorymod").value=respuesta.name;
                    document.getElementById("descategorymod").value=respuesta.description;
                    
                }
                });
            break;
        case "admin":
            forma=frmAdminmod;
            origen="/Admin/get/";
            document.getElementById('actualizar').innerHTML=forma;
            $.ajax({
                url:urlgeneral+origen+id,
                type:"GET",
                async: false,
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta)
                    //console.log(document.getElementById("regUsuariomod"));
                    document.getElementById("idmod").value=respuesta.idAdmin;
                    document.getElementById("namemod").value=respuesta.name;
                    document.getElementById("emailmod").value=respuesta.email;
                    document.getElementById('passwordmod').value=respuesta.password;
                    //document.getElementById("agemod").value=respuesta.age;
                }
                });
            break;
            
        case "reservation":
            forma=frmReservamod
            origen="/Reservation/get/"; 
            document.getElementById('actualizar').innerHTML=forma;
            $.ajax({
                url:urlgeneral+origen+id,
                type:"GET",
                async: false,
                datatype:"JSON",
                success:function(respuesta){
                   console.log(respuesta)
                    
                }
                });
            break;
    }
    
    
    $('#exampleModal').modal('show'); // abrir

}
function cargarcategorias(){
    $.ajax({
        url:urlgeneral+"/Category/all",
        type:"GET",
        async: false,
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            const $select = document.querySelector("#categoryin");
            for (let i = $select.options.length; i >= 0; i--) {
                 $select.remove(i);
                }
             datos=respuesta;
            console.log(datos.length);
            for(let i=0;i<datos.length;i++){
                console.log(datos[i].id);
	            const option = document.createElement('option');
                option.value = '{\"id\":'+datos[i].id+'}';
  	            option.text = datos[i].name;
   	            $select.appendChild(option);
            }
        }
        });
}
function cargarselect(origen,control){
    $.ajax({
        url:urlgeneral+origen,
        type:"GET",
        async: false,
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta)
            const $select = document.querySelector("#"+control);
//            console.log(document.querySelector("#"+control))
            for (let i = $select.options.length; i >= 0; i--) {
                 $select.remove(i);
                }
             datos=respuesta;
            //console.log(datos.length);
            for(let i=0;i<datos.length;i++){
                
	            const option = document.createElement('option');
                if(datos[i].id!=undefined){option.value = datos[i].id;}
                if(datos[i].idClient!=undefined){option.value = datos[i].idClient;}
  	            option.text = datos[i].name;
   	            $select.appendChild(option);
            }
        }
        });
}

function informe(){
    let origen="/Reservation/report-dates/";
    let fechainicial=$("#fechainicial").val();
    let fechafinal=$("#fechafinal").val();
    if(fechainicial<fechafinal && fechainicial!=fechafinal ){
        $.ajax({
            url:urlgeneral+origen+fechainicial+"/"+fechafinal,
            type:"GET",
            async: false,
            datatype:"JSON",
            success:function(respuesta){
                let entrada=respuesta;
            if(entrada.length!=undefined || entrada.length!=null){
                mensaje("Conteo de reservas: "+ entrada.length.toString(),'',"success")
            }else{alert(":(")}
               
            }
            });
    }else{
        mensaje("Error en las fechas","la Fecha inicial no puede ser mayor o igual que la final","error")
    }
}
function informeStatus(){
    let origen="/Reservation/report-status";
    $.ajax({
        url:urlgeneral+origen,
        type:"GET",
        async: false,
        datatype:"JSON",
        success:function(respuesta){
            let entrada=respuesta;
            console.log(entrada)
       
            mensaje("Conteo de reservas: \nCaceladas: "+ entrada.cancelled.toString()+
                     "\nCompletadas: " + entrada.completed.toString()
            ,'',"success")
        }
        });

}
function informeCliente(){
    let origen="/Reservation/report-clients";
    $.ajax({
        url:urlgeneral+origen,
        type:"GET",
        async: false,
        datatype:"JSON",
        success:function(respuesta){
            let entradacli=respuesta;
            console.log(entradacli)
            let prncliente="Top 3\n";
            for(let i=0;i<entradacli.length;i++){
                console.log(entradacli[i].client.name)
                prncliente+="Nombre: "+entradacli[i].client.name+"\nNo Reservas: "+entradacli[i].total+"\n";
            }
            mensaje(prncliente,'',"success")
        }
        });

}