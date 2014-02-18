'''
Created On: 2/17/2014 
Author: Jason Capehart

Personal Site API

'''

import tornado.ioloop
import tornado.web
import tornado.httpserver
import json
import os
import os.path
import sys
from pymongo import MongoClient
from tornado.options import define, options

settings = {"debug":True}

define("port", default=8000, help="run on the given port", type=int)

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        # self.render("content.html")
        self.write("Write something")

class ClotHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    def get(self):
        connection = MongoClient('localhost')
        db = connection['clot']
        records = db.clot.find({})
        clot_list = []
        for record in records:
            clot_list.append(record)
        self.write(json.dumps(clot_list))
        self.finish()

    @tornado.web.asynchronous
    def post(self):
        # TODO: Make a request to get data on a twitter handle and
        #   add it to the graph
        data_json = tornado.escape.json_decode(self.request.body)
        handle = data_json["twitter_handle"]
        self.write(json.dumps({}))
        self.finish()
    

    
if __name__ == "__main__":
    # tornado.options.parse_command_line()
    application = tornado.web.Application(
        handlers = [(r"/api/", MainHandler), 
                    (r"/api/ClotHandler", ClotHandler)
                   ],
        debug = True,
        template_path = os.path.join(os.path.dirname(__file__), "template"),
        static_path = os.path.join(os.path.dirname(__file__), "static"))
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
