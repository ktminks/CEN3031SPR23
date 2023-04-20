from flask import request, jsonify
from flask_restful import Resource, Api
from utils.DB_Handlers import *

def setup_routes(app):
    api = Api(app, "/recipes")
    api.add_resource(GetRecipe, '/', '<id>')
    api.add_resource(AddRecipe, '/add')
    api.add_resource(EditRecipe, '/edit/<id>')
    api.add_resource(DeleteRecipe, '/delete/<id>')
    setup_db(app)

class GetRecipe(Resource):
    def get(self, id=None):
        if id is None:
            response = get_all_recipes()
        else:
            response = get_recipe(id)
        return jsonify(response)
    
class AddRecipe(Resource):
    def post(self):
        data = request.get_json()
        response = add_recipe(data)
        return jsonify(response)
    
class EditRecipe(Resource):
    def put(self, id):
        data = request.get_json()
        response = edit_recipe(id, data)
        return jsonify(response)
    
class DeleteRecipe(Resource):
    def delete(self, id):
        response = delete_recipe(id)
        return jsonify(response)
    