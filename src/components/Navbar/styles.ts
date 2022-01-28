import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
    text-shadow: 0px 4px rgba(0, 0, 0, 0.6);

    h1{
        color: white;
        font-size: 4rem;
    }

    h1:hover {
        font-size: 62px;
        text-shadow: 0px 6px rgba(0, 0, 0, 0.6);
        transition: 0.3s;        
    }
`