class Veiculo
{
  #potenciaMotor;
  #feedback;
  #piloto;
  #tipo;
  #modelo;
  #ano;
  #cor;

  constructor(
    piloto,
    modelo,
    potenciaMotor,
    caracteristicas = {
      'tipo': null,
      'ano': null,
      'cor': null
    }
  )
  {
    this.#tipo = caracteristicas.tipo;
    this.#modelo = modelo;
    this.#ano = caracteristicas.ano;
    this.#cor = caracteristicas.cor;
    this.#potenciaMotor = potenciaMotor;
    this.#feedback = null;
    this.#piloto = piloto;
  }

  acelerando0a100(corrida)
  {
    if (this.#feedback)
    {
      return this.#feedback;
    }

    var start = new Date().getTime();
    var velocidade = 0 
    var animacao = '.'
    var intervalo = setInterval(
      () => {
        velocidade += 1
        animacao = animacao == '.' ? '..' : (animacao == '..' ? '...' : (animacao == '...' ? '.' : '' ))
    
        console.log('acelerando ' + this.#modelo + animacao + ' ' +  velocidade + 'km');

        if (velocidade === 100)
        {
          clearInterval(intervalo);
          var end = new Date().getTime();
          this.#feedback = (end - start) / 1000.0;

          corrida.relatorio(this);
        }
      }, 
      100 * (this.#aux()/this.#piloto.xp())
    );
  }

  potenciaMotor()
  {
    return this.#potenciaMotor;
  }

  feedback()
  {
    return this.#feedback;
  }

  piloto()
  {
    return this.#piloto;
  }
  
  #aux()
  {
    if (this.potenciaMotor <= 100)
    {
      return 0.9;
    }
    
    if (this.potenciaMotor <= 200)
    {
      return 0.7;
    }
    
    if (this.potenciaMotor <= 300)
    {
      return 0.6;
    }

    return 0.2;
  }
}

export default Veiculo;