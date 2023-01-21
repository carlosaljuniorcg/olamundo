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
                Olá, eu sou Carlos Antônio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou formado em ADS e atualmente aprofundando meus conhecimentos no ALURA e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história na programação começou a alguns anos quando decide entrar para faculdade e cursa Analise e Desenvolimento de Sistemas. Lá eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Sempre gostei muito da área de tecnologia e nos últimos anos tenho dedicado tempo para me aprofundar em Formação Frontend.
            </p>
            <p className={styles.paragrafo}>
                Logo que conclui a faculdade, procurei informações de sobre como apronfundar meus conhecimentos para quem sabe em um futuro próximo ter a oportunidade de exercer a função na área. Atualmente sou aluno ativo na ALURA estudando a parte de Frontend. Com formações em Iniciante em Programação, Formação de HTML e CSS, Formação Carreira QA: processos e automação de testes, Acessibilidade Web e atualmente concluindo a Formação de React.
            </p>
            <p className={styles.paragrafo}>
                Com isso quero ainda esse ano conluir todos os cursos e formações necessários e entrar para a área de Frontend. E claro continuar evoluindo na carreira para alcançar o verdadeiro objetivo que é me tornar um fullstack sênior. 
            </p>
            <p className={styles.paragrafo}>
                E com experiencia em Frontend, quero continuar minha evolução acadêmica para que nos próximos 3 ou 4 anos eu venha a conseguir alcançar o real objetivo. Mas com um perspectiva de continuar adquirindo conhecimento, ganhando certificações e crescendo cada vez mais. Como diria um bom amigo, O CÉU É O LIMITE.  

            </p>

        </PostModelo>
    )
}