from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd



app = Flask(__name__)
CORS(app)



body ={
    "has_department_regular_courses": "1", 
    "has_faculty_regular_courses": "0", 
    "has_fellowship": "0",
    "has_other_minority_data": "0",
    "has_other_regular_courses": "0",
    "is_accredited": "0",
    "is_foreign_students_enrolled": "0",
    "no_of_student_hostel": "0",
    "offers_distance_programme": "0",
    "offers_loan" : "0",
    "offers_scholarship": "0",
    "specialized": "0",
    "student_hostel_available": "0",
    "year_of_establishment": "0",
    "college_building": "0",
    "library": "0",
    "laboratory": "0",
    "playground": "0",
    "stu_is_tech_ratio": "0",
    "n": 10
}

@app.route("/", methods=['GET','POST'])
def home():
    if request.method=='POST':
        print(request)
       
        value_has_department_regular_courses = request.json["has_department_regular_courses"]
        value_has_faculty_regular_courses = request.json['has_faculty_regular_courses']
        value_has_fellowship = request.json['has_fellowship']
        value_has_other_minority_data = request.json['has_other_minority_data']
        value_has_other_regular_courses = request.json['has_other_regular_courses']
        value_is_accredited  = request.json['is_accredited']
        value_is_foreign_students_enrolled =  request.json['is_foreign_students_enrolled']
        value_no_of_student_hostel = request.json['no_of_student_hostel']
        value_offers_distance_programme = request.json['offers_distance_programme']
        value_offers_loan = request.json['offers_loan']
        value_offers_scholarship = request.json['offers_scholarship']
        value_specialized = request.json['specialized']
        value_student_hostel_available = request.json['student_hostel_available']
        value_year_of_establishment = request.json['year_of_establishment']
        value_college_building = request.json['college_building']
        value_library = request.json['library']
        value_playground = request.json['playground']
        value_laboratory = request.json['laboratory']
        value_stu_is_tech_ratio = request.json['stu_is_tech_ratio']
        value_n = int(request.json['n'])

        templist = []
        if value_has_department_regular_courses == '1':
            templist.append("has_department_regular_courses")
        if value_has_faculty_regular_courses == '1':
            templist.append("has_faculty_regular_courses")
        if value_has_fellowship == '1':
            templist.append("has_fellowships")
        if value_has_other_minority_data == '1':
            templist.append("has_other_minority_data")
        if value_has_other_regular_courses == '1':
            templist.append("has_other_regular_courses")

        if value_is_accredited == '1':
            templist.append("is_accredited")
        if value_is_foreign_students_enrolled == '1':
            templist.append("is_foreign_students_enrolled")

        if value_no_of_student_hostel == '1':
            templist.append("no_of_student_hostel")
        if value_offers_distance_programme == '1':
            templist.append("offers_distance_programme")

        if value_offers_loan == '1':
            templist.append("offers_loan")

        if value_offers_scholarship == '1':
            templist.append("offers_scholarship")

        if value_specialized == '1':
            templist.append("specialized")

        if value_student_hostel_available == '1':
            templist.append("student_hostel_available")

        

        if value_college_building == '1':
            templist.append("college_building")

        if value_library == '1':
            templist.append("library")
        if value_playground == '1':
            templist.append("playground")

        if value_laboratory == '1':
            templist.append("laboratory")

        if value_stu_is_tech_ratio == '1':
            templist.append("stu_is_tech_ratio")

        if value_year_of_establishment == '1':
            templist.append("year_of_establishment")

        df = pd.read_csv('final_dataset3.csv')
        
        print(templist)
        df = df.sort_values(by=templist,ascending=True)
        
        resultList = []
        
        for i in range(value_n):
            simp = []
            temp = list(df.iloc[i])
            simp.append(temp[3])
            simp.append(temp[4])
            simp.append(temp[6])
            simp.append(temp[11])
            resultList.append(simp)

        ans  = []

        # for  i in range(len(resultList)):
        #     ans.append( [
        #          resultList[i][0],
        #          resultList[i][1],
        #          resultList[i][2],
        #         resultList[i][3]
        #     ])
        for  i in range(len(resultList)):
            ans.append( {
                "address1": resultList[i][0],
                "address2": resultList[i][1],
                "city": resultList[i][2],
                "college": resultList[i][3]
            })            
        # ans = []

        # for  i in resultList:
        #     ans.append(i)

        print(ans)

        

        
        return jsonify(ans)


        # return jsonify({
        #     "result": ans
        # })


    
            
        


app.run(host='0.0.0.0',debug=True,port=5001)


