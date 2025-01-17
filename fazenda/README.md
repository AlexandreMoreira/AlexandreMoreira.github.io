# Fazenda: PWA com Webviewer para o PIM

Este é um Progressive Web App (PWA) simples que abre uma única página web. Ele inclui uma tela inicial personalizada e uma página offline.

## Estrutura do Projeto

- `index.html`: Página principal do PWA.
- `offline.html`: Página exibida quando o PWA está offline.
- `manifest.json`: Arquivo de manifesto do PWA.
- `service-worker.js`: Service worker para gerenciar o cache.
- `styles.css`: Arquivo CSS para estilização.

## Como Testar o PWA

1. **Instale o Live Server**:
   - Abra o VSCode e vá para a aba de extensões (ícone de quadrado no lado esquerdo ou pressione `Ctrl+Shift+X`).
   - Pesquise por "Live Server" e instale a extensão desenvolvida por Ritwick Dey.

2. **Abra seu projeto no VSCode**:
   - Navegue até o diretório do seu projeto PWA e abra-o no VSCode.

3. **Inicie o Live Server**:
   - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server". Isso iniciará um servidor local e abrirá seu PWA no navegador.

4. **Verifique o Manifest e o Service Worker**:
   - Certifique-se de que o arquivo `manifest.json` está sendo referenciado corretamente no seu `index.html`.
   - Verifique se o `service-worker.js` está registrado corretamente no seu `index.html`.

5. **Use o DevTools do navegador**:
   - Abra as ferramentas de desenvolvedor do navegador (pressione `F12` ou `Ctrl+Shift+I`).
   - Vá para a aba "Application" e verifique se o manifest está carregado corretamente e se o service worker está registrado e ativo.

6. **Teste o PWA offline**:
   - No DevTools, vá para a aba "Network" e marque a opção "Offline" para simular uma conexão offline.
   - Recarregue a página e verifique se o PWA funciona corretamente sem conexão à internet.
