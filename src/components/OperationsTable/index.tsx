import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AlignCenterContainer, BootstrapCardContainer } from "../Main/styles";

export function OperationsTable() {

    const [volumeList, setVolumeList] = useState([]);
    const [baskharaList, setBaskharaList] = useState([]);

    function getGeometricFigureOperationList() {
        api.get('/math/list/geometricFigure')
        .then(response => setVolumeList(response.data))
    }

    function getBaskharaOperationList() {
        api.get('/math/list/equation')
        .then(response => console.log(response))
    }


    useEffect(() => {
        api.get('/math/list/geometricFigure')
        .then(response => setVolumeList(response.data))
    }, []);

    return (
        <>
        <AlignCenterContainer>
            <BootstrapCardContainer>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">LISTA DE OPERAÇÕES BASKHARA</h5>
                        </div>     

                </div>
            </BootstrapCardContainer>            
        </AlignCenterContainer>

        <AlignCenterContainer>
            <BootstrapCardContainer>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">LISTA DE OPERAÇÕES VOLUME</h5>
                        </div>                
                </div>
            </BootstrapCardContainer>            
        </AlignCenterContainer>
    </>
    );
}