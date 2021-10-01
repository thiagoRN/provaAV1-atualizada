import Api from './Api.js';

class Corrida
{
  #participantes;
  #api = new Api();

  constructor()
  {
    this.#participantes = [];
  }

  largada()
  {
    this.#participantes.forEach((veiculo) => {
      veiculo.acelerando0a100(this);
    });
  }

  relatorio(veiculo)
  {
    this.#chegada(veiculo);
    this.#mensagemFinalDaAceleracao(veiculo);    
  }

  adicionar(veiculo)
  {
      this.#participantes.push(veiculo);
  }

  #recorde()
  {
    this.#api.recorde().then((resposta) => {
      console.log();
      console.log('***RECORDE***');
      console.log(`O recorde é de ${resposta.piloto().nome()} como o tempo de ${resposta.feedback()} segundos.`);
    }).catch(erro => console.log(erro));
  }

  #podio()
  {
    this.#api.podio().then((resposta) => {
      console.log();
      console.log('***PODIO***');
      for (let i = 0; i < resposta.length; i++)
      {
        let diferenca = (Number(resposta[i].feedback()) - Number(resposta[0].feedback())).toFixed(3);

        console.log(`${i + 1}º Lugar: ${resposta[i].piloto().nome()} +(${diferenca})`);
      }
    });
  }

  #chegada(veiculo)
  {
    this.#api.chegada(veiculo).then((respostaDistancia) => {
      if (respostaDistancia.length == this.#participantes.length)
      {
        this.#recorde();
        this.#podio();
      }
    }).catch(erro => console.log(erro));
  }

  #mensagemFinalDaAceleracao(veiculo)
  {
    console.log(`${veiculo.piloto().nome()} com motor de ${veiculo.potenciaMotor()} cv demorou ${veiculo.feedback()} segundos de 0 a 100 km`);
  }
}

export default Corrida;