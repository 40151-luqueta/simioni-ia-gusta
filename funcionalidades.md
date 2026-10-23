# Funcionalidades do portfólio

As funcionalidades estão ordenadas por prioridade. As quatro primeiras experiências são os pilares visuais do projeto. Outros requisitos acadêmicos devem ser integrados sem quebrar a narrativa.

## Prioridade 1 — Experiências principais

### 1. Hero de abertura inspirado em Big Dreams Group
- Ocupar a primeira dobra, idealmente quase toda a altura da tela.
- Apresentar `[SEU NOME]` em escala tipográfica grande e marcante.
- Revelar letras ou palavras com uma sequência bem coreografada (máscara, deslocamento, opacidade, escala e pequenos atrasos).
- Mostrar cargo/área e uma frase de apresentação curta depois ou durante a revelação.
- Incluir uma indicação visual de rolagem e CTA funcional, como “Explorar portfólio”.
- Não esconder indefinidamente o conteúdo num carregamento animado.

### 2. Texto que muda com o scroll, inspirado em Kinoria
- Criar uma narrativa tipográfica em que texto, escala, posição ou cor se transformam com o progresso da rolagem.
- Usar conteúdo provisório como `OBSERVO`, `APRENDO`, `CRIO` e `EVOLUO` apenas até o aluno fornecer sua própria frase narrativa.
- Quando for útil, fixar a composição por um intervalo curto com `ScrollTrigger` e `scrub`.
- Garantir que o conteúdo seja legível sem movimento e que a navegação para cima e para baixo funcione.

### 3. “Coisas sobre mim”, inspirada na ideia de memória do Replika
- Cartões temáticos de interesses, habilidades, valores e objetivos.
- Os cartões devem ser alimentados por informações reais fornecidas pelo aluno.
- Animações de entrada em sequência e microinterações no hover, sem exigir hover em dispositivos touch.
- Incluir uma galeria de projetos com título, descrição, tecnologias e link quando houver dados reais.
- Se ainda não houver projetos fornecidos, usar cartões-placeholder claramente marcados para substituição, não projetos fictícios apresentados como verdadeiros.

### 4. Contato e encerramento manuscrito inspirado no Café com Pai
- Criar uma área de contato com exatamente três botões principais: Instagram, TikTok e E-mail.
- Usar ícones SVG inline reconhecíveis, rótulos acessíveis e destinos configuráveis centralmente a partir de `identidade.md` ou de um objeto de configuração no JavaScript.
- Estilo dos botões inspirado no exemplo enviado pelo aluno: botão compacto de cantos arredondados, camada de fundo em gradiente atrás, superfície translúcida com blur sutil, borda fina e camada colorida que gira/inclina no hover.
- Gradiente do Instagram em laranja/coral/rosa/violeta; TikTok escuro com acentos ciano/rosa; E-mail em dourado/bronze. Manter o restante da identidade visual predominantemente preta e dourada.
- Criar a animação de hover de forma original, sem copiar literalmente o snippet fornecido. Respeitar `prefers-reduced-motion` e não depender do hover em celular.
- Não inventar links ou endereços. Se um destino estiver vazio, o botão deve comunicar que precisa ser configurado e não navegar para link falso. O link fica funcional quando um destino real for preenchido.
- Formulário com nome, e-mail e mensagem.
- Validação de campos obrigatórios e sintaxe básica de e-mail; mensagens de erro acessíveis e claras.
- Sem backend por padrão: deixar explícito que o formulário é uma demonstração e não afirmar que a mensagem foi enviada a um servidor.
- Colocar a assinatura final depois do formulário.
- Revelar `[SEU NOME]` como escrita manuscrita progressiva. Se houver SVG próprio, animar os traços; se não, criar uma alternativa de revelação tipográfica original e explicar a limitação.
- O nome na animação inicial e final deve vir do mesmo dado/configuração, sem divergência de grafia.

## Prioridade 2 — Navegação e requisitos comuns de portfólio

### 5. Menu de navegação
- Menu fixo ou flutuante discreto com links de âncora para Início, Sobre mim/Projetos e Contato.
- Estado ativo ou feedback visual ao passar o mouse e navegar por teclado.
- Menu utilizável em celular, com botão de abrir/fechar acessível, se necessário.

### 6. Design responsivo
- Layout adequado para desktop, tablet e celular.
- Em telas pequenas, adaptar animações, tamanho tipográfico, áreas fixadas e espaçamentos.
- Evitar overflow horizontal e alvos de toque pequenos.

### 7. Alternância de tema
- Implementar um controle acessível entre tema escuro e tema claro, se isso não comprometer o prazo ou as animações principais.
- O tema escuro deve ser o padrão; o claro usa marfim, carvão e detalhes dourados.
- A escolha deve atualizar cores e estados de foco de modo consistente. Não deve reiniciar animações de página de forma abrupta.

### 8. Acessibilidade e fallback
- HTML semântico, ordem de tabulação lógica e foco visível.
- Labels nos campos, mensagens de erro vinculadas ao campo e `aria-live` para feedback relevante.
- Compatibilidade com `prefers-reduced-motion`.
- O conteúdo e os links principais devem continuar acessíveis caso GSAP/CDN falhe.

## Prioridade 3 — Qualidade técnica e revisão

### 9. Desempenho
- Usar GSAP + ScrollTrigger sem dependências pagas.
- Priorizar `transform` e `opacity`; limitar partículas, blur e loops contínuos.
- Desativar ou simplificar animações intensas em celulares e quando movimento reduzido estiver ativo.
- Não carregar imagens enormes nem recursos não utilizados.

### 10. Critérios de aceite
- [ ] A página abre sem erro e sem etapa obrigatória de build.
- [ ] A primeira etapa de implementação contém apenas o hero, conforme solicitado no `PROMPT-MESTRE.md`.
- [ ] O nome do aluno aparece corretamente no hero e no encerramento quando for fornecido.
- [ ] A segunda experiência transforma texto durante o scroll.
- [ ] “Coisas sobre mim” apresenta conteúdos reais ou placeholders honestos.
- [ ] A galeria permite acessar projetos reais quando forem adicionados.
- [ ] A validação do formulário funciona e não finge enviar dados a um backend inexistente.
- [ ] A área de contato mostra os três botões Instagram, TikTok e E-mail, estilizados e acessíveis; destinos vazios não viram links falsos.
- [ ] Todos os links e botões têm ações reais.
- [ ] O layout é utilizável em desktop e celular.
- [ ] `prefers-reduced-motion` reduz os efeitos significativos.
- [ ] O console não apresenta erros introduzidos pela implementação.
- [ ] A IA lista os arquivos alterados e explica como testar, sem dizer que verificou algo que não executou.
