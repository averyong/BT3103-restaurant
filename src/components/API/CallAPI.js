import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [],
                label: "west",
                borderColor: "#3e95cd",
                fill: false
            },{
                data: [],
                label: "national",
                borderColor: "#8e5ea2",
                fill: false
            },{
                data: [],
                label: "east",
                borderColor: "#3cba9f",
                fill: false
            },{
                data: [],
                label: "central",
                borderColor: "#e8c3b9",
                fill: false
            },{
                data: [],
                label: "south",
                borderColor: "#c45850",
                fill: false
            },{
                data: [],
                label: "north",
                borderColor: "orange",
                fill: false                
            }]
        },
        options: {
            //legend: { display: false },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            //console.log(response.data.items)
            response.data.items.forEach(data => { //data for each timestamp
                this.datacollection.labels.push(data["timestamp"])
                var dic = data["readings"]["psi_twenty_four_hourly"]
                //console.log(dic)
                var array = Object.keys(dic) //w,e,c,s,w,..
                for (var i = 0; i < array.length; i++) {
                    if (array[i] == "west") {
                        this.datacollection.datasets[0].data.push(dic["west"])
                    }
                    else if (array[i] == "national") {
                        this.datacollection.datasets[1].data.push(dic["national"])
                    }
                    else if (array[i] == "east") {
                        this.datacollection.datasets[2].data.push(dic["east"])
                    }
                    else if (array[i] == "central") {
                        this.datacollection.datasets[3].data.push(dic["central"])
                    }
                    else if (array[i] == "south") {
                        this.datacollection.datasets[4].data.push(dic["south"])
                    }
                    else {
                        this.datacollection.datasets[5].data.push(dic["north"])
                    }
                }
            })
            this.renderChart(this.datacollection, this.options)
        })
        //console.log(this.datacollection.labels)
    }
  },
  created () {
    this.fetchItems()
  }
}