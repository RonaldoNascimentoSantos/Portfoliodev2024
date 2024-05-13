import './projeto.css';
import printPastelaria from '../../img/foto-principal.jpg';
import printCardapio from '../../img/principal.jpg';
import printAgencia from '../../img/café-amor.jpg';
import iconeGithub from '../../img/icone-github.png'


export default function Projeto() {
    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h4 className='titulo-projeto'>Hora de navegar em</h4>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <div className='card-projetos'>
                    <img className='print-card' src={printPastelaria} alt="foto-projeto1" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Técnico de Enfermagem</h3>
                        <p className='paragrafo-descricao-projetos'>O principal objetivo do projeto era solucionar um problema com a criação da landing page, conseguimos fornecer uma solução eficaz para deixar seu trabalho mais profissional e com um alcance muito maior, tudo atendeu às suas necessidades e expectativas.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>Next.js</p>
                            <p className='tecnologias'>TYPESCRIPT</p>
                           
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='https://josyfreitasenfermeira.vercel.app/' target='blank'>Ver projeto</a>
                            <a className='link-codigo' href='https://github.com/RonaldoNascimentoSantos/Tec-Enfermagem' target='blank'><img className='icone-github' src={iconeGithub} alt="iconegithub" target='blank'/></a>
                        </nav>
                    </div>
                </div>

                <div className='card-projetos'>
                    <img className='print-card' src={printAgencia} alt="foto-projeto2" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Café Amor</h3>
                        <p className='paragrafo-descricao-projetos'>A landing page "Café Amor" foi criada com Next.js, apresentando uma estrutura organizada de arquivos para páginas, componentes e estilos. Seu design responsivo foi cuidadosamente planejado, adaptando-se a diferentes dispositivos.</p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>
                        </div>
                        <nav className='link-projetos'>
                            <a className='link-hospedagem' href='https://cafe-do-amor.vercel.app/' target='blank'>Ver projeto</a>
                            <a href='https://github.com/RonaldoNascimentoSantos/cafe-do-amor' target='blank'><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>

                <div className='card-projetos'>
                    <img className='print-card' src={printCardapio} alt="foto-projeto2" />
                    <div className='descricao-projeto'>
                        <h3 className='subtitulo-descricao'>Web Carros</h3>
                        <p className='paragrafo-descricao-projetos'>A plataforma de vendas de carros é um ambiente online onde usuários podem comprar, vender e pesquisar veículos. Oferece uma variedade de opções de carros novos e usados, com filtros de pesquisa avançados.para facilitar a busca por modelo, ano. </p>
                        <div className='secao-tecnologias'>
                            <p className='tecnologias'>HTML</p>
                            <p className='tecnologias'>CSS</p>
                            <p className='tecnologias'>JS</p>
                            <p className='tecnologias'>REACT.JS</p>  
                        </div>
                        <nav id='contato' className='link-projetos'>
                            <a className='link-hospedagem' href='https://web-carros2024.vercel.app/dashboard' target='blank'>Ver projeto</a>
                            <a className='link-codigo' href='https://github.com/RonaldoNascimentoSantos/Web-Carros' target='blank'><img className='icone-github' src={iconeGithub} alt="iconegithub" /></a>
                        </nav>
                    </div>
                </div>

            </div>
        </section>
    )
}