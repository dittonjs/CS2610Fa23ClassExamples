from response import Response

def home_endpoint(req):
    return Response(
        "HTTP/1.1",
        200,
        "Ok",
        {
            "Content-Type": "text/html"
        },
        "<h1>Hello, world!</h1>"
    )