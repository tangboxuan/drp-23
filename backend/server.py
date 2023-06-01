from . import app

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/test")
def test():
    return "Hello World"