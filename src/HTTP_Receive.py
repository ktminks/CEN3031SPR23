from bottle import route, run, request, abort
import ast
import pymongo
from datetime import datetime

# Connect to MongoDB, define which database (Project), then the table (Recipe Book)
username = ""
password = ""
connection = pymongo.MongoClient("mongodb+srv://" + username + ":" + password + "@cluster0.lhrqxgd.mongodb.net/test")
database = connection["Project"]
table = database["Recipe Book"]

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


# GET (Read) Method
@route('/<name>', method = 'GET')
def get_recipe(name):
    recipe = table.find_one({}, {'Name': name})

    # Check if recipe is in the database or not
    if not recipe:
        abort(404, "No recipe with the Name: %s" % name)

    return recipe

# Delete Method
@route('/<name>', method = 'DELETE')
def update_recipe(name):
    recipe = table.find_one({}, {'Name': name})

    # Check if recipe is in the database or not
    if not recipe:
        abort(404, "No recipe with the Name: %s" % name)

    table.delete_one(recipe)

# Run API on the localhost server at port 4200
run(host = "localhost", port = 4200)
