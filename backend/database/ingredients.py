from . import db

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Numeric, nullable=False)

def init():
    db.session.add(Ingredient(name="Carrots", quantity=5))
    db.session.commit()

def get(id:int) -> Ingredient:
    return db.get_or_404(Ingredient, id)

def getAll() -> list:
    return Ingredient.query.all()

def add(name:str, quantity:float):
    db.session.add(Ingredient(name=name, quantity=quantity))
    db.session.commit()