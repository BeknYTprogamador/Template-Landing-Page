# Documentação do Projeto - Landing Page React + Bootstrap

## Visão Geral

Idiomas Disponíveis:
- [English](README(English).md)
- [Português Brasileiro](README(PT-BR).md)
- [Español (España)](README(ES).md)



Este projeto é uma landing page moderna construída com **React** e **Bootstrap 5**. Ele demonstra um design limpo e responsivo com barra de navegação, seção hero, slideshow, serviços, sobre, portfólio e rodapé.

## Novidades no Alpha 2.0
- **Suporte a Tradução para Português (Brasil)**: Adicionados arquivos `en.json` e `pt.json` em `src/locales/` para habilitar conteúdo multilíngue.
- **Seletor de Idioma**: Um dropdown `<select>` na Navbar permite alternar entre inglês e português.
- **Pasta Updates**: Criada a pasta `updates/` onde colaboradores podem documentar notas de versão, problemas e progresso.  
  - Exemplo: `Alpha-2.0` descreve a implementação inicial da tradução e o problema do slideshow.

## Novidades no Alpha 2.2.0
- **Refinamento de Locale**: Atualizada a rota de tradução de `pt` para `pt-br` para refletir corretamente o padrão de Português Brasileiro.
- **Correção de Consistência**: Ajustados imports e referências em `App.jsx` e `Slideshow.jsx` para usar `pt-br.json`.
- **Problema Resolvido**: As legendas do slideshow agora traduzem corretamente ao alternar idiomas.
- **Documentação**: Adicionado `Alpha-2.2.0` na pasta `updates/` para registrar este refinamento.

## Novidades na Alpha 2.2.1
- **Expansão da Documentação**: Adicionados arquivos README multilíngues na pasta `documentation/`:
  - `README(English).md`
  - `README(PT-BR).md`
- **Organização das Updates**: Estruturada a pasta `updates/locales/` para separar notas de versão por idioma.
- **Consistência**: Garantido que os arquivos de documentação sigam o mesmo formato para facilitar navegação e colaboração.
- **Crescimento Planejado**: Novas traduções de README serão adicionadas conforme a landing page expandir o suporte a mais idiomas.

## Novidades na versão Alpha 2.3

- **Suporte à tradução para espanhol (Espanha)**: Adicionado o arquivo es.json em `src/locales/` para habilitar o conteúdo em espanhol.

**Atualização do seletor de idiomas**: O menu suspenso da barra de navegação agora inclui inglês, português (Brasil) e espanhol (Espanha).

**Expansão da documentação**: Introduzido o arquivo `README(ES).md` na pasta documentation/ para fornecer detalhes completos do projeto em espanhol.

**Consistência**: Garantimos que todos os arquivos de tradução (en.json, pt-br.json, es.json) sigam a mesma estrutura para facilitar a manutenção.


## Componentes

### Navbar
* Barra de navegação responsiva construída com Bootstrap.
* Links para seções: Serviços, Sobre, Portfólio.
* Inclui seletor de idioma (`<select>` com `<option>`).
* Fixa no topo da viewport.

### Seção Hero
* Exibe título e subtítulo de boas-vindas.
* Texto localizado carregado dos arquivos JSON.
* Posicionada no topo da página para introduzir o site.

### Componente Slideshow (`Slideshow.jsx`)
* Carrossel React customizado que alterna slides automaticamente a cada 5 segundos.
* Cada slide inclui:
  * Imagem
  * Título
  * Descrição
  * Botão de chamada para ação
* Textos carregados dos arquivos de tradução (`en.json` / `pt-br.json`).
* **Status:** Bug de tradução corrigido no Alpha 2.2.0.

### Seção Serviços
* Três colunas apresentando serviços:
  * Desenvolvimento Web
  * Desenvolvimento de Aplicativos Mobile
  * Design UI/UX
* Texto localizado dos arquivos JSON.
* Usa ícones e grid do Bootstrap.

### Seção Sobre
* Destaque de fundo (`bg-light`).
* Texto centralizado descrevendo a equipe e missão.
* Texto localizado dos arquivos JSON.

### Seção Portfólio
* Grid de cards apresentando projetos:
  * Projeto A: Website de E-commerce
  * Projeto B: Aplicativo Mobile de Fitness
  * Projeto C: Redesign de Website Corporativo
* Texto localizado dos arquivos JSON.
* Usa componentes de card do Bootstrap.

### Rodapé
* Rodapé full-width com direitos autorais.
* Texto localizado dos arquivos JSON.
* Estilizado com `bg-light` e texto centralizado.

## Estilização (`index.css`)
* Reset global com fonte `Poppins`.
* Fundo neutro (`#f9f9f9`) e texto escuro (`#333`).
* Navbar fixa no topo, estilizada com sombra e overrides do Bootstrap.
* Seção Hero estilizada com tipografia e efeitos de hover nos botões.
* Slideshow estilizado com cantos arredondados, layout centralizado e `object-fit: cover` para imagens proporcionais.

## Pontos Fortes
* Estrutura limpa e seções bem organizadas.
* Uso eficaz do Bootstrap para responsividade.
* Suporte a tradução para inglês e português brasileiro.
* Fácil de estender e personalizar.

## Limitações
* Slideshow ainda não possui controles manuais de navegação.
* Rodapé limitado pela largura do container.
* Melhorias de acessibilidade necessárias.

## Melhorias Sugeridas
1. Adicionar controles manuais de navegação (setas, indicadores) ao slideshow.
2. Sobrepor legendas nas imagens do slideshow com fundo semitransparente.
3. Usar `.container-fluid` para elementos full-width (navbar, slideshow, rodapé).
4. Adicionar texto alternativo descritivo às imagens.
5. Melhorar contraste para maior legibilidade.

## Conclusão
Este projeto fornece uma base sólida para uma landing page moderna. Com suporte multilíngue refinado no Alpha 2.2.0 e futuras melhorias no slideshow e acessibilidade, pode evoluir para um template profissional e polido, adequado para uso real.
