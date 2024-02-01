new_set = set()
len(new_set)
new_set.add()
# --> throws error in python if value does not exist
new_set.remove()
new_set.discard()
value in new_set

# DICTIONARIES

dictionary["key"], dictionary.get("key", default_value)
dictionary.keys()
dictionary.values()
dictionary.items()
del dictionary["key"]

# DEFAULT DICTIONARY

from collections import defaultdict
defaultdict_demo=defaultdict(int)
