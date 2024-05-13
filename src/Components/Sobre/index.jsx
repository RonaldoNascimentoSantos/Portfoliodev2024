import './sobre.css';
import imagemSobre from '../../img/imagem-sobre1.png'

export default function Sobre() {
    return (
        <section className='limitar-secao secao-sobre'>
            <img src={imagemSobre} alt="imagem-sobre" />
            <article className="sobre-descricao">
                <h4>Quem sou eu?</h4>
                <h2>Ronaldo Nascimento</h2>
                <h2>desenvolvedor Front-End.</h2>
                <p id='skills'>• Profissional com carreira em desenvolvimento na área de TI como Desenvolvedor Front end Freelancer. <br />
                    •	Nos últimos anos, tenho concentrado minha carreira no desenvolvimento frontend, com ênfase especial na linguagem JavaScript. Durante esse período, adquiri ampla experiência em diversas tecnologias, como HTML, CSS, JavaScript, React.js, Vue.js, Next.js, TypeScript, Tailwind CSS, Node.js, e atualmente estou imerso no estudo de React Native. Além disso, possuo habilidades em Docker, MySQL, Scrum, PHP e Laravel. <br />
                        
                    •	Graduado em Análise e Desenvolvimento de Sistemas. <br />
                
                    •	 Possuo inglês nível A2
                    .</p>
            </article>
        </section>
    )
}