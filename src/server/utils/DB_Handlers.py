from bson.objectid import ObjectId
from utils.DB_Connect import connect_to_db

def setup_db(app):
    mongo = connect_to_db(app)
    db = mongo.db
    global collection
    collection = db['recipes_collection']

def create_recipe(recipe):
    result = collection.insert_one(recipe)
    return {'_id': str(result.inserted_id)}

def read_recipe(recipe_id):
    result = collection.find_one({'_id': ObjectId(recipe_id)})
    if result:
        result['_id'] = str(result['_id'])
        return result
    else:
        return {'error': 'Recipe not found'}

def read_all_recipes():
    results = collection.find({})
    recipes = []
    for recipe in results:
        recipe['_id'] = str(recipe['_id'])
        recipes.append(recipe)
    return recipes

def update_recipe(recipe_id, updated_data):
    result = collection.update_one({'_id': ObjectId(recipe_id)}, {'$set': updated_data})
    if result.modified_count > 0:
        return {'result': 'Recipe updated'}
    else:
        return {'error': 'Recipe not found or not modified'}

def delete_recipe(recipe_id):
    result = collection.delete_one({'_id': ObjectId(recipe_id)})
    if result.deleted_count > 0:
        return {'result': 'Recipe deleted'}
    else:
        return {'error': 'Recipe not found'}
