import os


begin = '''---
layout: page-with-toc
title: "Publicações"
titlecontent: ""
headings: "Anais,1,2,3,4,7,9,10,11,12"
---



<style>
  body {
    counter-reset: poster-submission;
  }
  h2::before {

    font-weight: bold;
  }
  #toc li a {
    padding-top: 4px;
    padding-bottom: 4px;
  }
</style>

<!-- Many followed the call for posters and the results are AMAZING. We thank all participants for the great work! Some more information can be found on our [call for posters](/calls/posters) page. -->


Aqui estão os anais contendo os reumos inscritos no evento e os pôsteres submetidos!

*clique nas miniaturas para baixar os arquivos PDF*

<h2 id="Anais">Anais do Evento</h2>

[<img src="https://sotm-br.github.io/2023/posters/anais_thumb.png" style="max-height:400px; max-width:400px;">](https://sotm-br.github.io/2023/posters/anais.pdf)

## Pôsteres:

'''

files_data = {}

for filename in os.listdir('posters/pdf'):
    number = int(filename.split('_')[0])

    files_data[number] = filename

print(files_data)

with open('posters/index.md','w+') as writer: 
    writer.write(begin)

    with open('posters/video_descrptions.txt','w+') as v_writer:

        with open('posters/scripts/poster_data.csv') as reader:
            for i,line in enumerate(reader):
                number = i + 1 

                if number != 5:

                    title, authors = line.split(';')

                    poster_entry = f"""
<h2 id="{number}">{number} - {title}</h2>

[<img src="https://sotm-br.github.io/2023/posters/thumbnails/{number}.jpg" style="max-height:300px; max-width:300px;">](https://sotm-br.github.io/2023/posters/pdf/{files_data[number]})
"""

                    writer.write(poster_entry)

                    v_writer.write(f"""
---------------------------------------
POSTER {number}

Vídeos dos trabalhos da Modalidade Pôster do State of The Map Brasil 2023!
                
Título: {title}

Autoria: {authors}
""")