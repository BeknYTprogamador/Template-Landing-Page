# Update Alpha 2.0 - Versão Português Brasileiro

## Propósito
Introduzir suporte à tradução para Português Brasileiro em toda a aplicação.

## Alterações Implementadas
- Adicionados arquivos de tradução `en.json` e `pt.json` na pasta `src/locales/`.
- Refatorado `App.jsx` para consumir textos dos arquivos de tradução em vez de strings fixas.
- Adicionado um dropdown `<select>` na Navbar para alternar entre inglês e português.
- Atualizado `Slideshow.jsx` para aceitar a prop `lang` e tentar carregar o conteúdo dos slides a partir dos arquivos de tradução.

## Status Atual
- **Funcionando:** Navbar, Hero, Serviços, Sobre, Portfólio e Rodapé traduzem corretamente entre inglês e português.
- **Problema:** O componente `Slideshow` não traduz corretamente. Mesmo com a seção `slides` presente no `pt.json`, o componente continua exibindo textos em inglês.

## Problema Conhecido
- Os textos do slideshow permanecem em inglês independentemente do idioma selecionado.
- Possíveis causas:
  - A prop `lang` não está sendo passada corretamente de `App.jsx` para `Slideshow.jsx`.
  - O arquivo `pt.json` pode não estar estruturado exatamente como esperado (o array `slides` deve corresponder ao do inglês).
  - O slideshow ainda pode estar referenciando um array hardcoded em vez dos dados do JSON.

## Próximos Passos
- Verificar se `App.jsx` está passando `lang={lang}` para `<Slideshow />`.
- Garantir que `pt.json` contenha um array `slides` com a mesma estrutura de `en.json`.
- Confirmar que `Slideshow.jsx` utiliza `translations[lang].slides` em vez de um array local hardcoded.
- Testar a troca de idiomas via dropdown `<select>` para confirmar atualizações dinâmicas.

## Notas
Esta versão está marcada como **Alpha** porque o suporte à tradução ainda está incompleto. O problema do slideshow precisa ser resolvido antes de avançar para Beta. Publicar esta atualização permite que colaboradores revisem a implementação atual e ajudem a corrigir o bug de tradução do slideshow.

### Autor
BeknYTProgramador

### Conectar
<a href="https://github.com/BeknYTProgramador" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-BeknYTProgramador-black?logo=github" alt="Perfil GitHub"/>
</a>
