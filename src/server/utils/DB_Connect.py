from flask_pymongo import PyMongo

def connect_to_db(app):
    username = app.config.get('MONGODB_USERNAME')
    password = app.config.get('MONGODB_PASSWORD')
    db_url = f'mongodb+srv://{username}:{password}@recipebook.aagp3yv.mongodb.net/recipes?retryWrites=true&w=majority'
    app.config["MONGO_URI"] = db_url
    mongo = PyMongo(app)
    return mongo
