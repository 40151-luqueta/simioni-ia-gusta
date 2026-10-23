# Referências de direção criativa

As referências servem para estudar linguagem visual, ritmo, tipografia e interação. O resultado final deve ser autoral: não reproduzir exatamente o layout, o código, as imagens, as ilustrações, a marca ou os textos dos sites.

## Site 1 — Big Dreams Group
URL: https://bigdreams.group/en

### O que aproveitar
- A força do nome em escala muito grande, como elemento principal da composição.
- A abertura curta e marcante, com uma identidade tipográfica que domina a tela.
- O uso de uma mensagem breve junto ao título, com hierarquia clara.
- A sensação de que o usuário está entrando em uma experiência, e não apenas abrindo uma página com menu e cards.
- Uma transição de abertura que revela gradualmente o restante do portfólio.

### Como adaptar ao portfólio
- Fazer a entrada apresentar `[SEU NOME]` em lettering gigante.
- Animar letras ou palavras com entrada escalonada, máscara, opacidade, deslocamento e mudanças sutis de escala.
- Depois da revelação, mostrar uma frase curta de apresentação e um convite para rolar a página.
- Usar a paleta preta e dourada definida em `identidade.md`; não copiar a marca nem sua disposição exata.

### O que NÃO copiar
- Logotipo, textos, elementos gráficos proprietários ou layout exato.
- Repetir a identidade visual do estúdio. O portfólio deve ter identidade pessoal.

## Site 2 — Kinoria Studio
URL: https://kinoria.studio/

### O que aproveitar
- A experiência de tipografia cinética e de leitura conduzida pelo movimento.
- A ideia de transformar o texto ao longo do scroll, criando uma narrativa visual contínua.
- O contraste entre palavras grandes, áreas de respiro e mudanças de estado visual.
- A sensação de imersão sem depender de muitos componentes tradicionais.

### Como adaptar ao portfólio
- Criar uma seção narrativa com uma área tipográfica em destaque, parcialmente fixada durante um intervalo do scroll.
- Trocar ou transformar palavras e frases à medida que o visitante avança, por exemplo: `OBSERVO`, `APRENDO`, `CRIO`, `EVOLUO`.
- Sincronizar a narrativa com variações graduais de cor, tamanho, espaçamento ou posição.
- Usar GSAP + ScrollTrigger e garantir uma alternativa simplificada para telas pequenas e movimento reduzido.

### O que NÃO copiar
- Não tentar replicar uma animação proprietária pixel por pixel.
- Não usar efeitos tão pesados que escondam o conteúdo ou dificultem a rolagem.

## Site 3 — Replika
URL: https://replika.com/

### O que aproveitar
- A forma de apresentar memórias, interesses e relações por grupos visuais fáceis de explorar.
- A sensação pessoal e narrativa: os dados dizem algo sobre a pessoa, não são apenas uma lista de características.
- Cartões, camadas, gradientes suaves e animações de entrada que ajudam a organizar o conteúdo.
- A separação de temas em categorias claras.

### Como adaptar ao portfólio
- Nomear a seção `Coisas sobre mim`.
- Criar cartões para interesses, valores, ferramentas, habilidades, objetivos e fatos pessoais que o aluno fornecer.
- Introduzir cartões com pequenos movimentos e atrasos escalonados; usar profundidade visual com moderação.
- Integrar uma galeria de projetos nessa seção ou logo após os cartões, sem inventar projetos ou resultados.
- Usar conteúdo real do aluno e placeholders visíveis até o conteúdo ser preenchido.

### O que NÃO copiar
- Não usar personagens, ilustrações, textos, conversas ou elementos da marca Replika.
- Não inventar fatos pessoais para preencher os cartões.

## Site 4 — Café com Pai
URL: https://cafecompai.app/experience/

### O que aproveitar
- A ideia de um encerramento tipográfico com valor emocional.
- A palavra final funcionando como assinatura e memória da experiência.
- O gesto de revelar um texto como se estivesse sendo escrito à mão.

### Como adaptar ao portfólio
- Finalizar a página com `[SEU NOME]` surgindo em um traço manuscrito.
- Quando houver um arquivo SVG de assinatura ou lettering adequado, animar o `stroke-dasharray` e `stroke-dashoffset`; caso contrário, construir uma alternativa original com SVG/texto e revelar o nome de forma progressiva.
- Manter contraste elegante, pouco conteúdo ao redor e um movimento de encerramento claro.
- Exibir o formulário de contato antes da assinatura final, para que o nome seja o último momento visual da página.

### O que NÃO copiar
- Não reproduzir a palavra “Pai”, a marca, os textos, o código ou as ilustrações do site.
- Não afirmar que um texto normal está sendo desenhado por traços reais se a implementação apenas simular uma revelação.

## Princípio de síntese
As quatro referências têm propósitos e estéticas diferentes. O projeto deve uni-las por uma mesma direção autoral: editorial, cinematográfica, sofisticada, preta e dourada, com tipografia expressiva e animações intencionais. Cada seção recebe uma técnica visual própria, em vez de aplicar o mesmo efeito em tudo.

## Inspiração extra — botões de contato enviados pelo aluno

### O que aproveitar
- Botão compacto e bem definido, com cantos arredondados.
- Camada de fundo em gradiente posicionada atrás de uma superfície translúcida com borda fina.
- No hover, o fundo rotaciona/inclina enquanto a superfície de vidro ganha contraste.
- Ícone central branco e facilmente reconhecível, com suporte a foco por teclado.

### Como adaptar
- Criar três botões: Instagram, TikTok e E-mail.
- Instagram com gradiente laranja/coral/rosa/violeta; TikTok em preto com detalhes ciano e rosa; E-mail em dourado/bronze/champanhe.
- Integrar os gradientes somente nessa pequena área de contato para preservar a estética predominante preta e dourada.
- Reimplementar o efeito com CSS moderno, sem copiar literalmente o snippet e sem depender de CSS proprietário legado.
- Não inventar destinos; usar URLs reais fornecidas pelo aluno.
