import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TransitionStatus } from 'react-transition-group/Transition';

interface MenuProps  {
    state: TransitionStatus,
}
interface Wraper  {
    state: TransitionStatus,
    height:number;
}
export const Item = styled.li`
    position:relative;
   
    width:100%;
    margin : 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    box-shadow: ${p=>p.theme.neumorphism.light.boxShadow};
    &:active{
        box-shadow: ${p=>p.theme.neumorphism.light.boxShadowInset};
        }
    @media only screen and (min-width: ${({theme})=>theme.common.md}) {
        width:initial;
        margin: 0 0.5rem;
    }
`
export const LinkWraper = styled(Link)`
    touch-action: manipulation;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    padding: 0.5rem;
    color: #000;
    width:100%;
    align-items:center;
    justify-content:center;
    display:flex;
   
    @media only screen and (min-width: ${({theme})=>theme.common.md}) {
        width:initial;
    }
`

export const ItemButton = styled.div`
    min-width: 6rem;
    box-shadow: ${p=>p.theme.neumorphism.light.boxShadow};
    &:active{
        box-shadow: ${p=>p.theme.neumorphism.light.boxShadowInset};
        }
`