---
layout: page-with-toc
#title: Local &amp; Transportation
title: Localização
headings: "conference-Local,getting-to,food,accommodation,sights"
---

<h2 class='space-bottom1' id='conference-Local'>Local</h2>

O State of the Map 2023 Será Realizado no Centro Politécnico da UFPR, localizado na Avenida Coronel Francisco H. dos Santos, 100 – Jardim das Américas, Curitiba, PR. A principal entrada do câmpus fica na Avenida Coronel Francisco Heráclito dos Santos e as atividades do evento serão realizadas no auditório do prédio da Administração, conforme indicado:

### clique na imagem para abrir o mapa na versão interativa!!

<!-- <div id="map" style="height:420px; width:100%"></div>

[clique aqui para conferir o mapa completo com os principais pontos de interesse!!](https://sotm-br.github.io/2023/venue/map) -->

<!-- ![Clique para conferir o mapa interativo com os principais pontos de interesse!]() -->

<a href="https://sotm-br.github.io/2023/venue/map" rel="Clique para conferir o mapa interativo com os principais pontos de interesse!">![Clique para conferir o mapa interativo com os principais pontos de interesse!!](https://sotm-br.github.io/2023/venue/snapshot.png)</a>

[E aos usuários de OSMAnd, aqui estão os mesmos pontos em formato .gpx](https://sotm-br.github.io/2023/venue/politecnico.gpx)

<h2 class='space-bottom1' id='getting-to'>Acesso</h2>

Para chegar no Centro Politécnico a partir do centro da cidade de ônibus, há duas opções:
* Linha **[469 - Centro Politécnico](https://goo.gl/maps/W9y2srwJcDATgp8M8)**, que sai da estação tubo Círculo Militar e chega na estação tubo Jardim das Américas, em frente à entrada do câmpus. A linha também para em frente ao câmpus Jardim Botânico da UFPR, que tem acessos ao Centro Politécnico e ao próprio parque Jardim Botânico
* Linha **[303 - Centenário / C. Comprido](https://goo.gl/maps/UevNqTyEXx68wTbY9)**, que sai da Praça Rui Barbosa e vai até o Terminal Capão da Imbuia, conectando com a linha **022 - Inter 2 (sentido horário)**, que chega na estação tubo Jardim das Américas. Além de ter ônibus com maior frequência, essa rota também faz outras conexões e paradas no centro da cidade, incluindo a estação tubo na frente da **Rodoferroviária de Curitiba**

O **Aeroporto Afonso Pena** fica mais distante, no município vizinho de São José dos Pinhais. Para chegar ao centro de Curitiba, a única opção de ônibus é:
* Linha metropolitana **[E32 - Aeroporto Afonso Pena / Terminal Boqueirão](https://goo.gl/maps/1GjDHy5dJEDHEGbY7)**, que sai de um ponto na saída do aeroporto e vai até o Terminal do Boqueirão, onde saem as linhas **503 - Boqueirão** ou **500 - Ligeirão Boqueirão** (ambas fazem o mesmo trajeto), chegando na estação tubo UTFPR. Essas linhas também passam pelo Terminal do Hauer, onde o **023 - Inter 2 (sentido anti-horário)** pode levar diretamente ao Centro Politécnico

As informações dos ônibus são atualizadas pela prefeitura no Google Maps, por isso é uma fonte confiável para planejar rotas. Acesse o site oficial para ver em detalhes os [horários das linhas](https://www.urbs.curitiba.pr.gov.br/horario-de-onibus) e os [pontos de parada](https://www.urbs.curitiba.pr.gov.br/mobile/itibus). A tarifa nos ônibus de Curitiba é de R$ 6,00 e a da linha metropolitana é de R$ 5,50

Além do transporte público, também estão disponíveis em Curitiba aplicativos de transporte (como Uber e 99) e serviços de táxi, com pontos espalhados pela cidade

<h2 class='space-bottom1' id='food'>Alimentação</h2>

Serão servidos coffee breaks ao longo do evento e os participantes devidamente inscritos (com presença confirmada até o dia 17 de setembro) terão acesso ao [Restaurante Universitário](https://pra.ufpr.br/ru/ru-centro-politecnico/), localizado dentro do câmpus. Os valores cobrados por refeição serão:
* Café da manhã (06:45 - 08:00): R$ 3,50
* Almoço (11:00 - 13:30): R$ 6,00
* Jantar (17:30 - 19:30): R$ 6,00

Também existem diversos restaurantes e lanchonetes ao redor do câmpus, incluindo uma praça de alimentação no Shopping Jardim das Américas

<h2 class='space-bottom1' id='accommodation'>Hospedagem</h2>

A universidade não disponibiliza acomodações, então resta aos participantes procurar locais de hospedagem por conta, como em aplicativos e sites de reserva. Outra fonte de busca é a [lista de hotéis](https://turismo.curitiba.pr.gov.br/conteudos/hoteis/22) disponibilizada no site da prefeitura

<h2 class='space-bottom1' id='sights'>Turismo</h2>

Os principais pontos turísticos de Curitiba estão concentrados no centro da cidade, podendo ser acessados a pé. O [mapa turístico](http://www.curitiba-parana.net/mapas/imagens/mapa-turistico.jpg) mostra alguns desses pontos e o [site oficial de turismo](https://turismo.curitiba.pr.gov.br/categoria/atrativos-turisticos/3) traz uma lista categorizada de atrações

Curitiba também conta com o tour da [Linha Turismo](https://www.urbs.curitiba.pr.gov.br/transporte/linha-turismo), um ônibus panorâmico que percorre os cartões postais da cidade

Vale conferir ainda as [feiras livres](https://turismo.curitiba.pr.gov.br/conteudo/feiras/46) que acontecem em diversos locais ao longo da semana, oferecendo artesanato, gastronomia e hortifruti

Outra atração popular é o [Trem da Serra do Mar](https://serraverdeexpress.com.br/o-trem/), uma linha turística que sai da Rodoferroviária de Curitiba e desce a Serra do Mar até a cidade de Morretes.

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([-25.45055,-49.23235], 13);
    L.control.scale().addTo(map);
    L.tileLayer('{{ site.map_tiles.url}}', {
      attribution: '{{ site.map_tiles.attribution }}',
      maxZoom: {{ site.map_tiles.maxZoom}}
    }).addTo(map);
    map.scrollWheelZoom.disable();
    L.marker([ -25.4505655, -49.2324812], {icon: L.icon({
      iconUrl: "{{ "/img/logo/sotm_br-logo.svg" | prepend: site.baseurl }}",
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    })}).bindPopup("<h3>Campus Politécnico</h3><p>Local do Evento <a href='https://www.openstreetmap.org/node/11142398666' target='_blank'>Open location on osm.org</a>.</p><p>Mapa detalhado:<a href='https://sotm-br.github.io/2023/venue/map' target='_blank'>aqui!</a>.</p>").addTo(map);



  }, false);
</script>
