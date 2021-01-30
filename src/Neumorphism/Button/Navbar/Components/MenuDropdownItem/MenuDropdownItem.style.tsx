
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.div`
    cursor:pointer;
    /* width:100%; */
    list-style-type:none;
    display:flex;
    justify-content:center;
	height: 50px;
    display: flex;
    align-items: center;
    /* padding: 0.5rem; */
    margin: 0.75rem 0;
    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    box-shadow: ${p=>p.theme.neumorphism.light.boxShadow};
    &:hover{
        box-shadow: ${p=>p.theme.neumorphism.light.boxShadowInset};
    }
`   