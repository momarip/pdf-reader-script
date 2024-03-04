# PDF Reader Script
This Node.js script is designed to process PDF files containing order information, extract specific details such as client name, address, ID, amount, date, and contract, and then store this information using a POST request.

Installation
* Usage
* Configuration
* Dependencies
* Contributing
* License

1. Installation : 
Clone the repository.
```
git clone https://github.com/your/repository.git
```

2. Install dependencies :
```
npm install
```

3. Usage :
You can either place the PDF file you want to process in the files folder or use the api to get your file from the zoho workdrive.
```
node index.js
```

4. Configuration :
Modify the index.js file to customize the extraction logic or the POST request endpoint.

# Detailed Explanation
# 1. PDF File Processing:
The script uses the pdf2json library to parse the PDF files and extract text content. It then searches for specific patterns or keywords to identify and extract the required information, such as client details and order information.

# 2. Data Extraction: 
The extracted data is processed to extract relevant details, such as client name, address, ID, amount, date, and contract details. This is achieved through regular expressions or other text processing techniques.

# 3. POST Request:
Once the required information is extracted, the script uses the axios library to send a POST request to a specified endpoint. This endpoint can be a server or API designed to receive and process the extracted data for further use.

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
