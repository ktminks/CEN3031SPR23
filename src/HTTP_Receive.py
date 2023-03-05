from bottle import route, run, request, abort
import ast
import pymongo
from datetime import datetime

#connect to mongoDB, define which database (Project), then the table (Recipe Book)
username = ""
password = ""
connection = pymongo.MongoClient("mongodb+srv://" + username + ":" + password + "@cluster0.lhrqxgd.mongodb.net/test")
database = connection["Project"]
table = database["Recipe Book"]

@route('/', method='POST')
def add_recipe():
    data = request.body.readline()
    dict = ast.literal_eval(data.decode("UTF-8"))
    tempQ = {"Email": dict["Email"], "Name": dict["Name"], "Ingredients": dict["Ingredients"], "Instructions": dict["Instructions"], "Image": dict["Image"], "Tags": dict["Tags"], "Rating": dict["Rating"], "Notes": dict["Notes"], "Source": dict["Source"], "Date": dict["Date"], "ID": dict["ID"]}
    x = table.insert_one(tempQ)

run(host="localhost", port=27017)
