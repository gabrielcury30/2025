---
layout: page-with-toc
#title: Local &amp; Transportation
title: Localização
headings: "conference-Local,getting-to,food,accommodation,sights"
---

<h2 class='space-bottom1' id='conference-Local'>Local</h2>

O **State of the Map Brasil 2025** será realizado em parceria com o **GeoPublica 2025** no Auditório do Tribunal de Justiça do Estado da Bahia, localizado na Quinta Avenida do Centro Administrativo da Bahia - CAB em Salvador-Bahia, para os dias **16 a 18 de setembro de 2025**.

As atividades de **treinamento** ocorrerão apenas no dia **19 de setembro de 2025**, na Escola Politécnica da Universidade Federal da Bahia (UFBA), Rua Aristides Novis, nº 02, Bairro Federação em Salvador-Bahia.

### Clique nas imagens para abrir o mapa de localização de ambos os locais, na versão interativa!!

<a href="https://sotm-br.github.io/2025/venue/map" rel="Clique para conferir o mapa interativo!!">![Clique para conferir o mapa interativo!!](https://sotm-br.github.io/2025/venue/snapshot.PNG)</a>

[E aos usuários de OSMAnd, aqui estão os mesmos pontos em formato .gpx](https://sotm-br.github.io/2025/venue/politecnico.gpx)

<h2 class='space-bottom1' id='getting-to'>Acesso</h2>

Para chegar no Tribunal de Justiça do Estado da Bahia, a partir da região litorânea ou do centro da cidade:
* Estação de Metrô - Linha 02 - Estação CAB ou Estação Pituaçu - A partir da Estação de Metrô, há linhas de ônibus exclusivas para o CAB, que param em frente ao Tribunal de Justiça.
  
 [atualizar linhas de onibus]
* Linha **[XXX](https://goo.gl/maps/W9y2srwJcDATgp8M8)**
* Linha **[XXX](https://goo.gl/maps/UevNqTyEXx68wTbY9)**
  
* É possível utilizar o app **CitáMobbi** da Prefeitura Municipal de Salvador, que apresenta as linhas de ônibus da cidade, seus percursos e tempo estimado de espera.

O **Aeroporto Luís Eduardo Magalhães** tem conexão com a linha 2 do metrô na Estação Aeroporto, fazendo conexão com outras áreas da cidade.

A tarifa nos ônibus de Salvador é de R$ 5,60 e no metrô de R$ 4,10.

Além do transporte público, também estão disponíveis em Salvador aplicativos de transporte (como Uber e 99) e serviços de táxi, com pontos espalhados pela cidade.

<h2 class='space-bottom1' id='food'>Alimentação</h2>

Serão servidos coffee breaks ao longo do evento.
Para almoço existe um restaurante na modalidade quilo, dentro do próprio Tribunal de Justiça, e outros restaurantes equivalentes no Centro Administrativo da Bahia (CAB) em diferentes instituições públicas estaduais.

Também na Escola Politécnica da UFBA há um restaurante interno, na modalidade quilo, e outros menores no entorno, com valor acessível.

<h2 class='space-bottom1' id='accommodation'>Hospedagem</h2>

A universidade não disponibiliza acomodações, então resta aos participantes procurar locais de hospedagem por conta, como em aplicativos e sites de reserva. No entorno da região do CAB, sugestão de hospedagem nos bairros: XXX e YYY. Nas proximidades da UFBA, bairros da Federação, Ondina, Rio Vermelho ou Barra.

<h2 class='space-bottom1' id='sights'>Turismo</h2>

Os principais pontos turísticos de Salvador estão distribuídos entre o centro da cidade e a região costeira, devendo ser acessados por transporte. 
Salvador também conta com o tour da [Linha Turismo](https://www.urbs.curitiba.pr.gov.br/transporte/linha-turismo), um ônibus panorâmico que percorre os cartões postais da cidade

Outra atração popular é visitar o município de Mata de São João, na localidade de Praia do Forte e entorno...

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([-12.946947/-38.432686], 13);
    L.control.scale().addTo(map);
    L.tileLayer('{{ site.map_tiles.url}}', {
      attribution: '{{ site.map_tiles.attribution }}',
      maxZoom: {{ site.map_tiles.maxZoom}}
    }).addTo(map);
    map.scrollWheelZoom.disable();
    L.marker([-12.946947/-38.432686], {icon: L.icon({
      iconUrl: "{{ "/img/logo/sotm_br-logo.svg" | prepend: site.baseurl }}",
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    })}).bindPopup("<h3>Tribunal de Justiça do Estado da Bahia</h3><p>Local do Evento <a href='https://www.openstreetmap.org/way/1375080142' target='_blank'>Open location on osm.org</a>.</p><p>Mapa detalhado:<a href='https://sotm-br.github.io/2025/venue/map' target='_blank'>aqui!</a>.</p>").addTo(map);



  }, false);
</script>
