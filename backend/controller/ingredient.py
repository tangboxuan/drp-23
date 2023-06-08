from ..database import ingredients

def json(i:ingredients.Ingredient) -> dict:
    return {
        "name": i.name,
        "quantity": i.quantity,
        "image": i.image
    }

def add(data):
    ingredients.add(data["name"], data["quantity"], data["image"], data["category"])

def getAll():
    return list(map(json, ingredients.getAll()))

def test():
    return json(ingredients.get(1))
