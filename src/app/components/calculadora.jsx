import React, { useState } from 'react';

const Calculadora = () => {
    const [distancia, setDistancia] = useState('');
    const [consumo, setConsumo] = useState('');
    const [precoPorLitro, setPrecoPorLitro] = useState('');
    const [resultado, setResultado] = useState(null);
    const [litrosUsados, setLitrosUsados] = useState(null);
    const [custoTotal, setCustoTotal] = useState(null);

    const calcular = () => {
        if (distancia && consumo && precoPorLitro) {
            const litros = distancia / consumo; // Litros usados
            const custo = litros * precoPorLitro; // Custo total
            const custoPorKm = custo / distancia; // Custo por km

            setLitrosUsados(litros);
            setCustoTotal(custo);
            setResultado(custoPorKm);
        }
    };

    return (
        <div className="space-y-4 p-6 bg-amber-500 rounded-md shadow flex flex-col">
            <div>
                <label className="text-black">
                    Distância percorrida (km) |
                    <input
                        type="number"
                        value={distancia}
                        onChange={(valor) => setDistancia(valor.target.value)}
                        className="bg-slate-200 text-black rounded-md"
                    />
                </label>
            </div>
            <div>
                <label className="text-black">
                    Consumo médio do veículo (km/l) |
                    <input
                        type="number"
                        value={consumo}
                        onChange={(valor) => setConsumo(valor.target.value)}
                        className="bg-slate-200 text-black rounded-md"
                    />
                </label>
            </div>
            <div>
                <label className="text-black">
                    Preço por litro (R$) |
                    <input
                        type="number"
                        value={precoPorLitro}
                        onChange={(valor) => setPrecoPorLitro(valor.target.value)}
                        className="bg-slate-200 text-black rounded-md"
                    />
                </label>
            </div>
            <button 
                className='bg-sky-700 rounded-md text-bold text-slate-200'
                onClick={calcular}>
                Calcular
            </button>
            {resultado !== null && (
                <div >
                    <h2 className='bg-slate-200 flex justify-center p-1 text-black text-center font-sans text-lg rounded-t'>
                        Custo por km: R$ {resultado.toFixed(2)}
                    </h2>
                    <h3 className='bg-slate-200 flex justify-center p-1 text-black text-center font-sans text-lg'>
                        Litros usados: {litrosUsados.toFixed(2)} L
                    </h3>
                    <h3 className='bg-slate-200 flex justify-center p-1 text-black text-center font-sans text-lg rounded-b'>
                        Custo total: R$ {custoTotal.toFixed(2)}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default Calculadora;
