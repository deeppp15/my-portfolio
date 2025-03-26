import dataMiningImg from "../../assets/dataMining.png";
import monopolyImg from "../../assets/monopoly.avif";
import loyaltyFirst from "../../assets/LoyaltyFirst.png";
import bookstore from "../../assets/onlineboookstore.png";
import heartprediction from "../../assets/MapReduce.png";
import embedded from "../../assets/embedded.jpg";
import aws from "../../assets/aws.png";

const ProjectCardData=[
    {
        imgsrc:aws,
        title:"Fullstack Application",
        text:"A Fullstack application with React as Front end, Springboot for backend. Deployed on CDN with private bucket and container running on EC2 private subnet with NAT Gateway on AWS.",
        view:"https://github.com/deeppp15/FetchBackend"
    },
    {
        imgsrc:dataMiningImg,
        title:"Data Mining Basics",
        text:"Basic Data mining algorithms implemented in python and pandas. (Logistic Regression, Adaboost with Decision Stump, K Means Clustering, Cost Sensitive Learning, NIST Dataset, IRIS Dataset)",
        view:"/my-portfolio/dataMining"
    },
    {
        imgsrc:monopolyImg,
        title:"Monopoly Game",
        text:"CLI based Secure multiplayer Monopoly game with session management, iterative salted password hashing, rest calls, TLS (SSL) implemented in Fast Api python, HTML & CSS and Javascript.",
        view:"https://github.com/deeppp15/secure-mini-mono"
    },  
    {
        imgsrc:loyaltyFirst,
        title:"Loyalty First Android App",
        text:"Retail based android app with a customer loyalty program, implemented with Java servelets, JSP, MySql Db implemented on android studio. Main focus of the project was on Database management.",
        view:"https://github.com/deeppp15/Loyalty-First"
    },
    {
        imgsrc:bookstore,
        title:"Online Book Store",
        text:"An online Book Store webapp based on Angular Js . Developed using widely used Human Computer Interation Principles and Ucer Centered Design/ Development Cycle",
        view:"https://swe632.github.io/online-book-store-hw7/home"
    },
    {
        imgsrc:heartprediction,
        title:"Heart Attack and Kidney faliure Prediction",
        text:"A project developed to demonstrate distributed machine learning computing on pyspark. This project takes in 10 years of CDC Dataset, applies random forest and reports back F1 scores for the same.",
        view:"https://www.kaggle.com/code/prisionmike15/bfrs-dataset-chronic-disease-predictions"
    },
    {
        imgsrc:embedded,
        title:"A Real Time Beer Keg Status Monitor",
        text:"A project developed to demonstrate C programming in real time, dealing with thrads, concurrency, RTOS, RMS, BeagleBone and I2C, SPI Bus Communication Protocols.",
        view:"https://github.com/deeppp15/Beer-Keg-Status-Monitor/"
    }
];

export default ProjectCardData;