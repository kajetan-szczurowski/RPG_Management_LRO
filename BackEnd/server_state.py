class Server:
    def __init__(self):
        self.online_players = dict()
        self.current_sessions = dict()
        self.test_counter = 0

    def increase(self):
        self.test_counter = self.test_counter + 1


server = Server()
