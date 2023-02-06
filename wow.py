from chatterbot import ChatBot
from chatterbot.conversation import Statement
from chatterbot.trainers import ChatterBotCorpusTrainer

cb = ChatBot('learnify')

trainer = ChatterBotCorpusTrainer(cb)

trainer.train("chatterbot.corpus.english")

print("hello there , I'm Learnify")

while True:
    query = input(">>>")
    print(cb.get_response(Statement(text=query, search_text=query)))
