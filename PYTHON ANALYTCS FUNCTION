import numpy as np

def calculate_market_trend(prices):
    moving_avg = np.convolve(prices, np.ones(5)/5, mode="valid")
    trend = "up" if moving_avg[-1] > moving_avg[0] else "down"
    return {"trend": trend, "moving_average": moving_avg.tolist()}

prices = [1.23, 1.25, 1.24, 1.30, 1.35, 1.40]
result = calculate_market_trend(prices)
print(result)
