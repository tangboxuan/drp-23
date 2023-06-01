from . import app
from .controller import ingredient

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/test")
def test():
    return "Hello World"

@app.route("/test-db")
def testDB():
    return ingredient.test()