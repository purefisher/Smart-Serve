

my_string = "4,2"

result = [x.strip() for x in my_string.split(',')]

print(int(result[0]))