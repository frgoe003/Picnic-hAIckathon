import json

newDic = {}
with open('group6_final.json') as f:
    d = json.load(f)

    for i in range(len(d)):
        print(d[i]["CUSTOMER_ID"])
        if d[i]["CUSTOMER_ID"] in newDic:
            for key in list(d[i]):
                newDic[d[i]["CUSTOMER_ID"]][key].append(d[i][key])

        else:
            newDic[d[i]["CUSTOMER_ID"]] = {}
            for key in list(d[i]):
                newDic[d[i]["CUSTOMER_ID"]][key] = [d[i][key]]
            
print(newDic)

f = open("dataMod.json", "w")
json.dump(newDic, f)
f.close()