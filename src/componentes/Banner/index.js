import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
<<<<<<< HEAD
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
=======
                    Boas vindas ao meu espaço pessoal. Eu sou Carlos Antônio e sou recém formado em Analise e Desenvolvimento de Sistemas. Formação HTML e CSS,
                    Carreira QA: Processos e automação de Testes e Acessibilidade Web. 
                    Conhecimento em C#, Java, JavaScript, Python, MySQL, Git e GitHub.
>>>>>>> parent of 0dd03ca (Update 21012023)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Carlos Antônio sorrindo."
                />
            </div>
        </div>
    )
}