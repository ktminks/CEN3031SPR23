from bottle import route, run, request, abort

@route('/', method='POST')
def add_recipe():
    data = request.body.readline()
    print(data)

run(host="localhost", port=27017)
