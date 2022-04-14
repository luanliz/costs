import styles from '../components/layout/Home.module.css'
import savings from '../components/img/savings.svg'
import LinkButton from '../components/layout/LinkButton'

function Home (){
    return (
     <section className={styles.home_container}>
         <h1>Bem-Vindo ao <span>Costs</span></h1>
         <p>Comece a gerenciar os seus projetos agora mesmo!</p>
         <LinkButton to = "/newproject" text="Criar Projeto" />
         <img src = {savings} alt ="Costs" />
     </section>
    )
}

export default Home