from ..database import ingredients

def json(i:ingredients.Ingredient) -> dict:
    return {
        "name": i.name,
        "quantity": i.quantity
    }

def add(name: str, quantity: int):
    ingredients.add(name, quantity)

def getAll():
    return list(map(json, ingredients.getAll()))

def test():
    return json(ingredients.get(1))
