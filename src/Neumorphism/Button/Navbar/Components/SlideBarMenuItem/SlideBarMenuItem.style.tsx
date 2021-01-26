
import styled from 'styled-components';

export const Item = styled.div`
    cursor:pointer;
    width:100%;
    list-style-type:none;
    display:flex;
    justify-content:center;
	height: 50px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    &:hover{
        box-shadow: ${p=>p.theme.neumorphism.light.boxShadowInset};
    }
`   