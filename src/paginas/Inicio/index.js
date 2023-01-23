import Banner from "componentes/Banner";
import styles from './Inicio.module.css';

import posts from 'json/posts.json';
<<<<<<< HEAD
<<<<<<< HEAD
import PostCard from "componentes/PostCard";
=======
import Post from "componentes/Post";
>>>>>>> parent of 3107a7f (Update 23012023)
=======
import Post from "componentes/Post";
>>>>>>> parent of 3107a7f (Update 23012023)

export default function Inicio() {
    return (
        <main>
            <Banner />

        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
        </main>
        
    )
}