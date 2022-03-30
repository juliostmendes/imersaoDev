var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://gartic.com.br/imgs/mural/jh/jhonfs/bulbassauro.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  var carta2 = {
    nome: "Charmander",
    imagem:
      "https://pm1.narvii.com/6401/45653484fa94c4d0946f2b81026a14af307afd00_hq.jpg",
    atributos: {
      ataque: 10,
      defesa: 7,
      magia: 2
    }
  };
  var carta3 = {
    nome: "Squirtle",
    imagem:
      "https://pm1.narvii.com/6342/ff542fad5b3e5baec6aa6dc9faa40de590020cad_hq.jpg",
    atributos: {
      ataque: 4,
      defesa: 8,
      magia: 10
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
  
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obterAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obterAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var htmlResultado = "";
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaMaquina.atributos[atributoSelecionado] >
      cartaJogador.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    console.log(divResultado);
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disable = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
    //Mesma coisa de maneira diferente
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  