import Image from "next/image"
import styles from './sabores.module.css'
import Oreo from '../../../public/sabor-oreo.png'
import Pistache from '../../../public/sabor-pistache.png'
import Cookies from '../../../public/sabor-cookies-avela.png'
import Kiwi from '../../../public/sorbet-kiwi.png'
import Morango from '../../../public/sorbet-morango.png'
import Limao from '../../../public/sorbet-limao.png'

export default function sabores() {
    return (
        <>
            <main className={styles.main}>
                <section className={styles.secaoBanner}>
                    <div className={styles.textoBanner}>
                        <h1>Nossos Sabores</h1>
                    </div>
                </section>
                <section className={styles.secSabores}>
                    <h2>Sabores de Sorvete</h2>
                    <div className={`${styles.container_cards} limitaSecao`}>
                        <div className={styles.card}>
                            <Image src={Oreo} className={styles.sorveteImage}></Image>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={Pistache} className={styles.sorveteImage}></Image>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={Cookies} className={styles.sorveteImage}></Image>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={Kiwi} className={styles.sorveteImage}></Image>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={Morango} className={styles.sorveteImage}></Image>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={Limao} className={styles.sorveteImage}></Image>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
