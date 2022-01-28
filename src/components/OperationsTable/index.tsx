import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AlignCenterContainer, BootstrapCardContainer } from "../Main/styles";

interface volumeListing {
    createdAt: string;
    nome: string;
    raio: number;
    altura: number;
    unidade: string;
    resultado: string;
}

interface baskharaListing {
    createdAt: string;
    x1: number;
    x2: number;
    a: number;
    b: number;
    c: number;
}

export function OperationsTable() {

    const [volumeList, setVolumeList] = useState<volumeListing[]>([]);

    const [baskharaList, setBaskharaList] = useState<baskharaListing[]>([]);

    function getVolumeList() {
        const req: any = api.get('/math/list/geometricFigure')
        .then(response => setVolumeList(response.data))

        return req;
    }

    useEffect(() => {
        getVolumeList()
    }, []);

    console.log(volumeList)

    function getBaskharaList() {
        const req: any = api.get('/math/list/equation')
        .then(response => setBaskharaList(response.data))

        return req;
    }

    useEffect(() => {
        getBaskharaList()
    }, [])

    console.log(baskharaList)
    
    return (
        <>
            <AlignCenterContainer>
                <BootstrapCardContainer>
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">LISTA DE OPERAÇÕES VOLUME</h5>
                            </div>  

                            <table>
                            <th>Data</th>
                            <th>Nome</th>
                            <th>Raio</th>
                            <th>Altura</th>
                            <th>unidade</th>
                            <th>resultado</th>
                            {volumeList.map((item) =>
                            <tr>
                                <td>{item.createdAt}</td>
                                <td>{item.nome}</td>
                                <td>{item.raio}</td>
                                <td>{item.altura}</td>
                                <td>{item.unidade}</td>
                                <td>{item.resultado}</td>
                            </tr>
                            )}

                            </table>
                    </div>
                </BootstrapCardContainer>            
            </AlignCenterContainer>

            <AlignCenterContainer>
                <BootstrapCardContainer>
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">LISTA DE OPERAÇÕES BASKHARA</h5>
                            </div>  

                            <table>
                            <th>Data</th>
                            <th>x1</th>
                            <th>x2</th>
                            <th>a</th>
                            <th>b</th>
                            <th>c</th>
                            {baskharaList.map((item) =>
                            <tr>
                                <td>{item.createdAt}</td>
                                <td>{item.x1}</td>
                                <td>{item.x2}</td>
                                <td>{item.a}</td>
                                <td>{item.b}</td>
                                <td>{item.c}</td>
                            </tr>
                            )}

                            </table>
                    </div>
                </BootstrapCardContainer>            
            </AlignCenterContainer>
        </>
    );
}