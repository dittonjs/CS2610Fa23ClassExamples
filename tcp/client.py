from socket import socket, AF_INET, SOCK_STREAM

with socket(AF_INET, SOCK_STREAM) as s:
    s.connect(("127.0.0.1", 8000))
    s.sendall(input())