import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AlignCenterContainer, BootstrapCardContainer, Math, Container } from "./styles";

export function Volume() {
    //Volume
    const [volume, setVolume] = useState({volume: 0})

    const [nome, setNome] = useState('');
    const [altura, setAltura] = useState(0);
    const [raio, setRaio] = useState(0);
    const [unidade, setUnidade] = useState('m')

    function getVolumeFromMathApi(nome: string, altura: number, raio: number, unidade: string){
        const newVolume = api.post('/math/volume', {
            nome: nome,
            altura: altura,
            raio: raio,
            unidade: unidade
        })
        .then(response => setVolume(response.data))

        return newVolume;
    }    

    useEffect(() => {
        getVolumeFromMathApi(nome, altura, raio, unidade);
    },[nome, altura, raio, unidade]);
    //Volume

    return (
        <>
             <AlignCenterContainer>
                <BootstrapCardContainer>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Volume</h5>
                            <p className="card-text">Digite o nome, altura, raio e unidade para calcular o volume do cilindro ou esfera:</p>
                        </div>
                    <Container>
                        <div>
                            nome: 
                            <input 
                            className="text-input"
                            placeholder="digite o nome do objeto"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                            />
                        </div>
                        <div>
                            altura: 
                            <input 
                            placeholder="digite o valor de b"
                            value={altura}
                            onChange={event => setAltura(Number(event.target.value))}
                            />
                        </div>
                        <div>
                            raio: 
                            <input 
                            placeholder="digite o valor de c"
                            value={raio}
                            onChange={event => setRaio(Number(event.target.value))}
                            />
                        </div>
                        <div>
                            unidade: 
                            <input 
                            className="text-input"
                            placeholder="digite a unidade de medida"
                            value={unidade}
                            onChange={event => setUnidade(event.target.value)}
                            />
                        </div>
                        </Container>

                        <Math>
                        Volume = {volume.volume} {unidade}³
                        </Math>
                </div>
                </BootstrapCardContainer>
            </AlignCenterContainer>
        </>
    );
}