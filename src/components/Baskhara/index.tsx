import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AlignCenterContainer, BootstrapCardContainer, Container, Math } from "./styles"

export function Baskhara() {
    //Baskhara 
    const [baskhara, setBaskhara] = useState({x1: 0, x2: 0});

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    
    function getXFromMathApi(p1: number, p2: number, p3: number){
        const formattedUrl = `/math/baskhara?a=${p1}&b=${p2}&c=${p3}`;

        const obj = api.get(formattedUrl)
        .then(response => setBaskhara(response.data))
        .catch(error => {
            console.log(error)
        })

        return obj;
    }    

    useEffect(() => {
        getXFromMathApi(a,b,c);
    },[a,b,c]);
    //Baskhara

    return (
        //Baskhara
        <>
            <AlignCenterContainer>
                <BootstrapCardContainer>
                    <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Fórmula de Baskhara</h5>
                            <p className="card-text">Digite os valores de a, b, e c para obter x' e x":</p>
                            </div>
                    <Container>
                    <div>
                        a:
                        <input 
                        placeholder="digite o valor de a"
                        value={a}
                        onChange={event => setA(Number(event.target.value))}
                        />
                    </div>
                    <div>
                        b:
                        <input 
                        placeholder="digite o valor de b"
                        value={b}
                        onChange={event => setB(Number(event.target.value))}
                        />
                    </div>
                    <div>
                        c:
                        <input 
                        placeholder="digite o valor de c"
                        value={c}
                        onChange={event => setC(Number(event.target.value))}
                        />
                    </div>
                    </Container>
                        <Math>
                        {a}x² + {b}x + {c} = 0
                        </Math>
                    <Container>
                        <h2>
                        x' = {baskhara.x1}
                        </h2>

                        <h2>
                        x" = {baskhara.x2}
                        </h2>
                    </Container>
                    </div>
                </BootstrapCardContainer>            
            </AlignCenterContainer>
        </>
            );
}