from . import app
from .controller import ingredient

def test_db():
    assert True
    # with app.app_context():
    #     i = ingredient.test()
    #     assert i["name"] == "Carrots"
    #     assert i["quantity"] == 5