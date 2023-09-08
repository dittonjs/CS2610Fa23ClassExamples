from endpoints import home_endpoint
from request import Request
from middleware import logging_middleware_factory, headers_middleware_factory, csrf_middlware_factory
# A HELPER TEST FUNCTION

def run_test(condition, name):
    if condition:
        print(f"{name} - Pass")
    else:
        print(f"{name} - Fail")

# COMPOSING THE MIDDLEWARE CHAIN

middleware_chain = csrf_middlware_factory(home_endpoint)
middleware_chain = headers_middleware_factory(middleware_chain)
middleware_chain = logging_middleware_factory(middleware_chain)
print(middleware_chain)

# TESTS

req1 = Request(
    method="GET",
    uri="/",
    version="HTTP/1.1",
    text="",
    headers={
        "Accept": "text/html",
        "X-CSRF-TOKEN": "qasdfoin234908asdfn"
    }
)
print("==== OUTPUT FROM MIDDLEWARE CHAIN APPEARS HERE ====")
response = middleware_chain(req1)
print("==================================================")

## TESTS FOR ENDPOINT FUNCTIONALITY
run_test(
    response.code == 200,
    "Home endpoint base functionality status should be 200"
)

run_test(
    response.reason == "Ok",
    "Home endpoint base functionality reason should be Ok"
)

run_test(
    response.headers["Content-Type"] == "text/html",
    "Home endpoint base functionality content type header should be text/html"
)

## TESTS FOR HEADERS_MIDDLEWARE
print()
run_test(
    "Content-Length" in response.headers and response.headers["Content-Length"] == 22,
    "Home endpoint headers_middleware content length header should be 22"
)

run_test(
    "Server" in response.headers and response.headers["Server"] == "My Mock Server",
    "Home endpoint headers_middleware server header should be set"
)

run_test(
    "Connection" in response.headers and response.headers["Connection"] == "close",
    "Home endpoint headers_middleware connection header should be close"
)

## TESTS FOR THE CSRF MIDDLEWARE
print()
req2 = Request(
    method="GET",
    uri="/",
    version="HTTP/1.1",
    text="",
    headers={
        "Accept": "text/html",
        ## notice that X-CSRF-Token is missing
    }
)

print("==== OUTPUT FROM MIDDLEWARE CHAIN APPEARS HERE ====")
response = middleware_chain(req2)
print("==================================================")

run_test(
    response.code == 401,
    "Home endpoint csrf_middleware missing token should have status 401"
)

run_test(
    response.text == "<h1>Unauthorized</h1>",
    "Home endpoint csrf_middleware text should display unauthorized"
)

run_test(
    "Content-Length" in response.headers and response.headers["Content-Length"] == 21,
    "Home endpoint csrf_middleware content length header should be 21"
)

run_test(
    "Server" in response.headers and response.headers["Server"] == "My Mock Server",
    "Home endpoint csrf_middleware server header should be set"
)

run_test(
    "Connection" in response.headers and response.headers["Connection"] == "close",
    "Home endpoint csrf_middleware connection header should be close"
)