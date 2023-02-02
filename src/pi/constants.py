from cocktail import cocktailcreate as cocktail 

pop_time_constant=10
alcohol_time_constant=5
rotation_constant = 2.88

drinks_file = "drinks.json"
sensors_file="sensors.json"
motors_file = "motors.json"

relay_on_state = "LOW"
relay_off_state = "HIGH"

pumpconfiguration = cocktail.config(drinks_file)
motorconfiguration = cocktail.config(motors_file)
sensorconfiguration = cocktail.config(sensors_file)