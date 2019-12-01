import React from 'react';
import './Test.css';
import axios from 'axios';

class Test extends React.Component{
    constructor(props){
        super(props);
        this.test_good_connection();
        this.test_trend();
        this.test_trends_apple();
        this.test_sentimet_blank();
        this.test_links_apple();
        this.test_complete_trends_apple();
    }

    
    render() {
        
        return <h1>Check the console for test results</h1>
        
      }

    test_good_connection() {
        axios.get("https://protected-ravine-04165.herokuapp.com/health")
        .then((response) => {
            if(response.data === "Great connection") {
                console.log("TEST: React App has good connection to API - PASSED");
            } else {
                console.log("TEST: React App has good connection to API - FAILED");
            }
            
        }).catch(() => {
            console.log("TEST: React App has good connection to API - FAILED");
        });
    }

    test_trend() {
        axios.get("https://protected-ravine-04165.herokuapp.com/trend")
        .then((response) => {
            console.log("TEST: API /trend returns data - PASSED");
            
        }).catch(() => {
            console.log("TEST: API /trend returns data - FAILED");
        });
    }

    test_trends_apple() {
        axios.get("https://protected-ravine-04165.herokuapp.com/trends/apple")
        .then((response) => {
            if(response.data.length > 5) {
                console.log("TEST: API /trends/apple returns data - PASSED");
            } else {
                console.log("TEST: API /trends/apple returns data - FAILED");
            }
            
        }).catch(() => {
            console.log("TEST: API /trends/apple returns data - FAILED");
        });
    }

    test_sentimet_blank() {
        axios.get("https://protected-ravine-04165.herokuapp.com/sentiment/apple")
        .then((response) => {
            if(response.data.length > 5) {
                console.log("TEST: API /sentiment/apple returns data - FAILED");
            } else {
                console.log("TEST: API /sentiment/apple returns data - PASSED");
            }
            
        }).catch(() => {
            console.log("TEST: API /sentiment/apple returns data - PASSED");
        });
    }

    test_links_apple() {
        axios.get("https://protected-ravine-04165.herokuapp.com/links/apple")
        .then((response) => {
            console.log("TEST: API /links/apple returns data - PASSED");
        }).catch(() => {
            console.log("TEST: API /links/apple returns data - FAILED");
        });
    }

    test_complete_trends_apple() {
        axios.get("https://protected-ravine-04165.herokuapp.com/complete/trends/apple")
        .then((response) => {
            if(response.data.length > 5) {
                console.log("TEST: API /complete/trends/apple returns data - PASSED");
            } else {
                console.log("TEST: API /complete/trends/apple returns data - FAILED");
            }
        }).catch(() => {
            console.log("TEST: API /complete/trends/apple returns data - FAILED");
        });
    }


}

export default Test;