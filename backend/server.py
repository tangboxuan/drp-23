from . import app
from .controller import ingredient

from flask import request

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/add-to-fridge', methods=['POST'])
def add_to_fridge():
    ingredient.add(request.json)

@app.route('/get-fridge')
def get_fridge():
    return ingredient.getAll()

@app.route("/test")
def test():
    return "Hello World"

@app.route("/test-db")
def testDB():
    return ingredient.test()