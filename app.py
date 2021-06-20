from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    nome = 'Einstein'
    idade = 142
    imagem1 = 'https://i.giphy.com/yStEi5Kb3ZR5e.gif'
    imagem2 = 'https://media1.tenor.com/images/6599e59cd176823cfce76827cd317665/tenor.gif?itemid=12352175'
    texto1 ='Um gênio ouvindo pergunta idiota!'
    texto2 ='Um gênio morrendo de rir!'
    
    return render_template(
        'index.html',
        nome = nome,
        idade = idade,
        imagem1 = imagem1,
        imagem2 = imagem2,
        texto1 =texto1,
        texto2=texto2
    )

if __name__ == '__main__':
    app.run(debug = True)
