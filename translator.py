import pandas as pd
from googletrans import Translator

# here you can translate one column of dataframe

translator = Translator()

inf_tr = []



# from translate import Translator
from langdetect import detect

df = pd.read_csv(r"D:\pycharm projects\crawl linkedin\data\jobvision\result\translation\result_network.csv")

for index, row in df.iterrows():
        inf = row['discription']

        print(index)

        try:

            source_language = detect(inf)
            if source_language == 'en':
                text = inf
                inf_tr.append(text)
            else:
                text = translator.translate(inf, dest='en')
                inf_tr.append(text.text)



        except:
            inf_tr.append('none')

df['discription_tr'] = inf_tr

df.to_csv(r"D:\pycharm projects\crawl linkedin\data\jobvision\result\translation\result_network_tr.csv")
