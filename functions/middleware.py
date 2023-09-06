

def logging_middleware_factory(next):
    def middleware(somevalue):
        # do something with the input
        print(f"INPUT WAS: {somevalue}")
        # call the next middlware
        res = next(somevalue)
        # do something with output of next middleware
        print(f"OUTPUT WAS: {res}")
        return res

    return middleware


def multiply_and_clamp_middleware_factory(next):
    def middleware(num):
        new_num = num * 10
        if new_num > 100:
            return 100

        return next(new_num)

    return middleware

def do_math(x):
    res = x * 2
    return res


def do_string(x):
    return x.upper()


do_math_middleware_chain = logging_middleware_factory(do_math)
do_math_middleware_chain = multiply_and_clamp_middleware_factory(do_math_middleware_chain)

do_string_middleware_chain = logging_middleware_factory(do_string)

x = do_math_middleware_chain(10)

print(x)
print(do_string_middleware_chain("hello"))

