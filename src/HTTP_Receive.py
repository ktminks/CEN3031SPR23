from bottle import route, run, request, abort
import ast
import array
import pymongo
from datetime import datetime

# Connect to MongoDB, define which database (Project), then the table (Recipe Book)
username = ""
password = ""
connection = pymongo.MongoClient("mongodb+srv://" + username + ":" + password + "@cluster0.lhrqxgd.mongodb.net/test")
database = connection["Project"]
table = database["Recipe Book"]

# GET ALL (Read) Method
@route('/', method = 'GET')
def getall_recipes():
    # Find ever recipe currently in the database and store it as an array
    recipes_array = list(table.find({}))
    return recipes_array

# GET (Read) Method
@route('/<recipe_name>', method = 'GET')
def get_recipe(recipe_name):
    recipe = table.find_one({}, {'Name': recipe_name})
    # Check if recipe is in the database or not
    if not recipe:
        abort(404, "No recipe with the name: %s" % recipe_name)
    return recipe

# POST (Create) Method
@route('/', method = 'POST')
def add_recipe():
    # Receive receipe and check for any errors
    try:
        data = request.body.readline()
    except:
        abort(404, "Data not received")
    dict = ast.literal_eval(data.decode("UTF-8"))
    tempQ = {"Email": dict["Email"], "Name": dict["Name"], "Ingredients": dict["Ingredients"], "Instructions": dict["Instructions"], "Image": dict["Image"], "Tags": dict["Tags"], "Rating": dict["Rating"], "Notes": dict["Notes"], "Source": dict["Source"], "Date": dict["Date"], "ID": dict["ID"]}
    # Check if recipe already exists, as POST is used to create a recipe not change one
    check = table.find_one({'Name': tempQ['Name']})
    if check:
        abort(409, "Recipe already exists")
    # Insert recipe into database and check for any errors
    try:
        x = table.insert_one(tempQ)
    except:
        abort(404, "Data not inserted into database")

# Delete Method
@route('/<name>', method = 'DELETE')
def delete_recipe(name):
    recipe = table.find_one({}, {'Name': name})
    # Check if recipe is in the database or not
    if not recipe:
        abort(404, "No recipe with the Name: %s" % name)
    table.delete_one(recipe)

# Run API on the localhost server at port 4200
run(host = "localhost", port = 4200)

import unittest
class TestDB(unittest.TestCase):
    def test_getAll(self):
        #get all of the recipes in the database
        temp = table.find({})
        count = 0
        #for each recipe, increase count by one
        for recipe in temp:
            count = count + 1
        funct_test= getall_recipes("")
        self.assertEqual(count, len(funct_test))

    def test_get(self):
        #get the Chocolate Chip Cookies recipe in the database
        temp = table.find_one({}, {'Name': 'Chocolate Chip Cookies'})
        funct_test = get_recipe('Chocolate Chip Cookies')
        self.assertEqual(temp, funct_test)

    def test_delete(self):
        #get the Chocolate Chip Cookies recipe in the database
        delete_recipe('Chocolate Chip Cookies')
        temp = table.find_one({}, {'Name': 'Chocolate Chip Cookies'})
        self.assertEqual(temp, None)

unittest.main(argv = [''], verbosity = 2, exit = False)
