from response import Response

def logging_middleware_factory(next):
    def logging_middleware(req):
        print(f"{req.method} {req.uri}")
        response = next(req)
        print(f"{req.uri} {response.code} {response.reason}")
        return response

    return logging_middleware


def headers_middleware_factory(next):
    def headers_middleware(req):
        response = next(req)
        response.headers["Content-Length"] = len(response.text)
        response.headers["Server"] = "My Mock Server"
        response.headers["Connection"] = "close"
        return response

    return headers_middleware


def csrf_middlware_factory(next):
    def csrf_middleware(req):
        if "X-CSRF-TOKEN" in req.headers:
            return next(req)

        return Response(
            code=401,
            version="HTTP/1.1",
            reason="Unauthorized",
            headers={
                "Content-Type": "text/html"
            },
            text="<h1>Unauthorized</h1>"
        )

    return csrf_middleware