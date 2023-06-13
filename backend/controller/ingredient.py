from ..database import ingredients

from datetime import datetime, date, timedelta

def json(i: ingredients.Ingredient) -> dict:
    return {
        "id": i.id,
        "name": i.name,
        "quantity": i.quantity,
        "image": i.image,
        "expiry": (i.expiry - date.today()).days + 1,
        "category": i.category,
    }


def add(data):
    ingredients.add(data["name"], data["quantity"],
                    data["image"], data["category"], 
                    datetime.fromisoformat(data["expiry"]))


def getAll():
    return list(map(json, ingredients.getAll()))


def test():
    return json(ingredients.get(1))


def delete(data):
    print(data)
    ingredients.delete(data["id"])

def modify(data):
    ingredients.modify(data["id"], data["quantity"], date.today() + timedelta(days=data["expiry"]-1))
