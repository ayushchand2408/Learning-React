import React from "react";
import './App.css';
import Card from "./components/Card";


function App(){
  const jobOpenings = [
  {
    companyImg: "https://tse3.mm.bing.net/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Amazon",
    postedTime: "3 days ago",
    position: "Senior UI/UX Designer",
    jobType: "Part Time",
    positionLevel: "Senior Level",
    income: "$120/hr",
    location: "Mumbai, India"
  },
  {
    companyImg: "data:image/jpeg;base64,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",
    companyName: "Google",
    postedTime: "1 day ago",
    position: "Frontend Engineer",
    jobType: "Full Time",
    positionLevel: "Mid Level",
    income: "$95/hr",
    location: "Bangalore, India"
  },
  {
    companyImg: "https://tse3.mm.bing.net/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Microsoft",
    postedTime: "5 days ago",
    position: "Senior Software Engineer",
    jobType: "Full Time",
    positionLevel: "Senior Level",
    income: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    companyImg: "https://www.bing.com/th/id/OIP.JFmuUQbJLlVGrlMmamLZHgHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    companyName: "Netflix",
    postedTime: "2 days ago",
    position: "Product Designer",
    jobType: "Full Time",
    positionLevel: "Senior Level",
    income: "$130/hr",
    location: "Los Angeles, USA"
  },
  {
    companyImg: "https://www.bing.com/th/id/OIP.f581Jd2lJ9BBZPD1FDYXVwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    companyName: "Spotify",
    postedTime: "4 days ago",
    position: "Backend Developer",
    jobType: "Part Time",
    positionLevel: "Junior Level",
    income: "$70/hr",
    location: "Stockholm, Sweden"
  },
  {
    companyImg: "https://thfvnext.bing.com/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?r=0&o=7&cb=thfvnextfalcon2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    postedTime: "6 days ago",
    position: "UI Designer",
    jobType: "Full Time",
    positionLevel: "Mid Level",
    income: "$85/hr",
    location: "Noida, India"
  },
  {
    companyImg: "https://www.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    companyName: "Meta",
    postedTime: "2 days ago",
    position: "React Developer",
    jobType: "Full Time",
    positionLevel: "Senior Level",
    income: "$125/hr",
    location: "Menlo Park, USA"
  },
  {
    companyImg: "https://www.bing.com/th/id/OIP.tcnugrt6ZLISM2LMVacPXAHaEK?w=273&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    companyName: "Airbnb",
    postedTime: "7 days ago",
    position: "UX Researcher",
    jobType: "Part Time",
    positionLevel: "Junior Level",
    income: "$65/hr",
    location: "Berlin, Germany"
  },
  {
    companyImg: "https://www.bing.com/th/id/OIP.uH4dGMRTIYF2UxGFv67TAgHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    companyName: "Uber",
    postedTime: "1 day ago",
    position: "Data Engineer",
    jobType: "Full Time",
    positionLevel: "Mid Level",
    income: "$105/hr",
    location: "Pune, India"
  },
  {
    companyImg: "https://www.bing.com/th/id/OIP.FTj5Ju62GPQdxkR1-4D28gHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    companyName: "Apple",
    postedTime: "4 days ago",
    position: "iOS Developer",
    jobType: "Full Time",
    positionLevel: "Senior Level",
    income: "$150/hr",
    location: "Cupertino, USA"
  }
];
return (
  <div className="parent">
    {jobOpenings.map(function(elem,index){
      return <Card key={index} job={elem} />
    })}
  </div>
);
}

export default App;