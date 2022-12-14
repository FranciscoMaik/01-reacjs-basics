import { PencilLine } from "phosphor-react"

import { Avatar } from "./Avatar"

import styles from "./Sidebar.module.css"

export function Sidebar(){
    return (
         <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/FranciscoMaik.png"/>

                <strong>Francisco Maik</strong>
                <span>Tech Líder</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
         </aside>
    )
}