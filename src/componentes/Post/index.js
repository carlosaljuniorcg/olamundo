<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> parent of 3107a7f (Update 23012023)
import styles from './Post.module.css';

<<<<<<< HEAD
export default function Post({ post }) {
    return (
<<<<<<< HEAD
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
=======
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
        </div>
>>>>>>> parent of 3107a7f (Update 23012023)
    )
=======
export default function Post () {
    return "Post..."
>>>>>>> parent of 0dd03ca (Update 21012023)
}