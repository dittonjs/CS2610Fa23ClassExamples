req = """
GET /about HTTP/1.1
Header-1: asdf

asdf;lkjasdf
asdf;lkjasdf
asdf;lkjasdf
"""

print(req.split("\n\n"))