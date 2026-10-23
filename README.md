# Pacote de planejamento — Portfólio pessoal com IA

Este pacote reúne o briefing e o prompt mestre para iniciar o projeto no Antigravity.

## Arquivos
- `AGENTS.md`: regras gerais, tecnologias permitidas, restrições e fluxo de trabalho.
- `referencias.md`: o que aproveitar e o que evitar em cada um dos quatro sites.
- `identidade.md`: paleta, fontes, direção de movimento e campos de dados pessoais para preencher.
- `funcionalidades.md`: funcionalidades em ordem de prioridade e critérios de aceite.
- `PROMPT-MESTRE.md`: prompt pronto para copiar, com etapas de implementação. O primeiro comando autoriza somente o hero.

## Como usar
1. Extraia o pacote dentro da pasta do projeto ou copie os arquivos para a pasta raiz.
2. `identidade.md` já contém a apresentação inicial: Gabriel Simioni, com “Simioni” como destaque visual, programador e experimentação com IA + design profissional no contexto do trabalho do Gustavo. Preencha os três destinos públicos de contato (Instagram, TikTok e e-mail) antes de publicar; não há links fictícios no pacote.
3. Abra o Antigravity na pasta do projeto.
4. Copie a seção “PROMPT PARA O ANTIGRAVITY” de `PROMPT-MESTRE.md` e envie.
5. Revise e aprove o hero antes de pedir a Etapa 2. Prossiga uma etapa por vez.

## Botões de contato
A interface deve exibir três botões principais: Instagram, TikTok e E-mail. O tratamento visual se inspira no exemplo de botão enviado pelo aluno (camada colorida, vidro translúcido, borda fina e rotação no hover), mas deve ser implementado de forma original. Os destinos ainda precisam ser preenchidos em `identidade.md`.

## Observação sobre o formulário
A validação visual pode funcionar sem backend. Para enviar mensagens de verdade, será necessário configurar um endpoint ou serviço de formulário e testar esse envio separadamente.

## Stack
HTML, CSS e JavaScript puro; GSAP + ScrollTrigger via CDN para as animações; sem framework de aplicação e sem plugins GSAP pagos.
