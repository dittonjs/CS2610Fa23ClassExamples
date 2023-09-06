from socket import socket, AF_INET, SOCK_STREAM

# 144.39.198.208
with socket(AF_INET, SOCK_STREAM) as s:
    s.bind(("0.0.0.0", 8000))
    s.listen()

    while True:
        print("Waiting for a connection")
        conn, addr = s.accept()
        with conn:
            print(f"Connection recieved from {addr}")
            data = conn.recv(8192)
            text = str(data, "utf-8")
            print(f"Message recieved from {addr[0]}:\n{text}\n\n")





