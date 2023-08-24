---
title: Linkding
description: Gerenciador de links/favoritos/bookmarks projetado para ser leve, rápido e fácil de configurar.
link: https://linkding.pcdomanual.com
premium: true
---

Linkding ([repositório](https://github.com/sissbruecker/linkding)) é um gerenciador de links favoritos (“bookmarks”) projetado para ser leve, rápido e fácil de configurar.

No PC do Manual, ele está instalado em [linkding.pcdomanual.com](https://linkding.pcdomanual.com) e é fechado para assinantes/apoiadores do **Manual do Usuário** ([saiba mais](https://manualdousuario.net/apoie/)).

## Como criar minha conta?

Ao apoiar o **Manual**, você recebe um formulário para informar qual nome de usuário(a) deseja no Linkding. 

Basta preencher o formulário e, em pouco tempo, sua conta será criada com uma senha temporária, enviada no seu e-mail.

Se você já é assinante e ainda não tem acesso ao Linkding, [envie um e-mail](mailto:suporte@manualdousuario.net).

## Tutorial básico do Linkding

O Linkding está todo em inglês, porém sua interface simples facilita o uso mesmo por quem não entende o idioma.

Nesta parte, demonstro os principais usos.

### Salvando um link

Após autenticar-se, você verá um menu principal com um grande botão roxo, `Add bookmark`. Clique ou toque nele para acrescentar um link/favorito.

{{< figure 
    src="/img/linkding/linkding-novo-favorito.png"
    title=""
    alt="Print da tela de criação de novo link/favorito no Linkding, no Safari do macOS."
>}}

Apenas um campo é obrigatório, o `URL`. Os demais ajudam a organizar seus favoritos:

* `Tags`: São etiquetas que permite categorizar e filtrar os links. Caso queira inserir duas ou mais etiquetas, separe-as por um espaço. Não precisa usar “hashtag” (#); o Linkding acrescenta o sinal automaticamente.
* `Title`: É o título da página e do favorito. O Linkding extrai automaticamente o título da página. Para personalizá-lo, basta clicar no campo e começar a escrever. Se quiser alterar o título sugerido, toque no botão de edição, no final do campo de texto.
* `Description`: Autoexplicativo, é uma breve descrição do link. O Linkding também tenta puxar a descrição da página.
* `Notes`: Parecido com a descrição, mas as notas servem para anotações pessoais acerca do link. É possível usar Markdown para formatá-las.
* `Mark as unread`: É possível usar o Linkding como um serviço “ler depois”, tipo Instapaper e Pocket. Esta caixa marca o link como um a ser lido.
* `Share`: O Linkding funciona como uma pequena rede social. Marque esta caixa para que o link que está salvando seja visível a outras pessoas da instância.

### Gerenciando links

Após salvar alguns links/favoritos, a tela inicial será povoada por eles. Cada link exibe algumas opções, a saber:

{{< figure 
    src="/img/linkding/linkding-favorito.png"
    title=""
    alt="Detalhe de um favorito salvo no Linkding."
>}}

* O link da data relativa (`Today ∞`, `1 week ago` etc.) leva a uma cópia da página que é feita automaticamente na Wayback Machine toda vez que um link é salvo.
* `Edit` abre a tela de edição, similar à de criação do link, para alterações.
* `Archive` arquiva o link, ou seja, tira ele dessa tela, mas não o exclui — o link continua acessível via filtros e busca.
* `Remove` exclui o link.
* `Notes` (quando houver) exibe as anotações do link.

No topo da listagem fica a busca interna, capaz de encontrar palavras e #tags. Aqui, ao contrário da tela de salvamento de links, é preciso escrever a `#` antes de uma etiqueta para encontá-la — `#etiqueta`, por exemplo.

Ao lado da busca há um botão que expande a edição em lote, ou seja, que permite alterar/editar diversos links de uma vez só. Ao clicar nele, as opções surgem (`Archive`, `Delete` e `Tags`) e os links ganham uma caixa de seleção ao lado.

### Filtros

No menu do topo existe a opção `Bookmarks`. Ela expande alguns filtros possíveis:

* `Active`: Mostra links que não estão arquivados.
* `Archived`: O contrário, ou seja, mostra todos os links arquivados.
* `Shared`: Mostra links compartilhados por todos os usuários da instância. É possível filtrar por um usuário específico e/ou por etiquetas no menu à direita.
* `Unread`: O seu índice de “ler depois”, com todos os links sinalizados como não lidos.
* `Untagged`: Mostra todos os links que não têm etiquetas.

Na coluna à direita ficam as etiquetas (“tags”). Clique em uma para filtrar os links. É possível criar filtros com múltiplas etiquetas: ao clicar em uma, todas as outras etiquetas presentes nos links filtrados aparecem na coluna e são clicáveis.

## Configurações

O Linkding oferece um bom nível de personalização. Todas as opções estão reunidas [nas configurações](https://linkding.pcdomanual.com/settings/general) (`Settings`).

Entre as opções, destaco:

* `Bookmark date format`: Por padrão, as datas no Linkding são relativas (“há uma semana”, “há dois dias”). Para mudar isso, troque esta opção para `Absolute`. Se não quiser ver datas, troque-a para `Hidden`.
* `Show notes permanently`: Exibe as anotações de cara, dispensando o clique/toque para expandi-las.
* `Tag search`: Selecione `Lax` para dispensar a hashtag (`#`) ao pesquisar por etiquetas.
* `Enable bookmark sharing`: Habilita o compartilhamento de links com outras pessoas da instância. O marcador é desativado por padrão, ou seja, para compartilhar um link, é preciso sinalizar esse intuito explicitamente.

Depois das opções estão as ferramentas de importação e exportação. Elas lidam com o formato HTML, usado por outros serviços do tipo, como Pinboard e Pocket.

## Ecossistema e apps

O Linkding ainda não tem muitos aplicativos e os que existem não são muito bons.

Na aba [Integrações](https://linkding.pcdomanual.com/settings/integrations) é possível acessar as extensões de navegadores (Firefox e Chrome), o bookmarklet, a API REST e feeds para todos os seus links/favoritos e os marcados como não lidos.

No repositório do Linkding há uma [lista de aplicativos, bibliotecas e outros recursos de terceiros](https://github.com/sissbruecker/linkding#community).

Quem usa sistemas da Apple pode recorrer a [este atalho](https://www.icloud.com/shortcuts/9d0440165f9b4ab9ae22ebc8d0a690c7) criado para o [aplicativo homônimo](https://apps.apple.com/br/app/atalhos/id915249334).