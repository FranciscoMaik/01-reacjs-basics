import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://github.com/FranciscoMaik.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Francisco Maik</strong>
							<time 
								title="11 de Outubro às 08:12h"  
								dateTime="2022-10-11 08:12:12">Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24}/>
						</button>
					</header>

					<p>Muito bom Devon, parabéns!!</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Apludir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}