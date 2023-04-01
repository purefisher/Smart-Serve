rotation_constant = 2.2#2.7 #2.9 was ok
finished_rotation_constant = 0.6
cleaning_constant = 10

cup_distance_limit_lower = 4.6
cup_distance_limit_upper = 8.0
cup_distance_limit_turn = 3.6
cup_liquid_limit = 10 #this goes up to the lines on a solo cup

pump_one_pin = 15
pump_two_pin = 13
pump_three_pin = 19
pump_four_pin = 37
pump_five_pin = 40

pump_one_constant = 5
pump_two_constant = 5.5
pump_three_constant = 6
pump_four_constant = 6.5
pump_five_constant = 7

pump_one_shot_constant = 14
pump_two_shot_constant = 20
pump_three_shot_constant = 15
pump_four_shot_constant = 14
pump_five_shot_constant = 10

pump_constants = [[pump_one_pin, pump_one_shot_constant],[pump_two_pin, pump_two_shot_constant],[pump_three_pin, pump_three_shot_constant],[pump_four_pin, pump_four_shot_constant],[pump_five_pin, pump_five_shot_constant]]

drinks_file = "drinks.json"
sensors_file="sensors.json"
motors_file = "motors.json"

relay_on_state = "LOW"
relay_off_state = "HIGH"
