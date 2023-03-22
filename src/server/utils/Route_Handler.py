from flask import request, jsonify
from flask_restful import Resource, Api
from utils.DB_Handlers import create_recipe, read_recipe, update_recipe, delete_recipe, read_all_recipes
from utils.DB_Connect import connect_to_db

def setup_routes(app):
    api = Api(app, "/api")

    api.add_resource(GetRecipe, '/recipes', '/recipes/<id>')
    api.add_resource(CreateRecipe, '/recipes/create')
    api.add_resource(UpdateRecipe, '/recipes/update/<id>')
    api.add_resource(DeleteRecipe, '/recipes/delete/<id>')

class GetRecipe(Resource):
    def get(self, id=None):
        if id is None:
            response = read_all_recipes()
        else:
            response = read_recipe(id)
        return jsonify(response)
    
class CreateRecipe(Resource):
    def post(self):
        data = request.get_json()
        response = create_recipe(data)
        return jsonify(response)
    
class UpdateRecipe(Resource):
    def put(self, id):
        data = request.get_json()
        response = update_recipe(id, data)
        return jsonify(response)
    
class DeleteRecipe(Resource):
    def delete(self, id):
        response = delete_recipe(id)
        return jsonify(response)
    