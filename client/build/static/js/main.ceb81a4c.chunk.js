(this["webpackJsonptalent-fest-citi"]=this["webpackJsonptalent-fest-citi"]||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/logoCiti.3ce252cf.png"},38:function(e,a,t){e.exports=t.p+"static/media/1.f1c38f69.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/2.3ad3fbea.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/3.447069a6.jpg"},41:function(e,a,t){e.exports=t.p+"static/media/billete50.26ec2d52.png"},48:function(e,a,t){e.exports=t(88)},53:function(e,a,t){},54:function(e,a,t){},60:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){e.exports=t.p+"static/media/whatsaaap.a67144fd.svg"},80:function(e,a,t){e.exports=t.p+"static/media/zoom.72348989.svg"},81:function(e,a,t){e.exports=t.p+"static/media/Hangouts_Icon 1.ce2fb731.svg"},82:function(e,a,t){e.exports=t.p+"static/media/calendario.ea481249.svg"},83:function(e,a,t){},84:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(3),s=t.n(o),r=(t(53),t(9)),c=t(14),m=t(38),i=t.n(m),u=t(39),h=t.n(u),p=t(40),d=t.n(p),E=t(41),g=t.n(E),C=t(13),b=t.n(C),f=(t(54),function(){return l.a.createElement("main",{className:"home"},l.a.createElement("figure",null,l.a.createElement("img",{src:b.a,alt:"logo-citi",className:"logo"})),l.a.createElement("div",{className:"row"},l.a.createElement("img",{src:i.a,alt:"persona-1"}),l.a.createElement("div",{className:"box-mancha"},l.a.createElement("p",{className:"text-home"}," Obten tu cuenta sin necesidad de salir de casa"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"box-mancha-2"},l.a.createElement("p",{className:"text-home"},"La primera cuenta de debito con puntos premia")),l.a.createElement("img",{src:h.a,alt:"persona-2"})),l.a.createElement("div",{className:"row"},l.a.createElement("img",{src:d.a,alt:"persona-1"}),l.a.createElement("div",{className:"box-mancha"},l.a.createElement("p",{className:"text-home"}," Si invitas a dos amigos te aseguramos tu celular en caso de robo"))),l.a.createElement("div",{className:"billete"},l.a.createElement("div",{className:"box-mancha-2"},l.a.createElement("p",{className:"text-home"},"Activa tu cuenta con solo $50.00")),l.a.createElement("img",{src:g.a,alt:"persona-2"})),l.a.createElement("div",{className:"button-footer"},l.a.createElement(r.b,{className:"button",to:"/formulario"},"Abre tu cuenta al instante")))}),v=t(17),N=t(11),S=t(20),w=t(21),x=t(16),y=t(22),k=t(113),_=t(44),P=(t(60),function(e){var a=e.id,t=e.label,n=e.type,o=e.name,s=e.autoComplete,r=e.margin,c=e.variant,m=e.value,i=e.onChange,u=e.colorCheck;return l.a.createElement("label",{className:"input-form-container"},l.a.createElement(k.a,{id:a,label:t,type:n,name:o,autoComplete:s,margin:r,variant:c,value:m,onChange:i,className:"input-form"}),l.a.createElement(_.a,{className:"".concat(u?"green":"white")}))}),I=t(43),j=t.n(I),D=(t(77),function(e){function a(){var e;return Object(v.a)(this,a),(e=Object(S.a)(this,Object(w.a)(a).call(this))).handleNameChange=function(a){e.setState({name:a.target.value}),e.state.name.length>1&&e.setState({nameColor:!0})},e.handleLastnameChange=function(a){e.setState({lastname:a.target.value}),e.state.lastname.length>1&&e.setState({lastnameColor:!0})},e.handleEmailChange=function(a){e.setState({email:a.target.value}),e.state.email.length>1&&(localStorage.setItem("email",e.state.email),e.setState({emailColor:!0}))},e.handlePasswordChange=function(a){e.setState({password:a.target.value}),e.state.password.length>5&&e.setState({passwordColor:!0})},e.handleChangeStreet=function(a){e.setState({street:a.target.value}),e.state.street.length>2&&e.setState({streetColor:!0})},e.handlePassword2Change=function(a){e.setState({password2:a.target.value}),e.state.password2!==e.state.password&&console.log("Tus contrase\xf1as no son iguales"),e.state.password===e.state.password2&&e.setState({password2Color:!0})},e.handleNumExtChange=function(a){e.setState({num_ext:a.target.value}),e.state.num_ext.length>1&&e.setState({numExtColor:!0})},e.handleNumIntChange=function(a){e.setState({num_int:a.target.value}),e.state.num_int.length>0&&e.setState({numIntColor:!0})},e.handleColonyChange=function(a){e.setState({colonia:a.target.value}),e.state.colonia.length>1&&e.setState({colonyColor:!0})},e.handleCPChange=function(a){e.setState({cp:a.target.value}),e.state.cp.length>1&&e.setState({CPColor:!0})},e.handlePhoneChange=function(a){e.setState({phone:a.target.value}),e.state.phone.length>5&&e.setState({phoneColor:!0})},e.handleIDChange=function(a){console.log(a.target.value),e.setState({ID:a.target.value})},e.handleIDNumberChange=function(a){e.setState({number_id:a.target.value}),e.state.number_id.length>9&&e.setState({IDNumberColor:!0})},e.handleCURPChange=function(a){e.setState({curp:a.target.value}),18===e.state.curp.length&&e.setState({CURPColor:!0})},e.handleSubmit=function(a){a.preventDefault();var t={name:e.state.name,lastname:e.state.lastname,email:e.state.email,password:e.state.password,street:e.state.street,num_ext:e.state.num_ext,num_int:e.state.num_int,colonia:e.state.colonia,cp:e.state.cp,phone:e.state.phone,number_id:e.state.number_id,curp:e.state.curp};j.a.post("/api/users/",t).then((function(a){e.setState({name:"",lastname:"",email:"",password:"",street:"",num_ext:"",num_int:"",colonia:"",cp:"",phone:"",number_id:"",curp:"",enable:!0}).then((function(){console.log("entro al then"),e.setState({enable:!0})})),e.props.history.push("/")})).catch((function(e){console.log("Error in CreateBook!")}))},e.state={name:"",lastname:"",email:"",password:"",street:"",num_ext:"",num_int:"",colonia:"",cp:"",phone:"",number_id:"",curp:"",nameColor:!1,lastnameColor:!1,emailColor:!1,passwordColor:!1,password2:"",password2Color:!1,streetColor:!1,numExtColor:!1,numIntColor:!1,colonyColor:!1,CPColor:!1,phoneColor:!1,ID:"",IDNumberColor:!1,CURPColor:!1,enable:!1},e.handleSubmit=e.handleSubmit.bind(Object(x.a)(e)),e}return Object(y.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return console.log(this.state.enable),l.a.createElement("main",{className:"form"},l.a.createElement("header",{className:"header-form"},l.a.createElement("img",{src:b.a,alt:"logo"}),l.a.createElement("h2",null,"Registra tus datos")),l.a.createElement("div",{className:"ball-container"},l.a.createElement("span",{className:"filled ball"}),l.a.createElement("span",{className:"ball"}),l.a.createElement("span",{className:"ball"})),l.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},l.a.createElement(P,{label:"Nombre",type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,colorCheck:this.state.nameColor}),l.a.createElement(P,{label:"Apellidos",type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleLastnameChange,colorCheck:this.state.lastnameColor}),l.a.createElement(P,{label:"Correo electr\xf3nico",type:"email",name:"email",value:this.state.email,onChange:this.handleEmailChange,colorCheck:this.state.emailColor}),l.a.createElement("div",{className:"select-container"},l.a.createElement(P,{label:"Contrase\xf1a",type:"password",name:"password",value:this.state.password,onChange:this.handlePasswordChange,colorCheck:this.state.passwordColor}),l.a.createElement(P,{label:"Confirmar contrase\xf1a",name:"password",type:"password",value:this.state.password2,onChange:this.handlePassword2Change,colorCheck:this.state.password2Color})),l.a.createElement(P,{label:"Calle o Avenida",type:"text",name:"street",value:this.state.street,onChange:this.handleChangeStreet,colorCheck:this.state.streetColor}),l.a.createElement("div",{className:"select-container"},l.a.createElement(P,{label:"N\xfamero ext.",type:"number",name:"num_ext",value:this.state.num_ext,onChange:this.handleNumExtChange,colorCheck:this.state.numExtColor}),l.a.createElement(P,{label:"N\xfamero int.",type:"number",name:"num_int",value:this.state.num_int,onChange:this.handleNumIntChange,colorCheck:this.state.numIntColor})),l.a.createElement("div",{className:"select-container"},l.a.createElement(P,{label:"Fraccionamiento o colonia",type:"text",name:"colonia",value:this.state.colonia,onChange:this.handleColonyChange,colorCheck:this.state.colonyColor}),l.a.createElement(P,{label:"C.P.",type:"number",name:"cp",value:this.state.cp,onChange:this.handleCPChange,colorCheck:this.state.colorCheck})),l.a.createElement(P,{label:"Tel\xe9fono",name:"phone",type:"number",value:this.state.phone,onChange:this.handlePhoneChange,colorCheck:this.state.phoneColor}),l.a.createElement("div",{className:"select-container"},l.a.createElement("select",{name:"genero",id:"",className:"drops",onChange:this.handleIDChange},l.a.createElement("option",{value:"ID"},"Selecciona tu Identificaci\xf3n"),l.a.createElement("option",{value:"INE"},"INE"),l.a.createElement("option",{value:"IFE"},"IFE"),l.a.createElement("option",{value:"LIC"},"Licencia para conducir"),l.a.createElement("option",{value:"PASSPORT"},"Pasaporte mexicano")),l.a.createElement(P,{label:"Numero de identificaci\xf3n",type:"number",name:"number_id",value:this.state.number_id,onChange:this.handleIDNumberChange,colorCheck:this.state.IDNumber})),l.a.createElement(P,{label:"CURP",type:"text",name:"curp",value:this.state.curp,onChange:this.handleCURPChange,colorCheck:this.state.CURPColor}),l.a.createElement("p",{className:"curp"},"Si no conoces tu CURP, puedes obtenerlo en esta ",l.a.createElement("a",{href:"https://www.gob.mx/curp/",target:"_blank"},"liga")," "),l.a.createElement("div",{className:"select-container"},l.a.createElement("select",{name:"genero",id:"",className:"drops"},l.a.createElement("option",{value:""},"Selecciona tu g\xe9nero"),l.a.createElement("option",{value:""},"Hombre"),l.a.createElement("option",{value:""},"Mujer"),l.a.createElement("option",{value:""},"Prefiero no decirlo")),l.a.createElement("select",{name:"occupation",id:"",className:"drops"},l.a.createElement("option",{value:""},"Selecciona tu ocupaci\xf3n"),l.a.createElement("option",{value:""},"Estudiante"),l.a.createElement("option",{value:""},"Empleado"),l.a.createElement("option",{value:""},"Desempleado"),l.a.createElement("option",{value:""},"Prefiero no decirlo"))),l.a.createElement("input",{className:"button-submit",type:"submit"}),l.a.createElement("footer",{className:"footer-form"},l.a.createElement(r.b,{className:"button back",to:"/"},"Anterior"),this.state.enable?l.a.createElement(r.b,{to:"verificar-correo",className:"button"},"Siguiente"):console.log("no aparece"))),l.a.createElement("a",null,"Leer t\xe9rminos y condiciones"))}}]),a}(n.Component)),O=(t(78),function(e){function a(){return Object(v.a)(this,a),Object(S.a)(this,Object(w.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"header-form"},l.a.createElement("img",{src:b.a,alt:"logo"})),l.a.createElement("p",{style:{color:"#414141",textAlign:"center",fontSize:"20px"}},"Est\xe1s a s\xf3lo un paso"),l.a.createElement("div",{className:"ball-container"},l.a.createElement("span",{className:"ball "}),l.a.createElement("span",{className:"filled ball"}),l.a.createElement("span",{className:"ball"}),l.a.createElement("span",{className:"ball"})),l.a.createElement("div",{className:"container-main"},l.a.createElement("div",{className:"container-logos"},l.a.createElement("p",{style:{color:"#414141",fontSize:"20px"}},"Ahora un asesor va a confirmar tus datos ",l.a.createElement("br",null),"por medio de una videollamada"),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=[52][5580867630]",target:"_blank"},l.a.createElement("img",{src:t(79),alt:"whatsapp"})),l.a.createElement("img",{src:t(80),alt:"zoom"}),l.a.createElement("img",{src:t(81),alt:"hangouts",className:"hangouts"})),l.a.createElement("div",{className:"container-calendy"},l.a.createElement("p",{style:{color:"#414141",fontSize:"20px"}},"Si no estas disponible en este momento ",l.a.createElement("br",null),"puedes agrendar tu videollamada en",l.a.createElement("br",null),"otra fecha con l\xedmite de un mes."),l.a.createElement("a",{href:"https://calendly.com/reyesp-isela/15min?fbclid=IwAR2DNrrEQpnSCn6kC1JPKXPUf3nLndH3MWP9EMAKhlOhT7KaDeKcChRAD50&month=2019-12",target:"_blank"},l.a.createElement("img",{src:t(82),alt:""}))),l.a.createElement(r.b,{to:"/",className:"button-finish"},"Finalizar")))}}]),a}(n.Component)),A=(t(83),function(){localStorage.getItem("email");return l.a.createElement("main",{className:"verify-email"},l.a.createElement("header",{className:"header-form"},l.a.createElement("img",{src:b.a,alt:"logo"}),l.a.createElement("h2",null,"Confirma tu correo electr\xf3nico")),l.a.createElement("div",{className:"ball-container"},l.a.createElement("span",{className:"ball"}),l.a.createElement("span",{className:"filled ball"}),l.a.createElement("span",{className:"ball"}),l.a.createElement("span",{className:"ball"})),l.a.createElement("p",null,"Se ha enviado un c\xf3digo de confirmaci\xf3n a tu correo. Por favor ingresa el c\xf3digo aqu\xed"),l.a.createElement("div",{className:"code"},l.a.createElement(P,{label:"C\xf3digo",type:"number"})),l.a.createElement("footer",{className:"footer-form"},l.a.createElement(r.b,{className:"button back",to:"/formulario"},"Anterior"),l.a.createElement(r.b,{className:"button"},"Siguiente")))});t(84);t(85).config();var R=function(){return l.a.createElement(r.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/"},l.a.createElement(f,null)),l.a.createElement(c.a,{exact:!0,path:"/formulario"},l.a.createElement(D,null)),l.a.createElement(c.a,{exact:!0,path:"/verificar"},l.a.createElement(O,null)),l.a.createElement(c.a,{exact:!0,path:"/verificar-correo"},l.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.ceb81a4c.chunk.js.map