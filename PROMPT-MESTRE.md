# Prompt mestre — Portfólio pessoal com IA + Antigravity

Copie o prompt abaixo para o Antigravity depois de colocar os arquivos deste pacote na pasta do projeto. Ele define a direção geral e obriga a IA a trabalhar em etapas, para que a primeira entrega seja somente o hero, como no enunciado de referência do professor.

---

## PROMPT PARA O ANTIGRAVITY

Atue como diretor de arte digital, motion designer e desenvolvedor front-end experiente. Você está trabalhando no meu projeto avaliativo de **Portfólio Pessoal com IA**.

### 1. Antes de começar
Leia integralmente `AGENTS.md`, `referencias.md`, `identidade.md` e `funcionalidades.md`. Use este `PROMPT-MESTRE.md` como instrução de fluxo. Não comece a editar arquivos antes de ler os documentos.

Faça primeiro uma análise breve e identifique:
- os requisitos explícitos do projeto;
- as decisões visuais definidas;
- os dados pessoais que ainda estão como `[PREENCHER]`;
- a etapa que está autorizada a ser implementada.

Não invente dados pessoais, projetos, experiências profissionais, habilidades, links ou formas de contato. Se um dado for indispensável para o conteúdo que está sendo criado, faça uma pergunta direta ou mantenha um placeholder visível e fácil de substituir.

### 2. Conceito criativo
Crie um portfólio autoral de linguagem editorial, cinematográfica e sofisticada, com animação como parte da narrativa. O nome completo é Gabriel Simioni, mas o nome visual principal deve ser “Simioni” — use “Simioni” na abertura e na assinatura final. Apresente-o como programador que trabalha e está testando como unir inteligência artificial e design profissional em uma experiência para o trabalho do Gustavo; não deduza que Gustavo seja cliente ou empregador. Use fundo preto/grafite, dourado champanhe, bronze e toques moderados de vinho; títulos em `Bodoni Moda` e texto/interface em `Manrope`, conforme `identidade.md`.

Integre os princípios das quatro referências sem copiá-las literalmente:
1. **Big Dreams Group:** abertura de impacto com meu nome em tipografia gigante.
2. **Kinoria Studio:** narrativa tipográfica que muda de forma sincronizada com o scroll.
3. **Replika:** seção “Coisas sobre mim”, organizada em memórias/interesses/cartões, com galeria de projetos.
4. **Café com Pai:** encerramento em que meu nome aparece sendo escrito como assinatura.

A direção visual precisa parecer uma experiência coesa e original, não quatro templates colados. Cada seção terá uma técnica de movimento principal, variações secundárias discretas e conteúdo legível.

### 3. Stack e restrições
Use HTML5, CSS3 e JavaScript puro. O arquivo de estilo principal será `style.css`, o script principal será `script.js` e a página inicial será `index.html`. GSAP e ScrollTrigger podem ser carregados por CDN para animações. Não use React, Vue, Tailwind, Bootstrap, jQuery, build tools ou plugins pagos do GSAP. Preserve arquivos e configurações existentes, se houver.

O site deve ser responsivo e acessível, suportar navegação por teclado, respeitar `prefers-reduced-motion` e continuar utilizável se a biblioteca de animação falhar. Evite scroll-jacking, excesso de efeitos, layout genérico e animações que impeçam leitura ou navegação.

### 4. Processo incremental obrigatório
**Implemente somente uma etapa por vez.** Não antecipe seções futuras, mesmo que você já conheça o plano completo.

#### Etapa 1 — autorizada agora: apenas o hero
Crie somente a seção inicial (hero) do portfólio.

Ela deve conter:
- meu nome em destaque, usando o valor de `identidade.md`; se ainda estiver como `[PREENCHER]`, mantenha um placeholder visual claramente identificável;
- animação tipográfica inspirada na força e na entrada de Big Dreams Group, mas original;
- uma frase curta de apresentação e um rótulo de área/cargo, usando dados existentes ou placeholders;
- um botão funcional que leve ao destino existente ou, nesta etapa, a uma âncora provisória do próprio projeto sem criar conteúdo de seção ainda inexistente; se não houver destino real, use uma indicação de scroll que não prometa ação inexistente;
- fundo escuro e atmosfera de luxo moderno, com dourado e bronze usados de forma seletiva;
- responsividade e alternativa para movimento reduzido.

Não crie ainda a seção narrativa do scroll, os cartões “Coisas sobre mim”, a galeria de projetos, o formulário de contato ou a assinatura final. Não crie conteúdo fictício para preencher áreas futuras.

Antes de editar, explique em poucas linhas o plano da Etapa 1 e quais arquivos serão criados ou alterados. Depois, implemente o hero nos arquivos apropriados.

Ao terminar, confira o código e, quando o ambiente permitir, abra/execute a página e verifique erros. Não diga que testou no navegador se não fez isso. Liste os arquivos criados/alterados e explique em aproximadamente três linhas as escolhas de design relacionadas às referências. Termine informando que a Etapa 1 está concluída e aguarde minha autorização para a próxima etapa.

### 5. Próximas etapas — não executar agora
Quando eu autorizar, siga a sequência abaixo e implemente apenas a etapa solicitada:
- **Etapa 2:** narrativa tipográfica com texto transformado pelo scroll, inspirada em Kinoria; usar GSAP + ScrollTrigger com `scrub` e fixação apenas se melhorar a narrativa.
- **Etapa 3:** seção “Coisas sobre mim”, inspirada na apresentação de memórias/interesses do Replika; criar cartões animados e galeria de projetos, usando dados verdadeiros ou placeholders honestos.
- **Etapa 4:** área de contato com exatamente três botões — Instagram, TikTok e E-mail — com ícones inline SVG e efeitos de gradiente/vidro inspirados no snippet fornecido, mais formulário validado no front-end e encerramento com “Simioni” sendo revelado como assinatura manuscrita. Não invente URLs nem e-mail; mantenha destinos vazios configuráveis sem navegação falsa.
- **Etapa 5:** menu, alternância de tema, refinamento responsivo, acessibilidade, fallback para movimento reduzido, desempenho, revisão visual e teste dos links/inputs. Se alguma funcionalidade de navegação for necessária para a etapa corrente, implemente o mínimo que a torne utilizável sem antecipar seções futuras.

### 6. Critério de qualidade
O resultado deve demonstrar intenção artística e competência técnica. Priorize ritmo, tipografia, hierarquia, transições suaves, contraste, acabamento e coerência. Não use um efeito só para impressionar: todo movimento deve reforçar o conteúdo.

Em cada etapa, mantenha o código legível, explique as principais alterações em duas linhas e diga como posso testar manualmente. Não refatore partes não relacionadas nem altere a stack sem pedir autorização.

**Comece agora apenas com a análise e a implementação da Etapa 1: hero.**

---

## Mensagens curtas para usar nas próximas etapas

Depois que o hero estiver aprovado, envie uma mensagem por vez:

**Etapa 2:**
> Leia novamente `AGENTS.md`, `referencias.md`, `identidade.md`, `funcionalidades.md` e `PROMPT-MESTRE.md`. Implemente somente a Etapa 2: narrativa tipográfica que muda conforme o scroll, inspirada em Kinoria. Preserve o hero aprovado, use GSAP + ScrollTrigger, mantenha a acessibilidade e a responsividade, teste a navegação para cima/baixo e explique os arquivos alterados.

**Etapa 3:**
> Implemente somente a Etapa 3: seção “Coisas sobre mim” inspirada na apresentação de memórias e interesses do Replika, incluindo cartões animados e galeria de projetos. Use os dados pessoais fornecidos: Gabriel Simioni, nome visual “Simioni”, programador e experimentação com IA + design profissional no contexto do trabalho do Gustavo. Não infira uma relação profissional específica com Gustavo. Use apenas projetos fornecidos e mantenha placeholders identificados para o que estiver faltando. Preserve as etapas anteriores.

**Etapa 4:**
> Implemente somente a Etapa 4: área de contato com exatamente três botões (Instagram, TikTok e E-mail), ícones SVG inline e estilo inspirado no snippet fornecido: fundo em gradiente separado, superfície translúcida, borda fina e rotação/inclinação no hover; adapte ao tema preto/dourado e respeite movimento reduzido. Use apenas os destinos reais preenchidos em `identidade.md`; não invente URLs nem endereço de e-mail. Inclua o formulário validado no front-end e, depois, revele “Simioni” como assinatura manuscrita inspirada no gesto visual de Café com Pai. Não afirme que o formulário envia mensagens para um backend inexistente. Preserve as etapas anteriores.

**Etapa 5 — revisão:**
> Faça a revisão final sem trocar a stack: verifique responsividade, acessibilidade, `prefers-reduced-motion`, links, navegação, validação do formulário, erros no console e desempenho das animações. Corrija apenas problemas encontrados, teste o que for possível e liste claramente o que foi realmente verificado e o que ainda depende de configuração ou conteúdo meu.
