from ..database import ingredients


def json(i: ingredients.Ingredient) -> dict:
    return {
        "id": i.id,
        "name": i.name,
        "quantity": i.quantity,
        "image": i.image,
        "expiry": i.expiry,
        "category": i.category,
    }


def add(data):
    ingredients.add(data["name"], data["quantity"],
                    data["image"], data["category"], data["expiry"])


def getAll():
    return list(map(json, ingredients.getAll()))


def test():
    return json(ingredients.get(1))


def delete(data):
    print(data)
    ingredients.delete(data["id"])
