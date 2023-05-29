window.onload = function () {
  
  const containerCardON = document.querySelectorAll('#ContainerCardON');
  const containerCardTWO = document.querySelectorAll('#ContainerCardTWO');

    const CardsSemana = document.querySelectorAll('.Segunda, .Terca, .Quarta, .Quinta, .Sexta, .Sabado, .Domingo');

    CardsSemana.forEach(function (PlayS) {
      PlayS.style.display = 'none';
    });

    var data_atual = new Date();
    var dias_da_semana = ["",'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado','Domingo'];
    var dia_da_semana = dias_da_semana[data_atual.getDay()];

    var Active = document.querySelector('.'+dia_da_semana);
    var ActiveText = document.querySelector('#'+dia_da_semana);
    Active.style.display = 'inline-flex';
    ActiveText.classList.add('Active');

    containerCardTWO.forEach ( function (card){
      card.style.display = 'none'
    });

    var dias_da_semana_numeros = {
      'Segunda': 1,
      'Terca': 2,
      'Quarta': 3,
      'Quinta': 4,
      'Sexta': 5,
      'Sabado': 6,
      'Domingo': 7,
    };
    
      function Pass(number) {
        const numero_do_dia = dias_da_semana_numeros[dia_da_semana];
        if (numero_do_dia === 7 && number > 0) {
          // Impede que o usuário avance além do último dia da semana (domingo)
          return;
        } else if (numero_do_dia === 1 && number < 0) {
          // Impede que o usuário volte antes do primeiro dia da semana (segunda-feira)
          return;
        } else {
          var percorrer = document.querySelectorAll('.percorrer');
          percorrer.forEach(function(valores) {
            valores.classList.remove('Active');
          });
      
          var Dia = document.querySelectorAll('#Dia');
          Dia.forEach(function(Dias) {
            Dias.style.display = 'none';
          });
      
          var posicao = dias_da_semana.indexOf(dia_da_semana);
          var calc = posicao + number;
          var local = dias_da_semana[calc].toString();
      
          var Active2 = document.querySelector('.' + local);
          var ActiveText2 = document.querySelector('#' +local);
          Active2.style.display = 'inline-flex';
          ActiveText2.classList.add('Active');
        
          dia_da_semana = local;
        }
      }
    
    var left = document.querySelectorAll('#Left');
    var Right = document.querySelectorAll('#Right');

    function passar(on, two, back) {
      if (back) {
        on.style.display = "inline-flex";
        two.style.display = "none";
      } else {
        on.style.display = "none";
        two.style.display = "inline-flex";
      }
    }

    Right[0].addEventListener("click", function() { passar(containerCardON[0],containerCardTWO[0]); });
    Right[1].addEventListener("click", function() { Pass(+1); });
    Right[2].addEventListener("click", function() { passar(containerCardON[1],containerCardTWO[1]); });
        
    left[0].addEventListener("click", function() {passar(containerCardON[0], containerCardTWO[0], true);});
    left[1].addEventListener("click", function() { Pass(-1);  });
    left[2].addEventListener("click", function() {passar(containerCardON[1], containerCardTWO[1], true);});
    
 }