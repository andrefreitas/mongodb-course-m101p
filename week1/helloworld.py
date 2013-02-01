import bottle
import pymongo

# this is the handler for the root address of the web server
@bottle.route('/')
def index():
	from pymongo import Connection
	connection=Connection('neo.andrefreitas.pt',27017)
	db=connection.test
	names=db.names
	item=names.find_one()
	return "<b>Hello %s!<b>" % item['name']

from pymongo import Connection
connection=Connection('neo.andrefreitas.pt',27017)
db=connection.test
names=db.names
item=names.find_one()
print item['name']
