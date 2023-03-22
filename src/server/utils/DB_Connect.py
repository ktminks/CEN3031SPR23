from pymongo import MongoClient

def connect_to_db(app):
    username = app.config.get('MONGODB_USERNAME')
    password = app.config.get('MONGODB_PASSWORD')
    db_url = f'mongodb+srv://{username}:{password}@recipebook.aagp3yv.mongodb.net/?retryWrites=true&w=majority'
    client = MongoClient(db_url)
    db = client['recipes']
    return db
