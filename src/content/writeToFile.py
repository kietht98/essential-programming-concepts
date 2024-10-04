import os
import json
import markdown
from pathlib import Path
import random
from PIL import Image
import sys
folder_path = './Interview/course'  # Replace with the path to your folder
titlePath = "title: 'First post 44'"
found_strings = []
keyword_to_search = "title:"
init="---\n\
title: 'First post'\n\
description: 'Lorem ipsum dolor sit amet'\n\
pubDate: 'Jul 08 2022'\n\
heroImage: '/blog-placeholder-3.jpg'\n\
---\n\ "
fileImg = '.png', '.jpg', '.jpeg', '.tiff', '.bmp', '.gif'
# Iterate over all files in the folder
index =0

for filename in os.listdir(folder_path):
    random_number = random.randint(1,100)
    try:
        file_path = os.path.join(folder_path, filename)
        # Check if the current item is a file
        if file_path.lower().endswith((fileImg)):
            print(file_path)
            
        elif os.path.isfile(file_path):
            print(file_path)
            # Open and read the file
            with open(file_path, 'r') as file:
                content = file.read()
                # Convert Markdown to HTML
                # html_content = markdown.markdown(content)
                # data = {
                #     'content': html_content
                # }
                # Convert the dictionary to JSON
                # json_data =  json.loads(content)
                if titlePath in content:
                    newContent = content.replace(titlePath,"title: 'First post {}'".format(random_number))
                    with open(file_path, 'w') as file:
                        file.write(newContent)
                    # if keyword_to_search in content:
                    #     print('seek')
                    # else:
                    #     with open(file_path, 'w') as file:
                    #         addSchema = init + content
                    #         file.write(addSchema)
                    # Do something with the file content
    except:
        print("An exception occurred")
        raise
            
