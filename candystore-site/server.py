from livereload import Server
server = Server()

# arquivos que o livereload vai watchar
server.watch("index.html")
server.watch("style.css")


server.serve(root='.', host='0.0.0.0', port=5500)
