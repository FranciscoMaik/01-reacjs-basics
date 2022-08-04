import { Post } from "./Post" 
import { Header } from "./components/Header"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Francisco Maik" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae provident laborum quis reprehenderit. Quidem, quos ad! Alias a, unde eius sequi voluptas, eos, amet veniam magnam delectus enim iusto necessitatibus?"
      />

      <Post 
        author="Fonseca Nunes" 
        content="Criando um novo post"
      />
    </div>
  )
}
