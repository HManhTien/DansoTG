import requests
import json
import uvicorn
from datetime import datetime
from fastapi import FastAPI


app = FastAPI()

# Danh sách mã quốc gia của World Bank
countries = {
    "World": "1W",
    "Vietnam": "VN",
    "China": "CN",
    "USA": "US",
    "Japan": "JP",
    "UK": "GB"
}

# URL API của World Bank để lấy dữ liệu dân số (SP.POP.TOTL)
url_template = 'http://api.worldbank.org/v2/country/{}/indicator/SP.POP.TOTL?format=json&date={}'

# Hàm để lấy dữ liệu dân số
@app.get("/")
def get_population_data():
    # Kết quả lưu trữ dữ liệu dân số
    population_data = {}

    # Lấy năm hiện tại
    current_year = datetime.now().year

    # Lấy dữ liệu dân số cho từng quốc gia/khu vực trong 10 năm gần đây
    for country_name, country_code in countries.items():
        population_data[country_name] = {}
        for year in range(current_year - 10, current_year):
            url = url_template.format(country_code, year)
            response = requests.get(url)
            data = response.json()

            if len(data) > 1 and 'indicator' in data[1][0]:
                population_value = data[1][0]['value']
                population_data[country_name][year] = population_value
            else:
                population_data[country_name][year] = None
    return population_data

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)