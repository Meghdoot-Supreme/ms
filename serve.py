import http.server, os, sys
os.chdir("/Users/muskanagarwal/Desktop/Meghdoot Supreme x Pranav")
handler = http.server.SimpleHTTPRequestHandler
httpd = http.server.HTTPServer(("", 7777), handler)
httpd.serve_forever()
