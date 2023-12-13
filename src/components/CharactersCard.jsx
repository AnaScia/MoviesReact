import styles from "./CharactersCard.module.css";

export function Characters ({characters=[]}) {
    console.log(styles);
    return (
    <li className={styles.movieCard}>
    <img width={230} height={345} className={styles.movieImage}src={characters.image} alt={characters.name}/>
    <div >{characters.name}</div>
    </li>
    );
}

//aqui agrego que quiero buscar de cada personaje en la Api..
//en este caso solo quiero el nombre(name) y la imagen del personaje(image)