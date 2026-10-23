# Identidade visual e conteúdo pessoal

> Preencha os campos marcados com `[PREENCHER]`. A IA não deve inventar informações pessoais. Enquanto um campo estiver vazio, use um placeholder claramente identificável ou deixe a informação fora da versão pública.

## Identidade pessoal
- Nome completo: `Gabriel Simioni`.
- Nome principal de destaque (hero, animação inicial e assinatura final): `Simioni`.
- Regra de marca pessoal: priorizar visualmente “Simioni”; usar “Gabriel Simioni” apenas em contextos secundários em que o nome completo ajude na identificação.
- Como quero ser apresentado: `Programador`.
- Frase curta de apresentação: `Sou programador, trabalho e estou testando como unir inteligência artificial e design profissional em uma experiência para o trabalho do Gustavo.`
- Contexto do projeto: experimento de IA aplicada a design profissional para o trabalho do Gustavo; não apresentar Gustavo como cliente, empregador ou empresa sem confirmação.
- Cidade/região (opcional): `[PREENCHER ou deixar em branco]`
- Foto pessoal: `[PREENCHER: usar foto fornecida / não usar foto]`
- Idioma principal do site: Português do Brasil.
- Tom de voz: criativo, confiante, humano, curioso e direto; evitar exageros corporativos e promessas não comprovadas.

## Objetivo do portfólio
Apresentar quem sou, meus interesses, minhas habilidades e meus projetos em uma experiência interativa que demonstre cuidado visual, criatividade e conhecimento de HTML, CSS, JavaScript e motion design.

## Paleta proposta
- Fundo principal — `#090909` (preto profundo)
- Fundo alternativo — `#151311` (grafite quente)
- Superfície de cartão — `#201C18` (carvão amarronzado)
- Dourado champanhe — `#D6B778` (principal destaque)
- Bronze — `#987447` (destaque secundário)
- Marfim — `#F4EFE6` (texto claro e modo alternativo)
- Cinza de leitura — `#B7B0A5` (texto secundário)
- Vinho profundo — `#542D3D` (cor de transição usada com parcimônia)

### Regras de cor
- Usar preto/grafite em maior proporção, dourado para hierarquia e vinho/bronze como detalhes.
- Dourado não deve aparecer em todos os elementos ao mesmo tempo; reservar para palavras importantes, linhas, estados ativos e foco visual.
- Transições de cor podem acontecer durante o scroll, mas devem manter legibilidade.
- Se existir alternância de tema, usar um segundo tema marfim/preto/dourado, preservando contraste e identidade. O tema inicial padrão deve ser escuro.

## Tipografia
- Títulos e palavras em destaque: `Bodoni Moda` (serifada, editorial e luxuosa), com fallback `Georgia`, serif.
- Texto corrido, botões, navegação e formulário: `Manrope`, com fallback `Arial`, sans-serif.
- Usar no máximo duas famílias principais; variar peso, caixa, espaçamento, itálico e tamanho antes de adicionar fontes.
- Títulos podem ser enormes, com `clamp()` para escala responsiva.
- Evitar títulos longos em caixa alta quando prejudicarem a leitura.

## Direção de movimento
- Movimento com peso, ritmo e pausas: animações de entrada bem encenadas, transformação tipográfica, scrub de scroll, cartões surgindo em sequência e assinatura final.
- Curvas de aceleração elegantes e consistentes; evitar animações com aparência de apresentação genérica.
- Usar pequenas distorções, deslocamentos, escalas, máscaras e gradientes luminosos somente quando ajudarem a narrativa.
- Priorizar movimento relacionado ao conteúdo e permitir redução de movimento.

## Conteúdo a reunir
- Biografia curta: `Sou programador e estou explorando como a inteligência artificial pode trabalhar junto com design profissional. Este portfólio faz parte de um experimento aplicado ao trabalho do Gustavo.`
- Habilidades e ferramentas que realmente conheço: `[PREENCHER]`
- Interesses pessoais que quero compartilhar: `[PREENCHER]`
- Objetivos de estudo/carreira: `[PREENCHER]`
- Projetos reais (nome, objetivo, tecnologia, link e imagem, se houver): `[PREENCHER]`
- Instagram público: `[PREENCHER: URL completa do perfil; não inventar]`
- TikTok público: `[PREENCHER: URL completa do perfil; não inventar]`
- E-mail público: `[PREENCHER: endereço que pode ser divulgado; não inventar]`
- GitHub: `[PREENCHER ou deixar em branco]`
- LinkedIn: `[PREENCHER ou deixar em branco]`

## Botões de contato
- Exibir exatamente três botões principais: Instagram, TikTok e E-mail.
- Todos devem ter ícone inline SVG, nome acessível e rótulo/tooltip visível em foco ou hover.
- Inspirar-se no botão enviado pelo aluno: formato compacto quadrado com cantos arredondados, camada de fundo colorida separada, superfície translúcida com efeito de vidro, borda fina e transição no hover em que o fundo gira/inclina cerca de 25–35 graus.
- Instagram: gradiente inspirado nas cores oficiais da plataforma (laranja, coral, rosa e violeta).
- TikTok: base escura com detalhes ciano e rosa, harmonizados com a identidade preta/dourada do site.
- E-mail: gradiente dourado/bronze/champanhe, evitando competir com o botão principal da página.
- Preservar o luxo e a coerência visual: os gradientes aparecem principalmente nos botões de contato e estados de interação, sem substituir a paleta global preta e dourada.
- Não copiar literalmente o código CSS fornecido nem usar filtros antigos proprietários; recriar o efeito com CSS moderno.
- Os links devem vir de uma configuração central e ser fáceis de trocar. Não criar URLs, usuários ou e-mail fictícios. Se um destino estiver vazio, manter o botão com estado não configurado e feedback claro, sem navegar para um endereço falso; quando o endereço real for informado, torná-lo um link funcional.
- O botão de e-mail deve usar `mailto:` somente depois de existir um endereço real.

## Formulário
O formulário pode ter nome, e-mail e mensagem. Por padrão, será validado no navegador, mas não terá envio real até que um backend ou serviço de formulário seja configurado. A interface deve dizer isso claramente ou usar um link `mailto:` somente se houver um endereço real fornecido.
