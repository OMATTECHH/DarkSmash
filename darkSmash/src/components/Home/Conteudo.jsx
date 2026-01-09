import React from "react";

/* Imagem do hamburguer principal hero*/
import Burguer from "../../assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg";
import Burguer1 from "../../assets/amirali-mirhashemian-88YAXjnpvrM-unsplash.jpg";
import Burguer2 from "../../assets/mike-PxJ9zkM2wdA-unsplash.jpg";
import Burguer3 from "../../assets/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg";
import Burguer4 from "../../assets/ilya-mashkov-_qxbJUr9RqI-unsplash.jpg";
import Batata from "../../assets/Batata-frita-com-cheddar-e-bacon-Receita-softpig.jpg";
import Milk from "../../assets/sara-cervera-xB0Kr0D0C8Y-unsplash.jpg";
import Sobre from "../../assets/alexander-startsev-ndNw_6QGR_c-unsplash.jpg";

const Conteudo = () => {
  return (
    <>
      <header>
        <a
          href="#"
          className="logo"
          rel="noopener noreferrer"
          title="DarkSmash"
          >
          🍔 DarkSmash
        </a>

        <nav >
          <ul className="flex gap-7" >
            <li> <a href="#" className="font-bold hover:text-amber-600">Inicio</a></li>
            <li><a href="#cardapio" className="font-bold hover:text-amber-600">Cardapio</a></li>
            <li><a href="#sobre" className="font-bold hover:text-amber-600">Sobre</a></li>
            <li> <a href="#contato" className="font-bold  hover:text-amber-600">Contato</a></li>
          </ul>
        </nav>

        <a href="#cardapio" className="btn" rel="noopener noreferrer" title="PeçaAgora">Peça Agora</a>
    </header>

        <section id="home" className="hero-wrapper">
                <article className="hero">
                        <div>
                            <h1>O melhor hamburguer da Cidade dos Developer</h1>
                            <p>Ingredientes frescos receitas especiais e entrega rápida. Peça agora e receba em até 40 minutos !</p>

                            <nav className="flex gap-3 mb-10">
                                <a href="#cardapio" className="btn" rel="noopener noreferrer">Cardapio</a>
                                <a href="https://w.app/reloxa" className="btn btn-outline" rel="noopener noreferrer" target="_blank">📱Whatsapp</a>
                            </nav>

                            <ul className="hero-stats">
                                <li><strong>+500</strong>Clientes Felizes😍</li>
                                <li><strong>4.9</strong>Avaliação 😙</li>
                                <li><strong>40min</strong>Entrega média ou seu dinheiro de volta ✅</li>
                            </ul>
                        </div>

                        <img src={Burguer} alt="Burguer"  loading="lazy"/>
                </article>
        </section>

        <section id="cardapio" className="cardapio">
            <h2>Nosso Cardapio</h2>
            <p>Confira nossos produtos e sabores especiais e faça seu pedido pelo Whatsapp 📷</p>

            <ul className="menu-grid">
                <li>
                    <img src={Burguer1} alt="Burguer-1" loading="lazy"/>
                    <span className="badge">Mais Vendido</span>
                    <h2>Burguer Classico</h2>
                    <p>Pão brioche, 180g de carne, queijo cheddar, alface, tomate e molho especial da casa</p>
                    <strong>R$ 29,90</strong>
                    <a href="https://w.app/reloxa" alt="PedirAgora" className="btn" target="_blank">Pedir Agora</a>
                </li>

                <li>
                    <img src={Burguer2} alt="Burguer-1" loading="lazy"/>
                    <h2>Burguer Bacon</h2>
                    <p>Pão brioche, 180g de carne, bacon crocante, queijo, cebola caramelizada</p>
                    <strong>R$ 34,90</strong>
                    <a href="https://w.app/reloxa" alt="PedirAgora" className="btn" target="_blank">Pedir Agora</a>
                </li>

                <li>
                    <img src={Burguer3} alt="Burguer-1" loading="lazy"/>
                    <span className="badge">Mais Vendido</span>
                    <h2>Burguer Duplo</h2>
                    <p>Pão brioche, 2x 180g de carne, bacon crocante, 2x queijo, cebola caramelizada molho barbeque</p>
                    <strong>R$ 49,90</strong>
                    <a href="https://w.app/reloxa" alt="PedirAgora" className="btn" target="_blank">Pedir Agora</a>
                </li>

                <li>
                    <img src={Burguer4} alt="Burguer-1" loading="lazy"/>
                    <h2>Burguer Flower</h2>
                    <p>Pão brioche,180g de carne, alface, tomate, picles, gerginlim,2x queijo, cebola caramelizada molho vegetariano</p>
                    <strong>R$ 39,99</strong>
                    <a href="https://w.app/reloxa" alt="PedirAgora" className="btn" target="_blank">Pedir Agora</a>
                </li>

                <li>
                    <img src={Batata} alt="Batata" loading="lazy"/>
                    <h2>Batata explosiva</h2>
                    <p>Porção de batata com cheddar e bacon com apresentação, gostusura sem explicação</p>
                    <div className="flex flex-col mb-0">
                        <strong >R$ 25,99</strong>
                        <a href="https://w.app/reloxa" alt="PedirAgora" className="btn err" target="_blank">Pedir Agora</a>
                    </div>
                </li>

                <li>
                    <img src={Milk} alt="Milk Shake Nevado" loading="lazy"/>
                    <h2>Milk Shake Nevado</h2>
                    <p>Shake de Oreo, chocolate e nutella, com bolachas oreo</p>
                    <strong>R$ 18,99</strong>
                    <a href="https://w.app/reloxa" alt="PedirAgora" className="btn err" target="_blank">Pedir Agora</a>
                </li>
            </ul>

        </section>

        <section id="sobre" className="sobre">
            <img src={Sobre} alt="SobreRestaurante" loading="lazy"/>
            <article>
                <h2>Nossa História</h2>
                <p>Desde 2025, a DarkSmash nascu da paixxão por hamburguers artesanais. Nosso segredo ? Ingredientes selecionados e muito código escrito em cada preparo</p>
                <ul>
                    <li>🥩 <strong>Carne Fresca - </strong>100% bovina selecionada</li>
                    <li>🪽 <strong>Entrega rápida - </strong>Entrega em até 40 minutos</li>
                    <li>💳 <strong>pagamento facil - </strong>PIX, cartão ou dinheiro</li>
                </ul>
            </article>
        </section>

        <section id="cta">
            <h2>Pronto para saborear o melhor hambúrguer da cidade ?</h2>
            <p>Faça o seu pedido agora e receba em casa !</p>
            <a href="https://w.app/reloxa" rel="noopener noreferrer" target="_blank" className="btn btn-ligth">Pedir Agora</a>
        </section>

        <footer id="contato">
                <section>
                    <h3>🍔DarkSmash</h3>
                    <p>O melhor hambúrguer da cidade</p>
                </section>


                <section>
                    <h4>Horário</h4>
                    <p>terça a domingo das 18h às 23h</p>
                </section>

                <section>
                    <h4>Contato</h4>
                    <p>📷 (11) 99999-9999</p>
                    <p>📍 Rua dos Developer, 007</p>
                </section>

                <section>
                    <h4>Redes Sociais</h4>
                    <a href="http://instagram.com/mattechh.dev" target="_blank" rel="noopener noreferrer" className="btn mt-2">Instagram</a>
                </section>

                <p className="copy  mb-5">🍔 2026- DarkSmash </p>
        
        </footer>
    </>
  );
};

export default Conteudo;
