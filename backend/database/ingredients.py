from . import db

from datetime import date, timedelta

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Numeric, nullable=False)
    image = db.Column(db.String, nullable=False)
    expiry = db.Column(db.Date, nullable=False)
    category = db.Column(db.String, nullable=False)


def init():
    db.session.add(Ingredient(name="Broccoli", quantity=5, image="broccoli.jpg", category="Vegetable", expiry=date.today() + timedelta(days=5)))
    db.session.add(Ingredient(name="Carrot", quantity=5, image="sliced-carrot.png", category="Vegetable", expiry=date.today() + timedelta(days=3)))
    db.session.add(Ingredient(name="Potato", quantity=5, image="potatoes-yukon-gold.png", category="Vegetable", expiry=date.today() + timedelta(days=-1)))
    db.session.add(Ingredient(name="Apple", quantity=5, image="apple.jpg", category="Fruit", expiry=date.today() + timedelta(days=2)))
    db.session.commit()


def get(id: int) -> Ingredient:
    return db.get_or_404(Ingredient, id)


def getAll() -> list:
    return Ingredient.query.all()

def add(name:str, quantity:int, image:str, category:str, expiry:int):
    db.session.add(Ingredient(name=name, quantity=quantity, image=image, category=category, expiry=expiry))
    db.session.commit()


def delete(id: int):
    db.session.delete(get(id))
    db.session.commit()

def modify(id:int, quantity:int, expiry:date):
    ingredient = get(id)
    ingredient.quantity = quantity
    ingredient.expiry = expiry
    db.session.commit()
