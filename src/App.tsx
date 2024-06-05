import shacoringa from "./../../midia/shacoringa.jpg";
import soul_fighter from "./../../midia/Shaco-soul-fighter.jpg";
import arcanista from "./../../midia/shaco-arcanista.jpg";
import brinquedo from "./../../midia/shaco-brinquedo.jpg";
import chapeleiro from "./../../midia/shaco-chapeleiro.jpg";
import estrela_negra from "./../../midia/shaco-estrela-negra.jpg";
import goseong from "./../../midia/shaco-goseong.jpg";
import manicomio from "./../../midia/shaco-manicomio.jpg";
import "./style.css";
import Swal from "sweetalert2";
import Compo from "./components/compo";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  const listaDeSkins = [
    {
      id: 1,
      name: "Shacoringa",
      price: 750,
      image: shacoringa,
      history:
        "No sombrio submundo de Runeterra, onde a loucura e o caos se encontram, nasceu Shacoringa, uma figura enigmática cuja risada perturbadora ecoa pelas sombras. Outrora um mero truqueiro, Shaco encontrou um artefato arcano que fundiu sua essência com a do infame palhaço do terror, Coringa. Transformado, ele agora vagueia pelas ruelas de Zaun, seu rosto deformado em um eterno sorriso sinistro, brincando cruelmente com suas vítimas antes de desaparecer sem deixar rastro. A cada aparição, Shacoringa espalha o medo e a incerteza, deixando uma trilha de cartas ensanguentadas e um aviso claro: a loucura é sua maior arma.",
    },
    {
      id: 2,
      name: "Shaco Manicômio",
      price: 975,
      image: manicomio,
      history:
        "No coração de uma cidade corroída pela insanidade, ergue-se o Asilo do Pavor, um lugar onde a sanidade vai para morrer e os horrores tomam forma. Entre seus corredores assombrados, Shaco Manicômio emerge como o maestro da loucura. Um antigo paciente que sucumbiu aos experimentos cruéis de médicos sádicos, Shaco agora veste um uniforme de interno manchado de sangue e adornado com instrumentos de tortura. Seu rosto, contorcido em um sorriso perturbador, esconde a dor e a vingança que fervem dentro dele. Movendo-se nas sombras, ele transforma o medo em seu aliado, brincando com as mentes frágeis dos que ousam entrar em seu domínio. Cada risada ecoante e cada sombra saltitante são prelúdios ao caos que ele está prestes a desencadear, fazendo do manicomio seu playground de terror eterno.",
    },
    {
      id: 3,
      name: "Shaco Goseong",
      price: 975,
      image: goseong,
      history:
        "Nas montanhas nebulosas da antiga Ionia, onde espíritos antigos e lendas sombrias se entrelaçam, surge Shaco Goseong, um espectro vingativo renascido das cinzas de uma tragédia ancestral. Uma vez um homem enganado e traído, ele agora veste a máscara do goseong, o espírito da lamentação. Movendo-se silenciosamente entre as árvores e templos abandonados, Shaco Goseong traz consigo uma melodia melancólica tocada por um antigo instrumento de cordas, hipnotizando suas vítimas antes de ceifar suas vidas com lâminas etéreas. Sua presença é um lembrete dos males do passado e uma ameaça constante aos vivos, perpetuando a lenda de que a verdadeira vingança nunca morre.",
    },
    {
      id: 4,
      name: "Shaco de Brinquedo",
      price: 975,
      image: brinquedo,
      history:
        "Em um mundo encantado onde a linha entre o real e o imaginário se dissolve, surge Shaco de Brinquedo, um boneco encantado criado por um artesão solitário com habilidades mágicas. Feito de madeira polida e pintado com cores vibrantes, Shaco parece inofensivo à primeira vista, uma mera marionete destinada a entreter. No entanto, quando a noite cai e as luzes se apagam, ele ganha vida, movido por uma magia antiga e caprichosa. Com olhos cintilantes e um sorriso travesso, Shaco de Brinquedo se deleita em pregar peças sinistras, rindo com um som que ressoa como sinos de vento, mas com um toque de malícia. Ele desliza silenciosamente entre os brinquedos, transformando a inocência em medo, enquanto os risos das crianças se transformam em gritos de pavor. Cada aparição de Shaco de Brinquedo é um lembrete de que até mesmo os brinquedos mais adoráveis podem esconder segredos sombrios.",
    },
    {
      id: 5,
      name: "Shaco Chapeleiro Maluco",
      price: 520,
      image: chapeleiro,
      history:
        "Nas profundezas de uma floresta encantada onde o tempo e a lógica se distorcem, encontra-se a casa de chá do Chapeleiro Maluco, um lugar de caos e maravilhas. Aqui, Shaco Chapeleiro Maluco reina supremo, vestido com um chapéu extravagante e roupas multicoloridas que desafiam a razão. Antigamente um simples artesão de chapéus, ele foi consumido pela magia de um artefato bizarro que encontrou em um chá cerimonial. Transformado pela loucura e pelo poder, ele agora convida os desavisados para suas festas de chá intermináveis, onde as leis da física são apenas sugestões e cada gole pode prender a vítima em um torpor eterno. Com sua risada insana e truques imprevisíveis, Shaco Chapeleiro Maluco manipula o tempo e a realidade, tornando cada encontro uma experiência surreal e aterradora. Em sua presença, o sensato perde o sentido, e a única certeza é a incerteza da próxima jogada do mestre da loucura.",
    },
    {
      id: 6,
      name: "Shaco Estrela Negra",
      price: 1350,
      image: estrela_negra,
      history:
        "No vasto e sombrio cosmos, onde luzes morrem e nascem eternamente, Shaco Estrela Negra emerge das profundezas do vazio. Uma entidade malevolente criada pelo colapso de uma estrela moribunda, ele vagava entre galáxias, semeando caos e destruição. Com um sorriso sinistro e olhos brilhantes como buracos negros, ele encantava suas vítimas com truques e risos macabros antes de arrastá-las para o abismo infinito. Shaco Estrela Negra não conhecia misericórdia, apenas uma insaciável sede por anarquia, tornando-se o terror de qualquer ser que ousasse cruzar seu caminho estelar.",
    },
    {
      id: 7,
      name: "Shaco Soul Fighter",
      price: 1350,
      image: soul_fighter,
      history:
        "Nas arenas lendárias onde almas guerreiras se confrontam por glória e redenção, Shaco Lutador das Almas surge como uma lenda inigualável. Originário de um reino onde os combates não são apenas físicos, mas também espirituais, Shaco utilizava sua agilidade fantasmagórica e lâminas encantadas para desestabilizar e dominar seus adversários. Cada golpe seu era um espetáculo de precisão mortal, sua risada ecoando nos corações dos oponentes como um presságio de derrota. Movendo-se como uma sombra, Shaco se alimentava da energia das almas derrotadas, tornando-se mais poderoso a cada vitória, sempre em busca do próximo desafio, sempre em busca da alma perfeita para sua coleção.",
    },
    {
      id: 8,
      name: "Shaco Arcanista",
      price: 1350,
      image: arcanista,
      history:
        "Em um mundo onde a magia permeia cada aspecto da existência, Shaco Arcanista era um mestre ilusionista cuja arte transcendeu os truques comuns. Nascido em uma academia secreta de magos, ele rapidamente se destacou pela habilidade em manipular a realidade com feitiços ilusórios. Com um grimório antigo em mãos e um sorriso enigmático, Shaco podia conjurar clones e criar cenários fantásticos que confundiam e aterrorizavam seus inimigos. Seus espetáculos não eram apenas para entreter, mas para desarmar e derrotar, cada riso ecoando com encantamentos poderosos. Em suas viagens, Shaco buscava artefatos arcanos e segredos esquecidos, expandindo seu repertório de feitiços e espalhando a lenda do Arcanista que transformava batalhas em verdadeiras obras de arte mágicas.",
    },
  ];

  const cypher = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    const response = listaDeSkins[index];
    const imagem = response.image;
    if (event.target) {
      Swal.fire({
        title: response?.history && "Bio",
        imageUrl: imagem,
        text: response.history,
        background: "rgba(48, 68, 61)",
        color: "#fff",
      });
    }
  };

  return (
    <>
      <main>
        <h2>Skins Do Shaco</h2>
        <div id="container">
          <Swiper
            style={{ alignItems: "center" }}
            slidesPerView={5}
            pagination={{ clickable: true }}
            navigation
          >
            {listaDeSkins.map((skin, index) => (
              <SwiperSlide key={skin.id} id="skin_id">
                <Compo
                  name={skin.name}
                  image={skin.image}
                  cypher={cypher}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}

export default App;
