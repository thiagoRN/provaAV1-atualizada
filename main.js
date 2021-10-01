import Veiculo from './modules/Veiculo.js';
import Piloto from './modules/Piloto.js';
import Corrida from './modules/Corrida.js';

let corrida = new Corrida();

let carrango = new Veiculo(
    new Piloto('Arnaldo', 4, 15),
    'corsa',
    100,
    {tipo: 'carro', ano: 2000, cor: 'cinza'} 
);
let ferrari = new Veiculo(
    new Piloto('Pedro', 2, 30),
    'ferrari',
    400,
    {tipo: 'carro', ano: 2021, cor: 'vermelha'}
);
let mercedes = new Veiculo(
    new Piloto('Bruno', 15, 22),
    'Mercedes',
    290,
    {}
)

corrida.adicionar(carrango);
corrida.adicionar(ferrari);
corrida.adicionar(mercedes);

corrida.largada();

