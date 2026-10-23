# Regras gerais do projeto

## Objetivo
Criar um portfólio pessoal autoral, responsivo e visualmente marcante, com narrativa visual e motion design de alto nível. A experiência deve parecer um projeto de estúdio criativo, e não um template genérico.

## Leitura obrigatória
Antes de criar, editar, remover ou reorganizar arquivos, leia integralmente:
1. `referencias.md`
2. `identidade.md`
3. `funcionalidades.md`
4. `PROMPT-MESTRE.md`

Se houver conflito entre instruções, siga esta ordem: requisitos explícitos do professor, `AGENTS.md`, `funcionalidades.md`, `identidade.md`, `referencias.md` e, por último, decisões estéticas secundárias.

## Stack obrigatória
- HTML5 semântico.
- CSS3 em um arquivo principal `style.css`.
- JavaScript puro em um arquivo principal `script.js`.
- GSAP e ScrollTrigger podem ser utilizados por CDN para animações; eles são bibliotecas de animação, não um framework de aplicação.
- Não utilizar React, Vue, Angular, Svelte, Tailwind, Bootstrap, jQuery, bundlers ou frameworks de aplicação.
- Não adicionar dependências sem necessidade. Evitar dependências pagas ou plugins GSAP que exijam assinatura.
- A página deve funcionar ao ser aberta localmente em um navegador moderno, sem build obrigatório.

## Organização inicial esperada
- `index.html`
- `style.css`
- `script.js`
- `AGENTS.md`
- `referencias.md`
- `identidade.md`
- `funcionalidades.md`
- `PROMPT-MESTRE.md`

Podem ser criados subdiretórios `assets/` e `assets/images/` se houver imagens reais disponíveis. Não criar arquivos duplicados nem vários CSS/JS concorrentes. Se a estrutura do projeto já existir, inspecione-a antes e preserve-a sempre que possível.

## Direção visual obrigatória
- Linguagem visual editorial, cinematográfica, sofisticada e experimental.
- Fundo predominantemente preto/grafite, com dourado champanhe, bronze e toques controlados de vinho.
- Tipografia de títulos luxuosa e expressiva, corpo de texto legível.
- Tipografia gigante na abertura com “Simioni” como nome principal; transformações de texto ligadas ao scroll; cartões pessoais com uma linguagem visual inspirada em memórias; encerramento com “Simioni” desenhado/revelado como assinatura.
- Transições fluidas, camadas e profundidade visual, luzes/gradientes discretos e mudanças de cor intencionais.
- Consulte os arquivos de referência para as decisões específicas. Não misture todos os efeitos em todos os componentes: cada seção precisa ter um gesto visual próprio.

## Regras de implementação
- Não copiar código, imagens proprietárias, textos ou composições exatas dos sites de referência. Usar apenas princípios visuais e de interação como inspiração, criando uma solução original.
- Usar Gabriel Simioni como nome completo e “Simioni” como nome visual principal. A apresentação informada é: programador, trabalha e está testando IA aplicada a design profissional para o trabalho do Gustavo. Não inferir que Gustavo é cliente, empregador ou empresa. Não inventar biografia adicional, formação, competências, projetos, resultados, e-mail ou URLs de redes sociais; use marcadores identificados para dados ainda ausentes.
- Não criar links falsos, botões sem ação nem interações apenas decorativas que aparentem funcionar.
- Manter HTML semântico, CSS legível e JavaScript organizado por função. Usar nomes de classes claros e consistentes.
- Não colocar todo o conteúdo, CSS e JS em um único arquivo.
- Não reescrever os arquivos de configuração ou mudar a stack sem autorização.
- O design deve ser responsivo em computador, tablet e celular; em telas pequenas, reduzir a complexidade das animações, preservar a hierarquia e impedir overflow horizontal.
- Implementar `prefers-reduced-motion`: pessoas que solicitarem movimento reduzido devem receber uma experiência mais simples e confortável.
- Não usar o scroll como mecanismo que impeça a navegação nativa. Seções fixadas com `ScrollTrigger` devem ter duração controlada e não bloquear o usuário.
- Preferir animações de `transform` e `opacity` para manter o desempenho. Evitar animar continuamente propriedades caras como `filter`, `box-shadow`, `width`, `height` e grandes áreas de `background-position` quando isso prejudicar a fluidez.
- Criar fallbacks caso o GSAP não carregue: conteúdo e navegação continuam visíveis e utilizáveis.
- Se usar imagens, usar apenas assets fornecidos ou fontes com licença adequada; otimizar dimensões e incluir `alt` descritivo. Não depender de imagens externas para que a estrutura principal funcione.
- O formulário não terá backend por padrão. Validar campos no navegador e informar claramente que a demonstração não envia mensagens para um servidor, a menos que um serviço real seja configurado e autorizado. A área de contato deve ter exatamente três botões principais — Instagram, TikTok e E-mail — com destinos configuráveis e sem links fictícios. Use o efeito de gradiente em camada, vidro translúcido, borda fina e rotação no hover como inspiração do snippet do aluno, criando implementação original.
- Acessibilidade: foco de teclado visível, contraste suficiente, labels associados aos campos, textos alternativos, links e botões semanticamente corretos.

## Regras de animação com GSAP
- Registrar `ScrollTrigger` explicitamente.
- Usar `gsap.matchMedia()` ou uma estratégia equivalente para adaptar a experiência a desktop, mobile e `prefers-reduced-motion`.
- Limpar ou reverter animações quando necessário; evitar listeners e timelines duplicados após redimensionamento.
- As animações controladas pelo scroll devem continuar compreensíveis quando o usuário rolar rápido, voltar para cima ou usar um dispositivo móvel.
- Não usar `ScrollSmoother` ou plugins pagos.
- Não criar um cursor personalizado que esconda o cursor nativo em telas touch ou prejudique a acessibilidade.

## Fluxo de trabalho
- Trabalhar por etapas pequenas e verificáveis.
- No primeiro pedido de implementação, criar somente a seção hero, conforme o `PROMPT-MESTRE.md`. Não antecipar as demais seções.
- Antes de codificar cada etapa, resumir brevemente o que será implementado e quais arquivos serão alterados.
- Depois de cada mudança, explicar em duas linhas o que foi feito e informar como testar.
- Ao final de uma etapa, conferir o funcionamento e listar pendências reais. Não afirmar que algo foi testado se não tiver sido testado.
- Não sobrescrever conteúdo do aluno sem explicar a mudança.
