function stop() {
   document.getElementById('stop').style.backgroundColor='red';
   document.getElementById('ready').style.backgroundColor='#1f1d41';
   document.getElementById('go').style.backgroundColor='#1f1d41';
   document.getElementById('red').style.backgroundColor="red";
   document.getElementById('yellow').style.backgroundColor="#4b5069";
   document.getElementById('green').style.backgroundColor="#4b5069";

}
function ready() {
    document.getElementById('ready').style.backgroundColor='yellow';
    document.getElementById('stop').style.backgroundColor='#1f1d41';
    document.getElementById('go').style.backgroundColor='#1f1d41';
    document.getElementById('yellow').style.backgroundColor="yellow";
    document.getElementById('red').style.backgroundColor="#4b5069";
    document.getElementById('green').style.backgroundColor="#4b5069";
 }
 function go() {
    document.getElementById('go').style.backgroundColor='green';
    document.getElementById('ready').style.backgroundColor='#1f1d41';
    document.getElementById('stop').style.backgroundColor='#1f1d41';
    document.getElementById('green').style.backgroundColor="green";
    document.getElementById('red').style.backgroundColor="#4b5069";
    document.getElementById('yellow').style.backgroundColor="#4b5069";
 }