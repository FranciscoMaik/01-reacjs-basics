import styles from "./Post.module.css";

export function Post() {
    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
              <img 
                  className={styles.avatar} 
                  src="https://github.com/FranciscoMaik.png"
              />

              <div className={styles.authorInfo}>
                  <strong>Francisco Maik</strong>
                  <span>Tech Líder</span>
              </div>
          </div>

          <time 
              title="11 de Outubro às 08:12h"  
              dateTime="2022-10-11 08:12:12">Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p> 
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 
          <p>👉 <a href="">jane.design/doctorcare</a></p>  
          <p><a href="">#novoprojeto #nlw #rocketseat</a></p> 
        </div>
      </article>
    )
}