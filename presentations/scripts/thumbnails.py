import subprocess
import os

inpath = 'posters/pdf'

outfolderpath = 'posters/thumbnails'

for filename in os.listdir(inpath):
    print(filename)

    filepath = os.path.join(inpath,filename)

    outpath = os.path.join(outfolderpath,filename.split('_')[0]+'.jpg')

    params = ['convert', '-density','200','-resize','220x205','-fill','white',filepath, outpath]

    subprocess.run(params)
