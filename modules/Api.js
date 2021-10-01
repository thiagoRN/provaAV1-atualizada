class Api
{
  #posicao = [];

  chegada(piloto)
  {
    return new Promise((resolve, reject) => {
      this.#posicao.push(piloto);

      resolve(this.#posicao);
    });
  }

  recorde()
  {
    return new Promise((resolve) => {
      resolve(this.#posicao[0]);
    });
  }

  podio()
  {
    return new Promise((resolve) => {
      resolve(this.#posicao);
    });
  }
}

export default Api;