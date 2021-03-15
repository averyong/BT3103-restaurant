import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Prawn Omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
            datasets: [{
                label: "Bar Chart",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
        },
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          var array = Object.keys(doc.data())
          for (var i = 0; i < array.length; i++) { //["Sambal KangKung", "Cereal Prawn", "Prawn Omelette", "Dry Beef Hor Fun", "Mapo Tofu", "Pork Fried Rice"]               
            if (array[i] == "Prawn Omelette") {
              this.datacollection.datasets[0].data[0] += doc.data()["Prawn Omelette"]
            }
            else if (array[i] == "Dry Beef Hor Fun") {
              this.datacollection.datasets[0].data[1] += doc.data()["Dry Beef Hor Fun"]
            }
            else if (array[i] == "Sambal KangKung") {
              this.datacollection.datasets[0].data[2] += doc.data()["Sambal KangKung"]
            }
            else if (array[i] == "Pork Fried Rice") {
              this.datacollection.datasets[0].data[3] += doc.data()["Pork Fried Rice"]
            }
            else if (array[i] == "Mapo Tofu") {
              this.datacollection.datasets[0].data[4] += doc.data()["Mapo Tofu"]
            }
            else {
              this.datacollection.datasets[0].data[5] += doc.data()["Cereal Prawn"]
            }
          }
        })
        //console.log(this.datacollection.datasets[0].data)
      //database.collection('orders').get().then(querySnapShot => {
      //  querySnapShot.forEach(doc => {
          // if name of food matches label, add number
        this.renderChart(this.datacollection, this.options)
      })

      // database.collection('orders').get().then(querySnapShot => {
      //   querySnapShot.forEach(doc => {
      //     // if name of food matches label, add number
      //     doc.forEach(item => {
      //       if (Object.keys(item) == 'Prawn omelette') {
      //         this.datacollection.datasets[0].data[0] == Object.values(item)
      //       } 
      //     })
      //   })
      //   this.renderChart(this.datacollection, this.options)
      // })
    }
  },
  created () {
    this.fetchItems()
  }
}