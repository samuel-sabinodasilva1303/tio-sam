const basicMonthly = document.getElementById("basic-monthly");
const professionalMonthly = document.getElementById("professional-monthly");
const masterMonthly = document.getElementById("master-monthly");
const basicAnnually = document.getElementById("basic-annually");
const professionalAnnually = document.getElementById("professional-annually");
const masterAnnually = document.getElementById("master-annually");
const switchInput = document.getElementById("switch-input");

let pricesMonthly = [];
let pricesAnnually = [];
pricesMonthly.push(basicMonthly, professionalMonthly, masterMonthly);
pricesAnnually.push(basicAnnually, professionalAnnually, masterAnnually);

pricesMonthly.map(item => item.classList.add("none"));

switchInput.addEventListener("click", checked);

function refresh() {
  switchInput.checked = false;
}

function checked() {
  if (switchInput.checked) {
    pricesMonthly.map(item => item.classList.remove("none"));
    pricesAnnually.map(item => item.classList.add("none"));
  } else {
    pricesMonthly.map(item => item.classList.add("none"));
    pricesAnnually.map(item => item.classList.remove("none"));
  }
}

$(document).ready(function(){
  var docWidth = $('body').width(),
      $wrap = $('#wrap'),
      $images = $('#wrap .hb'),
      slidesWidth = $wrap.width();
  
  $(window).on('resize', function(){
    docWidth = $('body').width();
    slidesWidth = $wrap.width();
  })
  
  $(document).mousemove(function(e) {
    var mouseX = e.pageX,
        offset = mouseX / docWidth * slidesWidth - mouseX / 2;
    
    $images.css({
      '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
              'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
})

//LGPD
let lgpdHtml = `

  <div class="lgpd">
	
                            
    <div class="lgpd-left">
  
      Nós utilizamo cookies para melhorar sua experiência de navegação<br>
      Para conferir clique nossas politicas de privacidade clique <a href="/">Politcas de privacidade.</a>
  
    </div>
  
    <div class="lgpd-rigth">
      <button>Ok</button>
  
    </div>
  
  </div>
  <link rel="stylesheet" href="assets/css/foo.css">
`;

let lsContent = localStorage.getItem('.lgpd');
if(!lsContent){
    document.body.innerHTML +=lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async ()=>{
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let jason = await result.json();

        if(json.erro != ''){
            let id = json.id;
            localStorage.setIem('lgpd', id);

        }
    });
 
}