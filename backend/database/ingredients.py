from . import db


class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Numeric, nullable=False)
    image = db.Column(db.String, nullable=False)
    # expiry = db.Column(db.Date, nullable=False)
    category = db.Column(db.String, nullable=False)


def init():
    db.session.add(Ingredient(name="Broccoli", quantity=5,
                   image="/src/assets/broccoli.png", category="Vegetable"))
    db.session.commit()


def get(id: int) -> Ingredient:
    return db.get_or_404(Ingredient, id)


def getAll() -> list:
    return Ingredient.query.all()


def add(name: str, quantity: int, image: str, category: str):
    db.session.add(Ingredient(name=name, quantity=quantity,
                   image=image, category=category))
    db.session.commit()


def delete(id: int):
    db.session.delete(get(id))
    db.session.commit()
