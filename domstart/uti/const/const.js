const inputypeconst={
    Number:"number",
    Text:"text",
    Date:"date"
}
function getobjarr(){
    const {Number,Text,Date}=inputypeconst;
    const inputobjarr=
    [
        {
            id:1,
            key:'ISBM',
            type: Number
        },
        {
            id:2,
            key:'Author Name',
            type: Text
        },
        {
            id:3,
            key:'Book Name',
            type:Text
        },
        {
            id:4,
            key:'Page Count',
            type:Number
        },
        {
            id:5,
            key:'Price',
            type:Number
        },
        {
            id:6,
            key:'Date of publish',
            type: Date
        },
        {
            id:6,
            key:'discount',
            type:Number
        },
        {
            id:7,
            key:'Available',
            type:Text
        }
    ];
    return inputobjarr;
}