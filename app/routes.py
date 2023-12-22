
from flask import render_template
from . import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/signup.html')
def signup():
    return render_template('signup.html')

@app.route('/stocks.html')
def stocks():
    return render_template('stocks.html')

@app.route('/portfolio.html')
def portfolio():
    return render_template('portfolio.html')

@app.route('/help.html')
def help():
    return render_template('help.html')

@app.route('/setting.html')
def setting():
    return render_template('setting.html')

@app.route('/watchlist.html')
def watchlist():
    return render_template('watchlist.html')

@app.route('/wallet.html')
def wallet():
    return render_template('wallet.html')

@app.route('/stockinfo.html')
def stockinfo():
    return render_template('stockinfo.html')

