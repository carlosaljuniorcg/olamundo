import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Carlos Antônio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Carlos Antônio sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou formado em ADS com formação em Frontend na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                MInha história com programação começou na UNOPAR, quando no ano de 2019 coloquei como objetivo um crescimento profissional e como náo poderia fugir dar raizes de 15 anos trabalhando com tecnologia me formei em Analise e desenvolvimento de sistemas. Aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. 
            </p>
            <p className={styles.paragrafo}>
                Assim que conclui o curso eu cuidei em ingressar numa boa escola de programação e me aprofundar na área de Frontend, que foi a formação que escolhi para entrar no setor. No ALURA eu finalizei até o momento as formações em HTML e CSS, JAVASCRIPT, Carreira QA, Acessibiidade na Web e agora estou me certificando em REACT. O objetivo náo para por ai, pois tenho como meta alcançar uma vaga de FULLSTACK SÊNIOR. Deixando claro que o objeito não é o limite, vou continuar desenolvendo, pois o céu é o limite. E uma linguagem a mais no curriculum não faz mal algum. 
            </p>
            <p className={styles.paragrafo}>
                 Desde então, tem sido aprenas aprendizados atrás de aprendizados. Para que até o final deste ano condiga conluir todos os cursos necessários para ingressar em um boa empresa, adquirir experiência e ir progredindo da maneira correta cada vez mais até chegar ao objetivo final. Ser programador é ser paciente e persistente na busca de novos conhecimentos. 
            </p>
            
        </PostModelo>
    )
}