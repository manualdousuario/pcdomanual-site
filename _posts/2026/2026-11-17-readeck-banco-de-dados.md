---
layout: post
title: "[Readeck] Incidente com o banco de dados, 13/10–16/11"
date:   2026-11-17 09:24 -0300
author: rghedin
categories: noticias
---
O nosso [Readeck](https://readeck.pcdomanual.com/), serviço para salvar links para ler depois, começou a apresentar instabilidades em 13 de outubro. De repente, os links deixaram de ser salvos, exibindo uma mensagem “Content missing” onde deveria constar sua entrada na listagem de artigos.

Em linhas gerais, uma recriação do banco de dados do Readeck acarretou a perda das regras que garantem que cada item tenha um número de identificação único. A partir daí, links e contas novos passaram a receber números que já pertenciam a registros antigos. Por isso, os links recém-salvos sumiam, e algumas contas criadas depois dessa data ficaram misturadas com contas antigas, de modo que uma pessoa podia ver os itens de outra. A busca também parou de encontrar o que foi salvo desde então.

\*\*\*

Na tarde desta segunda (16), sentei-me com o Claude para entender o que estava acontecendo e corrigir o problema.

A primeira suspeita levantada era algum erro no [Proxywi](https://github.com/butialabs/proxywi), sistema de proxy desenvolvido pelo Renan para mitigar o bloqueio do nosso Readeck por usar sempre o mesmo IP para capturar as páginas. Testes descartaram essa hipótese.

Foi aí que identificamos o problema no banco de dados e tomamos ciência da gravidade da situação. Além de impedir o salvamento de novos links, a confusão com os identificadores afetou os itens salvos de cinco contas, em pares (duas salvas com o mesmo identificador). Nelas, uma fração mínima dos artigos — salvos após 13/10 — podem ter se misturado e uma conta pode ter acessado o conteúdo salvo da outra.

Para corrigir, separamos as contas misturadas, removemos as cópias indevidas, restauramos as regras perdidas comparando o banco com uma instalação nova e reconstruímos a busca.

As cinco contas mais afetadas foram notificadas, com a solicitação de cadastrarem novas senhas.

Todas as sessões no navegador e em extensões e aplicativos, de todas as contas, foram derrubadas. Na prática, todo mundo terá que se autenticar (“logar”) novamente.

\*\*\*

O problema que enfrentamos não é novo, aliás. Lá atrás, quando estávamos testando o Readeck para oferecê-lo no PC do Manual, o login que caía na conta de outra pessoa apareceu e nos fez desistir da ideia, optando então pelo Wallabag. Um teste posterior, após algumas atualizações do Readeck, foi bem sucedido, o que serviu de sinal verde para usar o Readeck em produção.

Dobraremos a atenção daqui em diante. Pelo menos agora sabemos o caminho das pedras, né?

Pedimos desculpas pela demora na correção — foram 34 dias de instabilidades. Agradecemos a todos que nos notificaram do erro, em especial à assinante Lívia.