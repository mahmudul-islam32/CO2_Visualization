import React from "react";
import { Bar } from "react-chartjs-2";


class BarChart extends React.Component{
    constructor(props){
      super(props);
      this.state ={apiResponse: " "};  
      this.callAPI = this.callAPI.bind(this);
    }
  
    async callAPI(){
      fetch("http://localhost:9000/random")
      .then(res => res.json())
      .then(res => this.setState({apiResponse: res}));
    }
  
    async componentWillMount(){
      this.callAPI();
      setInterval(this.callAPI, 10000);
    }

  
   render(){
    let val =[];
    let colors =[];
    let labels =[];
    const value = this.state.apiResponse;

    
    for(let i=0; i<this.state.apiResponse.length; i++){
        val.push(parseInt(value[i]));
        if(value[i] <= 1000){
            colors.push("rgba(0, 157, 0, .8)");
            labels.push("Green");
        }
        if(value[i] > 1000 && value[i] <= 2000){
            colors.push("rgba(255, 255, 17, .8)");
            labels.push("Yellow");
        }
        if(value[i] > 2000){
            colors.push("rgba(255, 4, 0, .8)");
            labels.push("Red");
        }
    }
         
    const g_data = {
        labels: labels,
        datasets: [
          {
            label: '# Of CO2 Visualization',
            data: val,
            backgroundColor: colors,
          },
        ],
      }
    return (
      <div className="bar">
        <Bar 
         data={g_data}
         height={700}
         width={600}        
         options={{
             maintainAspectRatio:false,
             scales: {
                y: {
                    beginAtZero: true,
                    min:0,
                    max:5000,
                    ticks: {
                        stepSize: 1000
                    }
                }
            },
            responsive: true,
            layout: {
             padding:30
            }
         }}
        
        />
       </div>
    );
  }
  }


export default BarChart
