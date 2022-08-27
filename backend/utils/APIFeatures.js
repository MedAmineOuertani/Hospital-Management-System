class APIFeatures {
    constructor(query , queryStr){
        this.query = query ;
        this.queryStr = queryStr;

    }
    filter(){
        let queryCopy = {...this.queryStr};
        //NOTE removing fields from the query 
        const removeFields = ['limit', 'page'];
        removeFields.forEach(el => delete queryCopy[el]);

        //NOTE Advance filter for speciality , sex , date of birth  etc ...
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
        queryStr = queryStr.replace(/\b(keyword)\b/g, match => `name`);
        queryStr = JSON.parse(queryStr);

        //NOTE checking if we filtering appointments or not
        if(queryStr.appointment){
            const deleteFields=['appointment'];
            deleteFields.forEach(el=>delete queryStr[el]);
            if(queryStr.doctorName==''){
            const removeFields = ['doctorName'];
            removeFields.forEach(el => delete queryStr[el]);
            }else{
            queryStr.doctorName={
                $regex: this.queryStr.doctorName,
                $options:'i'
            };
            

            }
            if(queryStr.patientName==''){
            const removeFields = ['patientName'];
            removeFields.forEach(el => delete queryStr[el]);
            }else{
            queryStr.patientName={
                $regex: this.queryStr.patientName,
                $options:'i'
            }
        }
        if(queryStr.date==''){
            const removeFields = ['date'];
            removeFields.forEach(el => delete queryStr[el]);
        }else{
            let date = new Date(this.queryStr.date);
            date.setDate(date.getDate()+1);
            queryStr.date={
                    $eq: date
            }
        }

        }else{
            if (queryStr.fName == '') {
                const removeFields = ['fName'];
                removeFields.forEach(el => delete queryStr[el]);
            } else {
                queryStr.fName = {
                    $regex: this.queryStr.fName,
                    $options: 'i'
                }
            }
            if (queryStr.lName == '') {
                const removeFields = ['lName'];
                removeFields.forEach(el => delete queryStr[el]);
            } else {
                queryStr.lName = {
                    $regex: this.queryStr.lName,
                    $options: 'i'
                }
            }
            if (queryStr.dateOfBirth == '') {
                const removeFields = ['dateOfBirth'];
                removeFields.forEach(el => delete queryStr[el]);
            }
            if (queryStr.speciality == '') {
                const removeFields = ['speciality'];
                removeFields.forEach(el => delete queryStr[el]);
            } else {
                queryStr.speciality = {
                    $regex: this.queryStr.speciality,
                    $options: 'i'
                }
            }

        }


        this.query = this.query.find(queryStr);
        return this;
    }
}


module.exports = APIFeatures ;