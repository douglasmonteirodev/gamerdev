import productImg01 from "../images/ryzen5600x.png";
import productImg02 from "../images/i5_11400.png";
import productImg03 from "../images/i7_10700.png";
import productImg04 from "../images/i9_9900.png";
import productImg05 from "../images/athlon_3000g.png";
import productImg06 from "../images/ryzen7_5700g.png";
import productImg07 from "../images/petium_g6400.png";

import productImg08 from "../images/t-dagger_g28b.png";
import productImg09 from "../images/red_wheel-jack.png";
import productImg10 from "../images/red_superion.png";
import productImg11 from "../images/gamdias.png";
import productImg12 from "../images/montech.png";

import productImg13 from "../images/superframe.png";
import productImg14 from "../images/red_pandora.png";
import productImg15 from "../images/hyperX.png";
import productImg16 from "../images/razer_kraker.png";
import productImg17 from "../images/red_zeus.png";

import productImg18 from "../images/rtx3060.png";
import productImg19 from "../images/rx6600.png";
import productImg20 from "../images/rtx3050.png";
import productImg21 from "../images/gtx1650.png";
import productImg22 from "../images/rx6800.png";
import productImg23 from "../images/gtx1050.png";

import productImg24 from "../images/mouse_superframe.png";
import productImg25 from "../images/webcam_red.png";
import productImg26 from "../images/teclado_mecanico.png";
import productImg27 from "../images/mousepad.png";
import productImg28 from "../images/red_cobra.png";
import productImg29 from "../images/combo_teclado-mouse.png";
import productImg30 from "../images/combo_gamer.png";
import productImg31 from "../images/mic_redragon.png";

const products = [
  {
    id: "01",
    productName: "Processador AMD Ryzen 5 5600X ",
    imgUrl: productImg01,
    category: "processador",
    price: 1259,
    shortDesc:
      "O Ryzen 5 5600X conta com 6 núcleos incríveis para quem quer apenas jogar. ",
    description:
      "Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Processador Intel Core i5 10400F ",
    imgUrl: productImg02,
    category: "processador",
    price: 839,
    shortDesc:
      "Os novos processadores Intel® Core™ da 10ª geração oferecem atualizações de desempenho incríveis para melhorar a produtividade e proporcionar entretenimento surpreendente.",
    description:
      "Tecnologia Hyper-Threading Intel® (Tecnologia Intel® HT) oferece dois segmentos de processamento por núcleo físico. Aplicativos altamente segmentados podem fazer trabalhos adicionais paralelamente, concluindo as tarefas mais rapidamente.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Processador Intel Core i7 10700K ",
    imgUrl: productImg03,
    category: "processador",
    price: 2189,
    shortDesc:
      "Os novos processadores Intel® Core™ da 10ª geração oferecem atualizações de desempenho incríveis para melhorar a produtividade e proporcionar entretenimento surpreendente. ",
    description:
      "Processador Intel Core i7-10700K Os novos processadores Intel Core da 10a Geração oferecem atualizações de desempenho incríveis para melhorar a produtividade e proporcionar entretenimento surpreendente, Intel Wi-Fi 6 (Gig) tecnologia, HDR 4K, otimização de sistema inteligentes e muito mais.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "04",
    productName: "Processador Intel Core i9 9900K ",
    imgUrl: productImg04,
    category: "processador",
    price: 2785,
    shortDesc:
      "Recursos de desempenho inteligente integrados aprendem e se adaptam ao que você faz, direcionando potência dinamicamente para onde ela é mais necessária",
    description:
      "O Core i9 9900 de 9a geração oferece uma frequência de 3.50GHz e pode chegar até 5GHz graças a tecnologia Intel Turbo Boost 2.0, ideal para trabalhar, jogar e criar com a rapidez e perfeição. Este processador ainda conta com 16MB Intel Smart Cache, 8 núcleos e 16 threads para maior agilidade e eficiência.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Processador AMD Athlon 3000G",
    imgUrl: productImg05,
    category: "processador",
    price: 349,
    shortDesc:
      "Otimize o seu próximo PC com o premiado processamento Zen da AMD e com a gráfica Radeon. ",
    description:
      "O novo processador AMD Athlon 3000G traz consigo uma computação ágil, dinâmica e confiável pronta para uso. Agora desbloqueado para overclocking, para que os entusiastas possam levar a sua computação para o futuro com o processador AMD Athlon 3000G.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Processador AMD Ryzen 7 5700G",
    imgUrl: productImg06,
    category: "processador",
    price: 1619,
    shortDesc:
      "O Ryzen 7 5700G conta com 8 núcleos incríveis para quem quer apenas jogar.",
    description:
      "Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "07",
    productName: "Processador Intel Pentium Gold G6400,",
    imgUrl: productImg07,
    category: "processador",
    price: 339,
    shortDesc:
      "O Pentium gold G6400 conta com cache de 4MB, frequência base de 4.0 GHz e litografia de 14 nm, garantindo mais desempenho com menos aqueciment",
    description:
      "A arquitetura Intel 64 permite computação de 64 bits em plataformas de servidor, workstation, desktop e portáteis, quando aliadas a software de apoio. Para melhorar o desempenho, a arquitetura Intel 64 permite que os sistemas enderecem mais de 4 GB de memória virtual e física.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Gabinete Gamer T-Dagger G28B ",
    imgUrl: productImg08,
    category: "gabinete",
    price: 189,
    shortDesc:
      "O gabinete G28B conta com uma iluminação RGB no painel frontal para deixar seu PC ainda mais elegante.",
    description:
      "O gabinete gamer G28B é perfeito para quem procura um gabinete espaçoso para ótimas configurações de montagem, sem deixar de lado uma ótima aparencia com o painel lateral de acrílico.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Gabinete Gamer Redragon Wheel Jack",
    imgUrl: productImg09,
    category: "gabinete",
    price: 315,
    shortDesc:
      "Grande destaque como uma ventilação mais fluida graças ao novo espaçamento frontal entre o chassi e o vidro frontal.",
    description:
      "Equipado com um painel frontal em vidro frontal, o canal de entrada fornece um fluxo de ar para o seu sistema e mantém toda a sua construção em uma temperatura constante e sustentável.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Gabinete Gamer Redragon Superion",
    imgUrl: productImg10,
    category: "gabinete",
    price: 269,
    shortDesc:
      "O Redragon Superion garante máxima refrigeração para seu setup, além de seu painel frontal ser feito em malha de metal para melhorar todo o fluxo de ar do gabinete.",
    description:
      "O Redragon Superion tem visual arrojado e elegante na frente do gabinete para uma estética mais industrial, o que o torna um gabinete ideal tanto para gamers quanto para profissionais, transformando qualquer build em um setup de destaque.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Gabinete Gamer Gamdias Talos",
    imgUrl: productImg11,
    category: "gabinete",
    price: 299,
    shortDesc:
      "Reviva a atmosfera do jogo com efeitos de iluminação sensacionais por ARGUS E4 Elite agora!",
    description:
      "Destaque-se com o painel frontal com design de corte cruzado e duas faixas de luz RGB, o ARGUS E4 Elite apresentado como uma forma futurística de mostruário. Conciso, elegante e moderno são as marcas da série ARGUS.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "12",
    productName: "Gabinete Gamer Montech Air 1000",
    imgUrl: productImg12,
    category: "gabinete",
    price: 499,
    shortDesc:
      "Além das 4 ventoinhas ARGB, o AIR 1000 Premium vem com dois painéis frontais, um painel de malha para fluxo de ar adicionado e painel de vidro temperado para exibição adicional.",
    description:
      "A edição AIR 1000 Premium vem com painéis frontais de malha e vidro temperado. Na frente, há 3 ventoinhas ARGB de 140 mm e um único exaustor ARGB de 120 mm na parte traseira. Dando a você controle total não apenas da iluminação, mas também do estilo do painel frontal.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "13",
    productName: "Headset Gamer SuperFrame",
    imgUrl: productImg13,
    category: "headset",
    price: 139,
    shortDesc:
      "O VELKA conta com Iluminação RGB nos dois lados, contendo uma faixa oval RGB juntamente com a Logo, para que seu setup nunca perca o estilo.",
    description:
      "Vire um gamer de verdade com o headset Velka, com seu surround sound 7.1, microfone embutido e luzes RGB. Acompanhe os passos do seu inimigo e ganhe destaque na batalha.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "14",
    productName: "Headset Gamer ReDragon Pandora",
    imgUrl: productImg14,
    category: "headset",
    price: 219,
    shortDesc:
      "Equipado com o sistema de iluminação Redragon Chroma, o Pandora entrega uma beleza inconfundível.",
    description:
      "Além de toda sua incrível construção o headset Pandora também impressiona com sua praticidade devido a seu microfone removível que torna-o uma opção versátil se adequando as mais variadas situações.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "15",
    productName: "Headset Gamer HyperX Cloud II",
    imgUrl: productImg15,
    category: "headset",
    price: 449,
    shortDesc:
      "Entre num mundo que os outros gamers jamais conhecerão: ouça o ruído de botas sobre o piso ou as pás de uma ventoinha distante",
    description:
      "O HyperX Cloud II dispõe de um dispositivo de controlo avançado de áudio USB, com um design inovador que amplifica o áudio e a voz garantindo uma excelente experiência de jogo. Poderá ouvir o que nem imagina.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "16",
    productName: "Headset Gamer Razer Kraken X Lite",
    imgUrl: productImg16,
    category: "headset",
    price: 149,
    shortDesc:
      "O som limpo e fiel com uma ótima redução de ruído, aliado aos poderosos drivers, proporcionam uma experiência completa e imersiva para jogos, músicas e filmes.",
    description:
      "E se dissermos que você pode ter uma imersão completa nos jogos sem sentir que está usando um headset? Conheça o Razer Kraken X Lite. Ultraleve com apenas 250 g e ultraimersivo com som surround 7.1, sente-se e aproveite por horas e horas–jogar por longos períodos nunca foi tão confortável.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "17",
    productName: "Headset Gamer Redragon Zeus X,",
    imgUrl: productImg17,
    category: "headset",
    price: 319,
    shortDesc:
      "Headset ajustável com estrutura de aço durável. Leve, libertará sua cabeça de cargas extras ao jogar ou ouvir música",
    description:
      "Áudio precisamente claro. Aproveite a qualidade de som real clara e sem perdas com tecnologia de som surround 7.1, criando um campo de imersão em qualquer lugar no jogo, ouvindo música ou em uma sala de bate-papo.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "18",
    productName: "Placa de Vídeo Gigabyte RTX 3060",
    imgUrl: productImg18,
    category: "gpu",
    price: 2699,
    shortDesc:
      "As placas de vídeo GeForce RTX oferecem o desempenho e a qualidade de imagem necessários para oferecer sempre o melhor ao seu público.",
    description:
      "A placa Gigabyte usa o melhor design de fase de alimentação para permitir que o MOSFET opere em temperatura mais baixa, e design de proteção contra superaquecimento e balanceamento de carga para cada MOSFET, além dos capacitores certificados Ultra Durable, para fornecer excelente desempenho e vida útil mais longa do sistema todo.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "19",
    productName: "Placa de Vídeo PowerColor RX 6600",
    imgUrl: productImg19,
    category: "gpu",
    price: 1859,
    shortDesc:
      "s placas de vídeo AMD Radeon ™ RX 6600 oferecem taxas de quadros ultra-altas e jogabilidade em 1080p.",
    description:
      "A PowerColor Hellhound Radeon RX 6600 é construída com base na mais recente arquitetura RDNA2 da AMD com desempenho aprimorado e eficiência de resfriamento para capacitar os jogadores a vencer os jogos de 1080p.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "20",
    productName: "Placa de Vídeo Gainward RTX 3050",
    imgUrl: productImg20,
    category: "gpu",
    price: 1999,
    shortDesc:
      "As placas de vídeo GeForce RTX oferecem o desempenho e a qualidade de imagem necessários para oferecer sempre o melhor ao seu público.",
    description:
      "A GeForce RTX 3050 é alimentada pela arquitetura NVIDIA Ampere. Ela é construído com Núcleos RT e Núcleos Tensor aprimorados, novos multiprocessadores de streaming e alta velocidade de memória GDDR6.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "21",
    productName: "Placa de Vídeo MSI GTX 1650",
    imgUrl: productImg21,
    category: "gpu",
    price: 1199,
    shortDesc:
      "As placas de vídeo GeForce RTX oferecem o desempenho e a qualidade de imagem necessários para oferecer sempre o melhor ao seu público.",
    description:
      "Com um novo design de ventilador duplo, o VENTUS exibe orgulhosamente suas formas industriais em cores neutras para se adaptar a qualquer construção.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "22",
    productName: "Placa de Vídeo PowerColor RX 6800 XT",
    imgUrl: productImg22,
    category: "gpu",
    price: 4869,
    shortDesc:
      "A tecnologia Mute Fan desliga inteligentemente o ventilador abaixo de 60 ℃, proporcionando jogos silenciosos durante carga média e baixa, reduzindo o consumo de energia.",
    description:
      "A PowerColor Red Dragon RX 6800 XT apresenta o mesmo novo design de ventoinha da PowerColor Red Devil RX6800XT com ventoinhas triplas 2X 100mm e 1X 90mm para melhorar o fluxo de ar e a pressão do ar para manter a placa nas melhores condições de refrigeração.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "23",
    productName: "Placa de Vídeo INNO3D GTX 1050",
    imgUrl: productImg23,
    category: "gpu",
    price: 949,
    shortDesc:
      "As placas de vídeo GeForce RTX oferecem o desempenho e a qualidade de imagem necessários para oferecer sempre o melhor ao seu público.",
    description:
      "A poderosa placa GeForce GTX 1050 Ti Twin X2 acelera seu trabalho com incríveis melhorias no desempenho. Esteja você fazendo edição de vídeo, animação 3D, fotografia, design gráfico, visualização arquitetônica ou transmissão, você pode economizar muito tempo.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "24",
    productName: "Mouse Gamer SuperFrame FOFLIS",
    imgUrl: productImg24,
    category: "perifericos",
    price: 69,
    shortDesc:
      "Desfrute de controles suaves e confiáveis em qualquer plataforma, com o mouse FOFLIS você vai mitar em seus movimentos rápidos e ganhar destaque na batalha",
    description:
      "O mouse FOFLIS é tudo que você precisa para ter uma rolagem rápida e fluída, com cliques e navegação confiáveis e precisos é equipado com um dos melhores sensores do mercado, o 3325IC.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "25",
    productName: "WebCam Redragon Hitman",
    imgUrl: productImg25,
    category: "perifericos",
    price: 269,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Webcam Redragon Streaming Hitman. Com o clipe universal que pode ser girado livremente, a câmera pode ser colocada com segurança em qualquer posição desejada. A rotação de 360 graus oferece opções ilimitadas para ajudá-lo a encontrar o ângulo de vídeo mais perfeito.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "26",
    productName: "Teclado Gamer Mecânico GK-500",
    imgUrl: productImg26,
    category: "perifericos",
    price: 99,
    shortDesc:
      "O GK-500 conta com uma iluminação LED rainbow para deixar seu setup ainda mais elegante.",
    description:
      "Aprimore seu desempenho nos jogos com o teclado gamer GK-500, com switch mecânico Blue de alta qualidade garante um tempo de resposta ágil para os mais exigentes gamers.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Mousepad Gamer T-Dagger Lava",
    imgUrl: productImg27,
    category: "perifericos",
    price: 49,
    shortDesc: "Pano de alta qualidade traz deslizar suave ao mouse.",
    description:
      "Adicione alta precisão à captura dos movimento do seu Mouse com a linha Lava - em sua versão 'G' que representa o modelo Grande.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "28",
    productName: "Mouse Gamer Cobra M711W RGB",
    imgUrl: productImg28,
    category: "perifericos",
    price: 119,
    shortDesc:
      "O M711 possui 5 perfis de memória, cada um com uma cor de luz dedicada para identificação rápida.",
    description:
      "O Mouse Redragon M711 tem níveis de DPI ajustáveis ​​(500, 1000, 2000, 3000, 5000) que atendem às suas múltiplas necessidades, seja para trabalho diário ou para jogos. O DPI pode ser ajustado livremente em ± 100 de 100 a 10000.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "29",
    productName: "Combo Teclado e Mouse KWG Aries E1",
    imgUrl: productImg29,
    category: "perifericos",
    price: 119,
    shortDesc:
      "Teclado com design resistente a respingos.O mouse possui um design ergonômico avançado e atraente para cada jogador.",
    description:
      "O teclado KWG ARIES E1 tem um design confortável e estrutura resistente a respingos. O KWG ORION E1 mouse op cal gaming emprega microprocessador premium complementado por 3.200 de DPI e sensor óptico de precisão perfeita.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "30",
    productName: "Combo Gamer KWG Aries M1 Lite 4 em 1",
    imgUrl: productImg30,
    category: "perifericos",
    price: 179,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Combo Gamer KWG Aries M1 Lite 4 em 1, Teclado, Mouse, Headset e Mousepad Espectro de luz neon (4-IN-1 COMBO).",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "31",
    productName: "Microfone Gamer Quasar 2 C/ Tripé",
    imgUrl: productImg31,
    category: "perifericos",
    price: 229,
    shortDesc:
      "O Quasar conta com um condensador que fortalece sua competência em garantir uma captura de alta qualidade.",
    description:
      "O Quasar conta com uma base totalmente movél garantindo que fique da melhor e mais confortável forma em seu setup mantendo uma alta durabilidade e resistência.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
];

export default products;
