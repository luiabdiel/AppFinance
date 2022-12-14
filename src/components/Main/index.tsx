import { Link } from 'react-router-dom'

import { MainContainer, MainContentImage, MainContentText } from "./styles";

import Avatar from '../../assets/avatar.svg'

export function Main() {
    return (
        <MainContainer>
            <MainContentText>
                <h1>Sistema para controle financeiro online</h1>
                <p>Conheça a <span>Minimal</span> e coloque as estratégias organizacionais de gestão financeira em ação de maneira simples, sólida e assertiva.</p>
                <button><Link to={'/login'}>Painel de gestão</Link></button>
            </MainContentText>
            <MainContentImage>
                <img src={Avatar} alt="" />
            </MainContentImage>
        </MainContainer>
    )
}